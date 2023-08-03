import { styled } from "styled-components";
import icon from "../../assets/icon.svg";
interface ProgressGageBarStatusProps
  extends React.HTMLAttributes<HTMLDivElement> {
  status: number;
}

export const SProgressGageBar = styled.div`
  width: 327px;
  height: 10px;
  background-color: #6f63e0;
  opacity: 0.2;
  margin: 0 auto;
  border-radius: 100px;
`;

export const SProgressGageBarStatus = styled.div<ProgressGageBarStatusProps>`
  position: relative;
  margin-top: -10px;
  width: ${(props) => props.status * 32.7}px;
  height: 10px;
  margin-left: 24px;
  background-color: #6f63e0;
  border-radius: 100px;
  z-index: 1;
`;

export const SExtraButton = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 100px;
  background-color: #6f63e0;
  opacity: 0.2;
`;

export const SSelectAnswerButton = styled.button`
  margin: 0px;
  width: 152px;
  height: 60px;
  background-color: white;
  opacity: 0.7;
  color: #6f63e0;
  border: none;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;

export const SLoadProfileButton = styled.button`
  width: 327px;
  height: 60px;
  border-radius: 30px;
  background-color: #6f63e0;
  border: none;
  color: white;
  font-size: 18px;
`;

export const SGagebarContainer = styled.div`
  padding-top: 10px;
  margin-bottom: 8px;
  margin-left: 83%;
  color: #a299f3;
`;

export const SSurveyContainer = styled.div`
  margin: 50px 20px;
  padding: 50px 20px;
  height: 486px;
  opacity: 0.7;
  border-radius: 30px;
  background-color: #f9f9fd;
`;

export const SIconImage = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 100px;
  background-image: url(${icon});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
`;
