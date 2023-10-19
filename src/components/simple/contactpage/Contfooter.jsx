import { Link } from "react-router-dom"
const Contfooter = () => {
    return (
        <footer className="sm:flex justify-around w-3/5 text-center gap-y-2 mx-auto sm:pb-2 ">
            <Link>Terms and Conditions</Link>
            <Link>Privacy Policy</Link>
        </footer>
    )
}

export default Contfooter
