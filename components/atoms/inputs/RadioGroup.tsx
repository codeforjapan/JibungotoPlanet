import { FC } from 'react'
import { Box, Radio, RadioGroup, Text } from '@chakra-ui/react'
import style from './RadioGroup.module.scss'

type Props = {
  onChange: (v: string) => void
  value: string
  options: { label: string; subLabel?: string; value: string }[]
}

const RadioGroups: FC<Props> = ({ onChange, value, options }) => {
  return (
    <RadioGroup onChange={onChange}>
      {options.map((option, index) => (
        <Box mb="2" className={style.radio} key={index}>
          <Radio
            value={option.value}
            flexDirection="row-reverse"
            justifyContent="space-between"
            display="flex"
            size="lg"
          >
            <Text fontSize="18px" fontWeight="bold" marginLeft="-0.5rem">
              {option.label}
            </Text>
          </Radio>
          <Text fontSize="14px" marginRight="20px">
            {option.subLabel}
          </Text>
        </Box>
      ))}
    </RadioGroup>
  )
}

export default RadioGroups
