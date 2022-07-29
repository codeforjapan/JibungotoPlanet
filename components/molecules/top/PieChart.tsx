import { FC } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { ArcElement, Chart } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Pie } from 'react-chartjs-2'
import type { Plugin } from 'chart.js'
Chart.register(ArcElement)

type Props = {
  mobility?: number
  food?: number
  housing?: number
  other?: number
}

const PieChart: FC<Props> = ({ mobility, food, housing, other }) => {
  const iconTooltip: Plugin = {
    id: 'iconTooltip',
    afterDraw(chart, args, options) {
      const { ctx } = chart
      ctx.save()
      chart.data.datasets.forEach((dataset, i) => {
        const total =
          Number(dataset.data[0]) +
          Number(dataset.data[1]) +
          Number(dataset.data[2]) +
          Number(dataset.data[3])
        let filled = 0

        chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
          const categoryEmission = Number(dataset.data[index])
          const filledRatio = filled / total
          filled += categoryEmission
          if (categoryEmission > 0) {
            const { x, y } = datapoint.tooltipPosition()
            const img = new Image()
            switch (index) {
              case 0:
                img.src = '/icons/cartooltip.png'
                break
              case 1:
                img.src = '/icons/housingtooltip.png'
                break
              case 2:
                img.src = '/icons/foodtooltip.png'
                break
              case 3:
                img.src = '/icons/othertooltip.png'
                break
              default:
                break
            }

            let calcY = y
            let calcX = x
            switch (filledRatio) {
              case filledRatio >= 0.9 && filledRatio:
                calcY = y - 85
                calcX = x - 50
                break
              case filledRatio >= 0.8 && filledRatio:
                calcY = y - 65
                calcX = x - 85
                break
              case filledRatio >= 0.7 && filledRatio:
                calcY = y - 35
                calcX = x - 90
                break
              case filledRatio >= 0.6 && filledRatio:
                calcY = y + 10
                calcX = x - 90
                break
              case filledRatio >= 0.5 && filledRatio:
                calcY = y + 25
                calcX = x - 40
                break
              case filledRatio >= 0.4 && filledRatio:
                calcY = y + 25
                calcX = x - 20
                break
              case filledRatio >= 0.3 && filledRatio:
                calcY = y
                calcX = x + 10
                break
              case filledRatio >= 0.2 && filledRatio:
                calcY = y - 60
                calcX = x + 20
                break
              case filledRatio >= 0.1 && filledRatio:
                calcY = y - 75
                calcX = x + 5
                break
              case filledRatio >= 0 && filledRatio:
                calcY = y - 90
                calcX = x - 10
                break
              default:
                calcY = y - 90
                calcX = x - 10
                break
            }

            ctx.drawImage(img, calcX, calcY, 70, 70)
          }
        })
      })
    }
  }

  return (
    <Box maxWidth="450" mx="auto">
      <Pie
        plugins={[ChartDataLabels, iconTooltip]}
        options={{
          plugins: {
            tooltip: { enabled: false },
            datalabels: {
              color: 'white',
              font: { size: 26, weight: 'bold' },
              align: 'center',
              formatter(value, context) {
                if (value === 0) {
                  return ''
                } else if (value !== NaN) {
                  return Math.round(Number(value)).toLocaleString()
                } else {
                  return '??'
                }
              }
            },
            legend: {
              display: false
            }
          },
          layout: {
            padding: 20
          }
        }}
        data={{
          labels: ['移動', '住居', '食', '消費財'],
          datasets: [
            {
              label: 'emission',
              data: [mobility, housing, food, other],
              backgroundColor: ['#009DD3', '#ed9928', '#51a15a', '#da7f79']
            }
          ]
        }}
      />
      <Flex mx="30px">
        {housing ? (
          <Box width="25%">
            <Box
              as="span"
              width={3}
              height={3}
              mr={2}
              display="inline-block"
              backgroundColor="housing.400"
            />
            住居
          </Box>
        ) : (
          ''
        )}
        {food && (
          <Box width="25%">
            <Box
              as="span"
              width={3}
              height={3}
              mr={2}
              display="inline-block"
              backgroundColor="food.400"
            />
            食
          </Box>
        )}
        {mobility ? (
          <Box width="25%">
            <Box
              as="span"
              width={3}
              height={3}
              mr={2}
              display="inline-block"
              backgroundColor="mobility.400"
            />
            移動
          </Box>
        ) : (
          ''
        )}
        {other ? (
          <Box width="25%">
            <Box
              as="span"
              width={3}
              height={3}
              mr={2}
              display="inline-block"
              backgroundColor="other.400"
            />
            消費財
          </Box>
        ) : (
          ''
        )}
      </Flex>
    </Box>
  )
}

export default PieChart
