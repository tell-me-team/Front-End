import { styled } from "styled-components";
import ServiceIcon from "../common/ServiceIcon";

interface SurveyIconBoxProps {
  onPreviousQuestion: () => void;
}

const SurveyIconBox: React.FC<SurveyIconBoxProps> = ({ onPreviousQuestion }) => {
  return (
    <SLayout>
      <SButton onClick={onPreviousQuestion} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect width="44" height="44" rx="22" fill="#6F63E0" fillOpacity="0.06" />
        <rect width="44" height="44" rx="22" fill="#6F63E0" fillOpacity="0.18" />
        <path d="M27 13L13.5353 20.63C12.8593 21.013 12.8593 21.987 13.5353 22.37L27 30" stroke="#6F63E0" strokeWidth="2" strokeLinecap="round" />
      </SButton>
      <ServiceIcon />

      <SXButoon />
    </SLayout>
  );
};

const SLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

const SButton = styled.svg`
  cursor: pointer;
`;

const SXButoon = styled.div`
  width: 44px;
  height: 44px;
`;

export default SurveyIconBox;
