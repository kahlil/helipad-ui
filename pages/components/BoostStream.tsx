import { Box, Heading, Stack, useColorModeValue } from '@chakra-ui/react'
import { Boost } from './Boost'

const BoostStream = ({ boosts }: any) => {
  const color = useColorModeValue('gray.400', 'gray.600')
  return (
    <Box pr={8} width={400}>
      <Stack spacing={1} my={4}>
        <Heading pb={1} color={color}>
          Stream
        </Heading>
        {boosts.map((boost: any, index: number) => {
          return <Boost key={index} compact={true} {...boost} />
        })}
      </Stack>
    </Box>
  )
}

const BoostInbox = ({ boosts }: any) => {
  const color = useColorModeValue('gray.400', 'gray.600')
  const bg = useColorModeValue('gray.200', 'gray.600')
  return (
    <Box>
      <Stack spacing={0} my={4}>
        <Heading pb={2} color={color}>
          Inbox
        </Heading>
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

export { BoostStream, BoostInbox }
