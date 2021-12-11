import { useState } from 'react'
import { BoostInbox } from '../components/BoostInbox'
import { BoostStream } from '../components/BoostStream'
import { BoostsView } from '../components/BoostsView'
import { Header } from '../components/Header'
import { useBoosts } from '../hooks/useBoosts'

function Home() {
  const [boosts, setBoosts] = useBoosts()
  return (
    <>
      <Header />
      <BoostsView>
        <BoostStream boosts={boosts} />
        <BoostInbox boosts={boosts} setBoosts={setBoosts} />
      </BoostsView>
    </>
  )
}

export default Home
