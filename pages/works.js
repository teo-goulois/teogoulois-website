import { Container, Heading, SimpleGrid, Divider, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import test from '../public/images/test.jpg'
import challenge5 from '../public/images/works/challenge5.jpeg'
import country from '../public/images/works/country.jpeg'
import studhelp from '../public/images/works/studhelp.jpeg'
import tracker from '../public/images/works/tracker.jpeg'
import prechat from '../public/images/works/prechat.jpeg'
import tweeter from '../public/images/works/tweeter.png'
import weather from '../public/images/works/weather.png'
import countryQuiz from '../public/images/works/countryQuiz.png'
import quoteGenerator from '../public/images/works/quoteGenerator.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        devChallenges
      </Heading>
      <Heading as="p" fontWeight={400} fontSize={14} mb={4}>
        some challenges create on{' '}
        <Link as={'u'} href="https://devchallenges.io/" isExternal>
          devChallenges.io
        </Link>
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="tweeter" title="Tweeter" thumbnail={tweeter}>
            It's a simplifed clone of tweeter created after a challenge on
            devChallenges.io
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="weather-app"
            title="Weather App"
            thumbnail={weather}
          >
            A simple weather application based on your current location.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="countryQuiz"
            title="Country Quiz"
            thumbnail={countryQuiz}
          >
            Test your knowledge of countries with this little Country Quiz.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="quoteGenerator"
            thumbnail={quoteGenerator}
            title="Random Quote Generator"
          >
            you lack some inspiration, find them with random quote generator.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    <Heading fontSize={16} fontWeight="500" mb={4} >
      If you want to see more of my work you can check my github{' '}
      <Link href='https://github.com/teo-goulois' isExternal >teogoulois</Link>{' '}
    </Heading>
    </Container>


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
