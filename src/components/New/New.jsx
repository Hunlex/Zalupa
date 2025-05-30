import React from 'react';
import Card from '../Card/Card';

const New = () => {
    return (
        <div id='new' className="bg-[#FAC599] h-auto pb-28 flex justify-center">
            <div className='container'>
                <header className='font-multiround text-5xl ml-7 my-5 text-[#803A12]'>Новинки</header>
                <div className='flex justify-center flex-wrap content-around gap-8 '>
                    <Card image={'./picture/bob.jpg'} title={'какао натуральное 400 мл'} price={200} />
                    <Card image={'./picture/banan.jpg'} title={'Какао банановое 400 мл'} price={220} />
                    <Card image={'./picture/milk.jpg'} title={'какао с молоком 400 мл'} price={210} />
                    <Card image={'./picture/strawberry.jpg'} title={'какао клубничное 400 мл'} price={220} />
                    <Card image={'./picture/brownie.jpg'} title={'брауни 150 гр'} price={190} />
                    <Card image={'./picture/macarons.jpg'} title={'макаруни 3 шт'} price={200} />
                    <Card image={'./picture/donut.jpg'} title={'пончик 1 шт'} price={100} />
                    <Card image={'./picture/napoleon.jpg'} title={'наполеон 180 гр'} price={180} />
                </div>
            </div>
        </div>
    );
};

export default New;