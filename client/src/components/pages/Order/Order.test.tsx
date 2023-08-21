import { Provider } from 'react-redux'

import userEvent from '@testing-library/user-event'
import { OrderDetails } from 'helpers/types'
import configureStore from 'redux-mock-store'
import { render, screen, waitFor } from 'test-utils'
import { Mock, vi } from 'vitest'

import Order from './Order'

// Mock the useDispatch and useNavigate hooks
const mockStore = configureStore([])

describe('<Order />', () => {
  const initialState: { order: { orderDetails: OrderDetails } } = {
    order: {
      orderDetails: {
        city: '',
        postalCode: '',
        street: '',
        homeNumber: 0,
        mobileNumber: 0,
      },
    },
  }
  let onSubmitMock: Mock<any, any>
  let store: any

  beforeEach(() => {
    // Create a spy for the add action
    store = mockStore(initialState)
    onSubmitMock = vi.fn()
  })

  it('Renders the order form', () => {
    render(
      <Provider store={store}>
        <Order onSubmit={onSubmitMock} />
      </Provider>
    )

    // Assert that the form fields are rendered
    expect(screen.getByLabelText('City')).toBeInTheDocument()
    expect(screen.getByLabelText('Postal Code')).toBeInTheDocument()
    expect(screen.getByLabelText('Street')).toBeInTheDocument()
    expect(screen.getByLabelText('Home Number')).toBeInTheDocument()
    expect(screen.getByLabelText('Mobile Number')).toBeInTheDocument()

    // Assert that the submit button is rendered
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()

    // Assert that the "Back" button is rendered
    expect(screen.getByRole('button', { name: 'Back' })).toBeInTheDocument()
  })

  it('Dispatches the onSubmit with proper data', async () => {
    render(
      <Provider store={store}>
        <Order onSubmit={onSubmitMock} />
      </Provider>
    )

    // Enter form data
    userEvent.type(screen.getByLabelText('City'), 'New York')
    userEvent.type(screen.getByLabelText('Postal Code'), '12-345')
    userEvent.type(screen.getByLabelText('Street'), 'Main Street')
    userEvent.type(screen.getByLabelText('Home Number'), '10')
    userEvent.type(screen.getByLabelText('Mobile Number'), '123456789')

    // Submit the form
    userEvent.click(screen.getByRole('button', { name: 'Next' }))

    // Assert that the add action is called with the form data
    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledTimes(1)
    })
  })

  it("Don't dispatches the onSubmit with unproper data and remove error when data is in proper form", async () => {
    render(
      <Provider store={store}>
        <Order onSubmit={onSubmitMock} />
      </Provider>
    )

    // Enter form data
    userEvent.type(screen.getByLabelText('City'), 'New York')
    userEvent.type(screen.getByLabelText('Postal Code'), '12345') // wrong postal code
    userEvent.type(screen.getByLabelText('Street'), 'Main Street')
    userEvent.type(screen.getByLabelText('Home Number'), '10')
    userEvent.type(screen.getByLabelText('Mobile Number'), '123456789')

    // Submit the form
    userEvent.click(screen.getByRole('button', { name: 'Next' }))

    // Assert that the action is not called with the form data
    expect(onSubmitMock).not.toHaveBeenCalled()
    expect(await screen.findByText(/invalid postal code/i)).toBeInTheDocument()

    // Change postal code to proper
    userEvent.clear(screen.getByLabelText('Postal Code'))
    userEvent.type(screen.getByLabelText('Postal Code'), '12-345') // proper postal code

    // Assert that the action is called with the form data
    await waitFor(() => {
      expect(screen.queryByText(/invalid postal code/i)).not.toBeInTheDocument()
    })
  })
})
