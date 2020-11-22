import React from "react";
import styled from "styled-components";
// import history from "historyObj";
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
  coursePhoto,
  courseTitle,
  starRating,
  createdBy,
  subscribers,
  price,
}) => (
  <CourseTitleContainer>
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
    <CourseTile
      coursePhoto="https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4"
      courseTitle="How to Defend 101"
      starRating={3}
      createdBy="Lionel Messi"
      subscribers={33}
      price="$ 400"
    />
    <CourseTile
      coursePhoto="https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4"
      courseTitle="How to Defend 101"
      starRating={3}
      createdBy="Lionel Messi"
      subscribers={33}
      price="$ 400"
    />
    <CourseTile
      coursePhoto="https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4"
      courseTitle="How to Defend 101"
      starRating={3}
      createdBy="Lionel Messi"
      subscribers={33}
      price="$ 400"
    />
    <CourseTile
      coursePhoto="https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4"
      courseTitle="How to Defend 101"
      starRating={3}
      createdBy="Lionel Messi"
      subscribers={33}
      price="$ 400"
    />
    <CourseTile
      coursePhoto="https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4"
      courseTitle="How to Defend 101"
      starRating={3}
      createdBy="Lionel Messi"
      subscribers={33}
      price="$ 400"
    />
    <CourseTile
      coursePhoto="https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4"
      courseTitle="How to Defend 101"
      starRating={3}
      createdBy="Lionel Messi"
      subscribers={33}
      price="$ 400"
    />
    <CourseTile
      coursePhoto="https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4"
      courseTitle="How to Defend 101"
      starRating={3}
      createdBy="Lionel Messi"
      subscribers={33}
      price="$ 400"
    />
  </CoursesList>
);

const PurchasedCourses = (props) => (
  <Container>
    <Header>
      <Column>Purchased Course</Column>
      <ThemeButton
        customCss={{
          width: 172,
        }}
        isDisabled={false}
        onClickAction={() => alert("Under Development")}
        children="Purchase Course"
      />
    </Header>
    <Courses {...props} />
  </Container>
);

export default PurchasedCourses;
