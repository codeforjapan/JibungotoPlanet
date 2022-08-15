import { FC, ReactNode, useRef } from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Box
} from '@chakra-ui/react'
import BasicButton from 'components/atoms/buttons/Basic'

type Props = {
  isOpen: boolean
  onClose: () => void
  children?: ReactNode
  maxWidth?: string
}

const ModalBase: FC<Props> = ({ isOpen, onClose, children, maxWidth }) => {
  const cancelRef = useRef<any>()
  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={() => onClose()}
      leastDestructiveRef={cancelRef}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent
          my={0}
          mx={2}
          pb={3}
          maxWidth={maxWidth}
          maxHeight="90%"
        >
          <AlertDialogCloseButton />
          <AlertDialogBody overflow="auto">{children}</AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

export default ModalBase
