  "use client";
  import { useState , useRef} from "react";
  import Link from 'next/link';
  import {motion, useTransform, useScroll, useWillChange} from "framer-motion";
  import Image from 'next/image'
  

  const MotionLink = motion(Link)



  type Props = {
    children?: React.ReactNode
  };
  

  function Faded({ children }: Props): React.ReactNode {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ type: 'spring',delay: 0.5, duration: 1.2}}
        variants={{
          visible: { opacity: 1, x: 0},
          hidden: { opacity: 0, x: '-12rem' }
        }}
      >
        {children}
      </motion.div>
    );
  }

  function FadeIn({ children }: Props): React.ReactNode {
    return (
      <motion.div
        initial={{ opacity: 0}} 
        whileInView={{ opacity: 1}} 
        transition={{delay: 0.5, duration: 1.2}}
      >
        {children}
      </motion.div>
    );
  }

  


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
      element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }


    return ( <>
    

    <html className={`${darkMode && "dark"}`}>
      <head>
      <link rel="icon" href="/logo-dark.svg" />
      <link href="https://fonts.cdnfonts.com/css/general-sans" rel="stylesheet" />
      <link href="https://fonts.cdnfonts.com/css/jomolhari" rel="stylesheet" />    
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta property="og:image" content="/logo-dark.svg" />
      </head>


      <motion.body  className="scroll-smooth bg-main-bg  dark:bg-purp subpixel-antialiased will-change-content selection:bg-owange" initial="initial" animate="animate">
      
      
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
                  <motion.button className="flex items-center mt-1 m-2 text-purp  dark:text-main-bg opacity-70 hover:opacity-100 delay-500 " onClick={toggleDarkMode} whileHover={{scale: 1.1}}>
                    
                      {darkMode ? "light mode" : "dark mode"}
                      {darkMode ? (<svg className="animate-spin-slow w-4 flex items-center justify-center  ml-2 text-main-bg fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>
                            ) :     (<svg className="animate-bounce-slow flip-x w-3 flex items-center justify-center ml-2 text-purp fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>
                     
                      )}
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
        <div id="about" className="dark:bg-greeny bg-greenish w-full py-16">
              
              <motion.div  ref={ref} style={{scale: scaleProgress, opacity: opacityProgress, willChange}}   className="sm:mt-10">
                
                <h1 className="font-jomo text-center font-bold lg:text-7xl sm:text-6xl text-5xl text-dpurp dark:text-wbeige mt-5">who am i?</h1>
                <div className="md:flex md:mt-10 lg:ml-16 lg:mr-16 2xl:ml-64 2xl:mr-64">
                <img className="drop-shadow-2xl mx-auto mt-10 mb-8 lg:align-middle md:m-10 flex justify-center items-center lg:h-96 md:h-68 h-46 w-46" src="/me.svg" alt="Photograph of website's author Vitor Hugo." />
                <p className="text-balance text-start lg:align-middle lg:mt-24 sm:ml-[5rem] sm:mr-[5rem] md:mt-20 md:mb-20 ml-[4.5rem] mr-[4.5rem] mb-14 md:ml-8 md:mr-10 lg:text-2xl md:text-xl text-lg text-dpurp dark:text-wbeige leading-relaxed">i am a web designer and developer based in brazil. currently studying product design in university and web development on my own. i have a major passion in technology and it is what keeps me motivated everyday. i really like to learn, and i am learning new things everyday. my hobbies are video games, watching movies, youtube videos, listening to music, mechanical keyboards and game development.</p>
                  

                      

                </div>
                  
                <div className="mt-16">

                <h3 className="text-center text-4xl lg:text-6xl font-jomo font-bold text-dpurp dark:text-main-bg md:text-5xl px-16">skills</h3>

                  
                  <motion.div className="m-10 text-dpurp dark:text-main-bg flex items-center justify-center space-x-8" >

                        
                        
                        <div className="">
                          <p className="text-start md:text-lg">photoshop</p>
                            <div className="flex justify-center space-x-2">

                              <svg className="flex items-center mt-2 w-3 fill-wbeige" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>

                              <svg className="flex items-center mt-2 w-3 fill-wbeige" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>

                              <svg className="flex items-center mt-2 w-3 fill-wbeige" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>

                              <svg className="flex items-center mt-2 w-3 fill-wbeige" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>
                            </div>
                        </div>

                        <div className="">
                          <p className="text-start md:text-lg">illustrator</p>
                            <div className="flex justify-center space-x-2">

                              <svg className="flex items-center mt-2 w-3 fill-wbeige" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>

                              <svg className="flex items-center mt-2 w-3 fill-wbeige" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>

                              <svg className="flex items-center mt-2 w-3 fill-wbeige opacity-20" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>

                              <svg className="flex items-center mt-2 w-3 fill-wbeige opacity-20" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>
                            </div>
                        </div>

                        <div className="">
                          <p className="text-start md:text-lg">figma</p>
                            <div className="flex justify-center space-x-2">

                              <svg className="flex items-center mt-2 w-3 fill-wbeige" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>

                              <svg className="flex items-center mt-2 w-3 fill-wbeige" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>

                              <svg className="flex items-center mt-2 w-3 fill-wbeige" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>

                              <svg className="flex items-center mt-2 w-3 fill-wbeige opacity-20" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>
                            </div>
                        </div>
                   
                        
                  </motion.div>

                      
                  {/* segunda coluna */}

                  <motion.div className="mt-10 text-dpurp dark:text-main-bg flex items-center justify-center space-x-8 mr-8" >
                        <p></p>
                        <div className="">
                          <p className="text-start md:text-lg">html, css, js</p>
                            <div className="flex justify-center space-x-2 w-full">

                              <svg className="flex items-center mt-2 w-3 fill-wbeige" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>

                              <svg className="flex items-center mt-2 w-3 fill-wbeige" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>

                              <svg className="flex items-center mt-2 w-3 fill-wbeige" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>

                              <svg className="flex items-center mt-2 w-3 fill-wbeige opacity-20" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>
                            </div>
                        </div>

                        <div className="">
                          <p className="text-start md:text-lg">wordpress</p>
                            <div className="flex justify-center space-x-2">

                              <svg className="flex items-center mt-2 w-3 fill-wbeige" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>

                              <svg className="flex items-center mt-2 w-3 fill-wbeige" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>

                              <svg className="flex items-center mt-2 w-3 fill-wbeige" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>

                              <svg className="flex items-center mt-2 w-3 fill-wbeige " width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>
                            </div>
                        </div>

                        <div className="">
                          <p className="text-start md:text-lg">nextjs</p>
                            <div className="flex justify-center space-x-2">

                              <svg className="flex items-center mt-2 w-3 fill-wbeige" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>

                              <svg className="flex items-center mt-2 w-3 fill-wbeige opacity-20" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>

                              <svg className="flex items-center mt-2 w-3 fill-wbeige opacity-20" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>

                              <svg className="flex items-center mt-2 w-3 fill-wbeige opacity-20" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>
                            </div>
                        </div>

                        
                   
                        
                  </motion.div>
                
                      {/* terceira coluna */}

                  <motion.div className="mt-10 text-dpurp dark:text-main-bg flex items-center justify-center space-x-4 mb-16 " >
                        <div className="">
                          <p className="text-sm text-start md:text-lg">communication</p>
                            <div className="mr-1 flex justify-center space-x-2 w-full">

                              <svg className="flex items-center mt-2 w-3 fill-wbeige" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>

                              <svg className="flex items-center mt-2 w-3 fill-wbeige" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>

                              <svg className="flex items-center mt-2 w-3 fill-wbeige" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>

                              <svg className="flex items-center mt-2 w-3 fill-wbeige" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>
                            </div>
                        </div>

                        <div className="">
                          <p className="text-start md:text-lg">proactivity</p>
                            <div className="flex justify-center space-x-2">

                              <svg className="flex items-center mt-2 w-3 fill-wbeige" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>

                              <svg className="flex items-center mt-2 w-3 fill-wbeige" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>

                              <svg className="flex items-center mt-2 w-3 fill-wbeige" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>

                              <svg className="flex items-center mt-2 w-3 fill-wbeige opacity-20" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>
                            </div>
                        </div>

                        <div className="space-x-5">
                          <p className="text-center md:text-lg">patience</p>
                            <div className="flex justify-center space-x-2">

                              <svg className="flex items-center mt-2 w-3 fill-wbeige" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>

                              <svg className="flex items-center mt-2 w-3 fill-wbeige" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>

                              <svg className="flex items-center mt-2 w-3 fill-wbeige" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>

                              <svg className="flex items-center mt-2 w-3 fill-wbeige opacity-20" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9.5" cy="8.5" r="8.5"/>
                              </svg>
                            </div>
                        </div>

                        
                   
                        
                  </motion.div>

                  </div>
              
              
              
              </motion.div>
        
        
        </div>
          
          <motion.div style={{willChange}} id="projects" className="py-14 w-full bg-dbeige dark:bg-bpurp pb-5" initial={{ opacity: 0}} whileInView={{ opacity: 1}} exit={{opacity: 0}} transition={{delay: 0.5, duration: 1.2}}>

            <motion.div  className="lg:ml-16 lg:mr-16 2xl:ml-72 2xl:mr-72" >

                <Faded>
                <motion.h1 className="font-jomo text-center font-bold lg:text-7xl sm:text-6xl text-5xl text-dpurp dark:text-wbeige">
                  projects
                </motion.h1>
                </Faded>
                <motion.div className="grid justify-center  items-center md:m-24 lg:m-32 m-5 mt-16 " >
                    
                    <FadeIn>
                    <motion.div>
                    
                    <Faded>
                    <motion.h1 className=" text-center  font-bold text-2xl md:text-4xl lg:text-5xl text-owange dark:text-main-bg">interface prototypes</motion.h1>
                    </Faded>
                   
                    {/* meditation app */}
                    <a href="/projects/1.webp" target="_blank">
                    <img title="click to expand" className="hover:opacity-70 transition-opacity duration-1000 flex justify-center items-center lg:mt-18 w-500  md: " src="/projects/1.webp" alt="Project 1: Interface prototype of an meditation app"  />
                    </a>
                    <motion.h2  
                    className="m-5 mt-10 font-bold text-dpurp opacity-50 text-center lg:text-2xl dark:text-wbeige">concept of meditation app UI for iOS </motion.h2>
                    <p className="text-start flex items-center justify-center text-lg m-10  md:m-12 text-pretty md:text-2xl text-dpurp dark:text-wbeige">this UI concept was totally designed and prototyped on figma. a guided meditation app concept, where you can choose the voice of narrator, the relaxing sound (as rain, waterfall, etc). the motivation behind this prototype was thinking that this app would help me someway.</p>
                    </motion.div>
                    </FadeIn>
                    {/* audy.io */}
                    <FadeIn>
                    <motion.div>
                    <a href="/projects/2.webp" target="_blank">
                    <img title="click to expand" className="hover:opacity-70 transition-opacity  duration-1000 flex justify-center items-center lg:mt-18 w-500  md: " src="/projects/2.webp" alt="Project 1: Interface prototype of an meditation app"  />
                    </a>
                    <motion.h2 className="m-5 mt-10 font-bold text-dpurp opacity-50 text-center lg:text-2xl dark:text-wbeige"> audy.io 	<br /> concept of music streaming app UI for desktop. </motion.h2>
                    <p className="text-start flex items-center justify-center text-lg m-10  md:m-12 text-pretty md:text-2xl text-dpurp dark:text-wbeige">also designed entirely on figma, based from my discontent on spotify's UI, in a time that it was really inconsistent, so i thought "i have to do something!!!". and that's where this app concept came about, which i named 'audy.io', because of my passion for music and design.
                    </p>
                    </motion.div>
                    </FadeIn>
                    
                    <Faded>
                      <motion.h1 className=" text-center  font-bold text-2xl md:text-4xl lg:text-5xl text-owange dark:text-main-bg">websites</motion.h1>
                    </Faded>

                    {/* bioma */}
                    <FadeIn>
                    <Link href="/projects/3.webp" target="_blank">
                      <img src="/projects/3.webp" title="click to expand" alt="Fazendas Bioma Website" className="hover:opacity-70 transition-opacity duration-1000 flex justify-center items-center lg:mt-18 w-500" />
                    </Link>
                    <MotionLink href="https://fazendasbioma.com.br" target="_blank" className="flex justify-center items-center text-dpurp dark:text-wbeige  opacity-70 hover:opacity-100 transition-opacity duration-1000" whileHover={{scale: 1.1}}>
                    <h2 className="flex justify-center items-center cursor-pointer m-5 mt-10 font-bold  text-center lg:text-2xl">fazendas bioma's website <br /> made using wordpress</h2>
                    <svg className="w-5 flex justify-center items-center self-center fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
                    </MotionLink>
                    <p className="text-start flex items-center justify-center text-lg m-10 text-pretty md:text-2xl text-dpurp dark:text-wbeige">initially prototyped on figma, and later made on wordpress. it was made during my time working for the company.
</p>
                    </FadeIn>

                    {/* pportflio */}
                    <Faded>
                      <h1 className="animate-pulse text-center font-bold text-3xl md:text-4xl lg:text-5xl text-purp dark:text-owange mt-5"> this website </h1>
                    </Faded>
                    
                    <motion.div> 
                        
                        <FadeIn>
                        <div className="text-start text-lg m-10 text-pretty md:text-2xl text-dpurp dark:text-wbeige">soo... this piece of technolgy was made with NextJS, TailwindCSS and Framer Motion. my main inspirations was retro tech themes and colors, such as <Link href="https://github.com/morhetz/gruvbox" target="_blank" className="text-pinky underline hover:text-owange">gruvbox color scheme</Link>.</div>
                        </FadeIn>
                    </motion.div>
                    

                </motion.div>



            </motion.div>

          </motion.div>
          
        


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
                <p className="dark:text-dbeige text-purp text-sm">made with ❤️ by vitor hugo cunha</p>
                </div>

            </motion.div>
        </footer>
      </div>
      
      
      

      
      </motion.body>
          
      
      
      </html>
      </>
    );
  }


  