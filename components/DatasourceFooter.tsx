import { FC, useMemo } from 'react'
import { Box, Link } from '@chakra-ui/react'

const DatasourceFooter: FC = () => {
  const year = useMemo(() => {
    return new Date().getFullYear()
  }, [])

  return (
    <Box as="footer" textAlign="center" fontSize="12px">
      <Link href="google.com" textDecoration="underline">
        データソースについて
      </Link>{' '}
      | © {year} Code for Japan
    </Box>
  )
}

export default DatasourceFooter
