import { MoonIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Boost } from './components/Boost'
import { ThemeToggleButton } from './components/ThemeToggleButton'

function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  const [boosts, setBoosts] = useState<any>([])
  useEffect(() => {
    async function fetchBoosts() {
      const response = await fetch('/api/boosts')
      setBoosts(await response.json())
    }
    fetchBoosts()
  }, [])
  return (
    <>
      <Box>
        <Container maxW="72rem">
          <Heading
            mt={4}
            mb={2}
            size="md"
            color={colorMode == 'light' ? 'gray.600' : 'gray.600'}
          >
            Boostagram
          </Heading>
          <Text
            size="xs"
            mb={4}
            color={colorMode == 'light' ? 'gray.400' : 'gray.600'}
          >
            The offical Podcasting 2.0 Boostagram app for Umbrel
          </Text>
        </Container>
        <Divider />
      </Box>
      <Box backgroundColor={colorMode === 'light' ? 'gray.100' : 'transparent'}>
        <Container maxW="72rem">
          <Flex>
            <Box pr={8} width={400}>
              <Stack spacing={1} my={4}>
                <Heading
                  pb={1}
                  color={colorMode == 'light' ? 'gray.400' : 'gray.600'}
                >
                  Stream
                </Heading>
                {boosts.map((boost: any, index: number) => {
                  return (
                    <Boost
                      key={index}
                      amount={boost.amount}
                      from={boost.from}
                      via={boost.via}
                      podcast={boost.podcast}
                      boostagram={boost.boostagram}
                      compact={true}
                    />
                  )
                })}
              </Stack>
            </Box>
            <Box>
              <Stack spacing={0} my={4}>
                <Heading
                  pb={2}
                  color={colorMode == 'light' ? 'gray.400' : 'gray.600'}
                >
                  Inbox
                </Heading>
                <Box
                  p={4}
                  backgroundColor={
                    colorMode == 'light' ? 'gray.200' : 'gray.600'
                  }
                >
                  <Stack spacing={1}>
                    {boosts.map((boost: any, index: number) => {
                      if (boost.boostagram) {
                        return (
                          <>
                            <Boost
                              key={index}
                              amount={boost.amount}
                              from={boost.from}
                              via={boost.via}
                              podcast={boost.podcast}
                              boostagram={boost.boostagram}
                              unread={boost.unread}
                            />
                          </>
                        )
                      }
                      return null
                    })}
                  </Stack>
                </Box>
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
