import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FormContainer = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 50.625rem;

  .closeIcon{
    position: absolute;
    top: 1.375rem;
    right: 1.375rem;
    cursor: pointer;
  }

  h2 {
    text-align: center;
    margin-top: 1.25rem;
    color: #f1a10a;
    font-size: 2.25rem;
  }

  label {
    margin-top: 3rem;
    display: flex;
    flex-direction: column-reverse;
  }

  p {
    font-size: 1.5rem;
  }

  input {
    width: 35.313rem;
    height: 2.813rem;
    border-radius: 0.25rem;
    border: 0.063rem solid;
    padding: 1rem 1.125rem;
    font-size: 1.5rem;
  }

  button{
    width: 14.375rem;
    height: 2.813rem;
    background-color: #2D2D2D;
    color: #fff;
    margin-top: 1.875rem;
    margin-bottom: 1.25rem;
    font-size: 1.5rem;

    svg{
        margin-right: 2rem;
    }

  }
`;

export const TextareaContent = styled.div`
margin-top: 3.188rem;
  textarea {
    width: 35.313rem;
    height: 12.5rem;
    font-size: 1.5rem;
    padding: 1rem 1.125rem;
  }
`;
