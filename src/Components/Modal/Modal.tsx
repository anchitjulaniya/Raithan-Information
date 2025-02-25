import React from 'react'

type Props = {
  setopenModal: React.Dispatch<React.SetStateAction<boolean>>,
}

const Modal: React.FC<Props> = ({ setopenModal }) => {
  const handleClickCloseModal = ()=> {
    setopenModal(false);
  }
  return (
    <div className='w-full z-50 h-[100vh] fixed top-0 left-0 right-0 bottom-0 bg-[rgba(10,10,10,0.5)] flex justify-center items-center'>
      <div className='max-h-[80%] max-w-[90%] h-[600px] w-[600px] bg-white rounded-xl shadow-xl relative'>
        <button onClick={handleClickCloseModal} className='hover:cursor-pointer hover:scale-125 duration-300 absolute top-3 right-2 drop-shadow-md p-1'>❌</button>
      </div>
    </div>
  )
}

export default Modal