'use client'
import { Highlight } from "../ui/hero-highlight"
import { FotoDescription } from "../ui/foto-description"
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"
import Image from "next/image"

const description = [
    {
        id: 1,
        header: "Halim Station Architecture",
        desc: "A low-angle shot of the modern, geometric roof design of Halim Station against a deep blue twilight sky.",
        thumbnail: "/images/IMG_2235.jpg"
    },
    {
        id: 2,
        header: "Tegalluar Station Landscape",
        desc: "A serene morning view from the station overlooking the tracks and the surrounding misty fields in Bandung.",
        thumbnail: "/images/IMG_2412.jpg"
    },
    {
        id: 3,
        header: "Highspeed Railway CR-400AF",
        desc: "Taken at the platform when the Whoosh train arrived, showcasing its sleek aerodynamic design.",
        thumbnail: "/images/IMG_2422.jpg"
    },
    {
        id: 4,
        header: "Padalarang Station Perspective",
        desc: "A misty morning capture of the railway infrastructure and communication tower from the platform bridge.",
        thumbnail: "/images/IMG_2432.jpg"
    },
    {
        id: 5,
        header: "KAI Locomotive Depot Bandung",
        desc: "A golden hour view of the train maintenance tracks and the sunset over the city railway hub.",
        thumbnail: "/images/IMG_2755.jpg"
    }
]


export default function FotoShow() {
    const [selectedId, setSelectedId] = useState<number | null>(null)

    const selectedPhoto = description.find(p => p.id === selectedId)

    return (
        <div className="w-full flex flex-col items-center py-20 px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
                <Highlight className="text-white dark:text-black px-4">
                    Photography
                </Highlight>
                <span className="ml-2">Areas</span>
            </h1>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 w-full max-w-7xl mx-auto space-y-4">
                {description.map((photo) => (
                    <motion.div
                        key={photo.id}
                        layoutId={`card-${photo.id}`}
                        onClick={() => setSelectedId(photo.id)}
                        className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Image
                            src={photo.thumbnail}
                            alt={photo.header}
                            width={800}
                            height={1200}
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <p className="text-white font-bold text-lg">{photo.header}</p>
                            <p className="text-white/80 text-sm line-clamp-2">{photo.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId && selectedPhoto && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className="relative bg-zinc-900 rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row"
                        >
                            <div className="md:w-2/3 h-[50vh] md:h-auto relative">
                                <Image
                                    src={selectedPhoto.thumbnail}
                                    alt={selectedPhoto.header}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="md:w-1/3 p-8 flex flex-col justify-center">
                                <FotoDescription photo={selectedPhoto} />
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="mt-8 px-6 py-2 bg-white text-black rounded-full font-bold self-center hover:bg-zinc-200 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}