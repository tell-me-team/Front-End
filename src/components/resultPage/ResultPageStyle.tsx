import { styled } from "styled-components";

export const SMovieTicket = styled.div`
  position: absolute;
  margin-top: -30px;
  z-index: 1;

  .title {
    position: absolute;
    display: flex;
    justify-content: center;
    margin-top: 130px;
    width: 375px;
    font-size: 40px;
  }
  .puzzles {
    display: flex;
    flex-direction: row;

    position: absolute;
    margin-top: 200px;
    margin-left: 60px;
    width: 255px;
    height: 50px;
    background-image: url(/result/result_keyword.svg);
    background-repeat: no-repeat;
  }

  .puzzlesDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 88px;
    height: 50px;
  }
  .typeDetail {
    position: absolute;
    margin: 280px 61px 0 61px;
  }

  .share {
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 375px;
    margin-top: -200px;
  }

  .link {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 375px;
    margin-top: -100px;
  }

  img {
    position: relative;
    opacity: 0.3;
    width: 327px;
    margin: 0 24px;
  }

  h3 {
    font-size: 17px;
    color: #ffffff;
  }
  h2 {
    font-size: 22px;
    color: #ffffff;
    margin-top: 12px;
  }
`;
