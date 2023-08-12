import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import { callQuestions } from "../api/callQuestions";
import { postAnswer } from "../api/postAnswer";

import { useRecoilState } from "recoil";
import { userIdState } from "../store/atoms";

import SurveySection from "../components/surveyPage/SurveySection";
import Loading from "../components/common/Loading";

const SurveyPage = () => {
  const navigate = useNavigate();

  const [userId] = useRecoilState(userIdState);

  const [surveyProgress, setSurveyProgress] = useState(1);
  const [questions, setQuestions] = useState<string[][]>([]);
  const [, setAnswers] = useState(Array(10).fill(null));

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const fetchedQuestions = await callQuestions(1);
        setQuestions(fetchedQuestions);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswer = (choice: string) => {
    setAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[surveyProgress - 1] = choice;

      if (surveyProgress < 10) {
        setSurveyProgress((prev) => prev + 1);
      }
      // 10번째 질문에 대한 답변이 업데이트된 후 실행됩니다.
      if (surveyProgress === 10) {
        const transformedAnswers = {
          answerContentList: updatedAnswers.map((answer, index) => ({
            question: index + 1,
            answer,
          })),
        };

        postAnswer(1, userId, transformedAnswers);
        navigate("/result");
      }

      return updatedAnswers;
    });
  };

  const handlePreviousQuestion = () => {
    if (surveyProgress === 1) {
      navigate("/");
    }

    if (surveyProgress > 1) setSurveyProgress((prev) => prev - 1);
  };

  if (!questions.length) {
    return <Loading />;
  }

  return (
    <SLayout>
      <SGagebarContainer>{surveyProgress}/10</SGagebarContainer>
      <SProgressGageBar>
        <SProgressGageBarStatus $status={surveyProgress} />
      </SProgressGageBar>
      <SurveySection onAnswer={handleAnswer} onPreviousQuestion={handlePreviousQuestion} surveyProgress={surveyProgress} question={questions} />
    </SLayout>
  );
};

const SLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 48px);
  padding: 24px 40px;
  background-color: #f7f0ff;
  background-repeat: no-repeat;
  background-size: cover;
`;

const SGagebarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #a299f3;
`;

const SProgressGageBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: rgba(111, 99, 224, 0.2);
  border-radius: 100px;
  margin-top: 12px;
`;

interface ProgressProps {
  $status: number;
}

const SProgressGageBarStatus = styled.div<ProgressProps>`
  width: ${(props) => props.$status * 29.5}px;
  height: 10px;
  background-color: #6f63e0;
  border-radius: 100px;
`;

export default SurveyPage;
