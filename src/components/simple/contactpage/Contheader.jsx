import { Link } from "react-router-dom"

const Contheader = () => {
    return (
        <nav className="flex justify-between px-5 md:px-10 py-5">

            <h1 className="font-bold text-xl md:text-2xl">Health<span className="text-tlgreen">Sync</span></h1>
            <Link to='/' className="capitalize font-semibold">contact page</Link>
        </nav>
    )
}

export default Contheader
