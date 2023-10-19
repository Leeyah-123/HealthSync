import Contheader from "../simple/contactpage/Contheader"
import Contfooter from "../simple/contactpage/Contfooter"
import Conthero from "../simple/contactpage/component/Conthero"
import Contform from "../simple/contactpage/component/Contform"
const Contactmain = () => {
    return (
        <>
            <section className="w-full top-0 fixed h-full bg-lightGray1 opacity-15"></section>
            <section className=" opacity-90 bg-white mx-3 md:m-16">
                <Contheader />
                <Conthero />
                <Contform />
                <Contfooter />
            </section>
        </>
    )
}

export default Contactmain
