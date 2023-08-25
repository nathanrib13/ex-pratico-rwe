import styled from "styled-components";

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000;
  padding: 50px;

  > div {
    width: 40%;
    min-width: 400px;
    background-color: #000;
    color: #fff;
    text-align: center;
    padding: 15px;

    > img {
      max-width: 100%;
      margin-top: -100px;
    }

    > h2 {
      margin-top: 35px;
      color: rgba(190, 180, 190, 0.9);
    }
  }

  section {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  form {
    max-width: 500px;
    width: 100%;
    background-color: white;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    gap: 20px;

    > h1 {
      margin-bottom: 26px;
      font-family: "Lucida Sans", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }

    label {
      color: black;
    }

    input {
      padding: 10px;
      border: 1px solid black;
      border-radius: 4px;
    }

    span {
      font-size: 11px;
      color: red;
    }

    input::placeholder {
      font-family: "Roboto";
    }

    button {
      background-color: #000;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-family: Arial, Helvetica, sans-serif;

      &:hover {
        background-color: rgba(0, 0, 0, 0.6);
      }
    }

    p {
      margin: 20px 0;
    }
  }

  @media (max-width: 790px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;

    > div {
      width: 100%;
      min-width: auto;
      background-color: #000;
      padding: 20px;
      text-align: center;
      margin-top: 0;

      > img {
        margin-top: 20px;
      }

      > h2 {
        display: none;
      }
    }

    section {
      width: 100%;
    }

    form {
      margin-top: 20px;
      width: 100%;
    }
  }
`;

export default Container;