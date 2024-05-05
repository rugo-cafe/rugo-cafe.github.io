  "use client";
  import { useState , useRef} from "react";
  import Link from 'next/link';
  import {motion, useTransform, useScroll, useWillChange} from "framer-motion";
  

  const MotionLink = motion(Link)
  



  export default function Home() {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode (!darkMode);
    
    }

    const ref = useRef<HTMLDivElement>(null);


    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end end"],
    });
 


    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    const willChange = useWillChange();
    
    const scrolltoHash = function (element_id: string) {
      const element = document.getElementById(element_id)
      element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }


    return ( <>
    <html className={`${darkMode && "dark"}`}>
      <head>
      <link rel="icon" href="/logo-dark.svg" />
      <link href="https://fonts.cdnfonts.com/css/general-sans" rel="stylesheet" />
      <link href="https://fonts.cdnfonts.com/css/jomolhari" rel="stylesheet" />    
      <title>vitor hugo cunha</title>
      </head>


      <motion.body  className="scroll-smooth bg-main-bg  dark:bg-purp subpixel-antialiased will-change-content" initial="initial" animate="animate">
      
      
        <motion.nav  className="ml-6 mx-auto" 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 1, duration: 1.5}}
        >

          <div id="home" className="flex flex-row  items-center w-full md:py-4 md:px-6">
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

                  <MotionLink href="" className="m-2 text-purp dark:text-main-bg opacity-70 hover:opacity-100" whileHover={{scale: 1.1}} onClick={() => scrolltoHash('about')}>
                    <p>about</p>
                  </MotionLink>
                  <MotionLink href="" className="m-2 text-purp  dark:text-main-bg opacity-70 hover:opacity-100" whileHover={{scale: 1.1}} onClick={() => scrolltoHash('projects')}>
                    <p>projects</p>
                  </MotionLink>
                  <MotionLink href="" className="m-2 text-purp  dark:text-main-bg opacity-70 hover:opacity-100" whileHover={{scale: 1.1}} onClick={() => scrolltoHash('footer')}>
                    <p>contact</p>
                  </MotionLink>
                  <motion.button className="m-2 text-purp  dark:text-main-bg opacity-70 hover:opacity-100 delay-500" onClick={toggleDarkMode} whileHover={{scale: 1.1}}>
                    
                      {darkMode ? "light mode" : "dark mode"}
                      
                  </motion.button>

              </div>
          
          
          </div> 

          

        </motion.nav>

        
        
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
        <div id="about" className=" dark:bg-greeny bg-greenish w-full py-3">
              
              <motion.div  ref={ref} style={{scale: scaleProgress, opacity: opacityProgress, willChange}}   className="mt-32">
              <h1 className="font-jomo text-center font-bold lg:text-7xl sm:text-6xl text-5xl text-dpurp dark:text-wbeige">who am i?</h1>
              <img className="drop-shadow-xl mx-auto m-12  flex justify-center items-center md:h-96 md:w-96 h-58 w-58" src="/me.svg" alt="Photograph of website's author Vitor Hugo." />
              <p className="text-center md:text-2xl lg:text-3xl text-xl text-purp dark:text-wbeige  m-16 md:ml-42 md:mr-42 lg:ml-48 lg:mr-48">i am a web designer and developer based in brazil. currently studying product design in university and web development on my own. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, nemo itaque! Placeat excepturi consequuntur et quasi at autem quod, mollitia aliquid dolorem itaque nobis magnam odio explicabo tenetur minima quam.</p>
              </motion.div>
        
        
        </div>
          
          {/* <div id="projects" className="relative">

            <motion.div style={{willChange}} className="h-[80vh]  bg-dbeige dark:bg-bpurp" >
                <motion.h1 className="p-8 font-jomo text-center font-bold lg:text-7xl sm:text-6xl text-5xl text-dpurp dark:text-wbeige"  initial={{ opacity: 0 , x: '-12rem'}} whileInView={{ opacity: 1 }} animate={{x:0}} transition={{type: 'spring',delay: 0.5, duration: 1.2}}>
                  projects
                </motion.h1>

            </motion.div>

          </div> */}



        {/* Footer */}
        <div id="footer" className="flex flex-col bg-main-bg dark:bg-dpurp">
        <main className="flex-1"></main>
        <footer className="mt-40 allign-middle">
            <motion.div style={{willChange, originX: 0.5}} initial={{ opacity: 0}} whileInView={{ opacity: 1}} exit={{opacity: 0}} transition={{delay: 0.5, duration: 1.2}} >
                <h2 className="font-jomo text-center text-5xl font-bold text-purp dark:text-main-bg mb-20">want to work together?</h2>
                <div className="flex flex-row items-center justify-center mb-16 space-x-4">
                  <motion.a href="https://linkedin.com/in/vitor-hugo-cunha" whileHover={{scale: 1.1}} target="_blank" className="hover:drop-shadow-md">
                  <svg className="w-12 h-12 text-purp dark:text-main-bg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                  </svg>
                  </motion.a>
                  <motion.a  href="https://github.com/rugo-cafe" whileHover={{scale: 1.1}} target="_blank" className="hover:drop-shadow-lg">
                  <svg className="w-12 h-12 text-purp dark:text-main-bg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                  </svg>
                  </motion.a>


                  

                  
                </div>

                <div className="flex justify-between m-5">
                <MotionLink  whileHover={{scale: 1.3}} href="" className="flex flex-row items-center justify-center  text-purp dark:text-main-bg" onClick={() => scrolltoHash('home')} scroll={false} >

                <svg className="w-6 h-6 text-purp dark:text-main-bg animate-bounce opacity-80 hover:opacity-100 delay-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m5 15 7-7 7 7"/>
                </svg>


                </MotionLink>
                <p className="text-purp text-sm">made with ❤ by vitor hugo cunha</p>
                </div>

            </motion.div>
        </footer>
      </div>
      
      
      

      
      </motion.body>
          
      
      
      </html>
      </>
    );
  }


  