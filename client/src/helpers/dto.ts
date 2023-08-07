import { Order, User } from './types'

export interface OrderFromApiDto {
  id: string
  amount: number
  name: string
  price: number
  capacity: number
  src?: string
}

export interface UserFromApiDto {
  id: string
  email: string
  firstName: string
  lastName: string
  orders: OrderFromApiDto[]
  password: string
}

export const mapApiDataDtoFromBackToFront = (data: User): UserFromApiDto => {
  const userClone = { ...data }

  return {
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
