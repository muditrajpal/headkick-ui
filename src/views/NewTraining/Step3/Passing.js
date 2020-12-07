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

const PassingListContainer = styled(Column)`
  width: 100%;
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
  width:50%
`;
const InfoList = styled.div`
display: inherit;
`;


const Passing = ({ trainingData, onChange }) => (
  <Container>
    <PassingListContainer>
      {[1, 2, 3, 4, 5, 6].map((rr) => (
        <InfoList>
        {[rr,rr+6].map(r=><InfoRow>
          Passing Drill {r}
          <Checkbox
            onChange={(e, { checked }) => {
              if (checked) {
                trainingData.drills.push({
                  name: `Passing Drill ${r}`,
                  type: "Passing",
                });
              } else {
                trainingData.drills = trainingData.drills.filter(
                  (rr) => rr.name !== `Passing Drill ${r}`
                );
              }
              console.log(trainingData.drills)
              onChange("drills", trainingData.drills);
            }}
            checked={trainingData.drills.some(
              (v) => v.name === `Passing Drill ${r}`
            )}
          />
        </InfoRow>)}
        </InfoList>
      ))}
    </PassingListContainer>
  </Container>
);

export default Passing;
