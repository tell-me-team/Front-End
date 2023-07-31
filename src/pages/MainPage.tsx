import KakaoLoginButton from "../components/mainPage/KakaoLoginButton";
import { styled } from "styled-components";

function MainPage() {
  return (
    <SLayout>
      <GlassBox>
        <ServiceIcon />
      </GlassBox>
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
  min-height: 395px;
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.15);
  background-blend-mode: luminosity;
  backdrop-filter: blur(50px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 32px;
`;

const ServiceIcon = styled.div`
  width: 52px;
  height: 52px;
  margin-top: 20px;
  background-color: #6f63e0;
  border-radius: 50%;
`;

export default MainPage;
