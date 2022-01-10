import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="studhelp">
    <Container>
      <Title>
        Prechat <Badge>2021-</Badge>
      </Title>
      <P>
        a web application to speak with the peoples around you and create
        community
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://prechat-teo.herokuapp.com">
            https://prechat-teo.herokuapp.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>TpeScript, NodeJS, React, firebase, Socket.io, </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/prechat-1.jpeg" alt="prechat" />
      <WorkImage src="/images/works/prechat-2.jpeg" alt="prechat" />
    </Container>
  </Layout>
)

export default Work
