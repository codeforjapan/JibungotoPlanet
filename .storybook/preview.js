import * as NextImage from "next/image";
const theme = require('../utils/chakratheme')
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
      <OriginalNextImage
          {...props}
          unoptimized
      />
  ),
});

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  chakra: {
    theme,
  },
}
export const tags = ["autodocs"];
