  import Image from "next/image";
  "use client";
  import { useState } from "react";
  import Link from 'next/link';



  export default function Home() {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode (!darkMode);
    }

    return ( <>
    <html className={`${darkMode && "dark"}`}>
      <head>
      <link rel="icon" href="/logo-dark.svg" />
      <link href="https://fonts.cdnfonts.com/css/general-sans" rel="stylesheet" />
      <link href="https://fonts.cdnfonts.com/css/jomolhari" rel="stylesheet" />    
      <title>vitor hugo cunha</title>
      <style>
              {`
                .btn-drop-shadow {
                  transition: transform 1s ease-in-out;
                }
                .btn-drop-shadow:hover {
                  transform: translateY(-5px);
                }
              `}
            </style>
      </head>


      <body className="!scroll-smooth bg-main-bg  dark:bg-purp subpixel-antialiased bg-noise z-[100]">
      
      
        <div className="flex flex-row justify-center items-center">
          <Link href="/">
          <img className="transition-opacity duration-1000 ease-out mt-10 lg:w-18 sm:w-14 w-8 block dark:hidden" src="/logo.svg" alt="Logo" />
          </Link>
          <Link href="/">
          <img className="transition-opacity duration-1000 ease-out mt-10 lg:w-18 sm:w-14 w-8 hidden dark:block" src="/logo-dark.svg" alt="Dark Logo" />
          </Link>
          <Link href="/">
          <h1 className="mt-10 ml-3 lg:text-7xl sm:text-6xl text-4xl font-bold text-purp dark:text-main-bg ">vitor hugo cunha</h1>
          </Link>  
        </div>

        {/* Botão Dark Mode */}
        <div> 
          <button className="z-[100] mb-12 btn-drop-shadow hover:drop-shadow-bt delay-500 flex items-center justify-center fixed sm:w-16 sm:h-16 w-14 h-14 bottom-4 right-16 bg-purp dark:bg-main-bg rounded-full text-main-bg dark:text-purp" onClick={toggleDarkMode}>
        
          <svg className="sm:stroke-1.5 sm:w-8 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>

          </button>
    
        </div>
        
        {/* Titulo */}
        <div>
          
          {/* <h1 className="animate-pulse  mt-10 text-center text-xl font-jomo font-bold text-dpurp dark:text-main-bg">(site in construction)</h1>  */}
          <h1 className="animate-fade animate-duration-2000 animate-delay-1000 mt-24 text-center lg:text-7xl sm:text-6xl text-4xl  font-jomo font-bold text-owange">creative designer</h1>
              <div className="animate-fade animate-duration-2000 animate-delay-1000 h-screen flex items-center justify-center  relative">

                
                <div className="absolute w-32 h-32  mr-26 bg-bpurp dark:bg-main-bg rounded-full dark:mix-blend-soft-light mix-blend-multiply blur-lg animate-blob"></div>
                <div className="absolute w-32 h-32 ml-32  bg-owange rounded-full mix-blend-multiply blur-lg animate-blob animation-delay-2000"></div>
                <div className="absolute w-32 h-32 mr-22 mb-32 bg-greenish  rounded-full mix-blend-multiply blur-lg animate-blob animation-delay-4000"></div>


              </div>
              
        </div>
        
        {/* sobre */}
        <div className="mt-56">
              <h1 className="font-jomo text-center font-bold lg:text-7xl sm:text-6xl text-5xl text-purp dark:text-main-bg animate-fade delay-400">who am i?</h1>
              <img className="mx-auto m-12 animate-fade-right animate-duration-1000 animate-delay-500 flex justify-center items-center" src="/me.svg" alt="Photograph of website's author Vitor Hugo." />
              <p className="text-center md:text-2xl lg:text-3xl text-xl text-purp dark:text-main-bg m-16 md:ml-42 md:mr-42 lg:ml-48 lg:mr-48">i am a web designer and developer based in brazil. currently studying product design in university and web development on my own.</p>
        
        
        
        </div>

      
      
      
      
      
      
      </body>
          
      <div className="flex flex-col min-h-screen">
        <main className="flex-1"></main>
        <footer className="bg-owange rounded-lg shadow m-4 dark:bg-dpurp dark:drop-shadow-bt">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
              <span className="text-sm text-purp sm:text-center dark:text-main-bg hover:drop-shadow-dw">made with ❤️ by vitor hugo cunha 
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-semibold text-purp dark:text-main-bg  sm:mt-0">
                <li>
                    <a href="#" className="hover:drop-shadow-bt me-4 md:me-6 transition-opacity duration-1000 ease-out opacity-50 hover:opacity-100">who am i?</a>
                </li>

                <li>
                    <a href="#" className="hover:drop-shadow-dw me-4 md:me-6 transition-opacity duration-1000 ease-out opacity-50 hover:opacity-100">projects</a>
                </li>
                <li>
                    <a href="#" className="hover:drop-shadow-dw transition-opacity duration-1000 ease-out opacity-50 hover:opacity-100">contact</a>
                </li>
            </ul>
            
            </div>
        </footer>
      </div>
      
      </html>
      </>
    );
  }
