import styled from "styled-components";

const UserCardStyle = styled.div`
  width: 75%;
  margin: 22px 55px;
  display: flex;
  gap: 7%;
  align-items: center;

  .image-container {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.socials-links{
color: white;
display:  flex;
gap: 12px;
> a {
  color: white;
  text-decoration: none;
  > svg { 
    width: 25px;
    height: 25px;
  }
 }
}

.image-container img {
 
  width: 210px;
  height: 210px;
  border-radius: 50%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo preto transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay p {
  color: white;
  font-size: 18px;
  text-align: center;
}

.image-container:hover .overlay {
  opacity: 1;
}
 .container-welcome {
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
