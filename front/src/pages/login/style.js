import styled from "styled-components";

const Container = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 40%;
    height: 100%;
    min-width: 400px;
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
      min-width: 200px;
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
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  form {
    align-self: center;
    width: 40%;
    height: 65%;
    min-width: 300px;
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
      margin-top: 18px;
    }

    input {
      padding: 6px;
      border: 1px solid black;
      border-radius: 4px;
    }
    span {
      margin-top: 5px;
      margin-left: 5px;
      font-size: 11px;
      padding: 0;
      color: red;
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

    p {
      align-self: flex-start;
      margin: 30px 0px 14px 3px;
    }
  }

  @media (max-width: 790px) {
    background-color: #000;
    display: flex;
    flex-direction: column;
    div {
      background-color: #000;
      height: 15%;
      display: flex;
      flex-direction: column;
      color: #fff;
      text-align: center;
      gap: 8px;
      > img {
        top: 50px;
        position: absolute;
      }
      > h2 {
        display: none;
      }
    }
    section {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    form {
      z-index: 99;
      align-self: center;
      width: 60%;
      height: 65%;
      min-width: 300px;
      min-height: 450px;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.4);
      display: flex;
      flex-direction: column;
      > h1 {
        margin-bottom: 26px;
      }
    }
  }
`;

export default Container;
