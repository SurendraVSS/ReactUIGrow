import React from 'react'
import '../../styles/services.css'

const serviceData = [
    {
        icon: 'ri-apps-line',
        title: 'App Development',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat suscipit eos sit ,  molestiae minima obcaecati sapiente?'
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'Web Design',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. officia est ad dignissimos facere ab sapiente maiores.'
    },
    {
        icon: 'ri-landscape-line',
        title: 'Ghraphics Design',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. officia est ad dignissimos facere ab sapiente maiores.'
    },
    {
        icon: 'ri-rocket-line',
        title: 'Digital Marketing',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. officia est ad dignissimos facere ab sapiente maiores. "

    },
]

const Services = () => {
    return <section id="services">
        <div className="container">
            <div className="services">
                <div className="services__top-content">
                    <h6 className='subtitle'>Our Services</h6>
                    <h2>Save time managing your business with</h2>
                    <h2 className='highlight'>our best services</h2>
                </div>
                <div className="services__item-wrapper">
                {
                        serviceData.map((item,index)=>(
                            <div className="services__item" key={index}>
                            <span className="service_icon">
                                <i class={item.icon}></i>
                            </span>
                            <h3 className="service__title">{item.title}</h3>
                            <p className="description">{item.desc}</p>
                        </div>
                        ))
                    }               
                   
                </div>
            </div>
        </div>
    </section>
}

export default Services