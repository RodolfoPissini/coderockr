import styled from 'styled-components';

export const Container = styled.div`
  background-image: linear-gradient(to right, #e0960a, #342300);
  height: 100vh;
  overflow: hidden;
`;

export const Content = styled.div`
  padding-top: 2rem;
  height: 100%;
  overflow: scroll;
  margin-top: 2rem;

  &::-webkit-scrollbar {
    width: 0.375rem !important;
    height: 0.375rem !important;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e0960a;
  }
  &::-webkit-scrollbar-track {
    background: hsla(0, 0%, 100%, 0.1);
  }
`;

export const LoadingContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg{
    color: #342300;
  }
`

export const PostItem = styled.div`
  background-color: #fff;
  display: ${({ id }) => (id % 3 === 0 ? 'block' : 'inline-block')};
  float: ${({ id }) => (id % 3 === 0 && 'right')};
  margin-bottom: 3rem;
  width: ${({ id }) => (id % 3 === 0 ? '80rem' : '50%')};
  height: ${({ id }) => (id % 3 === 0 ? '40rem' : '20rem')};

  @media (max-width: 75rem) {
    display: flex;
    width: ${({ id }) => (id % 3 === 0 ? '100%' : '100%')};
    height: ${({ id }) => (id % 3 === 0 ? '40rem' : '20rem')};
  }
`;

export const PostContent = styled.button`
  width: ${({ id }) => (id % 3 === 0 ? '100%' : '100%')};
  height: ${({ id }) => (id % 3 === 0 ? '40rem' : '20rem')};
  position: relative;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    position: absolute;
    right: 2.5rem;
    bottom: 2.5rem;
  }
`;

export const ImageContainer = styled.div`
  height: ${({ id }) => (id % 3 === 0 ? '40rem' : '20rem')};
  width: ${({ id }) => (id % 3 === 0 ? '40rem' : '20rem')};
  margin-right: 80px;
  img {
    height: ${({ id }) => (id % 3 === 0 ? '40rem' : '20rem')};
    width: ${({ id }) => (id % 3 === 0 ? '40rem' : '20rem')};
    object-fit: cover;
  }
  @media (max-width: 106.25rem) {
    margin-right: ${({ id }) => (id % 3 === 0 ? '5rem' : '0.625rem')};
  }
`;

export const PostInformation = styled.article`
  width: 30rem;
  height: ${({ id }) => (id % 3 === 0 ? '19.688rem' : '15.625rem')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: left;

  h2 {
    font-size: 2.25rem;
    color: #f1a10a;
    width: 25rem;
    height: 5.313rem;
    word-wrap: break-word;
    margin-bottom: 0.438rem;
    overflow: hidden;
  }

  p {
    width: 25rem;
    height: 5.438rem;
    overflow: hidden;
    font-size: 1.5rem;
  }

  @media (max-width: 100rem) {
    width: 21.875rem;
    max-width: ${({ id }) => (id % 3 === 0 ? '28.125rem' : '21.875rem')};
    h2 {
      max-width: ${({ id }) => (id % 3 === 0 ? '28.125rem' : '21.875rem')};
      height: 5.313rem;
    }

    p {
      max-width: ${({ id }) => (id % 3 === 0 ? '28.125rem' : '21.875rem')};
      height: 5.438rem;
      overflow: hidden;
      font-size: 1.5rem;
    }
  }

  @media (max-width: 93.75rem) {
    width: 21.875rem;
    max-width: ${({ id }) => (id % 3 === 0 ? '28.125rem' : '18.75rem')};
    h2 {
      max-width: ${({ id }) => (id % 3 === 0 ? '28.125rem' : '18.125rem')};
      height: 85px;
    }

    p {
      max-width: ${({ id }) => (id % 3 === 0 ? '28.125rem' : '18.125rem')};
      height: 5.438rem;
      overflow: hidden;
      font-size: 1.5rem;
    }
  }

  @media (max-width: 81.25rem) {
    width: 21.875rem;
    max-width: ${({ id }) => (id % 3 === 0 ? '28.125rem' : '15.625rem')};
    h2 {
      max-width: ${({ id }) => (id % 3 === 0 ? '28.125rem' : '14.375rem')};
      height: 85px;
    }

    p {
      max-width: ${({ id }) => (id % 3 === 0 ? '28.125rem' : '14.375rem')};
      height: 5.438rem;
      overflow: hidden;
      font-size: 1.5rem;
    }
  }
`;

export const Name = styled.p`
  color: #000000;
  font-size: 1.5rem;
  text-align: left;
  max-height: 1.5rem;
  margin-bottom: 0.438rem;
`;
