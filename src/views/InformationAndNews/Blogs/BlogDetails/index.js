import React, {Component} from "react";
import BlogDetailsComponent from "./BlogDetails";
import styled, {css} from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled(Column)`
  padding: 5px;
  top: 6rem;
  position: absolute;
  float: left;
  border-radius: 0.5rem;
  background: #ffffff;
  box-shadow: 0px 0px 20px #edeffc;
  border-radius: 10px;
  padding: 30px;
  width: 98.3%;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
`;

class BlogDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <BlogDetailsComponent />
      </Container>
    );
  }
}

export default BlogDetails;
