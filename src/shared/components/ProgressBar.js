import React from "react";
import styled, {css} from "styled-components";

const getProgressBarColor = (percentage) => {
  if (percentage >= 25 && percentage < 50) return "#E4C389";
  else if (percentage >= 50) return "#1F94FF";
  else return "#979797";
};

const ProgressbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  .progress {
    margin: 0 !important;
    border-radius: 0;
    .bar {
      height: 10px !important;
      border-radius: 0;
      ${({progress}) =>
        progress &&
        css`
          width: ${progress}%;
          background: ${getProgressBarColor(progress)};
        `}
    }
    transform: ${({isReversed}) => (isReversed ? "rotate(180deg)" : "none")};
  }
`;

const ProgressBar = ({progress, isReversed}) => (
  <ProgressbarContainer progress={progress} isReversed={isReversed}>
    <div class="ui small progress">
      <div class="bar" />
    </div>
  </ProgressbarContainer>
);

export default ProgressBar;
