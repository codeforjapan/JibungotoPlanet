import { FC, ReactNode } from "react";
import { Text } from '@chakra-ui/react'

type Props = {
  body?: ReactNode;
};

const HomeContentBody: FC<Props> = (props) => {
  const baseStyle = {
    fontSize: '18px',
    lineHeight: '190%',
    letterSpacing: '0.05em',
    fontWeight: 500,
    color: '#333333'
  }

  return (
    <Text style={ baseStyle }>{props.body}</Text>
  );
};

export default HomeContentBody;
