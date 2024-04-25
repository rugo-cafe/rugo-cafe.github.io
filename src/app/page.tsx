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
      <link href="/fonts/Gambetta-Regular.woff2" rel="stylesheet" />
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


      <body className="bg-main-bg dark:bg-purp subpixel-antialiased">
      
      
        <div className="flex flex-row justify-center items-center">
          <Link href="/">
          <img className="mt-10 lg:w-18 sm:w-14 w-8 block dark:hidden" src="/logo.svg" alt="logo" />
          </Link>
          <Link href="/">
          <img className="mt-10 lg:w-18 sm:w-14 w-8 hidden dark:block" src="/logo-dark.svg" alt="logo dark mode" />
          </Link>
          <Link href="/">
          <h1 className="mt-10 ml-3 lg:text-7xl sm:text-6xl text-4xl font-bold text-purp dark:text-main-bg">vitor hugo cunha</h1>
          </Link>  
        </div>

        <div>
          <button className="btn-drop-shadow hover:drop-shadow-bt delay-500 flex items-center justify-center absolute sm:w-16 sm:h-16 w-10 h-10 bottom-16 right-16 bg-purp dark:bg-main-bg rounded-full text-main-bg dark:text-purp" onClick={toggleDarkMode}>
        
          <svg className="sm:stroke-1.5 sm:w-8 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>

          </button>
    
        </div>
          <h1 className="sm:mt-20 mt-16  text-center lg:text-7xl sm:text-6xl text-4xl font-gambetta font-bold text-owange">designer, criativo.</h1>
          <h1 className="sm:mt-20 mt-16 text-center lg:text-9xl sm:text-8xl text-5xl font-gambetta font-bold text-dpurp">site em construção.</h1>
        <div>

        </div>
      </body>
          
      <div className="flex flex-col min-h-screen">
        <main className="flex-1"></main>
        <footer className=" bg-owange rounded-lg shadow m-4 dark:bg-dpurp dark:opacity-70 dark:drop-shadow-bt">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
              <span className="text-sm text-purp sm:text-center dark:text-main-bg hover:drop-shadow-dw">feito com ❤️ por vitor hugo cunha 
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-semibold text-purp dark:text-main-bg hover:drop-shadow-xl sm:mt-0">
                <li>
                    <a href="#" className="hover:drop-shadow-bt me-4 md:me-6">sobre</a>
                </li>

                <li>
                    <a href="#" className="hover:drop-shadow-bt me-4 md:me-6">projetos</a>
                </li>
                <li>
                    <a href="#" className="hover:drop-shadow-dw">contato</a>
                </li>
            </ul>
            
            </div>
        </footer>
      </div>
      
      </html>
      </>
    );
  }
