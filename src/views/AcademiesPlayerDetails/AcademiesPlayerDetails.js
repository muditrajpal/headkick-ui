import React from "react";
import styled from "styled-components";
import {Button, Icon} from "semantic-ui-react";
import history from "historyObj";
import ThemeButton from "shared/ThemeButton";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailsContainer = styled(Column)`
  top: 6rem;
  position: absolute;
  float: left;
  margin: auto;
  padding: 31px 28px;
  border-radius: 0.5rem;
  background: #ffffff;
  box-shadow: 0px 0px 20px #edeffc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 98.3%;
`;

const ButtonContainer = styled(Row)`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const AcademiesPlayerDetails = () => (
  <DetailsContainer>
    <ButtonContainer>
      <Column style={{alignItems: "flex-start", flex: 1}}>
        <Button
          style={{maxWidth: 121}}
          basic
          size="medium"
          color="black"
          onClick={() => history.push("/academies/players/list")}
        >
          <Icon name="arrow left" /> Go Back
        </Button>
      </Column>
      <Column style={{alignItems: "flex-end", flex: 1}}>
        <ThemeButton
          isDisabled={false}
          onClickAction={() => alert("Under Development")}
          children="Edit All"
        />
      </Column>
    </ButtonContainer>
  </DetailsContainer>
);

export default AcademiesPlayerDetails;
