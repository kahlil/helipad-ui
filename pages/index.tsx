import { Box, Container, Flex, useColorMode } from '@chakra-ui/react'
import { BoostInbox, BoostStream } from './components/BoostStream'
import { Header } from './components/Header'
import { ThemeToggleButton } from './components/ThemeToggleButton'
import { useBoosts } from './hooks/useBoosts'

function Home() {
  const { colorMode } = useColorMode()
  const boosts = useBoosts()
  return (
    <>
      <Header />
      <Box backgroundColor={colorMode === 'light' ? 'gray.100' : 'transparent'}>
        <Container maxW="72rem">
          <Flex>
            <BoostStream boosts={boosts} />
            <BoostInbox boosts={boosts} />
          </Flex>
          <ThemeToggleButton />
        </Container>
      </Box>
    </>
  )
}

export default Home
