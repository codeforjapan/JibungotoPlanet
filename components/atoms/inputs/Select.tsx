import { FC, useMemo } from 'react'
import { Box, Heading, Select } from '@chakra-ui/react'

type Props = {
  options: { value: string | number; label: string }[]
  onChange: (v: string) => void
  defaultValue?: string
  description?: string
  disabled?: boolean
}

const SelectBox: FC<Props> = ({
  options,
  onChange,
  defaultValue,
  disabled = false
}) => {
  const selectOptions = useMemo(() => {
    return [{ value: '', label: '選択してください。' }, ...options]
  }, [options])

  return (
    <Select
      borderColor="#cccccc"
      bg="white"
      size="lg"
      fontSize="16px"
      onChange={(e) => onChange(e.target.value)}
      defaultValue={defaultValue}
      disabled={disabled}
    >
      {selectOptions.map((option, index) => (
        <option value={option.value} key={index}>
          {option.label}
        </option>
      ))}
    </Select>
  )
}

export default SelectBox
