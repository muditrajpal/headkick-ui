import React from 'react'
import {
  Grid,
  Image
} from 'semantic-ui-react'
import {Blogs} from './Blogs'

export const GridExampleVerticallyDivided = () => (
  <Grid className='gridview' divided='vertically'>
    <Grid.Row columns={2}>
      <Grid.Column width={10}>
        <Image src='https://via.placeholder.com/300.png/09f/fff' />
      </Grid.Column>
      <Grid.Column width={6}>
        <Image src='https://via.placeholder.com/300.png/09f/fff' />
      </Grid.Column>
    </Grid.Row>

    {Blogs()}

  </Grid>
)