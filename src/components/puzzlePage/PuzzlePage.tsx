import React, { useEffect, useState } from "react";
import { surveyGetApi } from "../../api/surveyApi";
import { puzzles } from "../../constants/surveyPageUtils";
import {
  SProfile,
  SPuzzle1,
  SPuzzle2,
  SPuzzleContainer,
  SPuzzlesContainer,
  SType,
  STypeContainer,
  STypesContainer,
  STypesOutContainer,
} from "./PuzzlePageStyle";

interface Question {
  id: string;
  userId: string;
  img: string;
  title: string;
}

const PuzzlePage = () => {
  const [types, setTypes] = useState<Question[]>([]);
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
        <div>
          <p>유형 검사</p>
        </div>
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
          <SPuzzleContainer key={type.id}>
            {index % 2 === 0 ? (
              <>
                <div>
                  <div className="types">{type.id}</div>
                  {index === 4 ? (
                    <SPuzzle1
                      style={{ marginTop: "60px" }}
                      dangerouslySetInnerHTML={{ __html: puzzles[index] }}
                    />
                  ) : (
                    <SPuzzle1
                      dangerouslySetInnerHTML={{ __html: puzzles[index] }}
                    />
                  )}
                </div>
                <div className="detail" style={{ marginLeft: "200px" }}>
                  {type.title}
                </div>
              </>
            ) : (
              <>
                <div className="detail" style={{ marginLeft: "20px" }}>
                  {type.title}
                </div>
                <div>
                  <div className="types">{type.id}</div>
                  {index === 3 ? (
                    <SPuzzle2
                      style={{ marginTop: "60px" }}
                      dangerouslySetInnerHTML={{ __html: puzzles[index] }}
                    />
                  ) : (
                    <SPuzzle2
                      dangerouslySetInnerHTML={{ __html: puzzles[index] }}
                    />
                  )}
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
