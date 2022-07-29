import { FC, useMemo } from 'react'
import { Box, Text } from '@chakra-ui/react'
import Cloud from 'components/atoms/emissions/Cloud'
import PieChart from 'components/molecules/top/PieChart'
import { useEmissionResult } from 'hooks/emission'
import { useProfile } from 'hooks/profile'
import CategoryButton from 'components/atoms/buttons/Category'

const TopCategories: FC = () => {
  const { profile } = useProfile()
  const emission = useEmissionResult('all')

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

  return (
    <>
      <Box mt={5}>
        <Cloud amount={totalEmission} />
        <Box pb={3}>
          <PieChart
            mobility={mobility}
            food={food}
            housing={housing}
            other={other}
          />
        </Box>
        <Text mt={5} mb={3} fontWeight="bold" textAlign="center">
          質問に答えると
          <br />
          カーボンフットプリント量がわかる
        </Text>
        <Box mb={3}>
          <CategoryButton category="housing" />
        </Box>
        <Box mb={3}>
          <CategoryButton category="food" />
        </Box>
        <Box mb={3}>
          <CategoryButton category="mobility" />
        </Box>
        <Box mb={3}>
          <CategoryButton category="other" />
        </Box>
      </Box>
    </>
  )
}

export default TopCategories
