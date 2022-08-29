import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="tweeter">
    <Container>
      <Title>
        Country Quiz <Badge>2022-</Badge>
      </Title>
      <P>Test your knowledge of countries with this little Country Quiz.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://dev-challenges-country-quiz.vercel.app/">
            https://dev-challenges-country-quiz.vercel.app/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>TpeScript, Nextjs, React, tailwindcss, Xstate</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/countryQuiz.png" alt="country Quiz" />
    </Container>
  </Layout>
)

export default Work
