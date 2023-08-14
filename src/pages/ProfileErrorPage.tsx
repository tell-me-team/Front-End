import { styled } from "styled-components";
import ServiceIcon from "../components/common/ServiceIcon";
import { useNavigate } from "react-router-dom";

const ProfileErrorPage = () => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate("/");
  };

  return (
    <SLayout>
      <SGlassBox>
        <ServiceIcon />
        <STitleSpan>Tell ME</STitleSpan>
        <SSubTitleSpan>다른 사람이 설문을 진행해줘야</SSubTitleSpan>
        <SSubTitleSpan>프로필을 확인할 수 있어요!</SSubTitleSpan>
        <SButton onClick={onButtonClick}>메인으로 이동하기</SButton>
      </SGlassBox>
    </SLayout>
  );
};

const SLayout = styled.div`
  display: flex;
  align-items: center;
  max-width: 375px;
  margin: 0 auto;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: 40px 24px;
  background-image: url(/background/background_image_3.svg);
  background-repeat: no-repeat;
  background-size: cover;
`;

const SGlassBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(128, 128, 128, 0.3);
  background-blend-mode: luminosity;
  backdrop-filter: blur(50px);
  border-radius: 32px;
  padding: 20px 24px;
  margin-top: 40px;
`;

const STitleSpan = styled.span`
  font-size: 19px;
  font-weight: 700;
  color: #ffffff;
  margin-top: 16px;
  margin-bottom: 20px;
`;

const SSubTitleSpan = styled.span`
  font-size: 15px;
  color: #ffffff;
  line-height: 20px;
  letter-spacing: -1px;
  font-weight: 600;
`;

const SButton = styled.button`
  width: 100%;
  height: 52px;
  border-radius: 16px;
  background-color: #6f63e0;
  border: none;
  color: #ffffff;
  font-size: 18px;
  margin-top: 20px;
  cursor: pointer;
`;

export default ProfileErrorPage;
