import { Basket, Order, User } from './types'

export interface OrderFromApiDto {
  id: string
  amount: number
  name: string
  price: number
  capacity: number
  src?: string
}

export interface UserFromApiDto {
  data: string
  id: string
  email: string
  firstName: string
  lastName: string
  orders: OrderFromApiDto[]
  password: string
}

export const mapApiDataDtoFromBackendToFrontend = (data: User): UserFromApiDto => {
  const userClone = { ...data }

  return {
    data: userClone.data,
    email: userClone.email,
    id: userClone._id,
    firstName: userClone.firstName,
    lastName: userClone.lastName,
    orders: userClone.orders.map((order: Order) => ({
      id: order._id,
      name: order.fragranceName,
      price: order.price,
      amount: order.amount,
      capacity: order.capacity,
    })),
    password: userClone.password,
  }
}

export const mapBasketDataDtoToBackend = (data: Basket[]): Order[] => {
  return data.map((order: Basket) => ({
    _id: order?.id,
    fragranceName: order.name,
    price: order.price,
    amount: order.amount,
    capacity: order.capacity,
  }))
}
