import { ChevronRightIcon } from '@chakra-ui/icons'
import { Button, ButtonProps } from '@chakra-ui/react'
import { FC, ReactNode, useMemo } from 'react'

type Props = {
  children: ReactNode
  isNext?: boolean
  theme?: 'brandPrimary' | 'brandSecondary' | 'brandAccent'
  themeIntensity?: '400' | '200'
}

const BasicButton: FC<Props & ButtonProps> = ({
  children,
  isNext,
  theme = 'brandPrimary',
  themeIntensity = '400',
  ...rest
}) => {
  const rightIcon = useMemo(() => {
    if (isNext) {
      return <ChevronRightIcon fontSize="25px" />
    }
    return undefined
  }, [isNext])

  const bg = useMemo(() => {
    return `${theme}.${themeIntensity}`
  }, [theme, themeIntensity])

  return (
    <Button
      {...rest}
      bg={bg}
      color="white"
      fontWeight={rest.fontWeight || '700'}
      fontSize={rest.fontSize || '16px'}
      rightIcon={rightIcon}
      py={rest.py || '16px'}
      lineHeight={rest.lineHeight || '23px'}
      height="auto"
    >
      {children}
    </Button>
  )
}

export default BasicButton
