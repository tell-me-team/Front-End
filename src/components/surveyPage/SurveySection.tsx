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
          <p>질문 {surveyProgress}</p>
          <p>{survey[surveyProgress - 1].title}</p>
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
            <SSelectAnswerButton
              onClick={onAnswerClick}
              value={survey[surveyProgress - 1].userId}
            >
              {survey[surveyProgress - 1].userId}
            </SSelectAnswerButton>
            <div>|</div>
            <SSelectAnswerButton
              onClick={onAnswerClick}
              value={survey[surveyProgress - 1].id}
            >
              {survey[surveyProgress - 1].id}
            </SSelectAnswerButton>
          </div>
        </div>
      </>
    )
  );
};

export default SurveySection;
