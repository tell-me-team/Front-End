import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

@font-face {
    font-family: "Noto Sans KR";
    font-weight: 300;
    src:
      url("./fonts/NotoSansKR-Light.otf") format("woff2"),
      url("./fonts/NotoSansKR-Light.otf") format("woff"),
      url("./fonts/NotoSansKR-Light.otf") format("truetype");
    font-display: fallback;
  }

  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 400;
    src:
      url("./fonts/NotoSansKR-Regular.otf") format("woff2"),
      url("./fonts/NotoSansKR-Regular.otf") format("woff"),
      url("./fonts/NotoSansKR-Regular.otf") format("truetype");
    font-display: fallback;
  }

  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 500;
    src:
      url("./fonts/NotoSansKR-Medium.otf") format("woff2"),
      url("./fonts/NotoSansKR-Medium.otf") format("woff"),
      url("./fonts/NotoSansKR-Medium.otf") format("truetype");
    font-display: fallback;
  }

  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 700;
    src:
      url("./fonts/NotoSansKR-Bold.otf") format("woff2"),
      url("./fonts/NotoSansKR-Bold.otf") format("woff"),
      url("./fonts/NotoSansKR-Bold.otf") format("truetype");
    font-display: fallback;
  }
`;

export default GlobalStyle;
