import styled from 'styled-components';

const LoadingWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  & > img {
    height: auto;
    width: 96;
  }

  & > p {
    margin-top: -48px;
  }
`;

const Wrapper = styled.div`
  max-width: ${(props: { maxWidth: number }) => props.maxWidth}px;
`;

export { LoadingWrapper, Wrapper };
