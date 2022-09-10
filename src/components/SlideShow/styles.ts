import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: ${(props: { maxWidth: number }) => props.maxWidth}px;
`;

export { Wrapper };
