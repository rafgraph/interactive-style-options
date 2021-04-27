import { Interactive } from 'react-interactive';
import { styled } from './stitches.config';

export const Link = styled(Interactive.A, {
  color: '$highContrast',
  variants: {
    styleType: {
      borderAndOutline: {
        textDecoration: 'none',
        borderBottom: '1px dotted $colors$green',
        '&.hover, &.mouseActive': {
          borderBottom: '1px solid $colors$green',
        },
        '&.touchActive': {
          borderBottom: '1px solid $colors$blue',
        },
        '&.keyActive': {
          borderBottom: '1px solid $colors$purple',
        },
        '&.focusFromKey': {
          outline: '2px solid $colors$purple',
          outlineOffset: '2px',
        },
      },

      decorationAndBoxShadow: {
        // note can't use shorthand for textDecoration because of bug in Safari v14
        // textDecoration: 'underline $colors$green dotted from-font',
        textDecorationLine: 'underline',
        textDecorationStyle: 'dotted',
        textDecorationColor: '$green',
        textDecorationThickness: 'from-font',

        // padding used to provide offset for boxShadow
        // margin undoes padding for page layout so boxShadow works like outline
        padding: '2px 3px',
        margin: '-2px -3px',

        // this is the main reason to use boxShadow instead of outline
        // with outline can only have square corners,
        // with boxShadow can use borderRadius to soften the corners
        borderRadius: '4px',

        '&.hover, &.mouseActive': {
          textDecorationColor: '$green',
          textDecorationStyle: 'solid',
        },
        '&.touchActive': {
          textDecorationColor: '$blue',
          textDecorationStyle: 'solid',
        },
        '&.keyActive': {
          textDecorationColor: '$purple',
          textDecorationStyle: 'solid',
        },
        '&.focusFromKey': {
          boxShadow: '0 0 0 2px $colors$purple',
        },
      },
    },
  },
  defaultVariants: {
    styleType: 'decorationAndBoxShadow',
  },
});

const LinkDemoContainer = styled('div', {
  margin: '20px 0',
  '&>*': {
    margin: '10px',
  },
});

export const LinkDemo = () => (
  <LinkDemoContainer>
    <Link styleType="borderAndOutline" href="#">
      This is a link
    </Link>
    <Link styleType="decorationAndBoxShadow" href="#">
      This is a link
    </Link>
    <div>
      Another{' '}
      <Link styleType="borderAndOutline" href="#">
        link with styling
      </Link>{' '}
      that appears inside some text.
    </div>
    <div>
      Another{' '}
      <Link styleType="decorationAndBoxShadow" href="#">
        link with styling
      </Link>{' '}
      that appears inside some text.
    </div>
  </LinkDemoContainer>
);
