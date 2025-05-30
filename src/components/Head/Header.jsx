const Header = () => {
    return (
        <div className="bg-[#F7B075] h-[121px] md:h-[100px] flex justify-center">
            <div className='container flex justify-center items-center font-bubble text-[#803A12]'>
                <div className="hidden md:block">
                    <header className=' h-[71px] text-[71px] md:text-[50px]'>МАКАКАО</header>
                </div>
                <div>
                    <img
                        src="./picture/image.png"
                        alt="Логотип Маккакао"
                        className='h-24 md:h-20 px-22 md:px-12'
                    />
                </div>
                <div className="hidden md:block">
                    <header className=' h-[71px] text-[71px] md:text-[50px]'>МАКАКАО</header>
                </div>
            </div>
        </div>
    )
}
export default Header