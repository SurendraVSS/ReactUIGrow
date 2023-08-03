import React from 'react'
import './footer.css'

const quickLink01 = [
    {
        path: '#',
        display: 'Marketing'
    },
    {
        path: '#',
        display: 'Analytics'
    },
    {
        path: '#',
        display: 'Commerce'
    },
]

const quickLink02 = [
    {
        path: '#',
        display: 'Pricing'
    },
    {
        path: '#',
        display: 'Documentation'
    },
    {
        path: '#',
        display: 'Guides'
    },
]

const quickLink03 = [
    {
        path: '#about',
        display: 'About'
    },
    {
        path: '#',
        display: 'Job'
    },
    {
        path: '#blog',
        display: 'Blog'
    },
]



const Footer = () => {

    const year= new Date().getFullYear()
    return <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__logo">
                    <h2>GrowWidUs</h2>
                    <p className="description">Grow with us</p>

                    <p className="small__text-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ea voluptate unde quo eligendi soluta?</p>
                </div>
                <div className="footer__quick-links">
                    <h3 className="quick__link-title">Solution</h3>
                    <ul className="quick__links">
                        {
                            quickLink01.map((item, index) => (
                                <li className="quick__link-item" key={index}>
                                    <a href={item.path}>{item.display}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="footer__quick-links">
                    <h3 className="quick__link-title">Support</h3>
                    <ul className="quick__links">
                        {
                            quickLink02.map((item, index) => (
                                <li className="quick__link-item" key={index}>
                                    <a href={item.path}>{item.display}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="footer__quick-links">
                    <h3 className="quick__link-title">Company</h3>
                    <ul className="quick__links">
                        {
                            quickLink03.map((item, index) => (
                                <li className="quick__link-item" key={index}>
                                    <a href={item.path}>{item.display}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <p className="copyright">Copyright {year}, developed by Chinmay Kharat. All rights reserved.{''}</p>
        </div>
    </footer>
}

export default Footer