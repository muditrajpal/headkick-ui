import React from 'react';
import { Grid, Header, Button, Icon } from 'semantic-ui-react';

import Blogs from '../Blogs/Blogs';

const BlogSection = ({ blogData }) => {
  return (
    <>
      <Grid columns={2} style={{ margin: '20px 30px 0 30px' }}>
        <Grid.Column width={8}>
          <Header as="h2">Blogs</Header>
        </Grid.Column>
        <Grid.Column width={8} floated="right">
          <Button floated="right" basic color="black">
            See all <Icon name="arrow right" />
          </Button>
        </Grid.Column>
      </Grid>
      <Grid columns={3}>
        <Blogs blogData={blogData}></Blogs>
      </Grid>
    </>
  );
};

export default BlogSection;
