import styled from 'styled-components';

export const Container = styled.div`
  background-image: linear-gradient(to right, #e0960a, #342300);
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  overflow: auto;
  padding: 6.25rem;
`;

export const WarningText = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;

  p {
    margin-right: 1rem;
  }
`;

export const LoadingContainer = styled.div`
  position: absolute;
  bottom: 50%;

  svg {
    color: #342300;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 80rem;
  height: 100%;
  background-color: #fff;
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    height: 40rem;
    width: 40rem;
    object-fit: cover;
  }

  @media (max-width: 67.5rem) {
    flex-direction: column;
    img {
      height: 100%;
      width: 100%;
    }
  }
`;

export const PublisherInfo = styled.div`
  margin-left: 7.5rem;

  p {
    font-size: 1.125rem;
    color: #000;
    margin-bottom: 2.75rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: normal;
    color: #000;
  }

  h2 {
    font-size: 2.25rem;
    color: #f1a10a;
    line-height: 2.666rem;
    margin-top: 3.813rem;
  }

  @media (max-width: 67.5rem) {

  p {
    font-size: 1.125rem;
    color: #000;
    margin-bottom: 1.375rem;
    margin-top: 2.75rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: normal;
    color: #000;
  }

  h2 {
    font-size: 2.25rem;
    color: #f1a10a;
    line-height: 2.666rem;
    margin-top: 1.906rem;
  }
  }
`;

export const PublisherContent = styled.article`
  text-align: left;
  margin: 0 auto;
  margin-top: 7.5rem;
  margin-bottom: 10.5rem;
  max-width: 48.75rem;
  height: 100%;
  font-size: 1.5rem;

  @media (max-width: 67.5rem) {
    margin-top: 3.75rem;
    padding: 1.25rem;
  }
`;
