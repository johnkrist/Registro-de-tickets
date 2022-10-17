import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;

  margin: 50px 0 0 50px;

  gap: 15px;

  input {
    width: 422px;
    height: 34px;
    font-size: 16px;
    color: gray;
    ::placeholder {
      opacity: 0.3;
      font-size: 14px;
    }
  }

  button {
    border: unset;
    background-color: transparent;
    margin-left: 20px;
  }
  select {
    width: 430px;
    height: 40px;
    border-bottom: 1px solid gray;

    font-size: 16px;
    color: gray;
  }

  .container {
    display: flex;
  }
  label {
    display: flex;
    flex-direction: column;
    color: gray;
    font-size: 20px;
  }
  textarea:focus,
  input:focus,
  select:focus {
    box-shadow: 0 0 0 0;
    border: 1 none;
    outline: 0;
  }
`;
