'use client'

import { useRef, useEffect, useState } from 'react'

interface TextSize {
  height: number
  width: number
}

export default function Animation() {
  const text: string[] = ['Frontend', 'Backend', 'Full Stack']

  const textSize = useRef<HTMLDivElement[]>([])

  const [max, setMax] = useState<Partial<TextSize>>({})

  useEffect(() => {
    const updateSize = () => {
      const sizes = textSize.current.map((element) => {
        return {
          height: element.clientHeight,
          width: element.clientWidth,
        }
      })

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
