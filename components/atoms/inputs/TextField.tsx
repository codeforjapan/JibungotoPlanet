import { FC, useMemo } from 'react'
import { Box, Flex, Grid, Heading, Input, Text } from '@chakra-ui/react'

type Props = {
  type: 'text' | 'numeric'
  onChange: (val: string | number) => void
  value?: string | number
  description?: string
  unitText?: string
  placeholder?: string
}

const TextField: FC<Props> = ({
  type,
  onChange,
  value,
  description,
  unitText,
  placeholder
}) => {
  const inputType = useMemo(() => {
    switch (type) {
      case 'text':
        return 'text'
      case 'numeric':
        return 'number'
      default:
        return 'text'
    }
  }, [type])

  const handleOnChange = (v: string) => {
    if (Number(v) !== NaN) {
      onChange(Number(v))
    } else {
      onChange(v)
    }
  }

  return (
    <Box>
      <Heading as="h2" fontSize="18px" mb={3}>
        {description}
      </Heading>
      <Grid gridTemplateColumns="1fr auto" alignItems="end">
        <Input
          type={inputType}
          inputMode={type}
          onChange={(e) => handleOnChange(e.target.value)}
          value={value}
          placeholder={placeholder}
        />
        <Text pl={3} wordBreak="keep-all">
          {unitText}
        </Text>
      </Grid>
    </Box>
  )
}

export default TextField
