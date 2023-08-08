import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { surveyAllProgress } from "../../constants/surveyPageUtils";
import { SExtraButton, SGagebarContainer, SIconImage, SLoadProfileButton, SProgressGageBar, SProgressGageBarStatus, SSurveyContainer } from "./SurveyPageStyle";
import SurveySection from "./SurveySection";
import qImage1 from "../../assets/질문01.svg";
import qImage2 from "../../assets/질문02.svg";
import qImage3 from "../../assets/질문03.svg";
import qImage4 from "../../assets/질문04.svg";
import qImage5 from "../../assets/질문05.svg";
import qImage6 from "../../assets/질문06.svg";
import qImage7 from "../../assets/질문07.svg";
import qImage8 from "../../assets/질문08.svg";
import qImage9 from "../../assets/질문09.svg";
import qImage10 from "../../assets/질문010.svg";
import { questionsCall } from "../../api/questionsCall";
import { postAnswer } from "../../api/postAnswer";

const SurveyPage = () => {
  const navigate = useNavigate();
  const [surveyProgress, setSurveyProgress] = useState(surveyAllProgress[0]);
  const [answer, setAnswer] = useState<string[]>([]);
  const [backIcon, setBackIcon] = useState(false);
  const [survey, setSurvey] = useState([]);
  const [questImage, setQuestionImage] = useState(qImage1);

  const onAnswerClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setAnswer((prev) => prev.concat(target.value));
    const index = surveyAllProgress.indexOf(surveyProgress) + 1;
    if (index > 0 && index <= 10) {
      setBackIcon(true);
      setQuestionImage(imagesArr[index]);
    }
    setSurveyProgress(surveyAllProgress[index]);
    if (index === 10) {
      setSurveyProgress(10);
      setQuestionImage(imagesArr[9]);

      const answerContentList = answer.map((answer, index) => ({
        question: index + 1,
        answer,
      }));

      answerContentList.push({
        question: 10,
        answer: "A",
      });

      const requestBody = {
        answerContentList: answerContentList,
      };

      try {
        console.log(requestBody);
        const result = await postAnswer(1, 1, requestBody);
        console.log(result); // check API response
        navigate("/result1");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const fetchData = async () => {
    const response = await questionsCall(1);
    setSurvey(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onBackClick = () => {
    const index = surveyAllProgress.indexOf(surveyProgress) - 1;
    if (index === 0) {
      setBackIcon(false);
      setQuestionImage(imagesArr[0]);
    }
    setSurveyProgress(surveyAllProgress[index]);
    setAnswer((prev) => prev.slice(0, index));
    setQuestionImage(imagesArr[index]);
    console.log(answer);
  };

  const imagesArr = [qImage1, qImage2, qImage3, qImage4, qImage5, qImage6, qImage7, qImage8, qImage9, qImage10];

  return (
    <div style={{ backgroundColor: "#F7F0FF", width: "375px", height: "787px" }}>
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
            marginTop: "-20px",
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
                <svg width="16" height="16" viewBox="0 0 16 19" fill="none" opacity="1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 1L1.53533 8.62998C0.859348 9.01304 0.85935 9.98696 1.53533 10.37L15 18" stroke="#6F63E0" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          ) : (
            <SExtraButton style={{ backgroundColor: "#F9F9FD" }} />
          )}

          <SIconImage />
          <div>
            <SExtraButton style={{ backgroundColor: "#9188EC", opacity: "0.08" }} />
          </div>
        </div>

        <SurveySection survey={survey} surveyProgress={surveyProgress} onAnswerClick={onAnswerClick} image={questImage} />
      </SSurveyContainer>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SLoadProfileButton style={{ marginTop: "-30px" }}>위티프로필 바로가기</SLoadProfileButton>
      </div>
    </div>
  );
};

export default SurveyPage;
