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

  background-color: yellow;
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
`;

export const SPuzzlesContainer = styled.div`
  width: 375px;
  margin: 0 auto;
  margin-top: -10px;
`;

export const SPuzzleContainer = styled.div`
  width: 327px;
  height: 181px;
  margin-top: 14px;
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
  height: 181px;
  margin: 20px auto;
  margin-left: 25px;
  z-index: 1;
`;

export const SPuzzle2 = styled.div`
  position: absolute;
  height: 181px;
  margin-top: 0 auto;
  right: 0;
  margin-right: 85px;
  margin-top: 40px;
  z-index: 1;
`;
