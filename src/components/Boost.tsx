import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  Spacer,
  Stack,
  Stat,
  StatHelpText,
  StatNumber,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { appAvatars } from '../data/appAvatars'
import { Boostagram } from './Boostagram'

const Timestamp = ({ time, color }: { time: number; color: string }) => (
  <Text pt={2} fontSize="xs" color={color}>
    {formatDistanceToNow(time)} ago
  </Text>
)

function Boost({
  time,
  value_msat,
  sender,
  app,
  podcast,
  message,
  compact = false,
  unread = false,
}: {
  time: number
  value_msat: number
  sender?: string
  app?: string
  podcast?: string
  message?: string
  compact?: boolean
  unread?: boolean
}) {
  const bg = useColorModeValue('white', 'gray.700')
  const color = useColorModeValue('gray.400', 'gray.500')

  return (
    <Box px={4} pt={4} pb={2} position="relative" bg={bg}>
      <Stack direction="row" spacing={4}>
        <Avatar
          size={compact ? 'md' : 'lg'}
          name={app}
          src={app ? appAvatars[app] : undefined}
        >
          {unread && !compact ? (
            <AvatarBadge boxSize="1em" bg="green.400" />
          ) : null}
        </Avatar>{' '}
        <Stat>
          <StatNumber fontSize={compact ? 'lg' : 'xl'}>
            {value_msat} <i className="fak fa-satoshisymbol-solid"></i>
          </StatNumber>
          <StatHelpText fontSize={compact ? 'xs' : 'md'}>
            from <strong>{sender}</strong> via <strong>{app}</strong> while
            listening to <strong>{podcast}</strong>
          </StatHelpText>
        </Stat>
      </Stack>

      <Boostagram boostagram={message} compact={compact} />

      {unread && !compact ? (
        <Flex pt={4}>
          <Timestamp time={time} color={color} />
          <Spacer />
          <Button size="sm">Mark as read</Button>
        </Flex>
      ) : (
        <Flex pt={0}>
          <Timestamp time={time} color={color} />
        </Flex>
      )}
    </Box>
  )
}

export { Boost }
