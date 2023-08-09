import { useRef } from "react";
import { styled } from "styled-components";
import ProfileImage from "../components/common/ProfileImage";

const TestStartPage = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onButtonClick = () => {
    if (buttonRef.current) {
      const buttonText = buttonRef.current.textContent;
      if (buttonText) {
        navigator.clipboard.writeText(buttonText);
      }
    }
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

        <span>'나를 어떻게 보고 있을까' 궁금한 사람에게</span>
        <h3>테스트 공유하기</h3>
        <SButton ref={buttonRef} onClick={onButtonClick}>
          https://tell-me.store/WQs==
        </SButton>
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
  height: 650px;
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

export default TestStartPage;
