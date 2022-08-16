import { FC } from 'react'

type Props = {
  width?: number
  height?: number
}

const FacebookIcon: FC<Props> = ({ width = 48, height = 48 }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill="#4267B2" />
      <path
        d="M26.0949 36V25.0703H30.2412L30.8575 20.7909H26.0949V18.0652C26.0949 16.8303 26.4818 15.9849 28.4747 15.9849H31V12.1696C29.7713 12.0525 28.5363 11.9959 27.3006 12.0002C23.6356 12.0002 21.1193 13.9899 21.1193 17.6424V20.7829H17V25.0623H21.1283V36H26.0949Z"
        fill="white"
      />
    </svg>
  )
}

export default FacebookIcon
