import React, { useState } from "react";
import { surveyAllProgress } from "../constants/surveyPageUtils";

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
      <div></div>
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
