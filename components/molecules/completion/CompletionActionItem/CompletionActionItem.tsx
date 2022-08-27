import { FC, useMemo } from 'react'
import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import styles from 'components/molecules/completion/CompletionActionItem/CompletionActionItem.module.scss'
import { roundCo2Amount } from 'utils/calculate'

type Props = {
  action: Actions.Action
  category: Questions.QuestionCategory
}

const CompletionItem: FC<Props> = (props) => {
  const actionIntensityRate = useMemo(() => {
    if (props.action.actionIntensityRate?.value) {
      return props.action.actionIntensityRate?.value * 100
    } else {
      return '-'
    }
  }, [props.action.actionIntensityRate?.value])

  const amount = useMemo(() => {
    if (props.action.actionIntensityRate?.value) {
      return roundCo2Amount(
        props.action.actionIntensityRate.value * props.action.reductionEffect
      )
    } else {
      return '-'
    }
  }, [props.action.actionIntensityRate?.value, props.action.reductionEffect])

  return (
    <Grid
      minH={{ base: '180px', md: '150px' }}
      templateColumns={{ base: 'repeat(7, 1fr)', md: 'repeat(7, 1fr)' }}
      gap={4}
      mb={{ base: 1, md: 4 }}
    >
      <GridItem rowSpan={{ base: 1, md: 1 }} colSpan={{ base: 2, md: 1 }}>
        <Box className={styles['completion-action-item__amount-container']} backgroundColor={`${props.category}.400`} >
          <Text color="white" fontSize="32px" fontWeight="700">
            {amount}
          </Text>
          <Text color="white" fontSize="12px" fontWeight="700">
            kg CO₂e
          </Text>
        </Box>
        <Text style={{ textAlign: 'center' }} fontSize="12px" pt={1}>
          実施率: {actionIntensityRate}%
        </Text>
      </GridItem>
      <GridItem colSpan={{ base: 5, md: 6 }}>
        <Text fontWeight="bold" fontSize="16px">
          {props.action.label}
        </Text>
        <Text fontSize="14px">{props.action.description}</Text>
      </GridItem>
    </Grid>
  )
}

export default CompletionItem
