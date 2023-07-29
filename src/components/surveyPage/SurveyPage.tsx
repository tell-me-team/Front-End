import React, { useState } from "react";
import { styled } from "styled-components";
import { surveyAllProgress } from "../../constants/surveyPageUtils";

interface ProgressGageBarStatusProps
  extends React.HTMLAttributes<HTMLDivElement> {
  status: number;
}

const SurveyPage = () => {
  const [surveyProgress, setSurveyProgress] = useState(surveyAllProgress[0]);
  const [answer, setAnswer] = useState<string[]>([]);
  const [backIcon, setBackIcon] = useState(false);

  const onAnswerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setAnswer((prev) => prev.concat(target.value));
    const index = surveyAllProgress.indexOf(surveyProgress) + 1;
    if (index > 0) {
      setBackIcon(true);
    }
    setSurveyProgress(surveyAllProgress[index]);
  };

  const onBackClick = () => {
    const index = surveyAllProgress.indexOf(surveyProgress) - 1;
    if (index === 0) {
      setBackIcon(false);
    }
    setSurveyProgress(surveyAllProgress[index]);
    setAnswer((prev) => prev.slice(0, index));
    console.log(answer);
  };

  return (
    <div>
      <div>{surveyProgress}/10</div>
      <SProgressGageBar />
      <SProgressGageBarStatus status={surveyProgress} />
      <div>
        {backIcon && <div onClick={onBackClick}> 뒤로가기 </div>}
        <div>icon image</div>
        <div>닫기</div>
      </div>

      <div>
        <p>질문 {surveyProgress}</p>
        <p>질문 영역</p>
      </div>
      <div>img</div>
      <div>
        <button onClick={onAnswerClick} value="선택1">
          선택1
        </button>
        <div>|</div>
        <button onClick={onAnswerClick} value="선택2">
          선택2
        </button>
      </div>
      <div>위티프로필 바로가기</div>
    </div>
  );
};

export default SurveyPage;

const SProgressGageBar = styled.div`
  width: 327px;
  height: 10px;
  background-color: #6f63e0;
  opacity: 0.2;
  border-radius: 100px;
`;

const SProgressGageBarStatus = styled.div<ProgressGageBarStatusProps>`
  position: relative;
  margin-top: -10px;
  width: ${(props) => props.status * 32.7}px;
  height: 10px;
  background-color: #6f63e0;
  border-radius: 100px;
  z-index: 1;
`;
