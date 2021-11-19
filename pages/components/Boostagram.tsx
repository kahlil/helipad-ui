import { Box, Divider, Text } from '@chakra-ui/react'

function Boostagram({
  boostagram,
  compact,
}: {
  boostagram?: string
  compact?: boolean
}) {
  return boostagram ? (
    <>
      <Box pt={4}>
        <Text fontSize={compact ? 'sm' : 'md'}>{boostagram}</Text>
      </Box>
    </>
  ) : null
}

export { Boostagram }
