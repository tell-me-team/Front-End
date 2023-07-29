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
      <div>
        <div
          style={{
            marginTop: "8px",
            marginBottom: "8px",
            marginLeft: "90%",
            color: "#A299F3",
          }}
        >
          {surveyProgress}/10
        </div>
        <SProgressGageBar />
        <SProgressGageBarStatus status={surveyProgress} />
      </div>
      <div style={{ margin: "30px 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {backIcon && (
            <div onClick={onBackClick}>
              <SExtraButton />
              <div
                style={{
                  position: "relative",
                  marginTop: "-32px",
                  marginLeft: "12px",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 19"
                  fill="none"
                  opacity="1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 1L1.53533 8.62998C0.859348 9.01304 0.85935 9.98696 1.53533 10.37L15 18"
                    stroke="#6F63E0"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          )}

          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "100px",
              backgroundColor: "skyblue",
              margin: "0 auto",
            }}
          ></div>
          <div>
            <SExtraButton
              style={{ backgroundColor: "#9188EC", opacity: "0.08" }}
            />
          </div>
        </div>

        <div>
          <p>질문 {surveyProgress}</p>
          <p>질문 영역</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "272px",
              height: "258px",
              borderRadius: "20px",
              backgroundColor: "skyblue",
            }}
          >
            img
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px",
          }}
        >
          <SSelectAnswerButton onClick={onAnswerClick} value="선택1">
            선택1
          </SSelectAnswerButton>
          <div>|</div>
          <SSelectAnswerButton onClick={onAnswerClick} value="선택2">
            선택2
          </SSelectAnswerButton>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>위티프로필 바로가기</div>
      </div>
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

const SExtraButton = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 100px;
  background-color: #6f63e0;
  opacity: 0.2;
`;

const SSelectAnswerButton = styled.button`
  margin: 0 10px;
`;
