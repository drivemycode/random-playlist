import Image from 'next/image'
import DarkIcon from '/public/logo-dark.png'
import LightIcon from '/public/logo-light.png'

const Navbar = () => {
    return (
        <nav className="flex flex-row justify-between items-center bg-blue-500 px-3 py-2">
            <div>
                <Image src={LightIcon} width={50} height={50}></Image>
            </div>
            <div className="text-white font-light space-x-5">
                <a href="#">About</a>
                <a href="#">Future Plans</a>
            </div>
        </nav>
    )
}

export default Navbar;