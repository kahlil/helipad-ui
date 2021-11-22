import { Box, Container, Flex, useColorModeValue } from '@chakra-ui/react'
import { FC } from 'react'

const BoostsView: FC = ({ children }) => {
  const bg = useColorModeValue('gray.100', 'transparent')
  return (
    <Box bg={bg}>
      <Container maxW="72rem">
        <Flex>{children}</Flex>
      </Container>
    </Box>
  )
}

export { BoostsView }
