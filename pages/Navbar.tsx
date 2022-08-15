import Image from 'next/image'
import DarkIcon from '/public/logo-dark.png'
import LightIcon from '/public/logo-light.png'

const Navbar = () => {
    return (
        <div>
            <nav className="sm:hidden md:flex flex-row justify-between items-center bg-blue-500 px-3 py-2 min-w-min">
            <div>
                <Image src={LightIcon} width={50} height={50} className="self-center"></Image>
            </div>
            <div className="text-white font-light space-x-5 mb-1">
                <a href="#">About</a>
                <a href="#">Future Plans</a>
            </div>
        </nav>
        <nav className="md:hidden sm:flex flex-col justify-between items-center bg-blue-500 px-3 py-2 min-w-min">
            <div>
                <Image src={LightIcon} width={50} height={50}></Image>
            </div>
            <div className="text-white font-light space-x-5 mb-1">
                <a href="#">About</a>
                <a href="#">Future Plans</a>
            </div>
        </nav>
        </div> 
    )
}

export default Navbar;