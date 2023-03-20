import { useState } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { useMediaQuery } from '@chakra-ui/react'
import BasicButton from 'components/atoms/buttons/Basic'
import TermOfServiceDialog from 'components/molecules/homes/TermOfServiceDialog/TermOfServiceDialog'
import QuestionContainer from 'components/organisms/questions/Container'
import TopCategories from 'components/organisms/top/Categories'

const TopPage: NextPage = () => {
  const [isMobile] = useMediaQuery('(max-width: 480px)')
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <QuestionContainer>
        <Link href="/web3">
          <BasicButton width="full" mt={3}>
            ブロックチェーン連携
            <br />
            回答したことをブロックチェーンに保存
          </BasicButton>
        </Link>
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
