import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const BackIcon = () => {
  const navigate = useNavigate();

  return (
    <SButton onClick={() => navigate("/")} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="22" fill="white" fillOpacity="0.06" />
      <rect width="44" height="44" rx="22" fill="#F3F2FC" fillOpacity="0.18" />
      <path d="M27 13L13.5353 20.63C12.8593 21.013 12.8593 21.987 13.5353 22.37L27 30" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </SButton>
  );
};

const SButton = styled.svg`
  cursor: pointer;
`;

export default BackIcon;
