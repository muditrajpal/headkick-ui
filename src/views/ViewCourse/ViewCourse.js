import React from "react";
import styled from "styled-components";
import {Search, Checkbox, Icon, Rating} from "semantic-ui-react";
import ThemeButton from "shared/components/ThemeButton";
import history from "historyObj";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled(Row)`
  padding-bottom: 14px;
`;

const ButtonTextContainer = styled(Row)`
  justify-content: space-between;
  padding: 12px;
  font-family: Roboto;
  font-size: 12px;
  line-height: 14px;
  color: #0d1757;
`;

const AboutTextContainer = styled(Column)`
  flex: 1;
  gap: 13px;
`;

const HeadingText = styled(Row)`
  font-family: Roboto;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  color: #12216d;
`;

const DescriptionText = styled(Row)`
  font-family: Roboto;
  font-size: 16px;
  line-height: 150%;
  color: #12216d;
  text-align: justify;
  padding-right: 5%;
`;

const RatingContainer = styled(Row)`
  align-items: center;
  gap: 8px;
  font-family: Roboto;
  font-size: 16px;
  line-height: 150%;
  color: #cccccc;
`;

const CreatorNameText = styled(DescriptionText)`
  font-weight: 500;
`;

const ModifyButtonContainer = styled(Row)`
  padding-top: 11px;
  gap: 11px;
`;

const HorizontalDivider = styled(Row)`
  border: 1px solid #e0e0e1;
  margin-top: 12px;
`;

const CourseThumbnailContainer = styled(Column)`
  flex: 1;
  max-width: 600px;
  height: 397px;
  background: #ffffff;
  box-shadow: 0px 0px 20px #edeffc;
  border-radius: 10px;
`;

const ThumbnailPhoto = styled.img`
  height: 315px;
  border-radius: 10px 10px 0 0;
`;

const PriceContainer = styled(Row)`
  flex: 1;
  padding-left: 38px;
  align-items: center;
  font-family: Roboto;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  color: #12216d;
`;

const AboutCoachContainer = styled(Column)`
  gap: 22px;
`;

const AboutCoachHeadingText = styled(Row)`
  font-family: Roboto;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  color: #12216d;
`;

const CoachBrefingContainer = styled(Row)`
  gap: 29px;
  align-items: center;
`;

const CoachPhoto = styled.img`
  border-radius: 50%;
  height: 116px;
  width: 116px;
`;

const CoachInfoContainer = styled(Column)`
  justify-content: space-between;
`;

const CoachDescriptionText = styled(DescriptionText)`
  width: 50%;
`;

const CoachInfoTextContainer = styled(Column)`
  gap: 16px;
`;

const CoachNameText = styled(Row)`
  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #0d1757;
`;

const CoachRatingExperienceContainer = styled(Column)`
  font-family: Roboto;
  font-size: 14px;
  line-height: 150%;
  color: #707070;
`;

const CoachRatingExperienceIconContainer = styled(Column)`
  color: #e4c389;
  padding-right: 6px;
`;

const AboutCourseThumbnailPrice = (props) => (
  <CourseThumbnailContainer>
    <ThumbnailPhoto src={props.coursesDetails?.logo || ""} />
    <PriceContainer>$ {props.coursesDetails?.price} /-</PriceContainer>
  </CourseThumbnailContainer>
);

const AboutCourseText = (props) => (
  <AboutTextContainer>
    <HeadingText>{props.coursesDetails?.title || ""}</HeadingText>
    <DescriptionText>{props.coursesDetails?.description}</DescriptionText>
    <RatingContainer>
      <Rating
        icon="star"
        defaultRating={props.coursesDetails?.ratings}
        maxRating={4}
        disabled
      />
      (40)
    </RatingContainer>
    <CreatorNameText>By John Doe</CreatorNameText>
    <ModifyButtonContainer>
      <ThemeButton
        customCss={{
          width: 91,
        }}
        isDisabled={false}
        onClickAction={() => history.push("/online-coaching/edit-tutorial")}
        children="Edit Course"
      />
      <ThemeButton
        customCss={{
          width: 150,
          color: "#0D1757",
          backgroundColor: "#FFFFFF",
          border: "1px solid #0D1757",
        }}
        isDisabled={false}
        onClickAction={() => alert("Under Development")}
        children="View Course Content"
      />
    </ModifyButtonContainer>
    <HorizontalDivider />
  </AboutTextContainer>
);

const AboutCoach = (props) => (
  <AboutCoachContainer>
    <AboutCoachHeadingText>About Coach</AboutCoachHeadingText>
    <CoachBrefingContainer>
      <CoachPhoto src="https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4" />
      <CoachInfoTextContainer>
        <CoachNameText>John Doe</CoachNameText>
        <CoachRatingExperienceContainer>
          <Row>
            <CoachRatingExperienceIconContainer>
              <Icon name="diamond" />
            </CoachRatingExperienceIconContainer>
            {props.coursesDetails?.subscribers} Subscribers
          </Row>
          <Row>
            <CoachRatingExperienceIconContainer>
              <Icon name="play circle" />
            </CoachRatingExperienceIconContainer>
            4 courses
          </Row>
          <Row>
            <CoachRatingExperienceIconContainer>
              <Icon name="star" />
            </CoachRatingExperienceIconContainer>
            4.5 rating
          </Row>
        </CoachRatingExperienceContainer>
      </CoachInfoTextContainer>
    </CoachBrefingContainer>
    <CoachDescriptionText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </CoachDescriptionText>
  </AboutCoachContainer>
);

const AboutCourse = (props) => (
  <Row>
    <AboutCourseText {...props} />
    <AboutCourseThumbnailPrice {...props} />
  </Row>
);

const ViewCourse = (props) => (
  <Column>
    <ButtonContainer>
      <ThemeButton
        customCss={{
          width: 101,
          backgroundColor: "#FFFFFF",
          border: "1px solid #0D1757",
        }}
        isDisabled={false}
        onClickAction={() => history.push("/online-coaching")}
        children={
          <ButtonTextContainer>
            <Icon name="arrow left" />
            Go Back
          </ButtonTextContainer>
        }
      />
    </ButtonContainer>

    <AboutCourse {...props} />

    <AboutCoach {...props} />
  </Column>
);

export default ViewCourse;
