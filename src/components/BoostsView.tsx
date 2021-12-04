import { Box, Container, Flex, useColorModeValue } from '@chakra-ui/react'
import { FC } from 'react'

const BoostsView: FC = ({ children }) => {
  const bg = useColorModeValue('gray.200', 'transparent')
  return (
    <Box bg={bg}>
      <Container maxW="72rem">
        <Box display={{ md: 'flex' }}>{children}</Box>
      </Container>
    </Box>
  )
}

export { BoostsView }
