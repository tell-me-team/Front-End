import KakaoLoginButton from "../components/mainPage/KakaoLoginButton";
import { styled } from "styled-components";

function MainPage() {
  return (
    <SLayout>
      <KakaoLoginButton />
    </SLayout>
  );
}

const SLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 24px 40px;
  background-image: url(/background/background_image_1.svg);
  background-repeat: no-repeat;
  background-size: cover;
`;

const GlassBox = styled.div`
  width: 100%;
`;

export default MainPage;
