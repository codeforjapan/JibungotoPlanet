import { FC } from 'react'
import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import styles from 'components/molecules/completion/CompletionActionItem/CompletionActionItem.module.scss'

type Props = {
  amount: number
  implementationRate: number
  action: string
  description: string
}

const CompletionItem: FC<Props> = (props) => {
  return (
    <Grid
      minH={{ base: '180px', md: '150px' }}
      templateColumns={{ base: 'repeat(7, 1fr)', md: 'repeat(7, 1fr)' }}
      gap={4}
      mb={{ base: 1, md: 4 }}
    >
      <GridItem rowSpan={{ base: 1, md: 1 }} colSpan={{ base: 2, md: 1 }}>
        <Box className={styles['completion-action-item__amount-container']}>
          <Text color="white" fontSize="32px" fontWeight="700">
            {props.amount}
          </Text>
          <Text color="white" fontSize="12px" fontWeight="700">
            kg CO₂e
          </Text>
        </Box>
        <Text style={{ textAlign: 'center' }} fontSize="12px" pt={1}>
          実施率: {props.implementationRate}%
        </Text>
      </GridItem>
      <GridItem colSpan={{ base: 5, md: 6 }}>
        <Text fontWeight="bold" fontSize="16px">
          {props.action}
        </Text>
        <Text fontSize="14px">{props.description}</Text>
      </GridItem>
    </Grid>
  )
}

export default CompletionItem
