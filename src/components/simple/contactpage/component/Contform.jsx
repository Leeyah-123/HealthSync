const Contform = () => {
    return (
        <form className="space-y-5 py-8">
            <div className="grid  text-center ">
                <label htmlFor="name" className="capitalize">name:</label>
                <input type="text" className="border-b-2 outline-none border-black w-4/5 md:w-3/5 mx-auto" />
            </div>
            <div className='grid  text-center capitalize'>
                <label htmlFor="">email:</label>
                <input type="email" className="border-b-2 outline-none border-black w-4/5 md:w-3/5 mx-auto" />
            </div>
            <div className='grid  text-center capitalize'>
                <label htmlFor="">topic</label>
                <select name="" id="" className="border-b-2 outline-none border-black w-4/5 md:w-3/5 mx-auto capitalize">
                    <option className="hover:bg-lemon"></option>
                    <option>workout</option>
                    <option>nutrition</option>
                    <option>health</option>
                </select>
            </div>
            <div className="grid  text-center ">
                <label htmlFor="name" className="capitalize">your message</label>
                <input type="text" className="border-b-2 outline-none border-black w-4/5 md:w-3/5 mx-auto" />
            </div>
            <div className="flex justify-center space-x-5  text-center mx-8">
                <input type="checkbox" name="" id="" className="w-6 h-6 " />
                <p className="font-semibold">Please sign me up for the news letter</p>
            </div>
            <div className="mx-auto   text-center">
                <button type="submit" onClick={(e) => e.preventDefault()}
                    className="bg-lemon py-3 px-14 uppercase"
                    aria-label="submit button"
                >send message </button>
            </div>
        </form>
    )
}

export default Contform
