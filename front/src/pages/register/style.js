import styled from "styled-components";

const Container = styled.main`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  justify-content: space-between;

  div {
    width: 40%;
    height: 150vh;
    min-width: 400px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    color: #fff;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 8px;
    padding: 15px;
    > img {
      margin-top: -255px;
      min-width: 200px;
      max-width: 400px;
    }
    > h2 {
      align-self: center;
      font-family: "Roboto";
      width: 100%;
      margin-top: 35px;
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
    max-width: 500px;
    min-width: 300px;
    width: 400px;
    background-color: white;
    height: auto;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    gap: 8px;
    > h1 {
      margin-bottom: 26px;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }

    label {
      color: black;
    }

    input {
      padding: 6px;
      border: 1px solid black;
      border-radius: 4px;
    }
    span {
      margin-top: -5px;
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
    align-items: center;
    display: flex;
    flex-direction: column;
    > div {
      background-color: #000;
      height: auto;
      display: flex;
      flex-direction: column;
      color: #fff;
      text-align: center;
      align-items: center;
      justify-content: center;
      gap: 8px;
      > img {
        top: 350px;
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
      margin-top: 250px;
      width: 60%;
      position: absolute;
      height: auto;
      min-width: 300px;
      background-color: white;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      > h1 {
        margin-bottom: 26px;
      }
    }
  }
`;

export default Container;
