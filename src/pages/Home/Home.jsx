import { Helmet } from 'react-helmet-async'
import useUserBio from '../../hooks/useUserBio'
import ViewBiodataCard from '../Dashboard/User/ViewBiodata/ViewBiodataCard'
import PremiumCard from '../../components/Home/Premium/PremiumCard'
import Banner from '../../components/Home/Banner/Banner'
// import useStatus from '../../hooks/useStatus'
import { useEffect, useState } from 'react'
import HowItWorks from '../../components/Home/HowItWorks/HowItWorks'
import CountDown from '../../components/Home/CountDown/CountDown'
import SuccessStory from '../../components/Home/SuccessStory/SuccessStory'
import Heading from '../../components/Shared/Heading'
import FAQ from '../../components/Home/FAQ/FAQ'
// import Plants from '../../components/Home/Plants'

const Home = () => {
  // const [role]=useUserBio()
  const [premium, setPremium] = useState([])
  // const [sort, setSort] = useState("")
  // const [status]=useStatus()
  useEffect(() => {
    fetchPremium()
    // fetch(`${import.meta.env.VITE_API_URL}/premium-user`)
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //     setPremium(data)
    //   })
  }, [])
  const fetchPremium = ()=>{
    fetch(`${import.meta.env.VITE_API_URL}/premium-user`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setPremium(data)
    })
  }
  const sortUsers = (order) => {
    console.log(order)
    
    if (order === 'asc') {

      const sortedAsc = [...premium].sort((a, b) => a.age - b.age);
      
      setPremium(sortedAsc)
      return
    }
    const sortedDesc = [...premium].sort((a, b) => b.age - a.age);
    setPremium(sortedDesc)
  };
  
  return (
    <div className='container mx-auto space-y-10'>
      <Helmet>
        <title> Bangla Matrimony | Choose Your Desired Partner</title>
      </Helmet>
      <div>
        <Banner></Banner>

      </div>
      <div className=''>
        <Heading title={"PREMIUM MEMBER"} subtitle={"Here tou can find premium member"} center={true}></Heading>
        <div className='mt-10'>
          <select
            name='category'
            id='category'
            className='border p-4 rounded-md'
            onChange={(e) => sortUsers(e.target.value)}
          // value={sort}
          >
            <option value=''>Sort By Deadline</option>
            <option value='dsc'>Descending Order</option>
            <option value='asc'>Ascending Order</option>
          </select>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

          {
            premium.slice(0,6).map(item => <PremiumCard item={item} key={item._id}></PremiumCard>)
          }
        </div>

      </div>
      <div>
        <HowItWorks></HowItWorks>
      </div>
      <div>
        <CountDown></CountDown>
      </div>
      <div>
        <SuccessStory></SuccessStory>
      </div>
      <div>
        <FAQ/>
      </div>
    </div>
  )
}

export default Home
