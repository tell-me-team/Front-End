import styled, { keyframes } from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { socialLogin } from "../api/socialLogin";
import { accessTokenStorage, refreshTokenStorage } from "../store/typedStorage";

function KakaoLoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(document.location.toString()).searchParams.get("code");
    if (typeof code === "string") {
      socialLogin(code)
        .then(({ accessToken, refreshToken }) => {
          accessTokenStorage.set(accessToken);
          refreshTokenStorage.set(refreshToken);
          navigate("/");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [navigate]);

  return (
    <SLayout>
      <StyledSpinner />
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

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const StyledSpinner = styled.div`
  border: 16px solid #f3f3f3; // Light grey
  border-top: 16px solid #3498db; // Blue
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;

export default KakaoLoginPage;
