import { Box, Divider, Text } from '@chakra-ui/react'

function Boostagram({ boostagram }: { boostagram?: string }) {
  return boostagram ? (
    <>
      <Divider mt={2} />
      <Box pt={4}>
        <Text>{boostagram}</Text>
      </Box>
    </>
  ) : null
}

export { Boostagram }
