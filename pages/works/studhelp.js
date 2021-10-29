import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="studhelp">
    <Container>
      <Title>
        studhelp <Badge>2021-</Badge>
      </Title>
      <P>
        An attempt to make a social media for student where you can post, Create
        some courses and talk privatly with your friends.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://studhelp-v2.herokuapp.com">
            https://studhelp-v2.herokuapp.com/accueil{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>TpeScript, NodeJS, React, MongoDB, Redux, Socket.io, </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/studhelpAccueil.jpeg" alt="studhelp" />
      <WorkImage src="/images/works/studhelp.jpeg" alt="studhelp" />
    </Container>
  </Layout>
)

export default Work
