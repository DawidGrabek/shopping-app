import userEvent from '@testing-library/user-event'
import { store } from 'app/store'
import { Fragrance } from 'assets/types'
import { add } from 'features/basketSlice'
import { toggleSearching } from 'features/searchBarSlice'
import renderWithProviders from 'helpers/renderWithProviders'
import { render, screen } from 'test-utils'
import { vi } from 'vitest'

import NavigationIcons from './NavigationIcons'

describe('<NavigationIcons />', () => {
  it('Should render navigation icons with correct amount', () => {
    const fragrances: Fragrance[] = [
      {
        fragranceName: 'test1',
        price: 10,
        src: 'test',
        capacity: 100,
        amount: 1,
      },
      {
        fragranceName: 'test2',
        price: 10,
        src: 'test',
        capacity: 100,
        amount: 2,
      },
      {
        // IF FRGRNACE NAME IS THE SAME, IT WILL BE ADDED TO THE PREVIOUS ONE
        fragranceName: 'test2',
        price: 10,
        src: 'test',
        capacity: 100,
        amount: 2,
      },
    ]
    fragrances.forEach((fragrance) => {
      store.dispatch(add(fragrance))
    })
    render(<NavigationIcons />)

    const amountCircle = screen.getByTestId('amount')

    expect(amountCircle.textContent).toBe('2')
  })

  it('Should dispatch toggleSearching action when search icon is clicked', () => {
    // const mockStore = store
    const dispatchMock = vi.spyOn(store, 'dispatch')
    renderWithProviders(<NavigationIcons />)

    const searchIcon = screen.getByTestId('search-icon')
    userEvent.click(searchIcon)

    expect(dispatchMock).toHaveBeenCalledTimes(1)
    expect(dispatchMock).toHaveBeenCalledWith(toggleSearching())
  })

  test('Changing route from / to /profile', () => {
    renderWithProviders(<NavigationIcons />)

    const profileLink = screen.getByTestId('link-profile')
    expect(document.URL).not.toContain('/profile')

    userEvent.click(profileLink)

    expect(document.URL).toContain('/profile')
  })
})
