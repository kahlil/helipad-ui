import {
  Box,
  Container,
  Divider,
  Heading,
  Text,
  useColorMode,
} from '@chakra-ui/react'

const Header = () => {
  const { colorMode } = useColorMode()
  return (
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
  )
}

export { Header }
