import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useRecoilState } from "recoil";
import { userIdState, userPictureState } from "../store/atoms";
import { callResultMyself } from "../api/callResultMyself";
import BackIcon from "../components/common/BackIcon";

interface Profile {
  nickname: string;
  selfKeywords: { title: string }[];
  feedBackKeywords: { title: string }[];
  surveyCompletionWithAnswers: any[];
  type: string;
}

const StatisticsPage = () => {
  const [userPicture] = useRecoilState(userPictureState);
  const [userId] = useRecoilState(userIdState);
  const [profile, setProfile] = useState<Profile>();

  useEffect(() => {
    callResultMyself(userId, 1)
      .then((response) => {
        setProfile(response?.data.data);
      })
      .catch((error) => {
        console.error("Error posting answer:", error);
      });
  }, []);

  return (
    <SLayout>
      <BackIcon />
      <SProfile>
        <SProfileImage imageUrl={userPicture || undefined} />
        <div>
          <span>
            <SPurpleText>{profile?.type} 유형</SPurpleText>의
          </span>
          <span>{profile?.nickname}님을 소개합니다.</span>
        </div>
      </SProfile>
      <SPuzzle>
        <div>
          <span>{profile?.selfKeywords[0].title}</span>
          <div>
            <p>{profile?.surveyCompletionWithAnswers[0].question}</p>
            <p>
              나 : <SPurpleText>{profile?.surveyCompletionWithAnswers[0].answerToMe}</SPurpleText>
            </p>
            <p>
              타인 : <SPurpleText>{profile?.surveyCompletionWithAnswers[0].answerToOther}</SPurpleText>
            </p>
          </div>
          <div>
            <p>{profile?.surveyCompletionWithAnswers[1].question}</p>
            <p>
              나 : <SPurpleText>{profile?.surveyCompletionWithAnswers[1].answerToMe}</SPurpleText>
            </p>
            <p>
              타인 : <SPurpleText>{profile?.surveyCompletionWithAnswers[1].answerToOther}</SPurpleText>
            </p>
          </div>
          <span>{profile?.selfKeywords[1].title}</span>
          <span>{profile?.selfKeywords[2].title}</span>
          <div>
            <p>{profile?.surveyCompletionWithAnswers[2].question}</p>
            <p>
              나 : <SPurpleText>{profile?.surveyCompletionWithAnswers[2].answerToMe}</SPurpleText>
            </p>
            <p>
              타인 : <SPurpleText>{profile?.surveyCompletionWithAnswers[2].answerToOther}</SPurpleText>
            </p>
          </div>
          <div>
            <p>{profile?.surveyCompletionWithAnswers[3].question}</p>
            <p>
              나 : <SPurpleText>{profile?.surveyCompletionWithAnswers[3].answerToMe}</SPurpleText>
            </p>
            <p>
              타인 : <SPurpleText>{profile?.surveyCompletionWithAnswers[3].answerToOther}</SPurpleText>
            </p>
          </div>
          <span>{profile?.feedBackKeywords[0].title}</span>
          <span>{profile?.feedBackKeywords[1].title}</span>
          <div>
            <p>{profile?.surveyCompletionWithAnswers[4].question}</p>
            <p>
              나 : <SPurpleText>{profile?.surveyCompletionWithAnswers[4].answerToMe}</SPurpleText>
            </p>
            <p>
              타인 : <SPurpleText>{profile?.surveyCompletionWithAnswers[4].answerToOther}</SPurpleText>
            </p>
          </div>
          <div>
            <p>{profile?.surveyCompletionWithAnswers[5].question}</p>
            <p>
              나 : <SPurpleText>{profile?.surveyCompletionWithAnswers[5].answerToMe}</SPurpleText>
            </p>
            <p>
              타인 : <SPurpleText>{profile?.surveyCompletionWithAnswers[5].answerToOther}</SPurpleText>
            </p>
          </div>
          <span>{profile?.feedBackKeywords[2].title}</span>
        </div>
      </SPuzzle>
    </SLayout>
  );
};

const SLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: 40px 24px;
  background-color: #f7f0ff;
`;

const SProfile = styled.div`
  display: flex;
  gap: 16px;
  display: flex;
  align-items: center;
  border-radius: 100px;
  margin-top: 32px;
  margin-bottom: 24px;

  > div {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 500;
    color: black;
    line-height: 27px;

    > span > span {
      font-weight: 600;
    }
  }
`;

interface SProfileImageProps {
  imageUrl?: string;
}

const SProfileImage = styled.div<SProfileImageProps>`
  width: 100px;
  height: 100px;
  background: ${(props) => (props.imageUrl ? `url(${props.imageUrl}) center / cover` : "#6f63e0")};
  border-radius: 50%;
  cursor: pointer;
`;

const SPuzzle = styled.div`
  width: 100%;
  height: 1200px;
  background-image: url(/statistics/statistics_background.svg);
  background-repeat: no-repeat;
  background-size: cover;

  > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    height: 100%;
  }

  > div > span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 183px;
    color: #ffffff;
    font-size: 22px;
    font-weight: 600;
  }

  > div > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  > div > div > p {
    word-break: keep-all;
    text-align: center;
    color: #545454;
    font-size: 15px;
    line-height: 20px;

    &:first-child {
      margin-bottom: 15px;
    }
    &:last-child {
      margin-top: 15px;
    }
  }
`;

const SPurpleText = styled.span`
  color: #6f63e0;
  font-weight: 600;
`;

export default StatisticsPage;
