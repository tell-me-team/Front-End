import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { surveyGetApi } from "../../api/surveyApi";
import { puzzles } from "../../constants/surveyPageUtils";

interface Question {
  id: string;
  userId: string;
  img: string;
  title: string;
}

const PuzzlePage = () => {
  const [types, setTypes] = useState<Question[]>([]);
  // 모바일 화면일때 touchX 값 관리
  const [mouseDownClientX, setMouseDownClientX] = useState(0);
  const [mouseUpClientX, setMouseUpClientX] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const onMouseDown = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setMouseDownClientX(e.clientX);
  };

  const onMouseUp = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setMouseUpClientX(e.clientX);
    const dragSpaceX = Math.abs(mouseDownClientX - e.clientX);
    if (mouseDownClientX !== 0 && dragSpaceX > 100) {
      if (e.clientX < mouseDownClientX) {
        handleNextBtn();
      } else if (e.clientX > mouseDownClientX) {
        handlePrevBtn();
      }
    }
  };

  const handleNextBtn = () => {
    setActiveIndex((prevIndex) => Math.min(prevIndex + 1, types.length - 1));
  };

  const handlePrevBtn = () => {
    setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const fetchData = async () => {
    const response = await surveyGetApi();
    const newRes = response.slice(0, 6);
    setTypes(newRes);
    //console.log(newRes);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div
      style={{
        backgroundColor: "#F7F0FF",
        width: "375px",
      }}
    >
      <STypeContainer>
        <SProfile></SProfile>
        <div style={{ height: "100px", margin: "auto" }}>유형 검사</div>
      </STypeContainer>
      <STypesOutContainer>
        <STypesContainer
          style={{
            transform: `translateX(-${
              activeIndex * (mouseDownClientX - mouseUpClientX)
            }px)`,
          }}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
        >
          {types[0] &&
            types.map((type) => <SType key={type.id}>{type.id}</SType>)}
        </STypesContainer>
      </STypesOutContainer>
      <SPuzzlesContainer>
        {types.map((type, index) => (
          <SPuzzleContainer>
            {index % 2 === 0 ? (
              <>
                <div>
                  <div>{type.id}</div>
                  <SPuzzle1
                    dangerouslySetInnerHTML={{ __html: puzzles[index] }}
                  />
                </div>
                <div>{type.title}</div>
              </>
            ) : (
              <>
                <div>{type.title}</div>
                <div>
                  <div>{type.id}</div>
                  <SPuzzle2
                    dangerouslySetInnerHTML={{ __html: puzzles[index] }}
                  />
                </div>
              </>
            )}
          </SPuzzleContainer>
        ))}
      </SPuzzlesContainer>
    </div>
  );
};

export default PuzzlePage;

const SProfile = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background-color: red;
`;

const STypeContainer = styled.div`
  width: 327px;
  height: 100px;
  display: flex;
  text-align: center;
`;

const STypesContainer = styled.div`
  height: 92px;
  width: 2100px;
  display: flex;
`;

const STypesOutContainer = styled.div`
  width: 327px;
  margin: 36px 24px;
  overflow: hidden;
`;

const SType = styled.div`
  width: 265px;
  height: 92px;
  border-radius: 200px;
  background-color: #b0acd2;
  opacity: 0.25;
  margin-right: 24px;
  transition: transform 0.3s ease;
`;

const SPuzzlesContainer = styled.div`
  width: 327px;
`;

const SPuzzleContainer = styled.div`
  width: 327px;
  height: 181px;
  margin-top: 24px;
  display: flex;
`;

const SPuzzle1 = styled.div`
  height: 181px;
  margin-top: 0 auto;
  margin-left: 25px;
  z-index: 1;
`;

const SPuzzle2 = styled.div`
  height: 181px;
  margin-top: 0 auto;
  margin-left: 154px;
  z-index: 1;
`;
