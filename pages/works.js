import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import test from '../public/images/test.jpg'
import challenge5 from '../public/images/works/challenge5.jpeg'
import country from '../public/images/works/country.jpeg'
import studhelp from '../public/images/works/studhelp.jpeg'
import tracker from '../public/images/works/tracker.jpeg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="rest-country" title="REST-Country" thumbnail={country}>
            A website where you can search for some country and get some information about it.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="ip-tracker"
            title="IP-Tracker"
            thumbnail={tracker}
          >
            track your IP or one of someone else and see where he is on the map.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="studhelp"
            title="studhelp"
            thumbnail={studhelp}
          >
            An attempt to make a social media for student where you can post, Create 
            some courses and talk privatly with your friends
          </WorkGridItem>
        </Section>

        {/* <Section delay={0.1}>
          <WorkGridItem id="landing-page-5" thumbnail={challenge5} title="landing page 5">
            a simple landing page made with the help of frontendMentor.io
          </WorkGridItem>
        </Section> */}

      </SimpleGrid>

      {/* <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={test}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={test} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={test} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={test}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={test} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Works