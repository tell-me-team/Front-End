import { styled } from "styled-components";
import { accessTokenStorage } from "../../store/typedStorage";
import { useNavigate } from "react-router-dom";

const ProfileImage = () => {
  const loginStatus = accessTokenStorage.get();
  const navigate = useNavigate();

  const onKakaoLoginClick = () => {
    const CLIENT_ID = `${import.meta.env.VITE_KAKAO_API_KEY}`;
    const REDIRECT_URI = `${import.meta.env.VITE_KAKAO_REDIRECT_URI}`;
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoURL;
  };

  const onProfileClick = () => {
    navigate("/profile");
  };

  return <SProfileImage onClick={loginStatus === null ? onKakaoLoginClick : onProfileClick} />;
};

const SProfileImage = styled.div`
  width: 44px;
  height: 44px;
  background-color: #6f63e0;
  opacity: 0.2;
  border-radius: 50%;
  cursor: pointer;
`;

export default ProfileImage;
