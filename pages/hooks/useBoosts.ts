import { useEffect, useState } from 'react'

function useBoosts() {
  const [boosts, setBoosts] = useState<any>([])
  useEffect(() => {
    async function fetchBoosts() {
      const response = await fetch('/api/boosts')
      setBoosts(await response.json())
    }
    fetchBoosts()
  }, [])
  return boosts
}

export { useBoosts }
