import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';



const ContactPart = () => {

  const initialState = { first_name: '', last_name: '' ,email:'',details:''}
    const [contactData, setContactData] = useState(initialState)
    const { first_name, last_name,email,details } = contactData;


  const handleChangeInput = e => {
    const { name, value } = e.target
    setContactData({...contactData, [name]:value})
}

const handleSubmit = async(e) => {
  e.preventDefault()
  const data={
    name:first_name+''+last_name,
    email,
    message: details
  }
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://tpplrshq4wmjtr7bvg2i24lpb40bussn.lambda-url.eu-north-1.on.aws/',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    toast(response.data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

  })
  .catch((error) => {
    console.log(error);
  });
 
  
  console.log(contactData)
  // dispatch(login(userData))
}
  return (
    <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="h1 font-red-hat-display mb-4">Let's get in touch</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.</p>
              </div>

              {/* Contact form */}
              <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="first-name">First Name <span className="text-red-600">*</span></label>
                    <input id="first-name" type="text" className="form-input w-full" placeholder="Enter your first name" required name="first_name"  onChange={handleChangeInput} value={first_name}/>
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="last-name">Last Name <span className="text-red-600">*</span></label>
                    <input id="last-name" type="text" className="form-input w-full" placeholder="Enter your last name" required onChange={handleChangeInput} name='last_name' value={last_name} />
                  </div>
                </div>
                {/* <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="company">Company <span className="text-red-600">*</span></label>
                    <input id="company" type="text" className="form-input w-full" placeholder="Enter your company name" required />
                  </div>
                </div> */}
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="phone">Email <span className="text-red-600">*</span></label>
                    <input id="phone" type="email" className="form-input w-full" placeholder="Enter your phone number" name='email' required onChange={handleChangeInput} value={email} />
                  </div>
                </div>
                
              
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full px-3">
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium" htmlFor="message">Details</label>
                      {/* <span className="text-sm text-gray-500">Optional</span> */}
                    </div>
                    <textarea id="message" rows="4" className="form-textarea w-full" placeholder="What do you want with us?" onChange={handleChangeInput} value={details} name='details'></textarea>
                  </div>
                </div>
               
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button className="btn text-white bg-teal-500 hover:bg-teal-400 w-full flex items-center" type='submit'>
                      <span>Send Message</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </section>
  )
}

export default ContactPart