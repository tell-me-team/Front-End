import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import { useRecoilState } from "recoil";
import { othersState } from "../store/atoms";

import ServiceIcon from "../components/common/ServiceIcon";
import ProfileImage from "../components/common/ProfileImage";

const TestStartPage = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [others] = useRecoilState(othersState);
  const navigate = useNavigate();

  const onButtonClick = () => {
    if (buttonRef.current) {
      const buttonText = buttonRef.current.textContent;
      if (buttonText) {
        navigator.clipboard.writeText(buttonText);
      }
    }
  };

  const onMainMove = () => {
    navigate("/");
  };

  const onProfileMove = () => {
    navigate("/profile");
  };

  return (
    <SLayout>
      <ProfileImage />
      <SResultBox>
        <h2>잭 스페로우</h2>
        <SKeywordBox>
          <span>모험심</span>
          <span>자유로움</span>
          <span>반항적</span>
        </SKeywordBox>
        <p>
          잭 스패로우는 독특한 성격을 지닌 자유로운 영혼의 캐릭터에요. 자신의 규칙에 따라 살고자 하며, 권위와 규칙에 대한 반항적이에요. 전통적인 규칙과 기존의
          질서를 거부하고, 자신만의 방식으로 사는 것을 선호하죠. 불가사의한 상황에서도 유머와 센스로 주변 사람들과 우호적인 관계를 형성하며, 신뢰를 쌓는
          독특하고 마력적인 캐릭터에요.
        </p>

        {others ? (
          <>
            <STestButton onClick={onMainMove}>
              <ServiceIcon />
              <span>테스트 만들기</span>
              <span>타인이 보는 내가 궁금하다면?</span>
            </STestButton>
            <SBox onClick={onProfileMove}>
              <div>만든 사람 프로필 보기</div>
            </SBox>
          </>
        ) : (
          <>
            <span>'나를 어떻게 보고 있을까' 궁금한 사람에게</span>
            <h3>테스트 공유하기</h3>
            <SButton ref={buttonRef} onClick={onButtonClick}>
              https://tell-me.store/WQs==
            </SButton>
          </>
        )}
      </SResultBox>
    </SLayout>
  );
};

const SLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: 40px 24px;
  background-color: #d4d0f6;
`;

const SResultBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 800px;
  background-image: url(/result/result_ticket.svg);
  padding: 0 24px;

  > h2 {
    color: white;
    font-size: 40px;
    margin-top: 100px;
  }

  > p {
    font-size: 16px;
    font-weight: 300;
    line-height: 25px;
    color: white;
    margin: 24px 0;
  }

  > span {
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
    color: white;
    margin: 10px 0;
  }

  > h3 {
    font-size: 22px;
    color: white;
    font-weight: 600;
  }
`;

const SKeywordBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 255px;
  height: 50px;
  background-image: url(/result/result_keyword.svg);
  background-repeat: no-repeat;
  margin-top: 20px;

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.3%;
    color: white;
  }
`;

const SButton = styled.button`
  display: flex;
  border: none;
  box-shadow: none;
  color: white;
  font-size: 18px;
  padding: 5px 10px;
  margin: 20px 0;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 100px;
  cursor: pointer;
`;

const STestButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 32px;
  padding: 30px 0;
  background: rgba(255, 255, 255, 0.15);
  background-blend-mode: luminosity;
  backdrop-filter: blur(50px);
  border: none;
  cursor: pointer;

  > span {
    color: #ffffff;
    line-height: 20px;
    font-size: 19px;
    font-weight: 700;
    margin-top: 10px;

    &:last-child {
      font-size: 15px;
      font-weight: 300;
    }
  }
`;

const SBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 94%;
  height: 48px;
  padding: 6px 9px;
  gap: 15px;
  border-radius: 100px;

  margin: 32px 0;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%), rgba(0, 0, 0, 0.1);
  box-shadow:
    1px 1.5px 4px 0px rgba(0, 0, 0, 0.1) inset,
    1px 1.5px 4px 0px rgba(0, 0, 0, 0.08) inset,
    0px -0.5px 1px 0px rgba(255, 255, 255, 0.25) inset,
    0px -0.5px 1px 0px rgba(255, 255, 255, 0.3) inset;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 43px;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -1px;
    cursor: pointer;

    &:last-child {
      color: #ffffff;
      border-radius: 100px;
      background: rgba(176, 172, 210, 1);
      box-shadow:
        -1.2666666507720947px 1.2666666507720947px 1.2666666507720947px 0px rgba(255, 255, 255, 0.35) inset,
        1.2666666507720947px -1.2666666507720947px 1.2666666507720947px 0px rgba(148, 144, 176, 0.35) inset;
      backdrop-filter: blur(8.613333702087402px);
    }
  }
`;

export default TestStartPage;
