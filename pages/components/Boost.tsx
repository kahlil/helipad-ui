import {
  Avatar,
  Box,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Divider,
  Text,
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
    <Box p={4} border="1px solid" borderColor="gray.400" borderRadius="md">
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
    </Box>
  )
}

export { Boost }
