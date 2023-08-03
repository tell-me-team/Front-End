import { useEffect, useState } from "react";
import { surveyGetApi } from "../../api/surveyApi";
import puzzles from "../../assets/puzzles.svg";
import {
  SProfile,
  SPuzzleContainer,
  SPuzzlesContainer,
  STypeContainer,
} from "./PuzzlePageStyle";
interface Question {
  id: string;
  userId: string;
  img: string;
  title: string;
}
const PuzzlesPage = () => {
  const [types, setTypes] = useState<Question[]>([]);

  const fetchData = async () => {
    const response = await surveyGetApi();
    const newRes = response.slice(0, 6);
    setTypes(newRes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{ backgroundColor: "#F7F0FF", width: "375px", height: "1400px" }}
    >
      <STypeContainer>
        <SProfile></SProfile>
        <div style={{ marginTop: "16px" }}>
          <p style={{ width: "207px", fontSize: "22px" }}>
            <strong style={{ color: "#6F63E0", fontSize: "22px" }}>
              헤르미온느 유형
            </strong>
            을 가진, 사용자님을 소개합니다.
          </p>
        </div>
      </STypeContainer>
      <img src={puzzles} style={{ margin: "0 24px" }} />
      <SPuzzlesContainer>
        {types.map((type, index) =>
          index % 2 === 0 ? (
            <SPuzzleContainer key={type.id}>
              <p style={{ marginLeft: "100px", width: "50%" }}>{type.id}</p>
              <p style={{ marginLeft: "120px" }}>{type.title}</p>
            </SPuzzleContainer>
          ) : (
            <SPuzzleContainer key={type.id}>
              <p style={{ marginLeft: "30px", width: "50%" }}>{type.title}</p>
              <p style={{ marginLeft: "70px" }}>{type.id}</p>
            </SPuzzleContainer>
          )
        )}
      </SPuzzlesContainer>
    </div>
  );
};

export default PuzzlesPage;
