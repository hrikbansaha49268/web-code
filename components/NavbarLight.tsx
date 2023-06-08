import TheLogo from '../public/logo.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';


const NavbarLight = () => {

    const router = useRouter();

    return (
        <div className='flex items-center justify-between lg:w-[70%] md:w-[70%] w-full mx-auto px-8 mt-8'>
            <span className='mr-3'>
                <TheLogo />
            </span>
            <ul className='flex items-center lg:w-1/2 md:w-1/2 justify-between py-8 gap-2 lg:text-2xl text-[10px] font-bold tracking-wide'>
                <li className='cursor-pointer'>
                    <Link href="/" className={router.pathname === '/' ? 'opacity-50' : 'opacity-100'}
                        style={{ textDecoration: "none", color: 'black' }}>Home</Link>
                </li>
                <li className='cursor-pointer'>
                    <Link href="/about" className={router.pathname === '/about' ? 'opacity-50' : 'opacity-100'}
                        style={{ textDecoration: "none", color: 'black' }}>About</Link>
                </li>
                <li className='cursor-pointer'>
                    <Link href="/services" className={router.pathname === '/services' ? 'opacity-50' : 'opacity-100'}
                        style={{ textDecoration: "none", color: 'black' }}>Services</Link>
                </li>
                <li className='cursor-pointer'>
                    <Link href="/contact" className={router.pathname === '/contact' ? 'opacity-50' : 'opacity-100'}
                        style={{ textDecoration: "none", color: 'black' }}>Contact Us</Link>
                </li>
            </ul>
        </div>
    );
}


export default NavbarLight;