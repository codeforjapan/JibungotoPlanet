import { FC, ReactNode, useRef } from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogOverlay,
  Box
} from '@chakra-ui/react'

type Props = {
  isOpen: boolean
  onClose: () => void
  children?: ReactNode
}

const ModalBase: FC<Props> = ({ isOpen, onClose, children }) => {
  const cancelRef = useRef<any>()
  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={() => onClose()}
      leastDestructiveRef={cancelRef}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent mx={2} pb={3}>
          <AlertDialogCloseButton />
          <AlertDialogBody>{children}</AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

export default ModalBase
