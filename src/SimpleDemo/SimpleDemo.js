import React, { useRef, useEffect } from "react"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import styles from "./SimpleDemo.module.scss"

gsap.registerPlugin(ScrollTrigger)

const SimpleDemo = () => {
  let a = useRef(null)
  let b = useRef(null)
  let c = useRef(null)

  // toggleActions (4 Slots):
  // Slot 1. Enter Viewport from top
  // Slot 2. Forward past the endpoint
  // Slot 3. Enter Viewport from bottom
  // Slot 4. Scrolling back past start

  // Keywords:
  // play, pause, resume, reverse, restart, reset, complete, none

  // Examples:
  // "play none none none" -- default
  // "restart none none none" -- restart every time object enters viewport from top
  // "restart pause none none" -- pauses when scrolling past endpoint
  // "restart pause resume none" -- pauses when scrolling past endpoint then resumes scrolling back from bottom
  // "restart pause reverse none" -- pauses when scrolling past endpoint then reverses scrolling back from bottom
  // "restart pause reverse pause" -- pauses when scrolling past start

  useEffect(() => {
    // get width and position of animated element
    const cWidth = c.offsetWidth
    const cLeft = c.offsetLeft

    gsap.to(c, {
      scrollTrigger: {
        trigger: c,
        toggleActions: "restart pause reverse pause",
      },
      x: window.innerWidth - cWidth - cLeft,
      rotation: 360,
      duration: 5,
      ease: "expo.inOut",
    })
  }, [a, b, c])

  return (
    <>
      <div ref={el => (a = el)} className={`${styles.box} ${styles.a}`}>
        a
      </div>
      <div ref={el => (b = el)} className={`${styles.box} ${styles.b}`}>
        b
      </div>
      <div ref={el => (c = el)} className={`${styles.box} ${styles.c}`}>
        c
      </div>
      <div className={styles.line}></div>
    </>
  )
}

export default SimpleDemo
