import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Boost } from './Boost'

const BoostInbox = ({ boosts, setBoosts }: any) => {
  const [showUnread, setShowUnread] = useState(true)
  const color = useColorModeValue('gray.400', 'gray.600')
  const bg = useColorModeValue('gray.300', 'gray.600')
  const toggleUnread = (index: number) => {
    return () => {
      const newBoosts = boosts.map((boost: any) => {
        if (boost.index === index) {
          boost.unread = !boost.unread
        }
        return boost
      })
      console.log({ newBoosts })
      setBoosts(newBoosts)
    }
  }

  return (
    <Box minWidth={{ md: 600 }}>
      <Stack spacing={0} my={4}>
        <Flex>
          <Heading pb={2} color={color}>
            Inbox
          </Heading>
          <Spacer />
          <Button variant="link" onClick={() => setShowUnread(!showUnread)}>
            Show {showUnread ? 'read' : 'unread'} boostagrams
          </Button>
        </Flex>
        <Box p={4} bg={bg}>
          <Stack spacing={1} height={'calc(100vh - 203px)'} overflow="scroll">
            {boosts.map((boost: any) =>
              boost.message && boost.unread === showUnread ? (
                <Boost
                  key={boost.index}
                  {...boost}
                  onToggleUnread={toggleUnread(boost.index)}
                />
              ) : null
            )}
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export { BoostInbox }
