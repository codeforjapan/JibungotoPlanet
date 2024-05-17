import { FC, useMemo } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { ArcElement, Chart } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Pie } from 'react-chartjs-2'
import { roundCo2Amount } from 'utils/calculate'
import type { Plugin } from 'chart.js'

type Props = {
  mobility?: number
  food?: number
  housing?: number
  other?: number
  onChartClick: (category: Questions.QuestionCategory) => void
}

const iconTooltip: Plugin = {
  id: 'iconTooltip',
  afterDraw(chart, args, options) {
    const { ctx } = chart
    ctx.save()
    chart.data.datasets.forEach((dataset, i) => {
      chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
        const canvasWidth = Number(
          document.getElementById('piechart')?.clientWidth
        )
        const categoryEmission = Number(dataset.data[index])
        if (categoryEmission > 0) {
          const img = new Image()
          switch (index) {
            case 0:
              img.src = '/icons/mobilitytooltip.png'
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
          const { x, y } = datapoint.tooltipPosition(true)
          const tan = (y - canvasWidth / 2) / (x - canvasWidth / 2)
          const cy = tan * (x - canvasWidth / 2) * 1.85 + canvasWidth / 2 - 35
          const cx = (x - canvasWidth / 2) * 1.85 + canvasWidth / 2 - 35

          ctx.drawImage(img, cx, cy, 70, 70)
        }
      })
    })
  }
}

Chart.register([ArcElement, ChartDataLabels, iconTooltip])

const PieChart: FC<Props> = ({
  mobility,
  food,
  housing,
  other,
  onChartClick
}) => {
  const isNoAnswered = useMemo(() => {
    return mobility === 0 && housing === 0 && food === 0 && other === 0
  }, [mobility, housing, food, other])

  const chartData = useMemo(() => {
    if (isNoAnswered) {
      return [3, 2, 1.5, 3.5]
    } else {
      return [
        roundCo2Amount(mobility),
        roundCo2Amount(housing),
        roundCo2Amount(food),
        roundCo2Amount(other)
      ]
    }
  }, [mobility, housing, food, other, isNoAnswered])

  return (
    <Box maxWidth="450" mx="auto">
      <Pie
        id="piechart"
        options={{
          plugins: {
            tooltip: { enabled: false },
            datalabels: {
              color: 'white',
              font: { size: 26, weight: 'bold' },
              align: 'center',
              formatter(value, context) {
                if (isNoAnswered) {
                  return '??'
                } else if (value === 0) {
                  return ''
                } else if (!Number.isNaN(value)) {
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
          },
          onClick: (e, el) => {
            if (
              !el ||
              el.length === 0 ||
              !el[0].element.options.backgroundColor
            )
              return
            const bgColor: any = el[0].element.options.backgroundColor
            switch (bgColor) {
              case '#008EBE':
                onChartClick('mobility')
                break
              case '#009DD3':
                onChartClick('mobility')
                break
              case '#F98D00':
                onChartClick('housing')
                break
              case '#ED9928':
                onChartClick('housing')
                break
              case '#37A344':
                onChartClick('food')
                break
              case '#51A15A':
                onChartClick('food')
                break
              case '#EF4D42':
                onChartClick('other')
                break
              case '#DA7F79':
                onChartClick('other')
                break
              default:
                break
            }
          }
        }}
        data={{
          labels: ['移動', '住居', '食', '消費財'],
          datasets: [
            {
              label: 'emission',
              data: chartData,
              backgroundColor: ['#009DD3', '#ed9928', '#51a15a', '#da7f79']
            }
          ]
        }}
      />
      <Flex mx={{ base: '10px', md: '30px' }}>
        {housing || isNoAnswered ? (
          <Box width="25%" wordBreak="keep-all">
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
        {food || isNoAnswered ? (
          <Box width="25%" wordBreak="keep-all">
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
        ) : (
          ''
        )}
        {mobility || isNoAnswered ? (
          <Box width="25%" wordBreak="keep-all">
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
        {other || isNoAnswered ? (
          <Box width="25%" wordBreak="keep-all">
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
