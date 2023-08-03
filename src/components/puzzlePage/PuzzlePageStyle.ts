import { styled } from "styled-components";

export const SProfile = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background-color: red;
`;

export const STypeContainer = styled.div`
  width: 327px;
  height: 100px;
  display: flex;
  margin: 40px auto;

  p {
    margin: 16px 0 0 20px;
  }
`;

export const STypesContainer = styled.div`
  height: 92px;
  width: 2100px;
  display: flex;
`;

export const STypesOutContainer = styled.div`
  width: 327px;
  margin: 36px 24px;
  overflow: hidden;
`;

export const SType = styled.div`
  width: 265px;
  height: 92px;
  border-radius: 200px;
  background-color: #b0acd2;
  opacity: 0.25;
  margin-right: 24px;
  transition: transform 0.3s ease;
  box-shadow: -3px 2px 0 rgba(0, 0, 0, 0.3);
`;

export const SPuzzlesContainer = styled.div`
  display: absolute;
  width: 375px;
  margin: 0 auto;
  margin-top: -1130px;
`;

export const SPuzzleContainer = styled.div`
  display: absolute;
  width: 327px;
  height: 200px;
  margin-top: 4px;
  display: flex;

  .types {
    position: absolute;
    margin-top: 80px;
    margin-left: 70px;
    color: red;
    font-size: 22px;
  }

  .detail {
    margin-top: 80px;
  }
`;

export const SPuzzle1 = styled.div`
  position: absolute;
  height: 180px;
  margin: 10px auto;
  margin-left: 25px;
  z-index: 1;
`;

export const SPuzzle2 = styled.div`
  position: absolute;
  height: 180px;
  margin-top: 0 auto;
  right: 0;
  margin-right: 85px;
  margin-top: 40px;
  z-index: 1;
`;
