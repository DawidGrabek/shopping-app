import { Provider } from 'react-redux'

import userEvent from '@testing-library/user-event'
import { clear } from 'features/basketSlice'
import { Fragrance, OrderDetails, User } from 'helpers/types'
import * as hooks from 'hooks/useApi'
import configureStore from 'redux-mock-store'
import { render, screen, waitFor } from 'test-utils'
import { vi } from 'vitest'

import OrderFinal from './OrderFinal'

const mockStore = configureStore([])

const getMockAuth = (user: User | null) => ({
  user,
  signIn: vi.fn(),
  signOut: vi.fn(),
  signUp: vi.fn(),
  error: '',
  addOrder: vi.fn(),
})

const mockUser: User = {
  _id: '1',
  email: 'test@test.com',
  firstName: 'TestName',
  lastName: 'TestSurname',
  orders: [],
}

// Mock user data and order data
const mockOrder: OrderDetails = {
  city: 'New York',
  postalCode: '12-345',
  street: 'Main Street',
  homeNumber: 10,
  mobileNumber: 123456789,
}

const fragrance1: Fragrance = {
  fragranceName: 'Fragrance 1',
  capacity: 100,
  price: 50,
  src: 'image1.jpg',
  amount: 2,
}

const fragrance2: Fragrance = {
  fragranceName: 'Fragrance 2',
  capacity: 200,
  price: 75,
  src: 'image2.jpg',
  amount: 3,
}

// Mock the useNavigate hook to get the navigate function
const mockNavigate = vi.fn()

describe('<OrderFinal />', () => {
  it('Renders user details correctly', () => {
    vi.spyOn(hooks, 'useAuth').mockImplementation(() => getMockAuth(mockUser))
    render(<OrderFinal />)

    // Check if user details are rendered correctly
    expect(screen.getByLabelText('First name')).toHaveValue(mockUser.firstName)
    expect(screen.getByLabelText('First name')).toBeDisabled()
    expect(screen.getByLabelText('Last name')).toHaveValue(mockUser.lastName)
    expect(screen.getByLabelText('Last name')).toBeDisabled()
    expect(screen.getByLabelText('Email')).toHaveValue(mockUser.email)
    expect(screen.getByLabelText('Email')).toBeDisabled()
  })

  it('Renders the order details correctly', async () => {
    const initialState = {
      order: { order: mockOrder },
      basket: { basket: [fragrance1, fragrance2] },
    }

    const store = mockStore(initialState)

    render(
      <Provider store={store}>
        <OrderFinal />
      </Provider>
    )

    expect(screen.getByLabelText('City')).toHaveValue(mockOrder.city)
    expect(screen.getByLabelText('City')).toBeDisabled()

    expect(screen.getByLabelText('Postal Code')).toHaveValue(mockOrder.postalCode)
    expect(screen.getByLabelText('Postal Code')).toBeDisabled()

    expect(screen.getByLabelText('Street')).toHaveValue(mockOrder.street)
    expect(screen.getByLabelText('Street')).toBeDisabled()

    expect(screen.getByLabelText('Home Number')).toHaveValue(mockOrder.homeNumber)
    expect(screen.getByLabelText('Home Number')).toBeDisabled()

    expect(screen.getByLabelText('Mobile Number')).toHaveValue(mockOrder.mobileNumber)
    expect(screen.getByLabelText('Mobile Number')).toBeDisabled()
  })

  it('Calculates and displays the total price correctly', async () => {
    const initialState = {
      order: { order: mockOrder },
      basket: { basket: [fragrance1, fragrance2] },
    }
    const store = mockStore(initialState)

    render(
      <Provider store={store}>
        <OrderFinal />
      </Provider>
    )

    // Wait for the component to finish rendering and the data to be available
    await waitFor(() => {
      // Calculate the expected total price
      const total = (
        fragrance1.price * fragrance1.amount +
        fragrance2.price * fragrance2.amount
      ).toFixed(2)

      // Check if the total price is displayed correctly
      expect(screen.getByText(`Total Price:`)).toBeInTheDocument()
      expect(screen.getByText(`${total}zł`)).toBeInTheDocument()
    })
  })

  it('Dispatches clear action and navigates to the home page when "Final" button is clicked', async () => {
    // Mock the useAuth hook to return the mockUser data
    const mockedAuth = getMockAuth(mockUser)
    vi.spyOn(hooks, 'useAuth').mockImplementation(() => mockedAuth)

    // Mock the useNavigation hook to return the mockNavigate data
    vi.mock('react-router-dom', async () => {
      const actual: any = await vi.importActual('react-router-dom')
      return {
        ...actual,
        useNavigate: () => mockNavigate,
      }
    })

    // Mock the Redux store to provide the necessary data and mock the dispatch function
    const initialState = {
      order: { order: mockOrder },
      basket: { basket: [fragrance1, fragrance2] },
    }
    const store = mockStore(initialState)
    store.dispatch = vi.fn()

    // Define the mockNavigate function before the render function
    mockNavigate.mockReturnValue(() => {})

    render(
      <Provider store={store}>
        <OrderFinal />
      </Provider>
    )

    // Click on the "Final" button
    userEvent.click(screen.getByText('Final'))

    // Wait for the dispatched actions and the navigation to be triggered
    await waitFor(() => {
      // Check if the addOrder function is called with the correct payload
      expect(mockedAuth.addOrder).toHaveBeenCalledWith([fragrance1, fragrance2])

      // Check if the clear action is dispatched
      expect(store.dispatch).toHaveBeenCalledWith(clear())

      // Check if the navigate function is called with the correct path
      expect(mockNavigate).toHaveBeenCalledWith('/')
    })
  })
})
