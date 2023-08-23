import styled from "styled-components";

const Container = styled.section`
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  height: auto;

  li {
    cursor: pointer;
  }

  > section {
    width: 75%;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    padding: 20px;
    gap: 14px;
  }

  > h2 {
    font-size: 38px;
    margin: 35px;
    color: #fff;
  }
  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    align-items: center;
    color: #fff;
    padding: 20px;
    border-radius: 0;
    margin-bottom: 95px;

    > div {
      display: flex;
      justify-content: space-between;
      height: 265px;
      flex-direction: column;
      padding: 25px;
      gap: 8px;
      border: 1px solid white;
      > button {
        align-self: flex-end;
        padding: 4px;
        width: 15%;
        background-color: white;
        border: none;
      }
    }
  }
`;

export default Container;
