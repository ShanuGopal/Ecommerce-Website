"use client"
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'



export default function Home() {
  const { data: session } = useSession()
  return (
    <>
  <section class="bg-emerald-500 py-16 md:py-32">
    <div class="container mx-auto px-4 md:px-8 text-center">
        <h1 class="text-white font-bold text-4xl md:text-6xl leading-tight mb-6">Welcome to our <b>Colorful World</b></h1>
        <p class="text-white text-lg md:text-2xl mb-12">Experience the magic of colors with our unique products and
            services.</p>
        
    </div>



    <div class="px-3 py-5 bg-emerald-500 lg:py-10">
    <div class="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div class="order-2 lg:order-1 flex flex-col justify-center items-center">
            <p class="text-4xl font-bold md:text-7xl text-white">25% OFF</p>
            <p class="text-4xl font-bold md:text-7xl">SUMMER SALE</p>
            <p class="mt-2 text-sm md:text-lg">For limited time only!</p>
            <button class="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">Shop Now</button>
        </div>
        <div class="order-1 lg:order-2">
            <img class="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]" src="/cloth.png" alt=""/>
        </div>
    </div>
</div>
</section>


<div className="bg-black h-1 opacity-10">
</div>

<div className="text white max-auto flex flex-col items-center">
  <h1 className="text-5xl font-bold text-center p-4"><b>Our Happy Customers!!!</b></h1>
<div className="flex gap-5 justify-around py-7 ">




<div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-1 bg-white dark:bg-gray-800">
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-emerald-500 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-white lg:mb-8 text-white">
            <h3 class="text-lg font-semibold text-white text-white">Very easy this was to integrate</h3>
            <p class="my-4">If you care for your time, I hands down would go with this."</p>
        </blockquote>
        <figcaption class="flex items-center justify-center ">
            <img class="rounded-full w-10 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Bonnie Green</div>
                <div class="text-sm text-white text-white ">Developer at Open AI</div>
            </div>
        </figcaption>    
    </figure>
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-emerald-500 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-white lg:mb-8 text-white">
            <h3 class="text-lg font-semibold text-white text-white">Solid foundation for any project</h3>
            <p class="my-4">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
        </blockquote>
        <figcaption class="flex items-center justify-center ">
            <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture"/>
            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Roberta Casas</div>
                <div class="text-sm text-white text-white">Lead designer at Dropbox</div>
            </div>
        </figcaption>    
    </figure>
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-emerald-500 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-white lg:mb-8 text-white">
            <h3 class="text-lg font-semibold text-white dark:text-white">Mindblowing workflow</h3>
            <p class="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
        </blockquote>
        <figcaption class="flex items-center justify-center ">
            <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture"/>
            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Jese Leos</div>
                <div class="text-sm text-white text-white">Software Engineer at Facebook</div>
            </div>
      
      
        </figcaption>     
    </figure>
    
</div>
</div>

{session &&
<a href={"/Dashboard"} type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">View More</a>
}

{!session &&
       <a href={"/Login"} className="mx-4 dark:text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</a>}

  <div className="text white max-auto flex flex-col items-center py-5">
  <h1 className="text-2xl font-bold text-center p-4">write here</h1>
  <iframe width="400" height="215" src="https://www.youtube.com/embed/0QK0kf5NaK0?si=ClEfPpMUn-1Wam-2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>




  </div>
</div>












</>

  );
}
