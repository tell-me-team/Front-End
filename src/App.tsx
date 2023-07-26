import { useState } from "react";
import axios from "axios";

function App() {
  const [status, setStatus] = useState(false);

  const testApi = async () => {
    try {
      const response = await axios.get("https://tell-me.store/healthcheck");
      if (response.status === 200) {
        setStatus(true);
      } else {
        setStatus(false);
      }
    } catch (error) {
      console.error("API test failed:", error);
    }
  };

  return (
    <div>
      <button onClick={testApi}>API 테스트</button>
      <p>↓ 성공 여부 /기본 값은 실패이며, 성공시 성공으로 변경/</p>
      {status ? <p>성공</p> : <p>실패</p>}
    </div>
  );
}

export default App;
