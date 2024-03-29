import { FC } from 'react'
import { Box } from '@chakra-ui/react'
import classNames from 'classnames'
import BasicButton from 'components/atoms/buttons/Basic'
import styles from 'components/molecules/action/ActionCompleteBtn/ActionCompleteBtn.module.scss'

type Props = {
  className?: string
  onClick: { (): void }
  disabled: boolean
}

const ActionCompleteBtn: FC<Props> = (props) => {
  return (
    <Box className={classNames(props.className, styles['action-complete-btn'])}>
      <BasicButton
        width="full"
        isNext
        onClick={props.onClick}
        disabled={props.disabled}
      >
        選択を完了する
      </BasicButton>
    </Box>
  )
}

export default ActionCompleteBtn
