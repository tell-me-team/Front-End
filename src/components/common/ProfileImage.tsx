import { styled } from "styled-components";
import { accessTokenStorage } from "../../store/typedStorage";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userPictureState } from "../../store/atoms";

const ProfileImage = () => {
  const loginStatus = accessTokenStorage.get();
  const navigate = useNavigate();
  const [userPicture] = useRecoilState(userPictureState);
  console.log(userPicture);

  const onKakaoLoginClick = () => {
    const CLIENT_ID = `${import.meta.env.VITE_KAKAO_API_KEY}`;
    const REDIRECT_URI = `${import.meta.env.VITE_KAKAO_REDIRECT_URI}`;
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoURL;
  };

  const onProfileClick = () => {
    navigate("/profile");
  };

  return <SProfileImage onClick={loginStatus === null ? onKakaoLoginClick : onProfileClick} imageUrl={userPicture || undefined} />;
};

interface SProfileImageProps {
  imageUrl?: string;
}

const SProfileImage = styled.div<SProfileImageProps>`
  width: 44px;
  height: 44px;
  background: ${(props) => (props.imageUrl ? `url(${props.imageUrl}) center / cover` : "#6f63e0")};
  border-radius: 50%;
  cursor: pointer;
`;

export default ProfileImage;
