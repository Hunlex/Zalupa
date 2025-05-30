import React from 'react';

const Promo = () => {
    return (
        <div id='promo' className="relative w-full bg-[#FDE3CD] text-[#803A12] overflow-hidden" >
            <img
                src="./picture/leftPromo.svg"
                className="absolute inset-y-0 left-0 h-full z-0 select-none"
                alt="Левая баннерная картинка"
                draggable="false"
            />
            <img
                src="./picture/rightPromo.svg"
                className="absolute inset-y-0 right-0 h-full z-0 select-none"
                alt="Правая баннерная картинка"
                draggable="false"
            />
            <div className="h-158 bg-[#68C2C3] flex justify-center" >
            <div className='container  text-[#803A12] z-10 '>
                    <header className='font-bubble text-8xl mt-12 ml-8 absolute '>Акция</header>
                    <div className='flex justify-around mt-14'>
                        <img
                            src={'./picture/card.svg'}
                            alt="Карты Маккакао"
                            className='h-130 animate-levitate-scale'
                        />
                        <div>
                            <p className='text-6xl  font-nunito font-bold leading-relaxed'>Собирай наклейки
                                <br />
                                и получай скидки
                                <br />
                                на каждый третий
                                <br />
                                напиток!</p>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
};

export default Promo;