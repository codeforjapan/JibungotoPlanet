import { Select } from '@chakra-ui/react'
import { FC, useMemo } from 'react'

type Props = {
  options: { value: string; label: string }[]
  onChange: (v: string) => void
  defaultValue?: string
}

const SelectBox: FC<Props> = ({ options, onChange, defaultValue }) => {
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
