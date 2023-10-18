import { Link } from "react-router-dom"

const Contheader = () => {
    return (
        <nav className="flex justify-around py-5">
            <h1 className="font-bold text-xl md:text-2xl">Health<span className="text-lemon">Sync</span></h1>
            <Link to='/' className="capitalize font-semibold">contact page</Link>
        </nav>
    )
}

export default Contheader
