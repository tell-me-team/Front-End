import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { socialLogin } from "../api/socialLogin";

import { useRecoilState } from "recoil";
import { userIdState, userPictureState } from "../store/atoms";
import { accessTokenStorage, refreshTokenStorage } from "../store/typedStorage";

import Loading from "../components/common/Loading";

function KakaoLoginPage() {
  const navigate = useNavigate();

  const [, serUserId] = useRecoilState(userIdState);
  const [, setUserPictureState] = useRecoilState(userPictureState);

  useEffect(() => {
    const code = new URL(document.location.toString()).searchParams.get("code");
    if (typeof code === "string") {
      socialLogin(code)
        .then(({ accessToken, refreshToken, userId, userPicture }) => {
          accessTokenStorage.set(accessToken);
          refreshTokenStorage.set(refreshToken);
          serUserId(userId);
          setUserPictureState(userPicture);
          navigate("/");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [navigate]);

  return (
    <SLayout>
      <Loading />
    </SLayout>
  );
}

const SLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 80px);
`;

export default KakaoLoginPage;
