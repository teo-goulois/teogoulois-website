import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="REST Country">
    <Container>
      <Title>
      REST Country <Badge>2021-</Badge>
      </Title>
      <P>
      A website where you can search for some country and get some information about it.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://rest-country-api-by-teo.netlify.app/">
          https://rest-country-api-by-teo.netlify.app/{' '}
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

      <WorkImage src="/images/works/country.jpeg" alt="rest-country" />
    </Container>
  </Layout>
)

export default Work
