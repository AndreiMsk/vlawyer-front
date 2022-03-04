import Hero from 'components/home/hero'
import InfoMatic from 'components/home/infomatic'
import Incentives from 'components/home/incentives'
import JoinTeam from 'components/home/join'
import Layout from 'layouts/default'

const Home = () =>  {
  return (
    <div>
      <Hero />
      <InfoMatic />
      <Incentives />
      <JoinTeam />
    </div>
  )
}

/* get default layout */
Home.getLayout = function getLayout(page) {
  return (
      <Layout>{page}</Layout>
  )
}

export default Home;
