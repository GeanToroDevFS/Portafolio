import { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

const BUTTON_SELECTOR = 'a, button, [role="button"]'

const CustomCursor = () => {
  const reduceMotion = useReducedMotion()
  const [onButton, setOnButton] = useState(false)
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 18, mass: 0.5 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 18, mass: 0.5 })

  useEffect(() => {
    if (reduceMotion) return

    const onMove = (event: MouseEvent) => {
      mouseX.set(event.clientX)
      mouseY.set(event.clientY)
    }

    const onOver = (event: MouseEvent) => {
      const target = event.target
      const active = target instanceof Element && Boolean(target.closest(BUTTON_SELECTOR))
      setOnButton((current) => (current === active ? current : active))
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [mouseX, mouseY, reduceMotion])

  if (reduceMotion) return null

  return (
    <>
      <motion.div
        className={`cursor-dot fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference hidden md:block ${onButton ? 'is-hidden' : ''}`}
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="fixed top-0 left-0 z-[9999] w-7 h-7 pointer-events-none hidden md:block"
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      >
        <span className={`cursor-ring ${onButton ? 'is-hidden' : ''}`} />
        <svg className={`cursor-star ${onButton ? 'is-on' : ''}`} viewBox="0 0 28 28" aria-hidden="true">
          <polygon points="14,1.5 26.5,14 14,26.5 1.5,14" />
        </svg>
      </motion.div>
    </>
  )
}

export default CustomCursor
