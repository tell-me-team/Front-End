import React from "react";
import { SSelectAnswerButton } from "./SurveyPageStyle";

interface Question {
  id: string;
  userId: string;
  img: string;
  title: string;
}

interface Props {
  survey: Question[];
  surveyProgress: number;
  onAnswerClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SurveySection: React.FC<Props> = ({
  survey,
  surveyProgress,
  onAnswerClick,
}: Props) => {
  return (
    survey[0] && (
      <>
        <div style={{ margin: "30px 0" }}>
          <p style={{ marginBottom: "12px", color: "#6F63E0" }}>
            질문 {surveyProgress}
          </p>
          <p style={{ marginBottom: "30px", color: "#545454" }}>
            {survey[surveyProgress - 1].title}
          </p>
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
              img
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px 20px 0 20px",
            }}
          >
            <SSelectAnswerButton
              onClick={onAnswerClick}
              value={survey[surveyProgress - 1].userId}
            >
              {survey[surveyProgress - 1].userId}
            </SSelectAnswerButton>

            <SSelectAnswerButton
              style={{ borderLeft: "2px solid #6F63E0" }}
              onClick={onAnswerClick}
              value={survey[surveyProgress - 1].id}
            >
              {survey[surveyProgress - 1].id}질문 답변
            </SSelectAnswerButton>
          </div>
        </div>
      </>
    )
  );
};

export default SurveySection;
