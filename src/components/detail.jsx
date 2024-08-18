import React from 'react'
import { Color } from './color'

export const Detail = () => {
  return (
    <div className="absolute w-[250px] h-[298px]  bottom-0 mb-[31px] mr-[31px] right-0 opacity-90 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]  flex border border-[#FAF7F7] backdrop-blur-sm bg-[#E5E4E4] bg-opacity-80 rounded-[17px] shadow-md p-2 z-[1000]">
    <div className=" ml-4">
        <h2 className='mt-6 text-xl font-semibold'>Safety Levels </h2>
        <ul className=' text-[11px] leading-9'>
            <li className='mt-2 flex items-center'><Color color="#FF0000" /> Very Safe : Calm, Secure, Protected</li>
            <li className='mt-2 flex items-center'><Color color="#FFA500" /> Safe : Trust, Comfort, Stable</li>
            <li className='mt-2 flex items-center'><Color color="#FFFF00" /> Moderate : Caution, Alert, Watchful</li>
            <li className='mt-2 flex items-center'><Color color="#0000FF" /> Unsafe : Warning, Risk, Uncertain</li>
            <li className='mt-2 flex items-center'><Color color="#008000" /> Very Unsafe : Danger, Threat, Fear</li>
        </ul>
    </div>
  </div>
  )
}
