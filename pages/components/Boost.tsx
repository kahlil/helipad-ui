import {
  Avatar,
  Box,
  Stack,
  Stat,
  StatHelpText,
  StatNumber,
  Text,
  useColorMode,
  AvatarBadge,
  Button,
  Flex,
  Spacer,
} from '@chakra-ui/react'
import { Boostagram } from './Boostagram'

let podcastAppAvatar: string

const podFriendAvatar =
  'https://pbs.twimg.com/profile_images/1307729215610068995/q3gdnuKS_400x400.jpg'
const fountainAvatar =
  'https://pbs.twimg.com/profile_images/1421531707635904517/PSFSQdmP_400x400.jpg'

function Boost({
  amount,
  from,
  via,
  podcast,
  boostagram,
  compact = false,
  unread = false,
}: {
  amount: string
  from?: string
  via?: string
  podcast?: string
  boostagram?: string
  compact?: boolean
  unread?: boolean
}) {
  const { colorMode, toggleColorMode } = useColorMode()

  switch (via) {
    case 'Podfriend':
      podcastAppAvatar = podFriendAvatar
      break

    case 'Fountain':
      podcastAppAvatar = fountainAvatar
      break

    default:
      break
  }

  return (
    <Box
      px={4}
      pt={4}
      pb={2}
      position="relative"
      backgroundColor={colorMode === 'light' ? 'white' : 'gray.700'}
    >
      <Stack direction="row" spacing={4}>
        <Avatar size={compact ? 'md' : 'lg'} name={via} src={podcastAppAvatar}>
          {unread && !compact ? (
            <AvatarBadge boxSize="1em" bg="green.400" />
          ) : null}
        </Avatar>{' '}
        <Stat>
          <StatNumber fontSize={compact ? 'lg' : 'xl'}>
            {amount} <i className="fak fa-satoshisymbol-solid"></i>
          </StatNumber>
          <StatHelpText fontSize={compact ? 'xs' : 'md'}>
            from <strong>{from}</strong> via <strong>{via}</strong> while
            listening to <strong>{podcast}</strong>
          </StatHelpText>
        </Stat>
      </Stack>

      <Boostagram boostagram={boostagram} compact={compact} />

      {unread && !compact ? (
        <Flex pt={4}>
          <Text
            pt={2}
            fontSize="xs"
            color={colorMode === 'light' ? 'gray.400' : 'gray.500'}
          >
            4 days ago
          </Text>
          <Spacer />
          <Button size="sm">Mark as read</Button>
        </Flex>
      ) : (
        <Flex pt={4}>
          <Text
            pt={2}
            fontSize="xs"
            color={colorMode === 'light' ? 'gray.400' : 'gray.500'}
          >
            4 days ago
          </Text>
        </Flex>
      )}
    </Box>
  )
}

export { Boost }
