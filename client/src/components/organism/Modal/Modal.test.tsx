import userEvent from '@testing-library/user-event'
import { render, screen } from 'test-utils'
import { vi } from 'vitest'

import Modal from './Modal'

describe('Modal', () => {
  it('Renders the modal content', () => {
    const handleClose = vi.fn()
    render(
      <Modal handleClose={handleClose}>
        <div>test</div>
      </Modal>
    )

    const modalContent = screen.getByTestId('modal')
    expect(modalContent).toBeInTheDocument()
    expect(modalContent).toHaveTextContent('test')
  })

  it('Enable clicking the close button', async () => {
    const handleClose = vi.fn()
    render(
      <Modal handleClose={handleClose}>
        <div>test</div>
      </Modal>
    )

    const closeButton = screen.getByText('Close')

    userEvent.click(closeButton)
    expect(handleClose).toHaveBeenCalledTimes(1)
  })
})
