'use client'

import { useRef, useState, useEffect } from 'react'
import { Play, Pause, SkipBack, SkipForward, Music2 } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

interface Song {
  title: string
  artist: string
  src: string
}

const playlist: Song[] = [
  {
    title: "The Man Who Can't Be Moved",
    artist: 'The Script',
    src: '/music/the-man-who-cant-be-moved.mp3',
  },
  {
    title: 'A Sorrowful Reunion',
    artist: 'Reality Club',
    src: '/music/sorrowful-reunion.mp3',
  },
  { title: 'Nina', artist: 'Feast', src: '/music/nina.mp3' },
]

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const currentSong = playlist[currentIndex]

  // Inisialisasi audio element sekali doang, di client
  useEffect(() => {
    audioRef.current = new Audio()
    audioRef.current.onended = handleNext
    audioRef.current.onplay = () => setIsPlaying(true)
    audioRef.current.onpause = () => setIsPlaying(false)

    return () => {
      audioRef.current?.pause()
      audioRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Ganti src tiap kali track berubah
  useEffect(() => {
    if (!audioRef.current) return
    audioRef.current.src = currentSong.src
    audioRef.current.load()
    audioRef.current.currentTime = 0

    if (isPlaying) {
      audioRef.current.play()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex])

  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying((p) => !p)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % playlist.length)
    setIsPlaying(true)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length)
    setIsPlaying(true)
  }

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 flex items-center bg-[var(--foreground)] rounded-full shadow-lg overflow-hidden cursor-pointer"
      animate={{
        paddingLeft: isHovered ? 16 : 10,
        paddingRight: isHovered ? 16 : 10,
        paddingTop: 10,
        paddingBottom: 10,
        gap: isHovered ? 12 : 0,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 26 }}
    >
      <AnimatePresence>
        {!isHovered && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Music2 color="var(--background)" size={20} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3 whitespace-nowrap"
          >
            <div className="flex flex-col leading-tight max-w-[140px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentSong.title}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="text-[var(--background)] text-sm font-medium truncate"
                >
                  {currentSong.title}
                </motion.span>
              </AnimatePresence>
              <span className="text-[var(--background)]/60 text-xs truncate">
                {currentSong.artist}
              </span>
            </div>

            <button
              onClick={handlePrev}
              className="text-[var(--background)] hover:opacity-70 transition-opacity"
              aria-label="Previous"
            >
              <SkipBack size={18} fill="currentColor" />
            </button>

            <button
              onClick={togglePlay}
              className="bg-[var(--background)] rounded-full p-2 hover:scale-105 active:scale-95 transition-transform"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause
                  color="var(--foreground)"
                  size={18}
                  fill="var(--foreground)"
                />
              ) : (
                <Play
                  color="var(--foreground)"
                  size={18}
                  fill="var(--foreground)"
                />
              )}
            </button>

            <button
              onClick={handleNext}
              className="text-[var(--background)] hover:opacity-70 transition-opacity"
              aria-label="Next"
            >
              <SkipForward size={18} fill="currentColor" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
