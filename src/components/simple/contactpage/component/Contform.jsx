import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import { FaTwitter, FaFacebook } from "react-icons/fa"

const Contform = () => {
    return (
        <form className=" pt-12 font-semibold text-lightblack">
            <div className=" w-3/4 mx-auto space-y-5">
                <div className="sm:flex capitalize sm:space-x-10">
                    <div className="grid ">
                        <label htmlFor="name">name:</label>
                        <input type="text" className="border-b-2 outline-none border-lightblack" />
                    </div>
                    <div className="grid  w-full">
                        <label htmlFor="email">e-mail:</label>
                        <input type="email" className="border-b-2 outline-none border-lightblack" />
                    </div>
                </div>
                <div className="grid capitalize">
                    <label htmlFor="topic">topic</label>
                    <select className="border-b-2 outline-none border-lightblack capitalize">
                        <option></option>
                        <option>workout</option>
                        <option>nutrition</option>
                        <option>health</option>
                    </select>
                </div>
                <div className="grid">
                    <label htmlFor="message" className="capitalize">your message</label>
                    <input type="text" className="border-b-2 outline-none border-lightblack" />
                </div>
                <div className="flex space-x-2">
                    <input type="checkbox" className="w-4 h-4 mt-1" />
                    <Link className="font-semibold">Please sign me up for the news letter.</Link>
                </div>

            </div>

            <div className="sm:flex justify-between py-8 w-3/4 mx-auto space-y-5 sm:space-y-0">
                <div className="flex space-x-5">
                    <button type="submit" onClick={(e) => e.preventDefault()}
                        className=" capitalize text-sm"
                        aria-label="submit button" >
                        <span className="bg-tlgreen py-2 px-4">send</span> message
                    </button>
                    <button aria-label="arrowright"><FaArrowRight /></button>
                </div>

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
            </div>
        </form>
    )
}

export default Contform