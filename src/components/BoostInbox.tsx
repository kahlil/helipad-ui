import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { Boost } from './Boost'

const BoostInbox = ({ boosts }: any) => {
  const color = useColorModeValue('gray.400', 'gray.600')
  const bg = useColorModeValue('gray.200', 'gray.600')
  return (
    <Box>
      <Stack spacing={0} my={4}>
        <Flex>
          <Heading pb={2} color={color}>
            Inbox
          </Heading>
          <Spacer />
          <Button>Show read boostagrams</Button>
        </Flex>
        <Box p={4} bg={bg}>
          <Stack spacing={1}>
            {boosts.map((boost: any, index: number) =>
              boost.message ? <Boost key={index} {...boost} /> : null
            )}
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export { BoostInbox }
