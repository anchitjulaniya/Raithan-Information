import './App.css'
import Modal from './Components/Modal/Modal';
import Information from './Pages/Information'
import { useState } from 'react'


function App() {
  const [openModal, setopenModal] = useState(false);
  
  return (
    <div className=''>
      <Information setopenModal={setopenModal} />
      {openModal && <Modal openModal={openModal} setopenModal={setopenModal} />}
    </div>
  )
}

export default App
