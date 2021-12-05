import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Link,
  Spacer,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import { DownloadIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box>
      <Container maxW="72rem">
        <Flex alignItems="end">
          <Box>
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
          </Box>
          <Spacer />

          <Box pb={4}>
            <Link
              fontSize="md"
              href="/boosts.csv"
              download="boosts.csv"
              alt="Download boosts CSV"
              title="Download boosts CSV"
              _hover={{ opacity: 0.7 }}
            >
              <DownloadIcon mx="2px" />
            </Link>
          </Box>
          <Button
            size="sm"
            mb={3}
            ml={4}
            variant="ghost"
            onClick={toggleColorMode}
            title="Toggle color mode"
          >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Container>
      <Divider />
    </Box>
  )
}

export { Header }
