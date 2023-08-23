import styled from "styled-components";

const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  div {
    width: 40%;
    height: 150vh;
    background-color: #000;
    display: flex;
    flex-direction: column;
    color: #fff;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 8px;
    > img {
      margin-top: -255px;
      z-index: 99;
      max-width: 400px;
    }
    > h2 {
      align-self: center;
      font-family: "Roboto";
      width: 150%;
      margin-top: 35px;
      color: rgba(190, 180, 190, 0.9);
    }
  }

  section {
    position: absolute;
    padding: 45px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  form {
    position: absolute;
    margin: 50px 0px;
    left: 20%;
    width: 25%;
    height: auto;
    background-color: white;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    > h1 {
      margin-bottom: 26px;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }

    label {
      color: black;
      margin-bottom: 8px;
    }

    input {
      padding: 6px;
      margin-bottom: 19px;
      border: 1px solid black;
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
