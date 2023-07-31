import React, { useEffect, useState } from "react";
import { surveyGetApi } from "../../api/surveyApi";

import { surveyAllProgress } from "../../constants/surveyPageUtils";
import {
  SExtraButton,
  SGagebarContainer,
  SIconImage,
  SLoadProfileButton,
  SProgressGageBar,
  SProgressGageBarStatus,
  SSurveyContainer,
} from "./SurveyPageStyle";
import SurveySection from "./SurveySection";

const SurveyPage = () => {
  const [surveyProgress, setSurveyProgress] = useState(surveyAllProgress[0]);
  const [answer, setAnswer] = useState<string[]>([]);
  const [backIcon, setBackIcon] = useState(false);
  const [survey, setSurvey] = useState([]);
  const onAnswerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setAnswer((prev) => prev.concat(target.value));
    const index = surveyAllProgress.indexOf(surveyProgress) + 1;
    if (index > 0 && index <= 10) {
      setBackIcon(true);
    }
    setSurveyProgress(surveyAllProgress[index]);
    if (index === 10) {
      setSurveyProgress(10);
    }
    console.log(surveyProgress);
  };

  const fetchData = async () => {
    const response = await surveyGetApi();
    const newRes = response.slice(0, 10);
    setSurvey(newRes);
    console.log(newRes);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
    <div
      style={{ backgroundColor: "#F7F0FF", width: "375px", height: "787px" }}
    >
      <div>
        <SGagebarContainer>{surveyProgress}/10</SGagebarContainer>

        <SProgressGageBar />
        <SProgressGageBarStatus status={surveyProgress} />
      </div>
      <SSurveyContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "-50px",
          }}
        >
          {backIcon ? (
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
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          ) : (
            <SExtraButton style={{ backgroundColor: "#F9F9FD" }} />
          )}

          <SIconImage />
          <div>
            <SExtraButton
              style={{ backgroundColor: "#9188EC", opacity: "0.08" }}
            />
          </div>
        </div>

        <SurveySection
          survey={survey}
          surveyProgress={surveyProgress}
          onAnswerClick={onAnswerClick}
        />
      </SSurveyContainer>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SLoadProfileButton style={{ marginTop: "-70px" }}>
          위티프로필 바로가기
        </SLoadProfileButton>
      </div>
    </div>
  );
};

export default SurveyPage;
