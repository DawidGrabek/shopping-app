import {
  Basket,
  BackendOrderInterface,
  BackendUserInterface,
  FrontendUserInterface,
} from 'helpers/types'

export const mapApiDataDtoFromBackendToFrontend = (
  data: BackendUserInterface
): FrontendUserInterface => {
  return {
    data: data.data,
    email: data.email,
    id: data._id,
    firstName: data.firstName,
    lastName: data.lastName,
    orders: data.orders.map((order: BackendOrderInterface) => ({
      id: order._id,
      name: order.fragranceName,
      price: order.price,
      amount: order.amount,
      capacity: order.capacity,
    })),
    password: data.password,
  }
}

export const mapBasketDataDtoFromFrontendToBackend = (data: Basket[]): BackendOrderInterface[] => {
  return data.map((order: Basket) => ({
    _id: order?.id,
    fragranceName: order.name,
    price: order.price,
    amount: order.amount,
    capacity: order.capacity,
  }))
}
