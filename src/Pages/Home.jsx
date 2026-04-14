import { motion } from 'framer-motion'

export default function Home({ setPage }){
  return (
    <div style={{textAlign:'center',padding:80}}>
      <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}>
        Yasir Graphics
      </motion.h1>
      <p>Premium Graphic Design Agency</p>
      <button onClick={()=>setPage('contact')}>Get Started</button>
    </div>
  )
}
