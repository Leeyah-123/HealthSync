import { useState } from "react"

const Experience = () => {
    const [info, setInfo] = useState(
        {
            amount: ['27', '148', '1000', '120k+'],
            service: ['Years Experiences in health industries by expert', 'Branch offices to give you best services worldwide', 'New users login every single day to our app', 'Users download our videos every single day']
        }
    )
    return (
        <div className='bg-btblack rounded-3xl py-10 grid md:grid-cols-2 xl:grid-cols-4 text-center gap-6 xl:px-8'>

            {info.amount.map((inf, index) => (
                <div className="space-y-3" key={index} >
                    <p className="text-4xl md:text-5xl text-bgray">{inf}</p>
                    <p className="  text-lightblack">{info.service[index]}</p>
                </div>
            ))}
        </div>
    )
}

export default Experience