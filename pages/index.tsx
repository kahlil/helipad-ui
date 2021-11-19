import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Stack,
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
          <Heading py={4} size="s">
            Boostagram
          </Heading>
        </Container>
        <Divider />
      </Box>
      <Box backgroundColor={colorMode === 'light' ? 'gray.100' : 'transparent'}>
        <Container maxW="72rem">
          <Flex>
            <Center pr={8} width={400}>
              <Stack spacing={0} my={4}>
                <Heading fontWeight="normal" color="gray.500" size="xs" pb="4">
                  Stream
                </Heading>
                {boosts.map((boost: any, index: number) => {
                  return (
                    <>
                      <Boost
                        key={index}
                        amount={boost.amount}
                        from={boost.from}
                        via={boost.via}
                        podcast={boost.podcast}
                        boostagram={boost.boostagram}
                        compact={true}
                      />
                      <Divider />
                    </>
                  )
                })}
              </Stack>
            </Center>
            <Box>
              <Stack spacing={0} my={4}>
                <Heading fontWeight="normal" color="gray.500" size="xs" pb="4">
                  Boostagram Inbox
                </Heading>
                <Box
                  p={4}
                  backgroundColor={
                    colorMode == 'light' ? 'gray.200' : 'gray.600'
                  }
                >
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
                          <Divider />
                        </>
                      )
                    }
                    return null
                  })}
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
