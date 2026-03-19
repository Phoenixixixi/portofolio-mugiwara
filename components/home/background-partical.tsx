'use client'
import React from 'react'
import { SparklesCore } from '../ui/sparkles'
import { useTheme } from 'next-themes'
import { useState } from 'react'

export function SparklesBackground({
  children,
}: {
  children: React.ReactNode
}) {
  const { theme } = useTheme()
  const colorSprakles: string = theme == 'dark' ? '#FFFFFF' : '#000000'

  return (
    <div className="relative w-full min-h-screen">
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor={colorSprakles}
        />
      </div>

      <div className="relative z-10 w-full min-h-screen flex flex-col items-center">
        {children}
      </div>
    </div>
  )
}
