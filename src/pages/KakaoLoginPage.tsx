import { useEffect } from "react";

function KakaoLoginPage() {
  useEffect(() => {
    const code = new URL(document.location.toString()).searchParams.get("code");
    console.log(code);
  }, []);

  return (
    <div>
      <p>들렀다 가는 페이지입니다</p>
    </div>
  );
}

export default KakaoLoginPage;
