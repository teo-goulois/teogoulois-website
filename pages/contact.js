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
  useColorModeValue
} from '@chakra-ui/react'
import Input from '../components/input'
import { ChevronRightIcon } from '@chakra-ui/icons'
import axios from 'axios'
import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ from: '', name: '', message: '' })
  const [loading, setLoading] = useState(false)
  const handleEmail = async () => {
    setLoading(true)
    const res = await axios.post(`http://localhost:3000/api/email/send`, {
      from: formData.from,
      name: formData.name,
      message: formData.message
    })
    setLoading(false)
  }
  return (
    <Container>
      <Heading as="h2">Contact</Heading>
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
        <Button disabled={loading} onClick={handleEmail} rightIcon={<ChevronRightIcon />} colorScheme="gray">
          {loading ? <p>sending...</p> : <p>send</p>}
        </Button>
      </Box>
    </Container>
  )
}

export default Contact
