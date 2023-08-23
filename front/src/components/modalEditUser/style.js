import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const ModalContent = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  color: black;
  background-color: #fff;
  padding: 30px;
  border-radius: 4px;
  gap: 15px;
  > h2 {
    margin-bottom: 10px;
  }

  > form {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 4px;
    max-height: 80%;
    > input {
      margin-bottom: 12px;
    }

    > div {
      display: flex;
      gap: 8px;
    }
  }

  > h2 {
    text-align: center;
  }

  label {
    display: flex;
    flex-direction: column;
    color: black;
    margin-bottom: 8px;
    gap: 9px;
  }

  input,
  textarea {
    padding: 12px;
    border: 1px solid black;
  }

  input::placeholder {
    font-family: Arial, Helvetica, sans-serif;
  }

  select {
    padding: 12px;
    border-radius: 4px;
    border: 1px solid blue;
  }

  button {
    background-color: #004aad;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    margin-top: 16px;
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 8px;

    &:hover {
      background-color: rgba(0, 0, 290, 0.4);
      color: black;
    }
  }
  button.deleteUser {
    background-color: red;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    margin-top: 16px;
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 8px;

    &:hover {
      background-color: rgba(190, 0, 0, 0.6);
    }
  }

  .button-container {
    display: flex;
    justify-content: space-between;
  }

  .ProfileCardStyle {
    width: 25%;
    height: 45%;
    border-radius: 70%;
    background-color: #000;
    padding: 5px;
    margin-bottom: 28px;
    position: relative;
  }

  .ProfileCardStyle img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  .ProfileCardStyle:hover img {
    background-color: #333;
  }

  .ProfileCardStyle:hover::before {
    content: "";
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    z-index: 1;
    cursor: pointer;
  }

  .ProfileCardStyle:hover::after {
    content: "Adicionar foto";
    font-size: 12px;
    position: absolute;
    display: flex;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    color: #333;
    padding: 10px 10px;
    width: 50%;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-weight: bold;
    z-index: 2;
    cursor: pointer;
  }
`;
export { ModalContent, ModalWrapper };
