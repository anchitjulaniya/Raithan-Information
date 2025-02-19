import React from 'react'
import Footer from '../Components/Footer/Footer'
import Machines from '../assets/Images/Equipments/Machines.png'
import Implements from '../assets/Images/Equipments/Implements.jpg'
import EarthMovers from '../assets/Images/Equipments/EarthMovers.png'
import AgricultureLabour from '../assets/Images/Equipments/AgricultureLabour.png'
import Harvestor from '../assets/Images/Equipments/Harvestor.png'
import Drones from '../assets/Images/Equipments/Drones.png'
import PaddyTransplantors from '../assets/Images/Equipments/PaddyTransplantors.jpeg'
import Mechanics from '../assets/Images/Equipments/Mechanics.png'
import ImageCard from '../Components/ImageCard/ImageCard'
import Carousel from '../Components/Carousel/Carousel'

type Props = {
  
}

const Information: React.FC<Props> = ({setopenModal}) => {
 
   const handleClickImageCard = () => {
    setopenModal(true);

  }
  return (
    <div className='w-full flex flex-col'>
      <div className='px-10 py-8'>
        <Carousel />
      </div>
      <div className='flex flex-col md:flex-row flex-wrap items-center justify-center gap-3 md:gap-8'>
        <ImageCard Click={handleClickImageCard} imageSrc={Machines} altText="Machine Image" label="Machine" />
        <ImageCard Click={handleClickImageCard} imageSrc={EarthMovers} altText="Earth Movers" label="Earth Movers" />
        <ImageCard Click={handleClickImageCard} imageSrc={PaddyTransplantors} altText="Paddy Transplantors" label="Paddy Transplantors" />
        <ImageCard Click={handleClickImageCard} imageSrc={Drones} altText="Drones" label="Drones" />
        <ImageCard Click={handleClickImageCard} imageSrc={Harvestor} altText="Harvestor" label="Harvestor" />
        <ImageCard Click={handleClickImageCard} imageSrc={AgricultureLabour} altText="Agriculture Labour" label="Agriculture Labour" />
        <ImageCard Click={handleClickImageCard} imageSrc={Mechanics} altText="Mechanics" label="Mechanics" />
        <ImageCard Click={handleClickImageCard} imageSrc={Implements} altText="Implements" label="Implements" />
      </div>
      
      <Footer />
    </div>
  )
}

export default Information