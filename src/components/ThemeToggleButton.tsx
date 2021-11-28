import { Button, Center, useColorMode } from '@chakra-ui/react'

function ThemeToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Center mt="6">
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </Center>
  )
}

export { ThemeToggleButton }
