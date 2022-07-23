import { FC, useMemo } from 'react'
import { Box } from '@chakra-ui/react'
// eslint-disable-next-line import/no-unresolved
import ChartDataLabels from 'chartjs-plugin-datalabels'
// eslint-disable-next-line import/no-unresolved
import { Pie } from 'react-chartjs-2'
import type { Plugin } from 'chart.js'

const PieChart: FC = () => {
  const iconTooltip: Plugin = useMemo(() => {
    return {
      id: 'iconTooltip',
      afterDraw(chart, args, options) {
        const { ctx } = chart
        ctx.save()
        chart.data.datasets.forEach((dataset, i) => {
          chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
            if (Number(dataset.data[index]) > 0) {
              const { x, y } = datapoint.tooltipPosition()
              const img = new Image()
              img.src = '/icons/cartooltip.png'
              console.log(x, y)
              ctx.drawImage(img, x, y, 100, 100)
            }
          })
        })
      }
    }
  }, [])

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
                  return Number(value).toLocaleString()
                } else {
                  return '??'
                }
              }
            },
            legend: {
              position: 'bottom'
            }
          }
        }}
        data={{
          labels: ['移動', '住居', '食', '消費財'],
          datasets: [
            {
              label: 'emission',
              data: [1000, 0, 0, 0],
              backgroundColor: ['#009DD3', '#ed9928', '#51a15a', '#da7f79']
            }
          ]
        }}
      ></Pie>
    </Box>
  )
}

export default PieChart
