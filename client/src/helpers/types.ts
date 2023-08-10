import { OrderFromApiDto, UserFromApiDto } from './dto'

export interface Fragrance {
  name: string
  amount: number
  capacity: number
  price: number
  src: string
  value?: any
}

export interface User {
  _id: string
  data: string
  email: string
  firstName: string
  lastName: string
  orders: Order[]
  password: string
}

export interface Order {
  _id: string
  amount: number
  fragranceName: string
  price: number
  capacity: number
  src?: string
}

export interface OrderDetails {
  city: string
  homeNumber: number
  mobileNumber: number
  postalCode: string
  street: string
}
export interface LoginData {
  email: string
  password: string
}

export interface RegisterData {
  email: string
  firstName: string
  lastName: string
  password: string
  repeatPassword: string
}

export interface ApiContextType {
  user: UserFromApiDto | null
  signIn: (formData: LoginData) => Promise<void>
  signOut: () => void
  signUp: (formData: LoginData) => Promise<void>
  error: string | null
  addOrder: (basket: any) => Promise<void>
}

export interface Basket extends OrderFromApiDto {}

export interface ErrorObject {
  email?: {
    message: string
  }
  password?: {
    message: string
  }
  firstName?: {
    message: string
  }
  lastName?: {
    message: string
  }
  repeatPassword?: {
    message: string
  }
}

export interface BasketState {
  basket: Fragrance[]
}

export interface SearchBarState {
  isShowingSearchBar: boolean
}
