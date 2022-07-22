import { FC, ReactNode } from 'react'
import { Text } from '@chakra-ui/react'

type Props = {
  className?: string
  children: ReactNode
}

const HomeContentBody: FC<Props> = (props) => {
  const baseStyle = {
    fontSize: '18px',
    lineHeight: '190%',
    letterSpacing: '0.05em',
    fontWeight: 500,
    color: '#333333'
  }

  return (
    <Text className={props.className} style={baseStyle}>
      {props.children}
    </Text>
  )
}

export default HomeContentBody
