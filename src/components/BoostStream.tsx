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

export { BoostStream }
