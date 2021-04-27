import * as React from 'react';
import { ButtonDemo } from './Button';
import { LinkDemo } from './Link';
import { styled, globalCss } from './stitches.config';

const AppContianer = styled('div', {
  margin: 20,
});

export default function App() {
  globalCss();
  return (
    <AppContianer>
      <ButtonDemo />
      <LinkDemo />
    </AppContianer>
  );
}
