import { FC } from "react";
import { Heading } from '@chakra-ui/react'

type Props = {
  title?: string;
};

const HomeContentTitle: FC<Props> = (props) => {
  const baseStyle = {
    fontSize: '62px',
    lineHeight: '160%',
    letterSpacing: '0.2em',
    fontWeight: 700
  }

  return (
    <Heading style={ baseStyle } as='h3'>{props.title}</Heading>
  );
};

export default HomeContentTitle;
