import React, {useState} from 'react'
import Curriculum from "../Docs/CVFinoana.pdf";
import {motion} from 'framer-motion'
function CV() {
    const [add,setAdd]=useState('btnCv')
    const animation = () =>{
        setAdd('btnCv active')
        setTimeout(() => {
            setAdd('btnCv')
          }, 13000);
//         setAdd('buttonCv clicked')
       
//         setTimeout(function() {
//             setAdd('buttonCv clicked complete')
//         }, 5000);
        
//         setTimeout(function() {
//         setAdd('buttonCv clicked')
//         }, 8000);
        
//             setTimeout(function() {
//         setAdd('buttonCv')
//         }, 8000);
   
}

  return (
//     <div class="buttonwrapper" >
// 	<button onClick={animation} class={add}>DOWNLOAD</button>
// </div>

    // <div style={{position:'absolute', top:'50%', left:'50%',transform:' translate(-50%, -50%)'}} class="buttonwrapper">
    //     <a
    //     // href={Curriculum}
    //      >Telechargez-Moi</a>
<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}

>
<a href={Curriculum} class={add} onClick={animation}>
  <div class="completed">
    <i class="fa fa-smile-o"></i>
    <span>vous êtes Top</span>
  </div>
  <div class="download">
    <i class="fa fa-cloud-download"></i> 
    <span>Telecharger</span>
  </div>
</a>
</motion.div>
    // </div>
    
  )
}

export default CV