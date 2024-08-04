import React from "react";
import styled from "styled-components";

const TotalScore = ({score}) => {
  return (
    <ScoreCard>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreCard>
  );
};

export default TotalScore;

const ScoreCard = styled.div`
  max-width: 200px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 0px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;
