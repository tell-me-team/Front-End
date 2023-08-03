import { useEffect, useState } from "react";
import { surveyGetApi } from "../../api/surveyApi";
import movieBackground from "../../assets/movieBackground.svg";
import movieTicket from "../../assets/movieTicket.svg";
import { SExtraButton } from "../surveyPage/SurveyPageStyle";
import { SMovieTicket } from "./ResultPageStyle";

const ResultPage = () => {
  const [result, setResult] = useState([]);
  const fetchData = async () => {
    const response = await surveyGetApi();
    const newRes = response.slice(0, 1);
    setResult(newRes);
    console.log(newRes);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div style={{ width: "375px", height: "787px" }}>
      <img src={movieBackground} style={{ opacity: "0.3" }} />
      <SExtraButton style={{ marginTop: "-757px", marginLeft: "310px" }} />
      {result[0] && (
        <SMovieTicket>
          <div className="title">
            <h1>{result[0].id}</h1>
          </div>
          <div className="puzzles">퍼즐이미지</div>
          <div className="typeDetail">{result[0].title}</div>

          <img src={movieTicket} />
          <div className="share">
            <h3>'나를 어떻게 보고 있을까' 궁금한 사람에게,</h3>
            <h2>테스트 공유하기</h2>
          </div>
          <div className="link">
            <button>링크1</button>
          </div>
        </SMovieTicket>
      )}
    </div>
  );
};

export default ResultPage;
