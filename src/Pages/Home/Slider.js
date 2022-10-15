import React from 'react';
import pic1 from '../../images/pic1.jpg';
import pic2 from '../../images/pic2.jpg';
import pic3 from '../../images/pic3.jpg';


const Slider = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                        <img src={pic1} className="block w-full h-[500px]" alt="..." />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl text-black">Chanel No.5 L'Eau Eau De Toilette Spray</h5>
                            <p className="text-lg text-black">Product Description Let the  100% original Women's Perfume NÂº5 L'eau Chanel EDT  surprise you and boost your femininity using this exclusive  women's perfume  with a unique, personal scent.</p>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img src={pic2} className="block w-full h-[500px]" alt="..." />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl text-black">Versace Eros Eau De Toilette</h5>
                            <p className='text-black text-lg'>You'd expect nothing less than a manly fragrance from the design house of Versace, and you'll get it with Versace Eros, a decadent fragrance for men of distinction.</p>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img src={pic3} className="block w-full h-[500px]" alt="..." />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl text-black">CHANEL Chance Eau Tendre Perfume Spray</h5>
                            <p className="text-lg text-black">Refreshing, oriental, and woody fragrance leaves you feeling cool and confident
                                Ideal for a variety of occasions
                                A fragrance that has been widely accepted</p>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;