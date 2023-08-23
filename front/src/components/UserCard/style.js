import styled from "styled-components";

const UserCardStyle = styled.div`
  width: 75%;
  margin: 22px 55px;
  display: flex;
  gap: 7%;
  align-items: center;

  > img {
    width: 210px;
    height: 210px;
    border-radius: 50%;
    object-fit: cover;
  }
  > div {
    color: white;
    border: 1px solid white;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 75%;
    min-width: 250px;
    gap: 15px;
    align-items: center;
    position: relative;

    > div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 12px;
      > h2 {
        font-weight: 400;
        font-size: 52px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
      }
    }
    > ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      > li {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
        padding: 2px;
        border-radius: 4px;
        width: 100%;
        background-color: rgba(60, 60, 60, 0.1);
      }
    }
  }
`;

export { UserCardStyle };
