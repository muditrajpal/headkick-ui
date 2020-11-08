import React from "react";
import styled from "styled-components";
import {Input, Search, Checkbox} from "semantic-ui-react";

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

const Attack = (props) => (
  <Container>
    <AttackListContainer>
      <InfoRow>
        Attack Drill 1<Checkbox />
      </InfoRow>
      <InfoRow>
        Attack Drill 2<Checkbox />
      </InfoRow>
      <InfoRow>
        Attack Drill 3<Checkbox />
      </InfoRow>
      <InfoRow>
        Attack Drill 4<Checkbox />
      </InfoRow>
      <InfoRow>
        Attack Drill 5<Checkbox />
      </InfoRow>
      <InfoRow>
        Attack Drill 6<Checkbox />
      </InfoRow>
    </AttackListContainer>
    <AttackListContainer>
      <InfoRow>
        Attack Drill 7<Checkbox />
      </InfoRow>
      <InfoRow>
        Attack Drill 8<Checkbox />
      </InfoRow>
      <InfoRow>
        Attack Drill 9<Checkbox />
      </InfoRow>
      <InfoRow>
        Attack Drill 10<Checkbox />
      </InfoRow>
      <InfoRow>
        Attack Drill 11<Checkbox />
      </InfoRow>
      <InfoRow>
        Attack Drill 12<Checkbox />
      </InfoRow>
    </AttackListContainer>
  </Container>
);

export default Attack;
