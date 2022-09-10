import type { FC } from 'react';
import React from 'react';

import ArrowDown from '../../../assets/arrow-down.svg';
import Loader from '../../../assets/loader.svg';
import { Arrow, LoadingWrapper, Wrapper } from './styles';

export interface SlideShowArrowProps {
  direction: 'left' | 'right';
  isLoading?: boolean;
  onArrowClick: (direction: Pick<SlideShowArrowProps, 'direction'>) => void;
}
export const SlideShowArrow: FC<SlideShowArrowProps> = ({
  direction,
  isLoading,
  onArrowClick,
}) => (
  <Wrapper
    direction={direction}
    isLoading={isLoading}
    onClick={(event) => {
      if (isLoading) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      onArrowClick({ direction });
    }}
  >
    {isLoading ? (
      <LoadingWrapper>
        <img src={Loader} alt="Arrow right loading icon" />
      </LoadingWrapper>
    ) : (
      <Arrow
        alt={`See ${direction === 'left' ? 'next' : 'previous'} programs`}
        direction={direction}
        src={ArrowDown}
      />
    )}
  </Wrapper>
);
