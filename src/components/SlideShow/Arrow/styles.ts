import styled from 'styled-components';

import type { SlideShowArrowProps } from './';

const ARROW_BTN_SIZE = 55;

const Arrow = styled.img`
  height: 48px;
  transform: ${(props: Pick<SlideShowArrowProps, 'direction'>) =>
    props.direction === 'right' ? 'rotate(-90deg)' : 'rotate(90deg)'};
  width: 48px;
`;

const LoadingWrapper = styled.div`
  & > img {
    pointer-events: none;
    position: relative;
    scale: 2.35;
    top: 2px;
    width: 48px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #313132;
  height: ${ARROW_BTN_SIZE}px;
  justify-content: center;
  position: absolute;
  margin-top: -${ARROW_BTN_SIZE}px;
  top: 50%;
  right: ${(props: Pick<SlideShowArrowProps, 'direction' | 'isLoading'>) =>
    props.direction === 'right' ? '4px' : 'auto'};
  left: ${(props: Pick<SlideShowArrowProps, 'direction' | 'isLoading'>) =>
    props.direction === 'left' ? '4px' : 'auto'};
  width: ${ARROW_BTN_SIZE}px;
  z-index: 3;

  ${(props: Pick<SlideShowArrowProps, 'direction' | 'isLoading'>) =>
    props.isLoading &&
    `
    cursor: default;

    & > img {
      opacity: .1;
    }
  `}
`;

export { Arrow, LoadingWrapper, Wrapper };
