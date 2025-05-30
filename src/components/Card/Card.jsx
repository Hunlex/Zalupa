const Card = ({image, title, price}) => {
    return (
        <div className='w-80 md:bg-[#fff1e5] rounded-4xl flex flex-col font-multiround text-[#331707] '>
            <img
                src={image}
                className='rounded-4xl h-60'
            />
            <span className='uppercase py-2 px-6 text-base pt-4'>{title}</span>
            <div className='flex flex-row px-6 justify-between py-2 pb-4' >
                <span className='text-4xl '>{price} ₽</span>
                <button className='bg-[#A74C17] text-[#fff1e5] text-base rounded-2xl font-nunito font-extrabold flex flex-row justify-center items-center px-2.5 gap-1 cursor-pointer 
                 transition-all duration-300
                            hover:bg-[#803a12] hover:text-white
                            active:scale-95`'>
                    <img src="./picture/cart.svg" alt="" className='w-5 object-cover stroke-[#fff1e5]' />
                    <span>В корзину</span></button>
            </div>
        </div>
    );
};

export default Card;