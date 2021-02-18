import React from 'react';
import { Grid, Image, Header, Button, Card, Icon } from 'semantic-ui-react';

const Blogs = ({ blogData }) => (
  <Grid centered style={{ marginTop: '0px' }}>
    {blogData.map((blog) => {
      const { id, title, time, author, lead, authorImage } = blog;
      return (
        <Grid.Column width={5} key={id}>
          <Card style={{ width: '100%' }}>
            <Image src={blog.articleImage} wrapped ui={false} />
            <Card.Content>
              <Grid verticalAlign="middle" columns={2} centered>
                <Grid.Row>
                  <Grid.Column width={11}>
                    <Card.Header
                      style={{ fontSize: '24px', fontWeight: '700' }}
                    >
                      {title}
                    </Card.Header>
                  </Grid.Column>
                  <Grid.Column textAlign="right" width={5}>
                    <Card.Meta floated="right">{time} min read</Card.Meta>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Card.Description style={{ marginTop: '20px' }}>
                {lead.substring(0, 100)}...
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Grid verticalAlign="middle" columns={2} centered>
                <Grid.Row>
                  <Grid.Column>
                    <a href="#" style={{ color: '#007AE9', padding: '1rem 0' }}>
                      <img
                        src={authorImage}
                        alt=""
                        style={{
                          width: '22px',
                          borderRadius: '50%',
                          marginRight: '11px',
                        }}
                      />
                      {author}
                    </a>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      style={{
                        border: 'none',
                        backgroundColor: 'white',
                        borderRadius: 0,
                        color: '#007AE9',
                      }}
                      floated="right"
                    >
                      Read more
                      <Icon name="arrow right" />
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              {/* <a href="#" style={{ color: '#007AE9', padding: '1rem 0' }}>
                <Icon name="user" />
                {author}
              </a>
              <Button
                style={{
                  border: 'none',
                  backgroundColor: 'white',
                  borderRadius: 0,
                  color: '#007AE9',
                }}
                floated="right"
              >
                Read more
                <Icon name="arrow right" />
              </Button> */}
            </Card.Content>
          </Card>
        </Grid.Column>
      );
    })}
  </Grid>
);

export default Blogs;
