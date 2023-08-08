import React from "react";
import { SSelectAnswerButton } from "./SurveyPageStyle";

interface Props {
  survey: string[][];
  surveyProgress: number;
  onAnswerClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  image: string;
}

const SurveySection: React.FC<Props> = ({ survey, surveyProgress, onAnswerClick, image }: Props) => {
  return (
    survey[0] && (
      <>
        <div style={{ margin: "30px 0" }}>
          <p style={{ marginBottom: "12px", color: "#6F63E0" }}>질문 {surveyProgress}</p>
          <p style={{ marginBottom: "30px", color: "#545454" }}>{survey[surveyProgress - 1][0]}</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "272px",
                height: "258px",
                borderRadius: "20px",
                backgroundColor: "skyblue",
                marginBottom: "30px",
              }}
            >
              <img src={image} alt="question" />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px 20px 0 20px",
            }}
          >
            <SSelectAnswerButton onClick={onAnswerClick} value="A">
              {survey[surveyProgress - 1][1]}
            </SSelectAnswerButton>

            <SSelectAnswerButton style={{ borderLeft: "2px solid #6F63E0" }} onClick={onAnswerClick} value="B">
              {survey[surveyProgress - 1][2]}
            </SSelectAnswerButton>
          </div>
        </div>
      </>
    )
  );
};

export default SurveySection;
