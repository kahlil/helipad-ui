import { Box, Heading, Stack, useColorMode } from '@chakra-ui/react'
import { Boost } from './Boost'

const BoostStream = ({ boosts }: any) => {
  const { colorMode } = useColorMode()
  return (
    <Box pr={8} width={400}>
      <Stack spacing={1} my={4}>
        <Heading pb={1} color={colorMode == 'light' ? 'gray.400' : 'gray.600'}>
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
  const { colorMode } = useColorMode()
  return (
    <Box>
      <Stack spacing={0} my={4}>
        <Heading pb={2} color={colorMode == 'light' ? 'gray.400' : 'gray.600'}>
          Inbox
        </Heading>
        <Box
          p={4}
          backgroundColor={colorMode == 'light' ? 'gray.200' : 'gray.600'}
        >
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
