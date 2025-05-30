import React from 'react';

const About = () => {
    return (
        <div id='about' className="relative w-full bg-[#FDE3CD] text-[#803A12] overflow-hidden">
      <img
        src="./picture/left-banner.svg"
        className="absolute inset-y-0 left-0 h-full z-0 select-none"
        alt="Левая баннерная картинка"
        draggable="false"
      />
      <img
        src="./picture/right-banner.svg"
        className="absolute inset-y-0 right-0 h-full z-0 select-none"
        alt="Правая баннерная картинка"
        draggable="false"
      />
      <div className="relative z-10 container mx-auto flex flex-col justify-center py-8 px-32 space-y-4">
        <h1 className="font-bubble text-6xl font-bold">О нас</h1>
        <h2 className="font-multiround text-4xl ">
          «Макакао» — место, где какао становится 
          <br/>
          искусством!
        </h2>
        <p className="text-xl font-bold max-w-2xl animate-fade-in-up">
          Это уголок для тех, кто ценит насыщенный вкус, аромат какао и теплое
          общение. Наше меню — это авторские рецепты напитка: от классики до
          пряных специй и ягодных акцентов. Готовим только из натуральных
          какао-бобов, добавляя в каждую чашку вдохновение.
        </p>
      </div>
    </div>
    );
};

export default About;
