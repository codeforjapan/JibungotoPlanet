import { FC, useMemo } from 'react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Text
} from '@chakra-ui/react'
import classNames from 'classnames'
import styles from 'components/organisms/actions/ActionItem/ActionItem.module.scss'

type Props = {
  className?: string
  actionIntensityRate: number
  reductionEffect: number
  label: string
  description: string
  onClick: { (): void }
  btnDisabled: boolean
}

const ActionItem: FC<Props> = (props) => {
  const amount = useMemo(() => {
    return props.actionIntensityRate * props.reductionEffect
  }, [props.actionIntensityRate])

  return (
    <Box className={classNames(props.className, styles['action-item'])}>
      <Box p={3}>
        <Box display="flex" justifyContent="space-between">
          <Checkbox className={styles['action-item__checkbox']} />
          {!props.btnDisabled && (
            <Button
              variant="link"
              color="brandPrimary.400"
              rightIcon={<ChevronRightIcon fontSize="25px" />}
              className={styles['action-item__change-link']}
              onClick={props.onClick}
            >
              実施率を変更
            </Button>
          )}
        </Box>
        <Box
          pt={2}
          pb={1}
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Text fontSize="16px" fontWeight="bold">
            <span className={styles['action-item__amount']}>{amount}</span>
            kg CO₂e / 年
          </Text>
          <Text>実施率: {props.actionIntensityRate * 100}%</Text>
        </Box>
        <Text fontSize="14px" fontWeight="bold">
          {props.label}
        </Text>
      </Box>
      <Accordion allowMultiple>
        <AccordionItem className={styles['action-item__accordion-trigger']}>
          <AccordionButton
            _expanded={{ bg: 'none' }}
            className={styles['action-item__accordion-btn']}
          >
            <Box flex="1" textAlign="left">
              説明を見る
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>{props.description}</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}

export default ActionItem
