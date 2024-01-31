import React from "react";
import "./styles.css";
import { LogoHtml5, LogoCss3, LogoReact, LogoJavascript } from 'react-ionicons'


function App() {
  return (
    <div className=" bg-gray-100 font-mono">
      <header className="bg-indigo-900 text-white  py-4">
        <div className="flex items-center flex-col">
          <img
            className="mx-auto block w-52 rounded-full m-3 "
            src="https://i.pinimg.com/564x/0f/f9/8a/0ff98abc7a109bbb3846d66c4fba8d13.jpg"
            alt="profile-pic"
          />
          <h1 className="md:text-4xl font-bold text-center m-2 typewriter">
            Mohd Asri bin Omar
          </h1>
          <img className='m-3' src='https://cdn-icons-png.flaticon.com/128/8287/8287203.png' alt='malaysia-flag'/>
          <p className="md:text-3xl text-base text-center typewriter">
            Front End Web Developer 👋
          </p>
        </div>
      </header>

      

      <section className="max-w-screen-md mx-auto my-8 p-8 bg-white shadow-md ">
        <h2 className="text-3xl font-bold mb-4  ">About Me</h2>
        <p className="text-gray-700 m-2 tracking-wide md:text-justify text-base">
          👋 Hi there! I'm{" "}
          <strong className="text-orange-500"> Mohd Asri, </strong> an aspiring
          Front-End Developer fueled by a passion for crafting engaging and
          user-centric web experiences.
        </p>

        <p className="text-gray-700 m-4 tracking-wide md:text-justify text-base">
          🚀 I'm on the exciting journey of translating my love for coding into
          practical skills, and I'm thrilled about the endless possibilities
          that web development offers.
        </p>

        <hr/>  <hr/>  <hr/>
            
        <p className="text-2xl text-center text-orange-500 mt-3 m-5 tracking-wide font-semibold">
          Here's a snapshot of my skill set
        </p>

        <div className='flex gap-4 justify-center my-5 typewriter'>   

  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-filetype-html" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z"/>
  </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-filetype-css" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.397 14.841a1.13 1.13 0 0 0 .401.823q.195.162.478.252.284.091.665.091.507 0 .859-.158.354-.158.539-.44.187-.284.187-.656 0-.336-.134-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.566-.21l-.621-.144a1 1 0 0 1-.404-.176.37.37 0 0 1-.144-.299q0-.234.185-.384.188-.152.512-.152.214 0 .37.068a.6.6 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.2-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.439 0-.776.15-.337.149-.527.421-.19.273-.19.639 0 .302.122.524.124.223.352.367.228.143.539.213l.618.144q.31.073.463.193a.39.39 0 0 1 .152.326.5.5 0 0 1-.085.29.56.56 0 0 1-.255.193q-.167.07-.413.07-.175 0-.32-.04a.8.8 0 0 1-.248-.115.58.58 0 0 1-.255-.384zM.806 13.693q0-.373.102-.633a.87.87 0 0 1 .302-.399.8.8 0 0 1 .475-.137q.225 0 .398.097a.7.7 0 0 1 .272.26.85.85 0 0 1 .12.381h.765v-.072a1.33 1.33 0 0 0-.466-.964 1.4 1.4 0 0 0-.489-.272 1.8 1.8 0 0 0-.606-.097q-.534 0-.911.223-.375.222-.572.632-.195.41-.196.979v.498q0 .568.193.976.197.407.572.626.375.217.914.217.439 0 .785-.164t.55-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.764a.8.8 0 0 1-.118.363.7.7 0 0 1-.272.25.9.9 0 0 1-.401.087.85.85 0 0 1-.478-.132.83.83 0 0 1-.299-.392 1.7 1.7 0 0 1-.102-.627zM6.78 15.29a1.2 1.2 0 0 1-.111-.449h.764a.58.58 0 0 0 .255.384q.106.073.25.114.142.041.319.041.245 0 .413-.07a.56.56 0 0 0 .255-.193.5.5 0 0 0 .085-.29.39.39 0 0 0-.153-.326q-.152-.12-.463-.193l-.618-.143a1.7 1.7 0 0 1-.539-.214 1 1 0 0 1-.351-.367 1.1 1.1 0 0 1-.123-.524q0-.366.19-.639.19-.272.527-.422t.777-.149q.456 0 .779.152.326.153.5.41.18.255.2.566h-.75a.56.56 0 0 0-.12-.258.6.6 0 0 0-.246-.181.9.9 0 0 0-.37-.068q-.324 0-.512.152a.47.47 0 0 0-.184.384q0 .18.143.3a1 1 0 0 0 .404.175l.621.143q.326.075.566.211t.375.358.135.56q0 .37-.188.656a1.2 1.2 0 0 1-.539.439q-.351.158-.858.158-.381 0-.665-.09a1.4 1.4 0 0 1-.478-.252 1.1 1.1 0 0 1-.29-.375"/>
       </svg>
      

        <LogoReact
          color={'#00949e'} 
          height="64px"
          width="64px"
        />

<LogoJavascript
  color={'#e3e637'} 
  height="64px"
  width="64px"
/>
    
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-bootstrap" viewBox="0 0 16 16">
  <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z"/>
  <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-git" viewBox="0 0 16 16">
  <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.03 1.03 0 0 0 0-1.457"/>
</svg>
    
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
    
<svg role="img" width="64" height="64" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <title>Chakra UI</title><path d="M12 0C5.352 0 0 5.352 0 12s5.352 12 12 12 12-5.352 12-12S18.648 0 12 0zm2.8 4.333c.13-.004.248.136.171.278l-3.044 5.58a.187.187 0 00.164.276h5.26c.17 0 .252.207.128.323l-9.22 8.605c-.165.154-.41-.063-.278-.246l4.364-6.021a.187.187 0 00-.151-.296H6.627a.187.187 0 01-.131-.32l8.18-8.123a.182.182 0 01.125-.056z"/></svg>


    
</div>

        
   
        {/*<code className="text-center">
          <ul className="text-gray-700 mt-3 list-none text-2xl my-5">
          
            <li className="">🚀 Responsive Web Design</li>
            
            
            <li className="">🚀 Problem-solving and debugging</li>
          </ul>
        </code>*/}
      </section>

      <section className="max-w-screen-md mx-auto my-8 p-8 bg-white shadow-md text-2xl">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className='grid md:grid-cols-3 gap-2 '>
          <div className='text-base text-mono w-[64] bg-indigo-100 justify-self-center p-4 shadow-lg my-2 text-center  rounded-lg'><a href="https://to-do-sort.vercel.app/"> Job To Do and Sort App</a></div>
          <div className='text-base text-mono w-[64] bg-gray-100 justify-self-center p-4 shadow-lg my-2 text-center  rounded-lg'><a href="https://react-quiz-app-psi-six.vercel.app/"> Quizz App</a></div>
          <div className='text-base text-mono w-[64] bg-indigo-100 justify-self-center p-4 shadow-lg my-2 text-center  rounded-lg'><a href="https://student-registration-pied.vercel.app/"> Student Registration</a></div>
          <div className='text-base text-mono w-[64] bg-gray-100 justify-self-center p-4 shadow-lg my-2 text-center  rounded-lg'><a href="https://shopping-cart-lovat-five.vercel.app/"> Shopping Cart</a></div>
          <div className='text-base text-mono w-[64] bg-indigo-100 justify-self-center p-4 shadow-lg my-2 text-center  rounded-lg'><a href="https://paracetamol-calculator.vercel.app/"> Paracetamol Calculator</a></div>
          <div className='text-base text-mono w-[64] bg-gray-100 justify-self-center p-4 shadow-lg my-2 text-center  rounded-lg'><a href="https://text-to-speech-converter-omega.vercel.app/"> Text to Speech</a></div>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33" width="64" height="64">
        <g clip-path="url(#prefix__clip0)">
            <path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"/>
        </g>
        <defs>
            <clipPath id="prefix__clip0">
                <path fill="#fff" d="M0 0h54v32.4H0z"/>
            </clipPath>
        </defs>
    </svg>
        </div>
        {/*<ul className="list-none">
          <li className="mb-2">
            <a href="#" className="text-blue-500 font-bold">
              Project 1
            </a>{" "}
            - Description of Project 1.
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500 font-bold">
              Project 2
            </a>{" "}
            - Description of Project 2.
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500 font-bold">
              Project 3
            </a>{" "}
            - Description of Project 3.
          </li>
  </ul>*/}
      </section>

      <section className="max-w-screen-md mx-auto my-8 p-8 bg-white shadow-md text-2xl">
        <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
       
          <div className='flex gap-4 my-4 justify-center'>
          <a
            href="mailto:mohdasriomar84@gmail.com"
            className="text-blue-500 font-bold"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
         <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
         <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
         </svg>
          </a>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
         </svg>
         
         <a href="http://www.linkedin.com/in/mohd-asri-13044a188"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
        </svg></a>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
       </svg>
        </div>
      </section>

      <footer className="text-center py-4 bg-gray-800 text-white fixed bottom-0 w-full">
        &copy; 2024 Mohd Asri - Portfolio
      </footer>
    </div>
  );
}

export default App;
