'use client'

import { useRef, useLayoutEffect, useState, useEffect } from 'react'
import { motion } from 'motion/react'

interface TextSize {
  height: number
  width: number
}

export default function Animation() {
  const text: string[] = ['Frontend', 'Backend', 'FullStack']

  const textSize = useRef<HTMLDivElement[]>([])

  const [max, setMax] = useState<TextSize>({
    height: 0,
    width: 0,
  })

  useLayoutEffect(() => {
    const updateSize = () => {
      const sizes = textSize.current.map((element) => ({
        height: element.clientHeight,
        width: element.clientWidth,
      }))

      if (sizes.length > 0) {
        setMax(searchMaxValue(sizes))
      }
    }

    updateSize()

    window.addEventListener('resize', updateSize)

    return () => {
      window.removeEventListener('resize', updateSize)
    }
  }, [])

  return (
    <div
      className="flex flex-col overflow-hidden"
      style={{
        width: `${max.width}px`,
        height: `${max.height}px`,
        maskImage:
          'linear-gradient(to bottom, transparent 0%, black 25%, black 100%)',
        WebkitMaskImage:
          'linear-gradient(to bottom, transparent 0%, black 25%, black 100%)',
      }}
    >
      <motion.div
        animate={{
          y: [0, -max.height, -max.height * 2, 0],
        }}
        transition={{
          duration: 10,
          times: [0, 0.4, 0.75, 1],
          ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        {text.map((value, index) => (
          <div
            className="inline-block"
            key={value}
            ref={(element) => {
              if (element) {
                textSize.current[index] = element
              }
            }}
          >
            {value}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

function searchMaxValue(data: TextSize[]): TextSize {
  return data.reduce((max, value) => {
    return {
      height: value.height > max.height ? value.height : max.height,
      width: value.width > max.width ? value.width : max.width,
    }
  })
}
