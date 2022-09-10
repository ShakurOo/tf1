import styled from 'styled-components';

export const SLIDESHOW_GAP = 24;
export const SLIDESHOW_TITLE_HEIGHT = 45;

const Card = styled.div`
  align-items: center;
  background-color: #272727;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: ${(props: { height: number }) => props.height}px;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: transform 200ms ease-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const LoadingCard = styled(Card)`
  position: absolute;
  width: 100%;
  z-index: 2;
`;

const MoreBtn = styled.button`
  bottom: 8px;
  height: 36px;
  position: absolute;
  right: 8px;
  width: 36px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  border: none;
  cursor: pointer;

  & img {
    height: 18px;
    width: 18px;
  }
`;

const Title = styled.span`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #fff;
  display: -webkit-box;
  font-weight: 500;
  height: ${SLIDESHOW_TITLE_HEIGHT}px;
  overflow: hidden;
  padding-top: 16px;
  text-align: center;
`;

const Wrapper = styled.div`
  padding: ${SLIDESHOW_GAP / 2}px;
  position: relative;
  width: 220px;
`;

export { Card, LoadingCard, MoreBtn, Title, Wrapper };
