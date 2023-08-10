import { styled } from "styled-components";
import { useRecoilState } from "recoil";
import { userPictureState } from "../store/atoms";

const ProfilePage = () => {
  const [userPicture] = useRecoilState(userPictureState);
  return (
    <SLayout>
      <SProfile>
        <SProfileImage imageUrl={userPicture || undefined} />
        <div>
          <span>
            <SPurpleText>잭 스페로우 유형</SPurpleText>의
          </span>
          <span>사용자님을 소개합니다.</span>
        </div>
      </SProfile>
      <SPuzzle>
        <div>
          <span>자유로움</span>
          <div>
            <p>여름날, 휴일을 보내는 모습은?</p>
            <p>
              나 : <SPurpleText>혼자 넷플릭스</SPurpleText>
            </p>
            <p>
              타인 : <SPurpleText>친구랑 영화</SPurpleText>
            </p>
          </div>
          <div>
            <p>여름날, 휴일을 보내는 모습은?</p>
            <p>
              나 : <SPurpleText>혼자 넷플릭스</SPurpleText>
            </p>
            <p>
              타인 : <SPurpleText>친구랑 영화</SPurpleText>
            </p>
          </div>
          <span>센스</span>
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
    grid-template-rows: repeat(2, 1fr);
    height: 400px;
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
  }
`;

const SPurpleText = styled.span`
  color: #6f63e0;
  font-weight: 600;
`;

export default ProfilePage;
