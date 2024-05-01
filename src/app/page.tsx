  "use client";
  import { useState , useRef} from "react";
  import Link from 'next/link';
  import {motion, useTransform} from "framer-motion";
  import { useScroll } from "framer-motion";


  export default function Home() {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode (!darkMode);
    
    }

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["2 3", "1.33 1"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

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


      <motion.body className="!scroll-smooth bg-main-bg  dark:bg-purp subpixel-antialiased will-change-content" initial="initial" animate="animate" >
      
      
        <motion.nav className="ml-6 mx-auto" 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 1, duration: 1.5}}
        >

          <div className="flex flex-row  items-center w-full md:py-4 md:px-6">
            <Link href="/">
            <img className="transition-opacity duration-1000 ease-out mt-10 lg:w-18 sm:w-14 w-8 block dark:hidden" src="/logo.svg" alt="Logo" />
            </Link>
            <Link href="/">
            <img className="transition-opacity duration-1000 ease-out mt-10 lg:w-18 sm:w-14 w-8 hidden dark:block" src="/logo-dark.svg" alt="Dark Logo" />
            </Link>
            <Link href="/">
              {/* title */}
            <h1 className="mt-10 ml-3 lg:text-7xl sm:text-6xl text-4xl font-bold text-purp dark:text-main-bg">vitor hugo cunha</h1>
            </Link>  
              {/* menu */}
              <div className="z-[100] flex justify-end items-end right-5 md:mt-16 mt-14 top-7 absolute lg:text-xl  flex-col text-purp"
                
              >

                  <motion.a href={"/"} className="m-2 text-purp dark:text-main-bg opacity-70 hover:opacity-100" whileHover={{scale: 1.1}}>
                    <p>about</p>
                  </motion.a>
                  <motion.a href={"/"} className="m-2 text-purp  dark:text-main-bg opacity-70 hover:opacity-100" whileHover={{scale: 1.1}}>
                    <p>projects</p>
                  </motion.a>
                  <motion.a href={"/"} className="m-2 text-purp  dark:text-main-bg opacity-70 hover:opacity-100" whileHover={{scale: 1.1}}>
                    <p>contact</p>
                  </motion.a>
                  <motion.button className="m-2 text-purp  dark:text-main-bg opacity-70 hover:opacity-100 delay-500" onClick={toggleDarkMode} whileHover={{scale: 1.1}}>
                    
                      {darkMode ? "light mode" : "dark mode"}
                      
                  </motion.button>

              </div>
          
          
          </div> 

          

        </motion.nav>

        

        {/* Botão Dark Mode */}
        <div> 
{/*           
          <button  className="h-0 w-0 z-[100] mb-12 btn-drop-shadow hover:drop-shadow-bt delay-500 flex items-center justify-center lg:absolute lg:w-16 lg:h-16  top-12 right-16 bg-purp dark:bg-main-bg rounded-full text-main-bg dark:text-purp" onClick={toggleDarkMode}>
        
          <svg className="lg:stroke-1.5 lg:w-8 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>

          </button> */}

    
        </div>
        
        {/* Animation blobs */}
        <div>
          
          {/* <h1 className="animate-pulse  mt-10 text-center text-xl font-jomo font-bold text-dpurp dark:text-main-bg">(site in construction)</h1>  */}
          {/* <h1 className="animate-fade animate-duration-2000 animate-delay-1000 mt-24 text-center lg:text-7xl sm:text-6xl text-4xl  font-jomo font-bold text-owange">web designer</h1> */}
              <motion.div className="animate-fade animate-duration-2000 animate-delay-1000 h-screen flex items-center justify-center  relative"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 1, duration: 1.5}}
              >

                
                <div className="absolute w-32 h-32  mr-26 bg-bpurp dark:bg-main-bg rounded-full dark:mix-blend-soft-light mix-blend-multiply blur-lg animate-blob"></div>
                <div className="absolute w-32 h-32 ml-32  bg-owange rounded-full mix-blend-multiply blur-lg animate-blob animation-delay-2000"></div>
                <div className="absolute w-32 h-32 mr-22 mb-32 bg-greenish  rounded-full mix-blend-multiply blur-lg animate-blob animation-delay-4000"></div>


              </motion.div>
              
        </div>
        
        {/* about */}
        <motion.div ref={ref} style={{scale: scaleProgress, opacity: opacityProgress}} className="mt-32">
              <h1 className="font-jomo text-center font-bold lg:text-7xl sm:text-6xl text-5xl text-purp dark:text-main-bg animate-fade delay-400">who am i?</h1>
              <img className="drop-shadow-xl mx-auto m-12  flex justify-center items-center md:h-96 md:w-96 h-58 w-58" src="/me.svg" alt="Photograph of website's author Vitor Hugo." />
              <p className="text-center md:text-2xl lg:text-3xl text-xl text-purp dark:text-main-bg m-16 md:ml-42 md:mr-42 lg:ml-48 lg:mr-48">i am a web designer and developer based in brazil. currently studying product design in university and web development on my own.</p>
        
        
        
        </motion.div>

      
      
      
      
      
      
      </motion.body>
          
      <div className="flex flex-col min-h-screen">
        <main className="flex-1"></main>
        <footer className="bg-owange rounded-lg shadow m-4 dark:bg-dpurp dark:drop-shadow-bt">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
              <span className="opacity-70 font-bold text-sm text-purp sm:text-center dark:text-main-bg hover:drop-shadow-dw">made with ❤️ by vitor hugo cunha 
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-semibold text-purp dark:text-main-bg  sm:mt-0">
                <li>
                    <a href="#" className="hover:drop-shadow-bt me-4 md:me-6 transition-opacity duration-1000 ease-out opacity-50 hover:opacity-100">about</a>
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


  