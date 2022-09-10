import type { FC } from 'react';
import React from 'react';

import ArrowDown from '../../../assets/arrow-down.svg';
import { Arrow, Wrapper } from './styles';

export interface SlideShowArrowProps {
  direction: 'left' | 'right';
}
export const SlideShowArrow: FC<SlideShowArrowProps> = ({ direction }) => {
  return (
    <Wrapper
      direction={direction}
      onClick={() => {
        console.log('ARROW CLICK !');
      }}
    >
      <Arrow
        alt={`See ${direction === 'left' ? 'next' : 'previous'} programs`}
        direction={direction}
        src={ArrowDown}
      />
    </Wrapper>
  );
};
