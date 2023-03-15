import { useState } from 'react'
import { NextPage } from 'next'
import { useMediaQuery } from '@chakra-ui/react'
import TermOfServiceDialog from 'components/molecules/homes/TermOfServiceDialog/TermOfServiceDialog'
import QuestionContainer from 'components/organisms/questions/Container'
import TopCategories from 'components/organisms/top/Categories'

const TopPage: NextPage = () => {
  const [isMobile] = useMediaQuery('(max-width: 480px)')
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <QuestionContainer>
        <TopCategories />
      </QuestionContainer>
      <TermOfServiceDialog
        isOpen={open}
        onClose={() => setOpen(false)}
        sp={isMobile}
      />
    </>
  )
}

export default TopPage
