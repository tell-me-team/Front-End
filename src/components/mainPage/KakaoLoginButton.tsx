import { styled } from "styled-components";
import { accessTokenStorage } from "../../store/typedStorage";
import { useNavigate } from "react-router-dom";

const KakaoLogin = () => {
  const loginStatus = accessTokenStorage.get();
  const navigate = useNavigate();

  const onKakaoLoginClick = () => {
    const CLIENT_ID = `${import.meta.env.VITE_KAKAO_API_KEY}`;
    const REDIRECT_URI = `${import.meta.env.VITE_KAKAO_REDIRECT_URI}`;
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoURL;
  };

  const onTestMakeClick = () => {
    navigate("/survey");
  };

  return <SButton onClick={loginStatus === null ? onKakaoLoginClick : onTestMakeClick}>테스트 만들기</SButton>;
};

const SButton = styled.button`
  width: 100%;
  height: 66px;
  border-radius: 16px;
  background-color: #6f63e0;
  border: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: 300;
  margin-top: 12px;
  cursor: pointer;
`;

export default KakaoLogin;
