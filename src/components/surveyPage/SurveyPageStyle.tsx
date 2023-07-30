import { styled } from "styled-components";

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
  margin: 0 10px;
  width: 152px;
  height: 60px;
  background-color: white;
  color: #6f63e0;
  border: none;
  font-size: 18px;
  font-weight: 700;
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
  backgroundcolor: #f9f9fd;
  opacity: 0.7;
  borderradius: 30px;
`;

export const SIconImage = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 100px;
  background-color: skyblue;
  margin: 0 auto;
`;
