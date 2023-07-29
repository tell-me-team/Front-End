const KakaoLogin = () => {
  const onKakaoLoginClick = () => {
    const CLIENT_ID = `${import.meta.env.VITE_KAKAO_API_KEY}`;
    const REDIRECT_URI = `${import.meta.env.VITE_KAKAO_REDIRECT_URI}`;
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoURL;
  };

  return <button onClick={onKakaoLoginClick}>카카오 로그인</button>;
};

export default KakaoLogin;
