import Link from 'next/link'
import React, { useState } from 'react'

const Signup = () => {

    const [credentials, setCedentials] = useState({ firstname:"", lastname:"",email: "", password: "" })
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleChange = (e) => {
        setCedentials({ ...credentials, [e.target.name]: e.target.value })
    }
  return (
    <div style={{
        height: '90vh',
        backgroundImage:
            'url("https://images.pexels.com/photos/12035802/pexels-photo-12035802.jpeg?auto=compress&cs=tinysrgb&w=600")',
        backgroundSize: "cover",

    }}
        className=' flex  justify-center items-center'
    >
        <div className=' container w-full max-w-md'>
            <form
                onSubmit={handleSubmit}
                className=' bg-gray-100 dark:bg-gray-900 dark:text-gray-100 border-gradiant rounded-lg  shadow-2xl px-8 pt-6 pb-8 mb-4'
            >
                  <div>
                    <label htmlFor='firstname'
                        className=' block text-gray-700 dar:text-gray-300 text-sm font-bold mb-2 '
                    >First Name</label>
                    <input name='firstname' type='text' placeholder='First Name' required
                        className=' shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-pink-500  text-gray-700'
                        onChange={handleChange}
                        value={credentials.firstname}

                    />
                </div>
                <div>
                    <label htmlFor='lastname'
                        className=' block text-gray-700 dar:text-gray-300 text-sm font-bold mb-2 '
                    >Last Name</label>
                    <input name='lastname' type='text' placeholder='Last name' required
                        className=' shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-pink-500  text-gray-700'
                        onChange={handleChange}
                        value={credentials.lastname}

                    />
                </div>

                <div>
                    <label htmlFor='email'
                        className=' block text-gray-700 dar:text-gray-300 text-sm font-bold mb-2 '
                    >Email</label>
                    <input name='email' type='email' required placeholder='Email'
                        className=' shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-pink-500  text-gray-700'
                        onChange={handleChange}
                        value={credentials.email}

                    />
                </div>
                <div>
                    <label htmlFor='pwd'
                        className=' block text-gray-700 dar:text-gray-300 text-sm font-bold mb-2 '
                    >Password</label>
                    <input name='password' type='passsword' required placeholder='********'
                        className=' shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-pink-500  text-gray-700'
                        onChange={handleChange}
                        value={credentials.password}

                    />
                </div>
                <button
                    type='submit'
                    className=' border text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded mr-2 p-2 hover:bg-gradient-to-r mt-2  from-pink-500 via-orange-500 to-red-500 hover:text-gray-100'
                >
                    Signup
                </button>
                <Link
                   href={'/login'}
                   style={{all:'unset'}}
                >
                <button
                    type='submit'
                    className=' border text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded mr-2 p-2 hover:bg-gradient-to-r mt-2  from-pink-500 via-orange-500 to-red-500 hover:text-gray-100'
                >
                    Already User?
                </button>
                </Link>

            </form>

        </div>

    </div>
  )
}

export default Signup
