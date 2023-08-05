import { styled } from "styled-components";

const KakaoLogin = () => {
  const onKakaoLoginClick = () => {
    const CLIENT_ID = `${import.meta.env.VITE_KAKAO_API_KEY}`;
    const REDIRECT_URI = `${import.meta.env.VITE_KAKAO_REDIRECT_URI}`;
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoURL;
  };

  return <SButton onClick={onKakaoLoginClick}>테스트 만들기</SButton>;
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
