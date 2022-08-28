import { FC } from 'react'
import {
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  Tooltip,
  SliderThumb
} from '@chakra-ui/react'
import styles from 'components/molecules/action/ActionRateSlider/ActionRateSlider.module.scss'

type Props = {
  className?: string
  rate: number
  onChange: { (arg: number): void }
}

const rateMarks = [
  {
    id: 1,
    value: 25,
    label: '25%',
    tooltip: '今より 少し多い',
    ml: '-0.3'
  },
  {
    id: 2,
    value: 50,
    label: '50%',
    tooltip: 'けっこう',
    ml: '-2.5'
  },
  {
    id: 3,
    value: 75,
    label: '75%',
    tooltip: 'ほとんど',
    ml: '-2.5'
  },
  {
    id: 4,
    value: 100,
    label: '100%',
    tooltip: 'いつも',
    ml: '-8'
  }
]

const ActionRateSlider: FC<Props> = (props) => {
  const getTooltips = (value: number): string => {
    const mark = rateMarks.find((rateMark) => rateMark.value === value)

    return mark ? mark.tooltip : ''
  }

  return (
    <Slider
      defaultValue={props.rate}
      min={25}
      max={100}
      size="lg"
      step={25}
      onChange={(v) => props.onChange(v)}
    >
      {rateMarks.map((rateMark) => {
        return (
          <SliderMark
            key={rateMark.id}
            value={rateMark.value}
            pt={3.5}
            ml={rateMark.ml}
            fontSize="sm"
          >
            {rateMark.label}
          </SliderMark>
        )
      })}
      <SliderTrack
        bg="grey.200"
        className={styles['action-rate-slider__track']}
      >
        <SliderFilledTrack
          bg="brandPrimary.400"
          className={styles['action-rate-slider__track']}
        />
      </SliderTrack>
      <SliderThumb
        boxSize={6}
        className={styles['action-rate-slider__thumb']}
      />
      <Tooltip
        hasArrow
        bg="white"
        color="#333333"
        placement="top"
        isOpen={true}
        label={getTooltips(props.rate)}
        className={styles['action-rate-slider__tooltip']}
      >
        <SliderThumb
          boxSize={6}
          className={styles['action-rate-slider__thumb']}
        />
      </Tooltip>
    </Slider>
  )
}

export default ActionRateSlider
