import { FC, useMemo } from 'react'
import { Box, Radio, RadioGroup, Text } from '@chakra-ui/react'
import { toBoolean } from '../../../utils/datatype'
import style from './RadioGroup.module.scss'

type Props = {
  onChange: (v: string | number | boolean) => void
  value?: string | number
  options: { label: string; subLabel?: string; value: string | number }[]
}

const RadioGroups: FC<Props> = ({ onChange, value, options }) => {
  const handleOnChange = (value: string) => {
    onChange(toBoolean(value))
  }

  const convertedValue = useMemo(() => {
    return String(value)
  }, [value])

  return (
    <RadioGroup onChange={(v) => handleOnChange(v)} value={convertedValue}>
      {options.map((option, index) => (
        <Box className={style.radio} key={index} mb={4}>
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
