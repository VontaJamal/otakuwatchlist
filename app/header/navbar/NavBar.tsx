import Image from 'next/image';
import Logo from './images/OW.png';

function NavBar() {
  return (
    <header className='px-6 pt-6 flex items-center justify-between'>
      <Image src={Logo} width={200} alt='site logo' placeholder='blur' />
      <nav >
        <ul className='flex gap-4'>
          <li>
            <button>Login</button>
          </li>
          <li>
            <button>Sign Up</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export {NavBar};
