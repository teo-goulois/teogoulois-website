import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="tweeter">
    <Container>
      <Title>
        Tweeter <Badge>2022-</Badge>
      </Title>
      <P>
        It's a simplifed clone of tweeter created after a challenge on
        devChallenges.io
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://tweeter-dev-challenges.vercel.app/explore">
            https://tweeter-dev-challenges.vercel.app/explore{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>TpeScript, Nextjs, React, MongoDB, SWR, Pusher</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/tweeter.png" alt="studhelp" />
      <WorkImage src="/images/works/tweeter2.png" alt="studhelp" />
    </Container>
  </Layout>
)

export default Work
