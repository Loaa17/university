import { useFormik } from 'formik'
import React, { useState } from 'react'
import axios from 'axios'
import * as Yup from "yup"
import  {useNavigate} from "react-router-dom"



export default function () {


  const navigate = useNavigate();
  const [ApiError, setApiError] = useState("")

  function hanleMainForm(studentData){

setisLoading(true)


// Call Api
axios.post(`API link` , studentData)
.then((res)=>{
if(res.message=="success"){
  localStorage.setItem("userToken" , res.token)
  navigate("/submited")
}
})

.catch((res)=>{
  setApiError(res.message)
})


  }



    // validation

let validationSchema = Yup.object().shape({

  arFullName: Yup.string().required("الاسم بالكامل مطلوب"),
  enFullName: Yup.string().required("Full Name is Required"),
  gmail: Yup.string().email("البريد الالكتروني غير صحيح").required("البريد الالكتروني مطلوب"),
  phone: Yup.string().matches(/^01[0125][0-9]{8}$/ , "رقم الهاتف غير صحيح").required("رقم الهاتف مطلوب"),
  parentPhone: Yup.string().matches(/^01[0125][0-9]{8}$/ , "رقم الهاتف غير صحيح").required("رقم هاتف ولي الامر مطلوب"),
  homeNum: Yup.string().matches(/^022[0-9]{7}$/).optional(),
  subPhone: Yup.string().matches(/^01[0125][0-9]{8}$/ , "رقم الهاتف غير صحيح").optional(),
  relative: Yup.string().min(2).max(10 , "اقصى عدد احرف هو 10 احرف").optional()

})


  // values
let formik = useFormik({
initialValues : {

arFullName:"",
enFullName:"",
gmail:"",
phone:"",
parentPhone:"",
homeNum:"",
subPhone:"",
relative:"",

},
validationSchema,
onSubmit : hanleMainForm,




});



  return (
    <>

<div className='container mx-auto border-b-8 border-cyan-200 pb-2'>
<form onSubmit={formik.handleSubmit} className='max-w-lg mx-auto my-5 '>

{/* arabic full name */}
<div className="relative z-0 w-full mb-5 group">
  <input 
  onBlur={formik.handleBlur}
  onChange={formik.handleChange}
  value={formik.values.arFullName}
  type="text" 
  name="arFullName" 
  id="arFullName"
   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" "  />
  <label htmlFor="arFullName" className="right-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> الاسم بالكامل بالعربية</label>
</div>

{/* english full name */}
<div className="relative z-0 w-full mb-5 group">
  <input 
  onBlur={formik.handleBlur}
  onChange={formik.handleChange}
  value={formik.values.enFullName}
  type="text" 
  name="enFullName"
   id="enFullName" 
   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" "  />
  <label htmlFor="enFullName" 
  className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name in English</label>
</div>


{/* gmail */}
<div className="relative z-0 w-full mb-5 group">
      <input 
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.gmail}
      type="email" 
      name="gmail"
       id="gmail"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" "  />
      <label htmlFor="gmail" className="right-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">البريد الالكتروني</label>
  </div>

{/* phone number */}
  <div className="relative z-0 w-full mb-5 group">
      <input
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.phone}
      type="tel" 
      name="phone" 
      id="phone" 
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" "  />
      <label htmlFor="phone" className="right-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">رقم الهاتف</label>
  </div>


{/*parent phone number*/}
<div className="relative z-0 w-full mb-5 group">
      <input
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.parentPhone}
      type="tel" 
      name="parentPhone" 
      id="parentPhone" 
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" "  />
      <label htmlFor="parentPhone" className="right-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">رقم هاتف ولي الامر</label>
  </div>

{/* options */}
  <div className='grid md:grid-cols-2 md:gap-6 '>

{/* home number */}
<div className="relative z-0 w-full  group ">
      <input
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.homeNum}
      type="tel" 
      name="homeNum" 
      id="homeNum" 
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" "  />
      <label htmlFor="homeNum" className="right-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-center"> وسيلة اتصال اخرى *اختياري</label>
  </div>

{/* relative of sub phone */}
  <div className="relative z-0 w-full  group">
      <input
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.relative}
      type="text" 
      name="relative" 
      id="relative" 
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" "  />
      <label htmlFor="relative" className="right-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> صلة القرابة بوسيلة الاتصال *اختياري </label>
  </div>

   {/*sub phone number */}
   <div className="relative z-0 w-full  group">
      <input
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.subPhone}
      type="tel" 
      name="subPhone" 
      id="subPhone" 
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" "  />
      <label htmlFor="subPhone" className="right-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">رقم هاتف ارضي *اختياري  </label>
  </div>


  </div>




</form>

</div>






        
    </>
  )
}
