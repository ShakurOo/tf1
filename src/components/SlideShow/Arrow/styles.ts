import styled from 'styled-components';

import type { SlideShowArrowProps } from './';

const ARROW_BTN_SIZE = 55;

const Arrow = styled.img`
  height: 48px;
  transform: ${(props: Pick<SlideShowArrowProps, 'direction'>) =>
    props.direction === 'right' ? 'rotate(-90deg)' : 'rotate(90deg)'};
  width: 48px;
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
  right: ${(props: Pick<SlideShowArrowProps, 'direction'>) =>
    props.direction === 'right' ? '0' : 'auto'};
  left: ${(props: Pick<SlideShowArrowProps, 'direction'>) =>
    props.direction === 'left' ? '0' : 'auto'};
  width: ${ARROW_BTN_SIZE}px;
  z-index: 3;
`;

export { Arrow, Wrapper };
