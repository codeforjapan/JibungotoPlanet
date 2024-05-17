import { FC } from 'react'
import { RadioGroup, Radio, VStack, Text } from '@chakra-ui/react'
import classNames from 'classnames'
import styles from 'components/molecules/action/OptionsIntensityRate/OptionsIntensityRate.module.scss'

type Props = {
  className?: string
  id: number
  value: number | undefined
  defaultValue?: number
  onChangeRate: { (id: number, rate: number): void }
}
const rates = [
  {
    value: 0.25,
    text: '少しやってみる'
  },
  {
    value: 0.5,
    text: 'やってみる'
  },
  {
    value: 0.75,
    text: 'かなりやる'
  },
  {
    value: 1,
    text: '毎日やる'
  }
]
const OptionsIntensityRate: FC<Props> = (props) => {
  return (
    <RadioGroup
      value={props.value?.toString()}
      defaultValue={props.defaultValue?.toString()}
      onChange={(nextValue: string) => {
        props.onChangeRate(props.id, Number(nextValue))
      }}
      className={classNames(props.className, styles.group)}
    >
      <VStack alignItems="start" spacing="16px" className={styles.stack}>
        {rates.map((rate, index) => (
          <Radio
            value={rate.value.toString()}
            key={index}
            className={styles.radio}
            spacing="10px"
            colorScheme="#99D9EF"
          >
            <Text fontSize="14px" fontWeight="bold">
              {rate.text}
            </Text>
          </Radio>
        ))}
      </VStack>
    </RadioGroup>
  )
}

export default OptionsIntensityRate
