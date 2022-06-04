import { useState } from 'react';
import { useUsers } from '@/client/api';
import { AddDiagnosis } from '@/client/components';

export const Dashboard = () => {
  const [showModal, setShowModal] = useState(true)
  // const { data } = useUsers()
  const handleAdd = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

  return (
    <div className='container'>
      <div className='header'>
        <h2>
          Dashboard
        </h2>
        <button className='btn primaryBtn' onClick={handleAdd}>Add diagnosis</button>
      </div>
      <div className='details dashboardDetails'></div>

      {showModal ?
        <div className='modal'>
          <AddDiagnosis handleClose={handleClose} />
        </div> : null}
    </div>
  )
}