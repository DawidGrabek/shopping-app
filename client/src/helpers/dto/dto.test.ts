import { mapApiDataDtoFromBackendToFrontend, mapBasketDataDtoFromFrontendToBackend } from './dto' 

describe('DTO', () => {
  const backendUserMock = {
    _id: 'user-id',
    data: 'user-data',
    email: 'user@example.com',
    firstName: 'John',
    lastName: 'Doe',
    orders: [
      {
        _id: 'order-id',
        amount: 2,
        fragranceName: 'Fragrance 1',
        price: 10,
        capacity: 100,
      },
    ],
    password: 'hashed-password',
  }

  const frontendBasketMock = [
    {
      id: 'basket-id',
      name: 'Fragrance 2',
      price: 20,
      amount: 3,
      capacity: 150,
    },
  ]

  it('Should map backend user data to frontend user data', () => {
    const frontendUser = mapApiDataDtoFromBackendToFrontend(backendUserMock)

    expect(frontendUser).toEqual({
      data: 'user-data',
      email: 'user@example.com',
      id: 'user-id',
      firstName: 'John',
      lastName: 'Doe',
      orders: [
        {
          id: 'order-id',
          name: 'Fragrance 1',
          price: 10,
          amount: 2,
          capacity: 100,
        },
      ],
      password: 'hashed-password',
    })
  })

  it('Should map frontend basket data to backend order data', () => {
    const backendOrders = mapBasketDataDtoFromFrontendToBackend(frontendBasketMock)

    expect(backendOrders).toEqual([
      {
        _id: 'basket-id',
        fragranceName: 'Fragrance 2',
        price: 20,
        amount: 3,
        capacity: 150,
      },
    ])
  })

  it('Should handle empty orders array when mapping backend user data', () => {
    const userWithNoOrders = { ...backendUserMock, orders: [] }

    const frontendUser = mapApiDataDtoFromBackendToFrontend(userWithNoOrders)

    expect(frontendUser.orders).toEqual([])
  })

  it('Should handle empty basket array when mapping frontend basket data', () => {
    const emptyFrontendBasket: any = []

    const backendOrders = mapBasketDataDtoFromFrontendToBackend(emptyFrontendBasket)

    expect(backendOrders).toEqual([])
  })
})
