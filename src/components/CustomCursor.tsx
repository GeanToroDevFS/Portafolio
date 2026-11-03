import { useEffect } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

const CustomCursor = () => {
  const reduceMotion = useReducedMotion()
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 18, mass: 0.5 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 18, mass: 0.5 })

  useEffect(() => {
    if (reduceMotion) return
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY, reduceMotion])

  if (reduceMotion) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-white pointer-events-none mix-blend-difference hidden md:block"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="fixed top-0 left-0 z-[9999] w-7 h-7 rounded-full border border-white pointer-events-none mix-blend-difference hidden md:block"
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  )
}

export default CustomCursor
