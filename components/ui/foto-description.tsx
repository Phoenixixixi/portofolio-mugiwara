import clsx from "clsx"


type Foto = {
    id: number,
    header: string,
    desc: string,
    thumbnail: string
}



export function FotoDescription({ photo }: { photo: Foto }) {
    return (
        <div className="flex flex-col items-center justify-center">
            <p className="font-bold md:text-3xl text-xl text-white">{photo.header}</p>
            <p className="md:text-lg text-sm font-medium text-white/70 text-center mt-2">
                {photo.desc}
            </p>
        </div>
    )
}

