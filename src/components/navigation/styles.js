import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  position: fixed;
  color: var(--white);
  font-family: var(--font-mono);
  top: 50%;
  margin-left: 20px;
  transform: translate(0%, -50%);

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 25px 0px;
      position: relative;
      font-size: 18px;
      font-weight: 500;
      color: var(--light-gray);
      cursor: pointer;

      &:hover span:not(:hover) {
        display: inline-block;
      }

      &:hover {
        color: var(--white);
        text-shadow: 2px 2px 4px rgba(255,255,255,0.4);
      }

      span {
        margin: 0;
        padding: 0;
        display: none;
      }

      .nav-link {
        padding: 10px;
        text-decoration: none;
        color: var(--light-gray);
        margin-right: 5px;
        color: inherit;
      }
          
      .active {
        color: var(--accent-orange);
      }
    }
  }
`;

export { Nav };