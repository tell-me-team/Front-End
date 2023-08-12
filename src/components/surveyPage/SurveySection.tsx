import styled from "styled-components";
import SurveyIconBox from "./SurveyIconBox";

interface SurveySectionProps {
  onPreviousQuestion: () => void;
  onAnswer: (choice: string) => void;
  surveyProgress: number;
  question: string[][];
}

const SurveySection: React.FC<SurveySectionProps> = ({ onPreviousQuestion, onAnswer, surveyProgress, question }) => {
  return (
    <SQuestionContainer>
      <SurveyIconBox onPreviousQuestion={onPreviousQuestion} />
      <SQuestionBox>
        <span>질문 {surveyProgress}.</span>
        <p>{question[surveyProgress - 1][0]}</p>
      </SQuestionBox>
      <SQuestionImageBox>
        <img src={`./survey/question_${surveyProgress}.svg`} />
      </SQuestionImageBox>
      <SAnswerBox>
        <button onClick={() => onAnswer("A")}>{question[surveyProgress - 1][1]}</button>
        <hr />
        <button onClick={() => onAnswer("B")}>{question[surveyProgress - 1][2]}</button>
      </SAnswerBox>
    </SQuestionContainer>
  );
};

const SQuestionContainer = styled.div`
  height: 100%;
  margin-top: 20px;
  background-color: #f9f9fd;
  opacity: 0.7;
  border-radius: 30px;
  padding: 0 28px 20px 28px;
`;

const SQuestionBox = styled.div`
  margin-top: 24px;

  span {
    font-size: 15px;
    color: #6f63e0;
  }

  p {
    margin-top: 12px;
    font-size: 17px;
    letter-spacing: -1px;
    line-height: 20px;
    color: #545454;
  }
`;

const SQuestionImageBox = styled.div`
  height: 226px;
  border-radius: 20px;
  margin-top: 44px;
`;

const SAnswerBox = styled.div`
  display: flex;
  margin: 24px 0;

  button {
    width: 49%;
    color: #6f63e0;
    font-size: 18px;
    font-weight: 700;
    background: inherit;
    border: none;
    word-break: keep-all;
    padding: 0;
    cursor: pointer;
  }

  button:first-child {
    padding-right: 12px;
  }

  button:last-child {
    padding-left: 12px;
  }

  hr {
    width: 1px;
    background-color: #6f63e0;
  }
`;

export default SurveySection;
