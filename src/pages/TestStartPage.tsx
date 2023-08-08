import { useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

import ServiceIcon from "../components/common/ServiceIcon";
import { decodeShortUrl } from "../api/decodeShortUrl";

function MainPage() {
  const navigate = useNavigate();
  const params = useParams();

  // TODO: 아래 값 전역으로 저장할 지 로컬 스토리지에 저장할 지 고민
  console.log(params.shortUrl);

  useEffect(() => {
    decodeShortUrl(params.shortUrl);
  }, []);

  const onTestClick = () => {
    navigate("/survey");
  };

  const onWityClick = () => {
    window.location.href = "https://www.wity.im/";
  };

  const onMainMove = () => {
    navigate("/");
  };

  return (
    <SLayout>
      <SGlassBox>
        <SServiceIcon />
        <STitleSpan>Tell ME</STitleSpan>
        <SSubTitleSpan>나에 대해 알려줘!</SSubTitleSpan>
        <STestImage />
        <hr />
        <SButton onClick={onTestClick}>테스트 시작하기</SButton>
      </SGlassBox>
      <SPBox>
        <SCounterP>
          지금까지 <HighlightText>30명이</HighlightText>
        </SCounterP>
        <SCounterP>
          <HighlightText>00님의 설문</HighlightText>에 참여했습니다.
        </SCounterP>
      </SPBox>
      <SFrameBox onClick={onMainMove}>
        <span>테스트 만들기</span>
        <p>타인이 보는 내가 궁금하다면 ?</p>
      </SFrameBox>
      <SFrameBox onClick={onWityClick}>
        <span>위티 프로필 보러가기</span>
        <p>00님을 자세히 알고 싶다면 ?</p>
      </SFrameBox>
    </SLayout>
  );
}

const SLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 48px);
  padding: 24px 40px;
  background-image: url(/background/background_image_1.svg);
  background-repeat: no-repeat;
  background-size: cover;
`;

const SServiceIcon = styled(ServiceIcon)`
  margin-top: 20px;
`;

const SCounterP = styled.p`
  text-align: center;
  font-size: 22px;
  line-height: 1.5;
`;

const SGlassBox = styled.div`
  height: 395px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
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
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin-top: 16px;
`;

const SSubTitleSpan = styled.span`
  font-size: 15px;
  color: #ffffff;
  margin-top: 8px;
`;

const STestImage = styled.div`
  width: 100%;
  min-height: 130px;
  border-radius: 23px;
  margin-top: 24px;
  background-image: url(/banner/test_banner.svg);
  background-repeat: no-repeat;
  background-size: cover;
`;

const SButton = styled.button`
  width: 100%;
  height: 52px;
  border-radius: 16px;
  background-color: #6f63e0;
  border: none;
  color: #ffffff;
  font-size: 18px;
  margin-top: 8px;
  cursor: pointer;
`;

const HighlightText = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #6f63e0;
`;

const SPBox = styled.div`
  margin: 24px 0;
`;

const SFrameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: rgba(111, 99, 224, 0.5);
  border-radius: 200px;
  margin-bottom: 24px;
  cursor: pointer;

  > span {
    color: #343434;
    font-size: 17px;
    font-weight: bold;
    letter-spacing: -1px;
    line-height: 1.5;
  }

  > p {
    color: #ffffff;
    font-size: 15px;
    font-weight: 300;
  }
`;

export default MainPage;
