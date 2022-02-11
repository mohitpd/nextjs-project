import {useState} from 'react';

export default function teach() {
    const [step, setStep] = useState(false);
    console.log(step);

    return (
        <form className='space-y-8 divide-y divide-gray-200 max-w-7xl mx-auto'>
            <div className='pt-8 divide-y max-w-5xl'>
                <div>
                    <h3 className='text-lg leading-6 font-medium text-gray-900'>Personal Information</h3>
                    <p className='mt-1 text-sm text-gray-500'>Use a permanent address where you can receive mail.</p>
                </div>
                <div className={`mt-6 grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 ${step ? `hidden` : `grid`}`}>
                    {/* Firstname */}
                    <div className='sm:col-span-3'>
                        <label htmlFor='first-name' className='block text-sm font-medium text-gray-700'>
                            First name
                        </label>
                        <div className='mt-1'>
                            <input type='text' name='first-name' id='first-name' autoComplete='given-name' className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md' />
                        </div>
                    </div>
                    {/* Lastname */}
                    <div className='sm:col-span-3'>
                        <label htmlFor='last-name' className='block text-sm font-medium text-gray-700'>
                            Last name
                        </label>
                        <div className='mt-1'>
                            <input type='text' name='last-name' id='last-name' autoComplete='family-name' className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md' />
                        </div>
                    </div>
                    {/* Email */}
                    <div className='sm:col-span-3'>
                        <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                            Email
                        </label>
                        <div className='mt-1 relative rounded-md shadow-sm'>
                            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                                </svg>
                            </div>
                            <input type='email' name='email' id='email' className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md' placeholder='you@example.com' />
                        </div>
                    </div>
                    {/* Phone Number */}
                    <div className='sm:col-span-3'>
                        <label htmlFor='phone-number' className='block text-sm font-medium text-gray-700'>
                            Phone Number
                        </label>
                        <div className='mt-1 relative rounded-md shadow-sm'>
                            <div className='absolute inset-y-0 left-0 flex items-center'>
                                <label htmlFor='country' className='sr-only'>
                                    Country
                                </label>
                                <select id='country' name='country' autoComplete='country' className='focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md'>
                                    <option>US</option>
                                    <option>CA</option>
                                    <option>EU</option>
                                </select>
                            </div>
                            <input type='text' name='phone-number' id='phone-number' className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md' placeholder='+1 (555) 987-6543' />
                        </div>
                    </div>
                    {/* Company Name */}
                    <div className='sm:col-span-3'>
                        <label htmlFor='first-name' className='block text-sm font-medium text-gray-700'>
                            Company name
                        </label>
                        <div className='mt-1'>
                            <input type='text' name='first-name' id='first-name' autoComplete='given-name' className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md' />
                        </div>
                    </div>
                    {/* Job Title */}
                    <div className='sm:col-span-3'>
                        <label htmlFor='last-name' className='block text-sm font-medium text-gray-700'>
                            Job Title
                        </label>
                        <div className='mt-1'>
                            <input type='text' name='last-name' id='last-name' autoComplete='family-name' className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md' />
                        </div>
                    </div>
                    {/* Linkedin Profile */}
                    <div className='sm:col-span-6'>
                        <label htmlFor='company-website' className='block text-sm font-medium text-gray-700'>
                            LinkedIn Profile Url
                        </label>
                        <div className='mt-1 relative rounded-md shadow-sm'>
                            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                <span className='text-gray-500 sm:text-sm'> https://www.linkedin.com/in/</span>
                            </div>
                            <input type='text' name='company-website' id='company-website' className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-[216px] sm:pl-[186px] sm:text-sm border-gray-300 rounded-md' placeholder='username' />
                        </div>
                    </div>
                    {/* Twitter Username */}
                    <div className='sm:col-span-6'>
                        <label htmlFor='company-website' className='block text-sm font-medium text-gray-700'>
                            Twitter Username
                        </label>
                        <div className='mt-1 relative rounded-md shadow-sm'>
                            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                <span className='text-gray-500 sm:text-sm'>@</span>
                            </div>
                            <input type='text' name='company-website' id='company-website' className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-[26px] sm:pl-6 sm:text-sm border-gray-300 rounded-md' placeholder='username' />
                        </div>
                    </div>
                    {/* Areas of Expertise */}
                    <div className='sm:col-span-6'>
                        <label htmlFor='country' className='block text-sm font-medium text-gray-700'>
                            Areas of Expertise
                        </label>
                        <div className='mt-1'>
                            <select id='country' name='country' autoComplete='country-name' className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'>
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                            </select>
                        </div>
                    </div>
                    {/* Next */}
                    <div className='sm:col-span-6 flex items-center justify-center'>
                        <button
                            type='button'
                            className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            onClick={() => {
                                setStep(true);
                            }}>
                            Next
                        </button>
                    </div>
                </div>
                <div className={`mt-6 grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 ${step ? `grid` : `hidden`}`}>
                    {/* Profile Picture */}
                    <div className='sm:col-span-5'>
                        <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                            Profile Picture
                        </label>
                        <div className='mt-1'>
                            <input id='email' name='email' type='file' autoComplete='email' className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md' />
                        </div>
                    </div>
                    {/* Brief Bio */}
                    <div className='sm:col-span-6'>
                        <label htmlFor='about' className='block text-sm font-medium text-gray-700'>
                            Brief Bio
                        </label>
                        <div className='mt-1'>
                            <textarea id='about' name='about' rows={3} className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md' defaultValue={''} />
                        </div>
                        <p className='mt-2 text-sm text-gray-500'>Write a few sentences about yourself.</p>
                    </div>
                    {/* Skills */}
                    <div className='sm:col-span-3'>
                        <label htmlFor='first-name' className='block text-sm font-medium text-gray-700'>
                            Skills
                        </label>
                        <div className='mt-1'>
                            <input type='text' name='first-name' id='first-name' autoComplete='given-name' className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md' />
                        </div>
                    </div>
                    {/* Per Hour */}
                    <div className='sm:col-span-6'>
                        <label htmlFor='company-website' className='block text-sm font-medium text-gray-700'>
                            Per Hour
                        </label>
                        <div className='mt-1 relative rounded-md shadow-sm'>
                            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                <span className='text-gray-500 sm:text-sm'>$</span>
                            </div>
                            <input type='text' name='company-website' id='company-website' className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-[20px] sm:pl-5 sm:text-sm border-gray-300 rounded-md' placeholder='username' />
                        </div>
                    </div>
                    {/* Per Day */}
                    <div className='sm:col-span-6'>
                        <label htmlFor='company-website' className='block text-sm font-medium text-gray-700'>
                            Per Hour
                        </label>
                        <div className='mt-1 relative rounded-md shadow-sm'>
                            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                <span className='text-gray-500 sm:text-sm'>$</span>
                            </div>
                            <input type='text' name='company-website' id='company-website' className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-[20px] sm:pl-5 sm:text-sm border-gray-300 rounded-md' placeholder='username' />
                        </div>
                    </div>
                    {/* Sample Material */}
                    <div className='sm:col-span-5'>
                        <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                            Sample Material
                        </label>
                        <div className='mt-1'>
                            <input id='email' name='email' type='file' autoComplete='email' className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md' />
                        </div>
                    </div>
                    {/* Submit */}
                    <div className='sm:col-span-6 flex items-center justify-center'>
                        <button
                            type='button'
                            className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 m-4'
                            onClick={() => {
                                setStep(false);
                            }}>
                            Back
                        </button>
                        <button type='button' className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
