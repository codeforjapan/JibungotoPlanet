import { FC, useMemo } from 'react'
import { Heading } from '@chakra-ui/react'
import Average from 'components/atoms/emissions/Average'
import Cloud from 'components/atoms/emissions/Cloud'
import { useEmissionResult } from 'hooks/emission'

type Props = {
  category: Questions.QuestionCategory
}

const CompletionHeader: FC<Props> = (props) => {
  const result = useEmissionResult(props.category)
  const total = useMemo(() => {
    const r = result[props.category]
    return r ? Math.round(r.find((m) => m.key === 'total')?.value || 0) : 0
  }, [props.category, result])

  return (
    <>
      <Heading as="h2" fontSize="18px" textAlign="center" my={5}>
        あなたの1年間の
        <br />
        カーボンフットプリント量
      </Heading>
      <Cloud amount={total} category={props.category} />
      <Average amount={total} category={props.category} />
    </>
  )
}

export default CompletionHeader
