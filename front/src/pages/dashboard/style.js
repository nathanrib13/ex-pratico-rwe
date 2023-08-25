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
    width: 90%; /* Adjusted width for responsiveness */
    max-width: 1200px; /* Added maximum width for larger screens */
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    padding: 20px;
    gap: 14px;
  }

  > h2 {
    font-size: 28px; /* Reduced font size for smaller screens */
    margin: 25px; /* Adjusted margin for smaller screens */
    color: #fff;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(1, 1fr); /* Single column for smaller screens */
    gap: 20px; /* Reduced gap for smaller screens */
    align-items: center;
    color: #fff;
    padding: 20px;
    border-radius: 0;
    margin-bottom: 75px; /* Adjusted margin for smaller screens */

    @media screen and (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr); /* Two columns for screens wider than 600px */
    }

    @media screen and (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr); /* Three columns for screens wider than 900px */
    }

    > div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding: 20px;
      gap: 8px;
      border: 1px solid white;
      
      > button {
        align-self: flex-end;
        padding: 4px;
        width: 25%; /* Adjusted width for smaller screens */
        background-color: white;
        border: none;
      }
    }
  }
`;

export default Container;