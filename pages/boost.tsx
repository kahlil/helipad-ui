import { Container, Stack } from '@chakra-ui/react'
import { ThemeToggleButton } from './components/ThemeToggleButton'
import { Boost } from './components/Boost'

function Home() {
  return (
    <Container>
      <Stack spacing={8} my={6}>
        <Boost amount="1000" from="Dave" via="Podfriend" podcast="No Agenda" />
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
      <ThemeToggleButton />
    </Container>
  )
}

export default Home
