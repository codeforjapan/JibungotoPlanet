import { FC, useMemo } from 'react'
import { Box } from '@chakra-ui/react'
import Cloud from 'components/atoms/emissions/Cloud'
import PieChart from 'components/molecules/top/PieChart'
import { useEmissionResult } from 'hooks/emission'
import { useProfile } from 'hooks/profile'

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
        <PieChart />
      </Box>
    </>
  )
}

export default TopCategories
