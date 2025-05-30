
const Footer = () => {
    return (
        <div id='contacts' className="h-auto bg-[#FAC599] flex justify-center">
            <div className="container border-t-2 border-[#331707] text-[#331707]">
                <h3 className="font-multiround text-4xl lg:text-5xl my-6">Контакты</h3>

                <div className="flex flex-wrap justify-between font-multiround text-xl lg:text-2xl">
                    <div>
                        <p className="mb-14">Телефон: +7-000-000-00-00</p>
                        <p className="mb-14">Почта: example@gmail.com</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex">
                            <p className="mb-14">График работы:</p>
                            <div className="flex flex-col">
                                <div>ПН-СБ с 10:00 до 22:00 </div>
                                <div>ВС с 10:00 до 20:00</div>
                            </div>
                        </div>
                        <p className="mb-14">Адрес: ул. Пушкина, д. 0</p>
                    </div>
                    <div className="flex flex-col items-center"> 
                        <p className="mb-5">Мы в соцсетях</p>
                        <div className='flex'>
                            <img src="./picture/wta.svg" alt="" />
                            <img src="./picture/vk.svg" alt="" />
                            <img src="./picture/tg.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;