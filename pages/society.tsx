import { FC } from 'react'
import { Container } from '@chakra-ui/react'

import SocietyDetailedSection from 'components/organisms/society/SocietyDetailedSection/SocietyDetailedSection'
import SocietySummarySection from 'components/organisms/society/SocietySummarySection/SocietySummarySection'

const SocietyScreen: FC = () => {
  const maxW = '1280px'

  return (
    <div>
      <Container maxW={maxW} centerContent>
        <SocietySummarySection />
        <SocietyDetailedSection />
      </Container>
    </div>
  )
}

export default SocietyScreen
