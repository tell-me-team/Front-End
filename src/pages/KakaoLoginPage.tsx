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
          navigate("/error");
        });
    } else {
      navigate("/error");
    }
  }, [navigate]);

  return (
    <div>
      <p>들렀다 가는 페이지입니다</p>
    </div>
  );
}

export default KakaoLoginPage;
