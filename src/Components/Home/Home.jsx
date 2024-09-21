import React from 'react'
import logo1 from '../../assets/logo1.jpg'
import logo2 from '../../assets/logo2.jpg'
import Mainform from '../Mainform/Mainform'
import Subjects from '../Subjects/Subjects'
export default function Home() {
  return (
    <>
    
   <div className="container mx-auto border-b-8 border-cyan-200 pb-2 flex justify-around items-center">
   

   {/* Uni Logo */}
   <div>
    <img src={logo2} alt="Damnhour university logo" />
   </div>

    {/* faculty Logo */}
    <div className='flex flex-col items-center justify-center mb-4'>
   <img src={logo1} alt="Logo of Faculty" className=' mx-auto'  />

<h1 className='font-extrabold text-lg font-serif'>كلية الحاسبات و المعلومات</h1>
   </div>

   </div>

   

   <Mainform/>

   <Subjects/>

   <div>
<button type='submit' className='bg-cyan-500 text-white w-1/4 py-2 text-xl hover:bg-cyan-600 rounded-md my-5'>
 حفظ
</button>
</div>
    
    </>
  )
}
