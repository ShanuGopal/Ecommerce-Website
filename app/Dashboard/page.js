"use client"
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from 'next-auth/react'
import React from 'react'
import Image from 'next/image'
 
function Dashboard(){
    
  const { data: session } = useSession()
   if(!session) {
   const router = useRouter()
   router.push('/Login')
  
  
  }
  return(
    <>


<div className='grid grid-cols-3 p-6'>
    <div class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white bg-emerald-600 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
    <img class="h-68 w-full object-cover object-center" src="/1.jpg" alt="Product Image" />
    <div class="p-4">
      <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
      <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
      <div class="flex items-center">
        <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
        <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
        <p class="ml-auto text-base font-medium text-white">20% off</p>
      </div>
    </div>
  </div>



  <div class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white bg-emerald-600 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
    <img class="h-68 w-full object-cover object-center" src="/2.jpg" alt="Product Image" />
    <div class="p-4">
      <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
      <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
      <div class="flex items-center">
        <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
        <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
        <p class="ml-auto text-base font-medium text-white">20% off</p>
      </div>
    </div>
  </div>



  <div class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white bg-emerald-600 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
    <img class="h-68 w-full object-cover object-center" src="/3.jpg" alt="Product Image" />
    <div class="p-4">
      <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
      <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
      <div class="flex items-center">
        <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
        <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
        <p class="ml-auto text-base font-medium text-white">20% off</p>
      </div>
    </div>
  </div>



  <div class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white bg-emerald-600 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
    <img class="h-68 w-full object-cover object-center" src="/4.jpg" alt="Product Image" />
    <div class="p-4">
      <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
      <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
      <div class="flex items-center">
        <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
        <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
        <p class="ml-auto text-base font-medium text-white">20% off</p>
      </div>
    </div>
  </div>




  <div class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white bg-emerald-600 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
    <img class="h-68 w-full object-cover object-center" src="/5.jpg" alt="Product Image" />
    <div class="p-4">
      <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
      <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
      <div class="flex items-center">
        <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
        <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
        <p class="ml-auto text-base font-medium text-white">20% off</p>
      </div>
    </div>
  </div>



  <div class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white bg-emerald-600 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
    <img class="h-68 w-full object-cover object-center" src="/6.jpg" alt="Product Image" />
    <div class="p-4">
      <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
      <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
      <div class="flex items-center">
        <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
        <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
        <p class="ml-auto text-base font-medium text-white">20% off</p>
      </div>
    </div>
  </div>



  <div class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white bg-emerald-600 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
    <img class="h-68 w-full object-cover object-center" src="/7.jpg" alt="Product Image" />
    <div class="p-4">
      <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
      <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
      <div class="flex items-center">
        <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
        <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
        <p class="ml-auto text-base font-medium text-white">20% off</p>
      </div>
    </div>
  </div>



  <div class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white bg-emerald-600 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
    <img class="h-68 w-full object-cover object-center" src="/8.jpg" alt="Product Image" />
    <div class="p-4">
      <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
      <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
      <div class="flex items-center">
        <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
        <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
        <p class="ml-auto text-base font-medium text-white">20% off</p>
      </div>
    </div>
  </div>



  <div class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white bg-emerald-600 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
    <img class="h-68 w-full object-cover object-center" src="/9.jpg" alt="Product Image" />
    <div class="p-4">
      <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
      <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
      <div class="flex items-center">
        <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
        <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
        <p class="ml-auto text-base font-medium text-white">20% off</p>
      </div>
    </div>
  </div>



  <div class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white bg-emerald-600 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
    <img class="h-68 w-full object-cover object-center" src="/10.jpg" alt="Product Image" />
    <div class="p-4">
      <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
      <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
      <div class="flex items-center">
        <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
        <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
        <p class="ml-auto text-base font-medium text-white">20% off</p>
      </div>
    </div>
  </div>



  <div class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white bg-emerald-600 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
    <img class="h-68 w-full object-cover object-center" src="/11.jpg" alt="Product Image" />
    <div class="p-4">
      <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
      <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
      <div class="flex items-center">
        <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
        <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
        <p class="ml-auto text-base font-medium text-white">20% off</p>
      </div>
    </div>
  </div>



  <div class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white bg-emerald-600 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
    <img class="h-68 w-full object-cover object-center" src="/12.jpg" alt="Product Image" />
    <div class="p-4">
      <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
      <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
      <div class="flex items-center">
        <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
        <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
        <p class="ml-auto text-base font-medium text-white">20% off</p>
      </div>
    </div>
  </div>

</div>
<div className=' relative h-32 w-32 ...'>
<a href={"/Dashboard_2"} type="button" class="absolute bottom-10 left-10 h-70 w-70 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Next</a>
</div>

   </>

  
  
  


  
  
   


    )
  }

export default Dashboard
