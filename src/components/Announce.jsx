import { Close } from '@material-ui/icons'
import React, { useState } from 'react'

function Announce() {
    const [announceStyle,setAnnounceStyle] = useState('bg-purple-600 font-bold text-white flex items-center justify-center');

    const handleClose = ()=> {
        setAnnounceStyle(announceStyle + " hidden") //space so that our hidden will work properly
    }
  return <div className={announceStyle}>
        <h2>Hurry up it's 40% off now</h2>
        <Close className='cursor-pointer' onClick = {handleClose} />
    </div>
  
}

export default Announce