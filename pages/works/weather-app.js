import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="tweeter">
    <Container>
      <Title>
        Weather App <Badge>2022-</Badge>
      </Title>
      <P>A simple weather application based on your current location.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://dev-challenges-weather-app.vercel.app/">
            https://dev-challenges-weather-app.vercel.app/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>TpeScript, Nextjs, React, tailwindcss</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/weather.png" alt="weather app" />
    </Container>
  </Layout>
)

export default Work
