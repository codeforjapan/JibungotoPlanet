import { FC, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Grid, Text, useDisclosure } from '@chakra-ui/react'
import BasicButton from 'components/atoms/buttons/Basic'
import CategoryButton from 'components/atoms/buttons/Category'
import Cloud from 'components/atoms/emissions/Cloud'
import DatasourceFooter from 'components/DatasourceFooter'
import CategoryModal from 'components/molecules/top/CategoryModal'
import PieChart from 'components/molecules/top/PieChart'
import { useEmissionResult } from 'hooks/emission'

const TopCategories: FC = () => {
  const router = useRouter()
  const emission = useEmissionResult('all')
  const [emissionCount, setEmissionCount] = useState(0)

  const { isOpen, onClose, onOpen } = useDisclosure()
  const [modalCategory, setModalCategory] =
    useState<Questions.QuestionCategory>('mobility')

  const mobility = useMemo(() => {
    return emission.mobility.find((f) => f.key === 'total')?.value
  }, [emission])

  const food = useMemo(() => {
    return emission.food.find((f) => f.key === 'total')?.value
  }, [emission])

  const housing = useMemo(() => {
    return emission.housing.find((f) => f.key === 'total')?.value
  }, [emission])

  const other = useMemo(() => {
    return emission.other.find((f) => f.key === 'total')?.value
  }, [emission])

  const totalEmission = useMemo(() => {
    if (!food && !mobility && !housing && !other) {
      return NaN
    } else {
      return Math.round(
        Number(food) + Number(mobility) + Number(housing) + Number(other)
      )
    }
  }, [emission])

  useEffect(() => {
    let count = 0
    if (food) count += 1
    if (mobility) count += 1
    if (housing) count += 1
    if (other) count += 1
    console.log(count)
    setEmissionCount(count)
  }, [food, mobility, housing, other])

  const selectCategory = (category: Questions.QuestionCategory) => {
    setModalCategory(category)
    onOpen()
  }

  const EmissionCountComponent: FC = () => {
    if (emissionCount >= 2) {
      return (
        <Text
          mt={5}
          mb={3}
          fontWeight="bold"
          textAlign="center"
          textColor="red"
          fontSize={16}
        >
          ほかの分野についても、
          <br />
          よろしければご利用ください。
          <br />
          アプリの利用を終了するには
          <br />
          「脱炭素アクションをみる」
          <br />
          を選んでください。
        </Text>
      )
    } else if (emissionCount == 1) {
      return (
        <Text
          mt={5}
          mb={3}
          fontWeight="bold"
          textAlign="center"
          textColor="red"
          fontSize={16}
        >
          2つめの分野を選んで、
          <br />
          アプリの利用を続けてください。
        </Text>
      )
    } else {
      return (
        <Text
          mt={5}
          mb={3}
          fontWeight="bold"
          textAlign="center"
          textColor="red"
          fontSize={16}
        >
          1つめの分野を選んで、
          <br />
          アプリの利用を始めてください。
        </Text>
      )
    }
  }

  return (
    <>
      <Box mt={5}>
        <EmissionCountComponent />

        <Cloud amount={totalEmission} />
        <Box pb={3}>
          <PieChart
            mobility={mobility}
            food={food}
            housing={housing}
            other={other}
            onChartClick={(c) => selectCategory(c)}
          />
        </Box>
        <Text mt={5} mb={3} fontWeight="bold" textAlign="center">
          質問に答えると
          <br />
          カーボンフットプリント量がわかる
        </Text>
        <Grid gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }} gridGap={3}>
          <Box>
            <CategoryButton
              category="housing"
              onClick={() => selectCategory('housing')}
            />
          </Box>
          <Box>
            <CategoryButton
              category="food"
              onClick={() => selectCategory('food')}
            />
          </Box>
          <Box>
            <CategoryButton
              category="mobility"
              onClick={() => selectCategory('mobility')}
            />
          </Box>
          <Box>
            <CategoryButton
              category="other"
              onClick={() => selectCategory('other')}
            />
          </Box>
        </Grid>
      </Box>

      {emission?.profile?.shareId && (
        <Text textAlign="right" fontSize="xs" mt={2}>
          識別ID: {emission.profile.shareId}
        </Text>
      )}

      {housing || food || mobility || other ? (
        <>
          <Box mt={8}>
            <BasicButton
              isNext
              onClick={() => router.push('/actions')}
              width="full"
            >
              脱炭素アクションをみる
            </BasicButton>
          </Box>
        </>
      ) : (
        ''
      )}

      <Box mt={10}>
        <DatasourceFooter />
      </Box>

      <CategoryModal
        isOpen={isOpen}
        onClose={onClose}
        modalCategory={modalCategory}
      />
    </>
  )
}

export default TopCategories
