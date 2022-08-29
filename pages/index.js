import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue,
  useToast
} from '@chakra-ui/react'
import axios from 'axios'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Input from '../components/input'
import Arrow from '../components/arrow'
import Carousel from '../components/carousel'
import ImgCarousel from '../components/imgCarousel'
import { useState } from 'react'

function Page() {
  const toast = useToast()
  const [formData, setFormData] = useState({ from: '', name: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleEmail = async () => {
    setLoading(true)
    const res = await axios.post(`/api/email/send`, {
      from: formData.from,
      name: formData.name,
      message: formData.message
    })
    if (res.status === 200) {
      toast({
        title: 'message send.',
        status: 'success',
        duration: 9000,
        isClosable: true
      })
    } else {
      toast({
        title: 'an error occured please try again later.',
        description: res.data.error,
        status: 'error',
        duration: 9000,
        isClosable: true
      })
    }
    setLoading(false)
  }

  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        textAlign="center"
        mt={6}
      >
        Hello i’m a junior developper base in france
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            teo goulois
          </Heading>
          <p>junior developper react / Nextjs / fullstack </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="90px"
            display="inline-block"
            borderRadius="full"
            src="/images/profile-pic.png"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
          Hello, I'm Téo and a self-taught developer looking for professional
          experience, I started learning to code during the first lockdown in
          France. I started with python then I followed the twelve week of CS50
          and then I started learning web with React. React is the technology
          that I studied the most with NodeJS for the backend part. If I want to
          work in this domain it's because during my journey of learningI liked
          to worked and improving my comprehension of the technologies. Morever
          everything you do, is in way different from the last time, i think we
          can't be bored, and for that I wanted to be part of this wide world.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section>
        <Heading as="h3" variant="section-title">
          technologies
        </Heading>
        <Paragraph>
          React, TypeScript, nodeJS, Socket.io, Redux, MongoDB, Flutter, Python,
          AWS, Firebase...
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Works
        </Heading>
        <Box>
          <Carousel show={2} infiniteLoop={true}>
            <ImgCarousel
              text="Tweeter"
              img="/images/works/tweeter.png"
              url="tweeter"
            />
            <ImgCarousel
              text="Weather App"
              img="/images/works/weather.png"
              url="weather-app"
            />
            <ImgCarousel
              text="Country Quiz"
              img="/images/works/countryQuiz.png"
              url="countryQuiz"
            />
            <ImgCarousel
              text="Random Quote Generator"
              img="/images/works/quoteGenerator.png"
              url="quoteGenerator"
            />
            <ImgCarousel
              text="Prechat"
              img="/images/works/prechat.jpeg"
              url="tweeter"
            />
            <ImgCarousel
              text="Rest country"
              img="/images/works/country.jpeg"
              url="rest-country"
            />
            <ImgCarousel
              text="Studhelp"
              img="/images/works/studhelp.jpeg"
              url="prechat"
            />
            <ImgCarousel
              text="Ip-tracker"
              img="/images/works/tracker.jpeg"
              url="ip-tracker"
            />
          </Carousel>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Contact
        </Heading>
        <Box>
          <Input
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            placeholder="name"
          />
          <Input
            onChange={e => setFormData({ ...formData, from: e.target.value })}
            placeholder="your email"
          />
          <Input
            onChange={e =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="message"
          />
          <Button
            onClick={handleEmail}
            rightIcon={<ChevronRightIcon />}
            colorScheme="gray"
          >
            {loading ? <p>sending...</p> : <p>send</p>}
          </Button>
        </Box>
      </Section>
    </Container>
  )
}

export default Page
