import React from 'react'
import '../../styles/testimonial.css'
import Slider from 'react-slick'
import ava01 from '../../images/ava-1.jpg'
import ava02 from '../../images/ava-2.jpg'
import ava03 from '../../images/ava-3.jpg'



const Testimonial = () => {
    const settings= {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay:true,
        autoplaySpeed:2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide:true
    }

    return <section>
        <div className="container">
            <div className="slider_container-top">
                <h6 className="subtitle">Testimonials</h6>
                <h2>Trusted by more than
                    <span className="highlight"> 5,000 customers
                    </span>
                </h2>
            </div>

            <div className="slider__wrapper">
                <Slider {...settings}>
                    <div className="slider__item">
                        <p className="description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam debitis sit voluptatum aperiam dolorum. Ut minima magni sunt culpa saepe. Asperiores optio, minus dolorem tenetur dolorum nulla quasi et, nihil molestiae id maxime vero, officia quo repudiandae perspiciatis laborum distinctio.
                        </p>

                        <div className="customer__details">
                            <div className="customer__img">
                                <img src={ava01} alt="" />
                            </div>
                            <div>
                                <h5 className="customer__name">John Doe</h5>
                                <p className="description">CEO, Workcreation</p>
                            </div>
                        </div>
                    </div>
                    <div className="slider__item">
                        <p className="description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam debitis sit voluptatum aperiam dolorum. Ut minima magni sunt culpa saepe. Asperiores optio, minus dolorem tenetur dolorum nulla quasi et, nihil molestiae id maxime vero, officia quo repudiandae perspiciatis laborum distinctio.
                        </p>

                        <div className="customer__details">
                            <div className="customer__img">
                                <img src={ava02} alt="" />
                            </div>
                            <div>
                                <h5 className="customer__name">Anney Martin</h5>
                                <p className="description">Software Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="slider__item">
                        <p className="description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam debitis sit voluptatum aperiam dolorum. Ut minima magni sunt culpa saepe. Asperiores optio, minus dolorem tenetur dolorum nulla quasi et, nihil molestiae id maxime vero, officia quo repudiandae perspiciatis laborum distinctio.
                        </p>

                        <div className="customer__details">
                            <div className="customer__img">
                                <img src={ava03} alt="" />
                            </div>
                            <div>
                                <h5 className="customer__name">William Cooper</h5>
                                <p className="description">Sr. Product Developer</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    </section>
}

export default Testimonial