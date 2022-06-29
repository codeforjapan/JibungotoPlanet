import { FC } from 'react'
import { Box, Flex, Grid, Heading, Input, Text } from '@chakra-ui/react'

type Props = {
  type: 'text' | 'numeric'
  onChange: (val: string) => void
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
  return (
    <Box>
      <Heading as="h2" fontSize="18px" mb={3}>
        {description}
      </Heading>
      <Grid gridTemplateColumns="1fr auto" alignItems="end">
        <Input
          type="text"
          inputMode={type}
          onChange={(e) => onChange(e.target.value)}
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
