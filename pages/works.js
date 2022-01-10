import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import test from '../public/images/test.jpg'
import challenge5 from '../public/images/works/challenge5.jpeg'
import country from '../public/images/works/country.jpeg'
import studhelp from '../public/images/works/studhelp.jpeg'
import tracker from '../public/images/works/tracker.jpeg'
import prechat from '../public/images/works/prechat.jpeg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="rest-country"
            title="REST-Country"
            thumbnail={country}
          >
            A website where you can search for some country and get some
            information about it.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="studhelp" title="studhelp" thumbnail={studhelp}>
            An attempt to make a social media for student where you can post,
            Create some courses and talk privatly with your friends
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="ip-tracker" title="IP-Tracker" thumbnail={tracker}>
            track your IP or one of someone else and see where he is on the map.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="prechat" thumbnail={prechat} title="Prechat">
            a web application to speak with the peoples around you and create
            community
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
