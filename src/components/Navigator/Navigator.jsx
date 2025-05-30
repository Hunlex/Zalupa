import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navigator = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const menuItems = [
        { id: 'about', title: 'О НАС' },
        { id: 'new', title: 'НОВИНКИ' },
        { id: 'promo', title: 'АКЦИЯ' },
        { id: 'order', title: 'ЗАБРОНИРОВАТЬ СТОЛ' },
        { id: 'job', title: 'СТАТЬ СОТРУДНИКОМ' },
        { id: 'contacts', title: 'КОНТАКТЫ' }
    ];

    const handleMenuItemClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="bg-[#A74C17] h-[70px] flex justify-center text-[#FDE3CD]">
            <div className="container flex items-center justify-between px-4">
                {/* Логотип для мобильных */}
                <div className="md:hidden text-xl font-bold font-multiround">
                   МАКАКАО 
                </div>
                
                {/* Кнопка меню с надписью и иконкой */}
                <button 
                    className="md:hidden flex items-center space-x-2 focus:outline-none group"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="font-multiround text-lg">Меню</span>
                    <div className={`
                        p-2 rounded-full transition-all duration-300
                        group-hover:bg-[#8a3e12] group-hover:text-white
                        group-active:scale-95
                        ${isMenuOpen ? 'bg-[#8a3e12] text-white rotate-90' : ''}
                    `}>
                        {isMenuOpen ? (
                            <HiX className="text-xl transition-transform duration-300" />
                        ) : (
                            <HiMenu className="text-xl transition-transform duration-300" />
                        )}
                    </div>
                </button>
                
                {/* Десктопное меню */}
                <div className="hidden md:flex w-full text-sm lg:text-xl">
                    {menuItems.map((item, index) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`
                                flex justify-center items-center flex-grow
                                border-l border-[#331707] h-10 
                                ${index === menuItems.length - 1 ? 'border-r border-[#331707]' : ''}
                                transition-all duration-300
                                hover:bg-[#8a3e12] hover:text-white
                                cursor-pointer
                                active:scale-95`
                            }
                        >
                            <h3 className="font-multiround text-center px-2">{item.title}</h3>
                        </a>
                    ))}
                </div>
            </div>
            
            {/* Мобильное меню */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-[70px] left-0 right-0 bg-[#A74C17] z-50 shadow-lg">
                    <div className="container mx-auto py-4">
                        {menuItems.map(item => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`
                                    block py-3 px-6 border-b border-[#331707]
                                    transition-all duration-300
                                    hover:bg-[#8a3e12] hover:text-white
                                    cursor-pointer
                                    active:scale-95`
                                }
                                onClick={handleMenuItemClick}
                            >
                                <h3 className="font-multiround">{item.title}</h3>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigator;