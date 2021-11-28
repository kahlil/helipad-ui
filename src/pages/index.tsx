import { BoostInbox } from '../components/BoostInbox'
import { BoostStream } from '../components/BoostStream'
import { BoostsView } from '../components/BoostsView'
import { Header } from '../components/Header'
import { useBoosts } from '../hooks/useBoosts'

function Home() {
  const boosts = useBoosts()
  return (
    <>
      <Header />
      <BoostsView>
        <BoostStream boosts={boosts} />
        <BoostInbox boosts={boosts} />
      </BoostsView>
    </>
  )
}

export default Home
