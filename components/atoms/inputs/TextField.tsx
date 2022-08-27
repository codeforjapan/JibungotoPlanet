import { FC, useMemo } from 'react'
import { Box, Flex, Grid, Heading, Input, Text } from '@chakra-ui/react'

type Props = {
  type: 'text' | 'numeric'
  onChange: (val: string | number) => void
  value?: string | number
  description?: string
  unitText?: string
  placeholder?: string
  disabled?: boolean
}

const TextField: FC<Props> = ({
  type,
  onChange,
  value,
  unitText,
  placeholder,
  disabled = false
}) => {
  const inputPattern = useMemo(() => {
    switch (type) {
      case 'numeric':
        return '^[1-9][0-9]*$'
      default:
        return
    }
  }, [])

  const handleOnChange = (v: string) => {
    if (Number(v) !== NaN && v !== '') {
      onChange(Number(v))
    } else {
      onChange(v)
    }
  }

  return (
    <Box>
      <Grid gridTemplateColumns="1fr auto" alignItems="end">
        <Input
          type="text"
          inputMode={type}
          onChange={(e) => handleOnChange(e.target.value)}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          pattern={inputPattern}
        />
        <Text pl={3} wordBreak="keep-all">
          {unitText}
        </Text>
      </Grid>
    </Box>
  )
}

export default TextField
