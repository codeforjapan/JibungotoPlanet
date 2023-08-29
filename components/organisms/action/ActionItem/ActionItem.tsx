import { FC, useMemo } from 'react'
import { Box, Checkbox, Grid, GridItem, Text, VStack } from '@chakra-ui/react'
import classNames from 'classnames'
import CardReductionEffect from 'components/molecules/action/CardReductionEffect/CardReductionEffect'
import OptionsIntensityRate from 'components/molecules/action/OptionsIntensityRate/OptionsIntensityRate'
import styles from 'components/organisms/action/ActionItem/ActionItem.module.scss'
import { roundCo2Amount } from 'utils/calculate'

type Props = {
  className?: string
  action: Actions.Action
  category: Actions.ActionCategory
  onCheck: { (id: number, checked: boolean): void }
  onChangeActionRate: { (id: number, rate: number): void }
}

const ActionItem: FC<Props> = (props) => {
  const amount = useMemo(() => {
    let rate = 0
    if (props.action.actionIntensityRate?.value) {
      rate = props.action.actionIntensityRate.value
    } else {
      rate = props.action.actionIntensityRate?.defaultValue || rate
    }
    return roundCo2Amount(rate * props.action.reductionEffect)
  }, [
    props.action.actionIntensityRate?.defaultValue,
    props.action.actionIntensityRate?.value,
    props.action.reductionEffect
  ])

  return (
    <Box className={classNames(props.className, styles['action-item'])}>
      <Box padding="0 8px">
        <Grid templateColumns="repeat(9, 1fr)" columnGap="16px">
          <GridItem colSpan={1}>
            <Checkbox
              className={styles['action-item__checkbox']}
              onChange={(e) => props.onCheck(props.action.id, e.target.checked)}
              defaultChecked={props.action.checked}
            />
          </GridItem>
          <GridItem colSpan={8}>
            <VStack align="stretch">
              <Text fontSize="16px" fontWeight="bold">
                {props.action.label}
              </Text>
              <Text fontSize="14px">{props.action.description}</Text>
              {props.action.checked && (
                <CardReductionEffect category={props.category} value={amount} />
              )}
              {props.action.checked &&
                props.action.actionIntensityRate?.range?.length != 2 && (
                  <OptionsIntensityRate
                    id={props.action.id}
                    value={props.action.actionIntensityRate?.value}
                    defaultValue={
                      props.action.actionIntensityRate?.defaultValue
                    }
                    onChangeRate={props.onChangeActionRate}
                  />
                )}
            </VStack>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  )
}

export default ActionItem
