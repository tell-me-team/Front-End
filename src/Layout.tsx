import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const Layout = () => {
  return (
    <SLayOut>
      <Outlet />
    </SLayOut>
  );
};

export default Layout;

const SLayOut = styled.main`
  display: flex;
  align-items: center;
  max-width: 375px;
  margin: 0 auto;
  min-height: 100vh;
  * {
    font-family: "Noto Sans KR", sans-serif;
  }
`;
