import React from 'react'


export default function NewsLetter() {
  return (
    <div class="md:grid md:grid-cols-2 max-w-4xl bg-white mx-4 md:mx-auto rounded-xl ">
    <img src="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="no Image" className='hidden md:block w-full max-w-lg rounded-xl'/>
    <div class="relative flex items-center justify-center">
      
        <div class="max-md:py-20 px-6 md:px-10 text-center">
            <h1 class="text-3xl font-bold">
                Subscribe to our newsletter
            </h1>
            <p class="mt-4 text-gray-500">
                Be the first to get the latest news about trends, promotions, and much more!
            </p>
            <form class="mt-8 flex">
                <input type="email" placeholder="Enter your email" class="w-full rounded-l-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <button type="submit" class="rounded-r-md bg-blue-600 px-7 py-2 text-white">
                    Submit
                </button>
            </form>
        </div>
    </div>
</div>
  )
}
