import { Interactive } from 'react-interactive';
import { styled } from './stitches.config';

export const Button = styled(Interactive.Button, {
  color: '$highContrast',
  outline: 'none',
  '&.hover, &.mouseActive': {
    color: '$green',
    borderColor: '$green',
  },
  '&.touchActive': {
    color: '$blue',
    borderColor: '$blue',
  },
  '&.keyActive': {
    color: '$purple',
    borderColor: '$purple',
  },
  variants: {
    focus: {
      outline: {
        '&.focusFromKey': {
          outline: '2px solid $colors$purple',
          outlineOffset: '2px',
        },
      },
      boxShadow: {
        '&.focusFromKey': {
          boxShadow: '0 0 0 2px $colors$purple',
        },
      },
      boxShadowOffset: {
        '&.focusFromKey': {
          boxShadow:
            '0 0 0 1px $colors$pageBackground, 0 0 0 3px $colors$purple',
        },
      },
      borderAndBoxShadow: {
        '&.focusFromKey': {
          borderColor: '$purple',
          boxShadow: '0 0 0 2px $colors$purple',
        },
      },
      boxShadowAndBackground: {
        '&.focusFromKey': {
          backgroundColor: '$backgroundPurple',
          boxShadow: '0 0 0 1px $colors$purple',
          textDecoration: 'none',
        },
      },
    },
  },
  defaultVariants: {
    focus: 'outline',
  },
});

const ButtonDemoContainer = styled('div', {
  margin: '20px 0',
  '&>button': {
    margin: '10px',
  },
});

export const ButtonDemo = () => (
  <ButtonDemoContainer>
    <Button
      focus="boxShadowOffset"
      css={{
        textAlign: 'center',
        width: '100px',
        height: '30px',
        border: '1px solid',
        borderRadius: '1000px',
      }}
    >
      Button
    </Button>
    <Button
      focus="borderAndBoxShadow"
      css={{
        textAlign: 'center',
        width: '100px',
        height: '30px',
        border: '1px solid $highContrast',
        borderRadius: '1000px',
      }}
    >
      Button
    </Button>
    <Button
      focus="boxShadowOffset"
      css={{
        textAlign: 'center',
        width: '100px',
        height: '30px',
        border: '1px solid $highContrast',
      }}
    >
      Button
    </Button>
    <Button
      focus="outline"
      css={{
        textAlign: 'center',
        width: '100px',
        height: '30px',
        border: '1px solid $highContrast',
      }}
    >
      Button
    </Button>
    <hr />
    <Button
      focus="outline"
      css={{
        textDecoration: 'underline',
        padding: '2px 4px',
      }}
    >
      Button as text
    </Button>
    <Button
      focus="boxShadow"
      css={{
        textDecoration: 'underline',
        padding: '4px 6px',
        borderRadius: '4px',
      }}
    >
      Button as text
    </Button>
    <Button
      focus="boxShadowAndBackground"
      css={{
        textDecoration: 'underline',
        padding: '4px 6px',
        borderRadius: '4px',
      }}
    >
      Button as text
    </Button>
  </ButtonDemoContainer>
);
