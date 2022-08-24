import { Typography } from 'antd'
import React from 'react'

const { Title, Paragraph} = Typography
const About = () => {
  return (
    <>
      <Typography style={{textAlign: "center"}}>
        <Title level={3}>About</Title>
        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ducimus aliquid delectus ipsa quisquam, rem repellat minus ipsam velit animi quia officia dolor molestiae modi fuga tenetur consequuntur. Non, a.</Paragraph>
      </Typography>
    </>
  )
}

export default About