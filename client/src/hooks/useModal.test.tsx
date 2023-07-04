import { renderHook, act } from 'test-utils'

import useModal from './useModal'

describe('useModal', () => {
  it('Returns initial state', () => {
    const { result } = renderHook(() => useModal())

    expect(result.current.isOpen).toBe(false)
    expect(typeof result.current.handleOpenModal).toBe('function')
    expect(typeof result.current.handleCloseModal).toBe('function')
  })

  it('Opens and closes the modal', () => {
    const { result } = renderHook(() => useModal())
    expect(result.current.isOpen).toBe(false)

    act(() => {
      result.current.handleOpenModal()
    })

    expect(result.current.isOpen).toBe(true)

    act(() => {
      result.current.handleCloseModal()
    })

    expect(result.current.isOpen).toBe(false)
  })
})
