import { FaFacebook, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"
const Contfooter = () => {
    return (
        <footer className="flex justify-around mx-5 sm:mx-10">
            <div className="flex space-x-3 mt-3 sm:mt-0">
                <Link
                    to="#"
                    className="bg-tlgreen h-fit w-fit block p-2.5 rounded-full"
                    aria-label="Facebook link"
                >
                    <FaFacebook />
                </Link>
                <Link
                    to="#"
                    className="bg-tlgreen h-fit w-fit block p-2.5 rounded-full"
                    aria-label="Twitter link"
                >
                    <FaTwitter />
                </Link>
            </div>
            <div className="grid sm:flex space-x-5 mt-2">
                <Link>Terms and Conditions</Link>
                <Link>Privacy Policy</Link>
            </div>
        </footer>
    )
}

export default Contfooter
