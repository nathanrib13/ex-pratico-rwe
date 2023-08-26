import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  overflow-y: auto; /* Habilita a rolagem vertical quando o conteúdo excede a altura */
  padding: 35% 0 25px 0 ;
`;

const ModalContent = styled.div`
position: relative;
  background-color: white;
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);


  > h2 {
    text-align: center;
    margin-bottom: 15px;
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    span {
      margin-top: -5px;
      margin-left: 5px;
      font-size: 11px;
      padding: 0;
      color: red;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    color: black;
    margin-bottom: 8px;
    gap: 6px;
  }

  input,
  textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
  }

  select {
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 100%;
  }

  button {
    background-color: #004aad;
    margin-top: 15px;
    width: 100%;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(0, 74, 173, 0.8);
    }

 
  }
  .close-modal{
    width: auto;
      background-color: #000;
      position: absolute;
      top: 5px;
      right: 5px;

    }
 
  .button-container {
    display: flex;
    justify-content: space-between;
  }

  .ProfileCardStyle {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #000;
    position: relative;
    align-self: center;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:hover::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      z-index: 1;
      cursor: pointer;
    }

    &:hover::after {
      content: "Editar Foto";
      font-size: 12px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      color: #333;
      padding: 8px;
      width: 100%;
      text-align: center;
      border-radius: 4px;
      font-weight: bold;
      z-index: 2;
      cursor: pointer;
    }
  }
`;

export { ModalContent, ModalWrapper };