import Link from 'next/link';
import { info } from '../../../info';
import Image from 'next/image';
import logo from '../../../public/logo_blanco.png';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const path = router.pathname;
  return (
    <header
      className={`fixed top-0 ${path === '/survey' ? 'bg-transparent' : 'bg-gradient-to-br from-brand-1/30 to-white'} backdrop-blur-lg w-screen shadow-lg ${path === '/survey' ? 'h-[4rem]' : 'h-[6.4rem]'} flex justify-center z-[99] hover:top-0`}
    >
      <div className="flex items-center z-[10]">
        <div className="relative flex justify-center items-center h-[4rem] w-[24rem]">
          <Link href="/" passhref>
            <a>
              {/*<Image*/}
              {/*  src={logo}*/}
              {/*  alt={info.companyName}*/}
              {/*  layout="fill"*/}
              {/*  objectFit="contain"*/}
              {/*  className="filter invert"*/}
              {/*/>*/}
              <p className="text-brand-1 text-center"><span className="font-bold ft-10">LCV</span><span className="ft-10">Aliados</span></p>
            </a>
          </Link>
        </div>
      </div>
    </header>

  );
}
