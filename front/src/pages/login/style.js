import styled from "styled-components";

const Container = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 40%;
    height: 100%;
    background-color: #000;
    display: flex;
    flex-direction: column;
    color: #fff;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 8px;
    > img {
      z-index: 99;
      max-width: 400px;
    }
    > h2 {
      align-self: center;
      font-family: "Roboto";
      padding: 55px 95px;
      color: rgba(190, 180, 190, 0.9);
    }
  }

  section {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 45px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  form {
    position: absolute;
    right: 20%;
    width: 25%;
    height: 65%;
    background-color: white;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    > h1 {
      margin-bottom: 26px;
    }

    label {
      color: black;
      margin-bottom: 8px;
    }

    input {
      padding: 12px;
      margin-bottom: 19px;
      border-radius: 4px;
      border: 1px solid blue;
    }
    input::placeholder {
      font-family: "Roboto";
    }

    button {
      background-color: #000;
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      margin-top: 16px;
      cursor: pointer;
      font-family: Arial, Helvetica, sans-serif;
      &:hover {
        background-color: rgba(00, 00, 00, 0.6);
      }
    }

    span {
      align-self: flex-start;
      margin: 30px 0px 14px 3px;
    }
  }
`;

export default Container;
