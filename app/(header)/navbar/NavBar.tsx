import Image from 'next/image';
import Link from 'next/link';
import Logo from './images/OW.png';

function NavBar() {
  return (
    <header className='px-6 pt-6 pb-2 flex items-center justify-between border-b-2  border-solid'>
      <Link href='/'>
        <Image src={Logo} width={200} alt='site logo' placeholder='blur' />
      </Link>
      <nav>
        <ul className='flex gap-4'>
          <li>
            <Link href='/login'>Login</Link>
          </li>
          <li>
            <Link href='/signup'>Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export {NavBar};
