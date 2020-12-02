import React from "react";
import styled from "styled-components";
import {Icon, Input, Checkbox} from "semantic-ui-react";
import CustomModal from "shared/components/CustomModal";
import ThemeButton from "shared/components/ThemeButton";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 30px;
  max-height: 800px;
  overflow-y: auto;
`;

const HeaderContainer = styled(Row)`
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.2px;
  color: #12216d;
  justify-content: space-between;
`;

const HeaderText = styled(Column)`
  gap: 10px;
  div:first-child {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
  }
`;

const CloseIcon = styled(Icon)`
  color: #8fc9ff;
  cursor: pointer;
`;

const HorizontalDivider = styled(Row)`
  margin: 21px 0 30px 0;
  border: 1px solid #e6e6e6;
`;

const FilterContainer = styled(Row)`
  gap: 28px;
`;

const FilterTabContainer = styled(Column)`
  flex: 1;
  box-shadow: 0px 4px 14px 2px rgba(233, 236, 251, 0.5);
  border-radius: 6px;
  height: 124px;
  padding: 14px;
  gap: 22px;
`;

const FilterCheckboxContainer = styled(Row)`
  justify-content: flex-end;
`;

const FilterText = styled(Row)`
  flex: 1;
  justify-content: center;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #0d1757;
`;

const ButtonContainer = styled(Row)`
  padding: 47px 0;
  justify-content: center;
`;

const FilterBy = (props) => (
  <CustomModal
    isOpen={true}
    width="45%"
    children={
      <Container>
        <HeaderContainer>
          <HeaderText>
            Filter by<div>To begin with, tell us who you are</div>
          </HeaderText>
          <CloseIcon
            name="window close"
            onClick={() => props.onCloseAction(props.modalName)}
          />
        </HeaderContainer>
        <HorizontalDivider />
        <FilterContainer>
          <FilterTabContainer>
            <FilterCheckboxContainer>
              <Checkbox />
            </FilterCheckboxContainer>
            <FilterText>International</FilterText>
          </FilterTabContainer>
          <FilterTabContainer>
            <FilterCheckboxContainer>
              <Checkbox />
            </FilterCheckboxContainer>
            <FilterText>Clubs</FilterText>
          </FilterTabContainer>
          <FilterTabContainer>
            <FilterCheckboxContainer>
              <Checkbox />
            </FilterCheckboxContainer>
            <FilterText>Both</FilterText>
          </FilterTabContainer>
        </FilterContainer>
        <ButtonContainer>
          <ThemeButton
            customCss={{
              width: 154,
            }}
            isDisabled={false}
            onClickAction={() => props.onCloseAction(props.modalName)}
            children="Next"
          />
        </ButtonContainer>
      </Container>
    }
  />
);

export default FilterBy;
