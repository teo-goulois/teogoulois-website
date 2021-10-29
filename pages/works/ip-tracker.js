import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="IP Tracker">
    <Container>
      <Title>
      IP Tracker <Badge>2021-</Badge>
      </Title>
      <P>
      track your IP or one of someone else and see where he is on the map.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://ip-address-tracker-by-teo-g.netlify.app/">
          https://ip-address-tracker-by-teo-g.netlify.app/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/tracker.jpeg" alt="IP Tracker" />
    </Container>
  </Layout>
)

export default Work
