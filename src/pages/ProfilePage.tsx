import { styled } from "styled-components";

import BackIcon from "../components/common/BackIcon";
import ProfileImage from "../components/common/ProfileImage";
import { profileCall } from "../api/profileCall";
import { useEffect, useState } from "react";

interface Profile {
  profileName: string;
  profileType: string;
  profileKeyword: string[];
}

const ProfilePage = () => {
  const [profile, setProfile] = useState<Profile>({ profileName: "", profileType: "", profileKeyword: [] });

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileCall("userId");
      setProfile(profileData);
    };

    fetchProfile();
  }, []);

  return (
    <SLayout>
      <BackIcon />
      <SProfile>
        <ProfileImage />
        <div>
          <span>{profile.profileName}</span>
          <span>{profile.profileType}</span>
        </div>
      </SProfile>
      <SPuzzle>
        <ul>
          {profile.profileKeyword.map((keyword, index) => (
            <li key={index}>{keyword}</li>
          ))}
        </ul>
      </SPuzzle>
      <SBox>
        <div>테스트 만들기</div>
        <div>통계 상세 보기</div>
      </SBox>
      <SLogout>로그아웃</SLogout>
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
  background-image: url(/background/background_image_3.svg);
  background-repeat: no-repeat;
  background-size: cover;
`;

const SProfile = styled.div`
  height: 92px;
  padding: 0 20px;
  display: flex;
  gap: 16px;
  display: flex;
  align-items: center;
  border-radius: 100px;
  background: rgba(0, 0, 0, 0.07);
  background-blend-mode: luminosity;
  backdrop-filter: blur(34px);
  margin-top: 32px;
  margin-bottom: 24px;

  > div {
    display: flex;
    flex-direction: column;

    span {
      color: #ffffff;
      line-height: 20px;

      &:first-child {
        font-size: 17px;
        font-weight: 700;
      }

      &:last-child {
        font-size: 15px;
        font-weight: 300;
      }
    }
  }
`;

const SPuzzle = styled.div`
  width: 100%;
  height: 550px;
  background-image: url(/profile/profile_puzzle.svg);
  background-repeat: no-repeat;
  background-size: cover;

  > ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  > ul > li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 183px;
    color: #ffffff;
    font-size: 22px;
    font-weight: 600;
  }
`;

const SBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  padding: 6px 9px;
  gap: 15px;
  border-radius: 100px;

  margin: 32px 0;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%), rgba(0, 0, 0, 0.1);
  box-shadow:
    1px 1.5px 4px 0px rgba(0, 0, 0, 0.1) inset,
    1px 1.5px 4px 0px rgba(0, 0, 0, 0.08) inset,
    0px -0.5px 1px 0px rgba(255, 255, 255, 0.25) inset,
    0px -0.5px 1px 0px rgba(255, 255, 255, 0.3) inset;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 148px;
    height: 43px;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -1px;

    &:first-child {
      color: #6f63e0;
      border-radius: 100px;
      background: rgba(212, 210, 220, 0.5);
      box-shadow:
        -1.2666666507720947px 1.2666666507720947px 1.2666666507720947px 0px rgba(255, 255, 255, 0.35) inset,
        1.2666666507720947px -1.2666666507720947px 1.2666666507720947px 0px rgba(148, 144, 176, 0.35) inset;
      backdrop-filter: blur(8.613333702087402px);
    }

    &:last-child {
      color: #ffffff;
      border-radius: 100px;
      background: rgba(176, 172, 210, 1);
      box-shadow:
        -1.2666666507720947px 1.2666666507720947px 1.2666666507720947px 0px rgba(255, 255, 255, 0.35) inset,
        1.2666666507720947px -1.2666666507720947px 1.2666666507720947px 0px rgba(148, 144, 176, 0.35) inset;
      backdrop-filter: blur(8.613333702087402px);
    }
  }
`;

const SLogout = styled.p`
  color: #6f63e0;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
`;

export default ProfilePage;
