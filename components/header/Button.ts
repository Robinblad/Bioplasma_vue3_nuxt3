import { css } from "@emotion/css";

export const HeaderButtonStyles = css`
  color: white;
  font-family: Arial;
  font-size: 17px;
  font-weight: bold;
  padding: 20px 40px;
  margin: -20px -40px;
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /*z-index: 0;*/

  &::before {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    transition: all 0.6s;
    /*z-index: 0;*/
    z-index: -1;
    border-radius: 20px;
    animation: pulsate-out 0.5s forwards;
  }

  &:hover {
    &::before {
      width: 145px;
      height: 45px;
      background-color: #1236ff;
      animation: pulsate-in 0.5s forwards;
      /*z-index: -1;*/
    }

    @keyframes pulsate-in {
      0% {
        transform: scale(0);
      }
      40% {
        transform: scale(2);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes pulsate-out {
      0% {
        transform: scale(1);
      }
      40% {
        transform: scale(2);
      }
      100% {
        transform: scale(0);
      }
    }
  }
`;
