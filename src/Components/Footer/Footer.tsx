import raithanLogo from '../../assets/Images/raitanlogo.png'
import SocialLinks from '../SocialLinks/SocialLinks'

type Props = {}

const Footer = (props: Props) => {
  return (
    <section className="border-t border-gray-200 py-8">
      <div className='flex flex-col md:flex-row items-center py-6 w-full'>
      <div className='w-full md:w-1/2 flex items-center justify-center'>
        <img src={raithanLogo} alt="Logo" className="w-[102px]" />
      </div>
      <div className='w-full md:w-1/2 flex items-center justify-center'>
        <SocialLinks />
      </div>
      </div>
      <p className='text-center'>
      © 2024 Raitan. All Rights Reserved. Powered By RLK Infotech
      </p>
    </section>
  )
}

export default Footer