import React from 'react';

interface ICategory {
    title: string;
    img: string;
}

const Category: React.FC<ICategory> = ({ title, img }: ICategory) => {
    return (
        <div className='flex -md:flex-col items-center flex-wrap gap-8 md:pt-24 pt-16 md:px-16 select-none'>
            <img className='w-32' src={img} />
            <h2 className='font-bold md:text-6xl text-3xl tracking-tight transition-colors'>{title}</h2>
        </div>
    );
};

const categories: ICategory[] = [
    {
        title: 'React + Vite',
        img: '/logos/vite-logo.png'
    },
    {
        title: 'Typescript',
        img: '/logos/ts-logo.png'
    },
    {
        title: 'PWA',
        img: '/logos/pwa-logo.png'
    },
    {
        title: 'pnpm',
        img: '/logos/pnpm-logo.png'
    },
    {
        title: 'ESLint',
        img: '/logos/eslint-logo.svg'
    },
    {
        title: 'Docker',
        img: '/logos/docker-logo.png'
    },
    {
        title: 'TailwindCSS',
        img: '/logos/tailwindcss-logo.png'
    },
    {
        title: 'Headless UI',
        img: '/logos/headlessui-logo.png'
    }
];

const MainPage: React.FC = () => {
    return (
        <div id='MainPage' className='w-full flex flex-col items-center'>
            <h1 className='font-bold md:text-7xl text-3xl tracking-tight pt-32'>
                Modern <span className='bg-gradient-to-br from-[#5CAFFF] to-[#BD34FE] bg-clip-text text-transparent'>Vite</span> React App
            </h1>
            <div className='grid md:grid-cols-2 grid-cols-1 pb-32 pt-8'>
                {categories.map(({ title, img }, i) => (
                    <Category key={i} title={title} img={img} />
                ))}
            </div>
            <p className='text-xl py-4 tracking-wide'>
                Made with 💜 by{' '}
                <a href='https://github.com/alessandrofoglia07' className='underline underline-offset-2'>
                    Alexxino
                </a>
            </p>
        </div>
    );
};

export default MainPage;
