import React from 'react'
import '../Services/Services.css'
import pc from '../../image/pc.png'
import emoji from '../../image/vscode.png'
import {motion, spring} from 'framer-motion'
import '../../Components/Card/Card.jsx'
import Card from '../../Components/Card/Card.jsx'
import edit from '../../image/edit.png'
import cv from '../../cv/r1.pdf'
import { theameContext } from '../../Context'
import { useContext } from 'react'
const Services = () => {


  const theme = useContext(theameContext);
  const darkMode = theme.state.darkMode;
  const transition = {duration:1, type:'spring'} 


  return (

   
    <div className='services' id='Services'>

        {/*left side texts*/ }
        <div className='amezing' >
        <span style={{color:darkMode? 'white' : ''}}>My Amezing</span>
        <span>Services</span>
        <spane>"
 I specialize in React for dynamic UIs, <br /> Bootstrap for responsive design <br /> Node.js/Express.js for scalable backends, <br /> MongoDB/MySQL for efficient data management,<br /> and Git/GitHub for version control. <br />I bring expertise in Next.js <br />for high-performance applications"</spane>
        
           
       <a href={cv} className='button s-button' id='btndnld' download>Download  CV</a>
              
       
                
        <div className='blur s-blur'></div>
        </div>
       {/*cards used*/ }
       <div className='cards'>

        <motion.div className='cards'
        id='java'

         initial={{left:'-25%', top:'225px'}}
         whileInView={{ left:'2rem' }}
         transition={transition}
         
       
         
        >
          <Card emoji={emoji} details={"Mongodb,Express " + "Nodejs,React,mySQL " }  heading={"Technology's"}/>
        </motion.div>



        <motion.div className='cards'
        id='hardware'
        
       initial={{left:'350px' , top:'9rem'}}
       whileInView={{left:'430px', top:'9rem'}}
       transition={transition}
        >
          <Card   emoji={pc} details={"Optmization, "+"Upgedation and formatting"  }  heading={"Hardware Skill"} />
        </motion.div>


        <motion.div
        id='edit'
        initial={{left:'350px', top:'32rem'}}
        whileInView={{left:'430px', top:'32rem'}}
        transition={transition}
         className='cards' >
          <Card   emoji={edit} details={"Filmora ,Photoshop, Figma, Aftereffects"  }  heading={"Editing"} />
        </motion.div>

       </div>
    </div>
  )
}

export default Services
