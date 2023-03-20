import { FC, useMemo } from 'react'
import { Box, Radio, RadioGroup, Text } from '@chakra-ui/react'
import style from './RadioGroup.module.scss'
import { toBoolean } from '../../../utils/datatype'

type Props = {
  onChange: (v: string | number | boolean) => void
  value?: string | number
  options: { label: string; subLabel?: string; value: string | number }[]
  disabled?: boolean
}

const RadioGroups: FC<Props> = ({
  onChange,
  value,
  options,
  disabled = false
}) => {
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
            value={String(option.value)}
            flexDirection="row-reverse"
            justifyContent="space-between"
            display="flex"
            size="lg"
            disabled={disabled}
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
