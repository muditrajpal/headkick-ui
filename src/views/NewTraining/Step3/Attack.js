import React from "react";
import styled from "styled-components";
import { Checkbox } from "semantic-ui-react";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled(Row)`
  justify-content: space-between;
  padding: 30px 0;
`;

const AttackListContainer = styled(Column)`
  width: 49%;
  border: 1px solid #e9ecfb;
  border-radius: 7px;
  max-height: calc(100vh - 460px);
  overflow-y: auto;
  div:nth-child(2n) {
    background-color: #f6f7fe;
  }
`;

const InfoRow = styled(Row)`
  justify-content: space-between;
  padding: 24px 30px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #333333;
`;

const Attack = ({ trainingData, onChange }) => (
  <Container>
    <AttackListContainer>
      {[1, 2, 3, 4, 5, 6].map((r) => (
        <InfoRow>
          Attack Drill {r}
          <Checkbox
            onChange={(e, { checked }) => {
              if (checked) {
                trainingData.drills.push({
                  name: `Attack Drill ${r}`,
                  type: "Attack",
                });
              } else {
                trainingData.drills = trainingData.drills.filter(
                  (rr) => rr.name !== `Attack Drill ${r}`
                );
              }
              console.log(trainingData.drills)
              onChange("drills", trainingData.drills);
            }}
            checked={trainingData.drills.some(
              (v) => v.name === `Attack Drill ${r}`
            )}
          />
        </InfoRow>
      ))}
    </AttackListContainer>
    <AttackListContainer>
      {[7, 8, 9, 10, 11, 12].map((r) => (
        <InfoRow>
          Attack Drill {r}
          <Checkbox
            onChange={(e, { checked }) => {
              if (checked) {
                trainingData.drills.push({
                  name: `Attack Drill ${r}`,
                  type: "Attack",
                });
              } else {
                trainingData.drills = trainingData.drills.filter(
                  (rr) => rr.name !== `Attack Drill ${r}`
                );
              }
              onChange("drills", trainingData.drills);
            }}
            checked={trainingData.drills.some(
              (v) => v.name === `Attack Drill ${r}`
            )}
          />
        </InfoRow>
      ))}
    </AttackListContainer>
  </Container>
);

export default Attack;
