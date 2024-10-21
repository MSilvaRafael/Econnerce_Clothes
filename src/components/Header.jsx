import { useLocation } from 'react-router-dom';
import UserButtons from './UserButtons';

const Header = () => {
    const { pathname } = useLocation();
    const completeHeader = (
        <header className='flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-salte-200 px-8 py-4 items-end justify-between text-xl z-10'>
            <a href="/"><h1 className='h-16 px-2 py-4 text-xl text-white'>Clothes For All</h1></a>
            <UserButtons />
        </header>
    )

    const simpleHeader = (
        <header className='flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-salte-200 px-8 py-4 items-end justify-between text-xl z-10'>
            <a href="/"><h1 className='h-16 px-2 py-4 text-xl text-white'>Clothes For All</h1></a>
        </header>
    )
    return (
        <>{pathname === "/" ? completeHeader : simpleHeader}</>
    )
};

export default Header;