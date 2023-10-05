
import { useState } from "react"
import fruit from './Assets/fruit.png'
import exercise from './Assets/exercise.png'
import water from './Assets/water.png'
const Services = () => {
    const [service, setservice] = useState({
        image: [water, fruit, exercise],
        title: ['drink tracker', 'food tracker', 'daily exercise'],
        text: ['Our Drink Tracker helps monitor your daily water inatke effortlessly.Stay on top of your hydartion goals, improve your well-being',
            'Take contol of your eating habits with our food tracker app. Log your meals, track your calories, and make informed choices',
            'Never forgrt to stay hydrated again.Our daily exercise routine makes it possible for consistent and felxible exercise routine'
        ],
        color: ['tlgreen', 'darkgray', 'white']
    })
    return (
        <section>
            <main className="grid sl:grid-cols-2 sl:gap-x-5 gap-5 sl:gap-0 text-center sl:text-left">
                <p className="capitalize font-bold text-2xl mx-10 sl:mx-0 lg:mx-8  sg:mt-2 sg:text-4xl md:text-5xl ">catalog of Services <span>through our app</span></p>
                <p className="text-lg text-lightblack">Our app provides a comprehensive catalog of services that cater to a wide range of needs, all accessible at your fingertips. With our app, you're not just downloading a piece of software; you're unlocking a world of convenience and possibilities </p>
            </main>
            <aside className="my-10 sl:my-20 grid gap-10 text-center sl:grid-cols-3 sl:gap-3 sl:text-left">
                {service.image.map((img, index) => (
                    <div key={index} >
                        <img src={img} alt="" className={`bg-${service.color[index]} px-2 rounded-2xl`} />
                        <p className="capitalize font-bold text-2xl my-3">{service.title[index]}</p>
                        <p className="text-lightblack">{service.text[index]}</p>
                    </div>
                ))}
            </aside>
        </section>
    )
}

export default Services