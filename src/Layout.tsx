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

  /* @font-face {
    font-family: "Noto Sans KR";
    font-weight: 300;
    src:
      url("./styles/fonts/NotoSansKR-Light.otf") format("woff2"),
      url("./styles/fonts/NotoSansKR-Light.otf") format("woff"),
      url("./styles/fonts/NotoSansKR-Light.otf") format("truetype");
    font-display: fallback;
  }

  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 400;
    src:
      url("./styles/fonts/NotoSansKR-Regular.otf") format("woff2"),
      url("./styles/fonts/NotoSansKR-Regular.otf") format("woff"),
      url("./styles/fonts/NotoSansKR-Regular.otf") format("truetype");
    font-display: fallback;
  }

  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 500;
    src:
      url("styles/fonts/NotoSansKR-Medium.otf") format("woff2"),
      url("./styles/fonts/NotoSansKR-Medium.otf") format("woff"),
      url("./styles/fonts/NotoSansKR-Medium.otf") format("truetype");
    font-display: fallback;
  }

  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 700;
    src:
      url("./styles/fonts/NotoSansKR-Bold.otf") format("woff2"),
      url("./styles/fonts/NotoSansKR-Bold.otf") format("woff"),
      url("./styles/fonts/NotoSansKR-Bold.otf") format("truetype");
    font-display: fallback;
  }

  * {
    font-family: "Noto Sans KR", sans-serif;
  } */
`;
