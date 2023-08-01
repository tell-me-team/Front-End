import { styled } from "styled-components";

import KakaoLoginButton from "../components/mainPage/KakaoLoginButton";
import ServiceIcon from "../components/common/ServiceIcon";

const TestStartPage = () => {
  return (
    <SLayout>
      <SProfileImage />
      <SGlassBox>
        <ServiceIcon />
        <STitleSpan>Tell ME</STitleSpan>
        <SSubTitleSpan>
          <b>내가 보는 나</b>와
        </SSubTitleSpan>
        <SSubTitleSpan>
          <b>다른 사람이 보는 나</b>는 얼마나 다를까?
        </SSubTitleSpan>
        <SSubTitleSpan>카카오톡 로그인하고 테스트 만들어봐요!</SSubTitleSpan>
        <STestImage />
        <hr />
        <KakaoLoginButton />
      </SGlassBox>
    </SLayout>
  );
};

const SLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 40px 24px;
  background-image: url(/background/background_image_2.svg);
  background-repeat: no-repeat;
  background-size: cover;
`;

const SProfileImage = styled.div`
  width: 44px;
  height: 44px;
  background-color: #6f63e0;
  opacity: 0.2;
  border-radius: 50%;
  margin-bottom: 40px;
`;

const SGlassBox = styled.div`
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(128, 128, 128, 0.3);
  background-blend-mode: luminosity;
  backdrop-filter: blur(50px);
  border-radius: 32px;
  padding: 0 24px;

  > hr {
    width: 100%;
    border: 0.5px solid white;
    margin-top: 18px;
    opacity: 0.2;
  }
`;

const STitleSpan = styled.span`
  font-size: 19px;
  font-weight: 700;
  color: #ffffff;
  margin-top: 16px;
  margin-bottom: 4px;
`;

const SSubTitleSpan = styled.span`
  font-size: 15px;
  color: #ffffff;
  line-height: 20px;
  letter-spacing: -1px;
  font-weight: 400;

  > b {
    font-weight: 600;
  }
`;

const STestImage = styled.div`
  width: 100%;
  min-height: 160px;
  background-color: white;
  border-radius: 23px;
  margin-top: 24px;
`;

export default TestStartPage;
