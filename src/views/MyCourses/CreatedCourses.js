import React from "react";
import styled from "styled-components";
import history from "historyObj";
import ThemeButton from "shared/components/ThemeButton";
import {Rating} from "semantic-ui-react";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled(Column)`
  margin: 28px 0px;
  border: 1px solid #e9ecfb;
`;

const Header = styled(Row)`
  flex: 1;
  padding: 19px 24px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  background-color: #e9ecfb;
  color: #12216d;
  align-items: center;
  justify-content: space-between;
`;

const CoursesList = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  margin: 30px 25px;
  gap: 25px;
  overflow-y: auto;
  max-height: calc(100vh - 9rem);
`;

const CourseTitleContainer = styled(Column)`
  background: #ffffff;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px #edeffc;
  border-radius: 16px;
  cursor: pointer;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;

const CoursePhoto = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 16px 16px 0 0;
`;

const CourseDetailsContainer = styled(Column)`
  flex: 1;
  padding: 19px 14px;
  gap: 20px;
  justify-content: space-between;
`;

const CourseRow = styled(Row)`
  flex: 1;
  justify-content: space-between;
`;

const CourseTitleText = styled(Column)`
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  color: #0d1757;
`;

const CreatedByName = styled(Row)`
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #000000;
`;

const SubscribersText = styled(Row)`
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #9d9d9d;
`;

const PriceText = styled(Column)`
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #0d1757;
`;

const CourseTile = ({
  id,
  coursePhoto,
  courseTitle,
  starRating,
  createdBy,
  subscribers,
  price,
}) => (
  <CourseTitleContainer
    onClick={() => history.push(`/online-coaching/view-course?id=${id}`)}
  >
    <CoursePhoto src={coursePhoto || ""} />
    <CourseDetailsContainer>
      <CourseRow>
        <CourseTitleText>{courseTitle || ""}</CourseTitleText>
        <Rating
          icon="star"
          defaultRating={starRating || 0}
          maxRating={5}
          disabled
        />
      </CourseRow>
      <CourseRow>
        <Column>
          <CreatedByName>{createdBy || ""}</CreatedByName>
          <SubscribersText>{subscribers || ""} subscribers</SubscribersText>
        </Column>
        <PriceText>{price || ""}</PriceText>
      </CourseRow>
    </CourseDetailsContainer>
  </CourseTitleContainer>
);

const Courses = (props) => (
  <CoursesList>
    {props?.coursesList?.length
      ? props.coursesList.map((data) => {
          return (
            <CourseTile
              id={data?._id || ""}
              coursePhoto={data?.logo || ""}
              courseTitle={data?.title || ""}
              starRating={data?.ratings || 0}
              createdBy={
                (data?.coach?.length && data.coach[0]?.profile?.name) || ""
              }
              subscribers={data?.subscribers || 0}
              price={`$ ${data?.price || 0}`}
            />
          );
        })
      : null}
  </CoursesList>
);

const CreatedCourses = (props) => (
  <Container>
    <Header>
      <Column>Created Course</Column>
      <ThemeButton
        customCss={{
          width: 172,
        }}
        isDisabled={false}
        onClickAction={() => history.push("/online-coaching/new-course")}
        children="Create Course"
      />
    </Header>
    <Courses {...props} />
  </Container>
);

export default CreatedCourses;
