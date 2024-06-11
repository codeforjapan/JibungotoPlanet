import { FC, ReactNode, useMemo } from 'react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonProps, Spinner } from '@chakra-ui/react'

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
  }, [isNext])

  const leftIcon = useMemo(() => {
    if (isNext) {
      return <Box as="span" width="25px" height="25px" />
    }
  }, [isNext])

  const bg = useMemo(() => {
    return `${theme}.${themeIntensity}`
  }, [theme, themeIntensity])

  return (
    <Button
      {...rest}
      border={
        rest.variant === 'outline' ? rest.border : '2px solid transparent'
      }
      bg={rest.variant === 'outline' ? 'transparent' : bg}
      color={rest.color || 'white'}
      fontWeight={rest.fontWeight || '700'}
      fontSize={rest.fontSize || '16px'}
      justifyContent={isNext && !rest.isLoading ? 'space-between' : 'center'}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      py={rest.py || '16px'}
      lineHeight={rest.lineHeight || '23px'}
      height="auto"
      isDisabled={rest.disabled || rest.isLoading}
    >
      {rest.isLoading ? <Spinner /> : children}
    </Button>
  )
}

export default BasicButton
