import DarkIcon from '/public/logo-dark.png'
import Image from 'next/image'

const Main = () => {
    return (
        <div className="bg-white w-auto">
            <div className="grid grid-rows-2 gap-y-auto min-w-full content-center font-semibold">
                <div className="sm:hidden md:block self-center justify-self-center">
                    <Image src={DarkIcon} width={100} height={100}></Image>
                </div>
                <a href="#" className="rounded-lg p-6 mx-auto mb-96 text-white text-2xl text-justify bg-green-500">Generate Playlist</a>
            </div>
        </div>  
    )
}

export default Main