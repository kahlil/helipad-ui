import {
  Avatar,
  Box,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  useColorMode,
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
}: {
  amount: string
  from: string
  via: string
  podcast: string
  boostagram?: string
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
      boxShadow="md"
      borderRadius="xl"
      backgroundColor="white"
    >
      <Stack direction="row" spacing={4}>
        <Avatar size="lg" name={via} src={podcastAppAvatar} />{' '}
        <Stat>
          <StatLabel>{boostagram ? 'Boostagram' : 'Boost'}</StatLabel>
          <StatNumber>
            {amount} <i className="fak fa-satoshisymbol-solid"></i>
          </StatNumber>
          <StatHelpText>
            from <strong>{from}</strong> via <strong>{via}</strong> while
            listening to <strong>{podcast}</strong>
          </StatHelpText>
        </Stat>
      </Stack>

      <Boostagram boostagram={boostagram} />

      <Text
        pt={2}
        fontSize="xs"
        color={colorMode === 'light' ? 'gray.300' : 'gray.600'}
      >
        4 days ago
      </Text>
    </Box>
  )
}

export { Boost }
