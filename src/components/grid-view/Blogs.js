import React from 'react'
import {
  Grid,
  Image,
  Header,
  Button,
  Card,
  Icon
} from 'semantic-ui-react'

import blogData from './blog-data.json'

export const Blogs = () => (
  <React.Fragment>
    <Grid.Row columns={2}>
      <Grid.Column floated='left' width={8}>
        <Header as='h2'>Blogs</Header>
      </Grid.Column>
      <Grid.Column floated='right' width={8}>
        <Button floated='right' basic color='black'>See all <Icon name='arrow right'/></Button>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={3}>
    { blogData.map(blog => {
      const { id, title, time, author, lead } = blog
      return (
      <Grid.Column key={id}>
        <Card>
          <Image src='/pexels-stanley-morales-3148452.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>{time} min read</Card.Meta>
            <Card.Description>{lead.substring(0,100)}...</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href='#'>
              <Icon name='user'/>
              {author}
            </a>
            <Button basic floated='right'>
              Read more 
              <Icon name='arrow right'/>
            </Button>            
          </Card.Content>
        </Card>      
      </Grid.Column>
      )
    }) }
    </Grid.Row>
  </React.Fragment>
)