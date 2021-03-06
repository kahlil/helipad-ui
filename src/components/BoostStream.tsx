import { Box, Heading, Stack, useColorModeValue } from '@chakra-ui/react'
import { Boost } from './Boost'

const BoostStream = ({ boosts }: any) => {
  const color = useColorModeValue('gray.400', 'gray.600')
  return (
    <Box pr={{ md: 8 }} minWidth={{ md: 400 }}>
      <Box my={4}>
        <Heading pb={2} color={color}>
          Stream
        </Heading>
        <Stack spacing={1} height={'calc(100vh - 170px)'} overflow="scroll">
          {boosts.map((boost: any, index: number) => {
            return <Boost key={index} compact={true} {...boost} />
          })}
        </Stack>
      </Box>
    </Box>
  )
}

export { BoostStream }
