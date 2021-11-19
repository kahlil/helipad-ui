import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Stack,
} from '@chakra-ui/react'
import { Boost } from './components/Boost'
import { ThemeToggleButton } from './components/ThemeToggleButton'

function Home() {
  return (
    <>
      <Box>
        <Container maxW="72rem">
          <Heading py={4} size="s">
            Boostagram App
          </Heading>
        </Container>
        <Divider />
      </Box>
      <Box backgroundColor="gray.100">
        <Container maxW="72rem">
          <Flex>
            <Center pr={4}>
              <Stack spacing={4} my={6}>
                <Boost
                  amount="1000"
                  from="Dave"
                  via="Podfriend"
                  podcast="No Agenda"
                />
                <Boost
                  amount="2500"
                  from="Kahlil"
                  via="Fountain"
                  podcast="Podcasting 2.0"
                  boostagram="Yo! Fauci boost 🎉"
                />
                <Boost
                  amount="500.000"
                  from="Anonymous"
                  via="Podfriend"
                  podcast="Podcasting 2.0"
                  boostagram="Just testing the boostagram functionality. Hey Dave and Adan how did you actually meet?"
                />
                <Boost
                  amount="1000"
                  from="Anonymous"
                  via="Fountain"
                  podcast="No Agenda"
                />
                <Boost
                  amount="7777"
                  from="Jame Dennifer"
                  via="Podfriend"
                  podcast="Moe Factz with Adam Curry"
                  boostagram="Running my Sphinx dry..."
                />
              </Stack>
            </Center>
            <Box>
              <Stack spacing={4} my={6}>
                <Boost
                  amount="2500"
                  from="Kahlil"
                  via="Fountain"
                  podcast="Podcasting 2.0"
                  boostagram="Yo! Fauci boost 🎉"
                />
                <Boost
                  amount="500.000"
                  from="Anonymous"
                  via="Podfriend"
                  podcast="Podcasting 2.0"
                  boostagram="Just testing the boostagram functionality. Hey Dave and Adan how did you actually meet?"
                />

                <Boost
                  amount="7777"
                  from="Jame Dennifer"
                  via="Podfriend"
                  podcast="Moe Factz with Adam Curry"
                  boostagram="Running my Sphinx dry..."
                />
              </Stack>
            </Box>
          </Flex>

          <ThemeToggleButton />
        </Container>
      </Box>
    </>
  )
}

export default Home
