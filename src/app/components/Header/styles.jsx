import styled from 'styled-components';

export const HeaderContent = styled.div`
  height: 3rem;
  width: 100%;
  background-color: #262626;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  z-index: 999;
  h3 {
    font-size: 1.5rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 21.875rem;
  }

  button{
    background-color: transparent;
    color: #fff;
    border: none;
    outline: none;
  }
`;
