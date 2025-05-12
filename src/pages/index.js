import Image from 'next/image';
import Blockbuster from '../components/blockbuster';
import Link from 'next/link';
import OptInForm from '../components/form/opt-in-form';
import { useEffect, useState } from 'react';
import scrollDepth from '../utils/scrollDepth';
import i01 from '../../public/survey/01.png';
import i02 from '../../public/landing/002.png';
import i03 from '../../public/landing/003.png';
import i17 from '../../public/landing/017.png';
import aretes from '../../public/landing/aretes.png';
import bodas from '../../public/landing/bodas.png';
import compromiso from '../../public/landing/compromiso.png';
import collar from '../../public/landing/collar.png';
import pulsera from '../../public/landing/pulsera.png';
import paola from '../../public/landing/paola.png'
import eduardo from '../../public/landing/eduardo.png'
import alejandro from '../../public/landing/alejandro.png'
import Faqs from '../components/faqs';

export default function Home() {
  const [lastClick, setLastClick] = useState('');

  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => fbq('trackCustom', `Scroll Depth: ${value}`),
    });
  });

  const cta = {
    main: 'Contacto, da clic',
    description: 'Ver más detalles',
  };

  return (
    <>
      {/*------------------------------------------------------------------ */}
      <section
        className="relative flex flex-col min-h-[60rem] md:min-h-[72rem] bg-[url('/survey/bg-marmol.png')] bg-cover px-4">

        <div className="container flex-grow flex flex-col items-center justify-center">
          <div className="relative inset-x-0 w-full pt-[15rem]">
            <Image src={i01} layout="fill" className="object-cover md:object-contain"/>
          </div>
          <h1
            className="ft-10 md:w-2/3 mx-auto relative text-brand-1 text-center [text-shadow:_1px_1px_0_rgb(0_0_0_/_20%)]">
            Cada historia de amor, cada logro, cada promesa, merece un símbolo eterno
          </h1>
          <p className="ft-2 mt-12 text-center">Anillos de compromiso y joyería nupcial diseñada a medida con gemas
            certificadas.</p>
          <div className="flex flex-col justify-center items-center mt-12">
            <Link href="#contact">
              <a onClick={() => setLastClick('hero')} className="button !bg-brand-1 mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-2 md:text-left">{cta.description}</p>
            <p className="material-icons animate-bounce"><span className="ft-9">expand_more</span></p>
          </div>
        </div>
      </section>
      {/*------------------------------------------------------------------ */}
      <section className="container grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
        <div className="relative min-h-[50vh]">
          <Image src={i02} layout="fill" objectFit="cover"/>
        </div>
        <div className="w-full p-16 flex items-center justify-center border">
          <p className="ft-4">
            Cada pieza que creamos es un reflejo de tu esencia. <br/><br/>Diseñamos joyería personalizada con oro, plata y piedras
            preciosas certificadas, cuidando cada detalle para que tu joya trascienda generaciones.
          </p>
        </div>
      </section>

      <section className="flex flex-col py-40 bg-[#EFE6E3]/60">
        <div className="container">
          <div className="w-2/3 mx-auto">
            <h2 className="ft-8 text-brand-1 text-center">Cada joya, una historia irrepetible</h2>
            <p className="ft-3 text-center pt-12">Cada joya que creamos es única. Conoce algunas de nuestras piezas más
              icónicas y encuentra inspiración</p>
          </div>
        </div>
      </section>
      {/*------------------------------------------------------------------ */}
      <section className="flex flex-col pb-20 bg-[#EFE6E3]/60">
        <div className="container grid grid-cols-1 lg:grid-cols-5 my-16">
          <div className="w-full">
            <div className="relative mx-auto w-2/3 pt-[66%]">
              <Image src={compromiso} layout="fill" objectFit="contain"/>
            </div>
            <div
              className="flex flex-col justify-center items-center px-12 py-6"
              style={{
                borderWidth: '1px',
                borderLeftWidth: '2px',
                borderStyle: 'solid',
                borderImage: 'linear-gradient(to bottom, rgba(250, 200, 38, 1), rgba(0,0,0,0)) 1 100%',
              }}
            >
              <h3 className="ft-2 order-1 text-center md:order-2 mb-8 text-brand-1 font-bold">Anillos de compromiso</h3>
              <p className="order-3 text-center">Maestros joyeros con más de 20 años de experiencia elaboran tu pieza
                con
                los mejores materiales.</p>
            </div>
          </div>
          <div className="w-full">
            <div className="relative mx-auto w-2/3 pt-[66%]">
              <Image src={bodas} layout="fill" objectFit="contain"/>
            </div>
            <div
              className="flex flex-col justify-center items-center px-12 py-6"
              style={{
                borderWidth: '1px',
                borderStyle: 'solid',
                borderImage: 'linear-gradient(to bottom, rgba(250, 200, 38, 1), rgba(0,0,0,0)) 1 100%',
              }}
            >
              <h3 className="ft-2 order-1 text-center md:order-2 mb-8 text-brand-1 font-bold">Anillos de boda</h3>
              <p className="order-3 text-center">Maestros joyeros con más de 20 años de experiencia elaboran tu pieza
                con
                los mejores materiales.</p>
            </div>
          </div>
          <div className="w-full">
            <div className="relative mx-auto w-2/3 pt-[66%]">
              <Image src={collar} layout="fill" objectFit="contain"/>
            </div>
            <div
              className="flex flex-col justify-center items-center px-12 py-6"
              style={{
                borderWidth: '1px',
                borderStyle: 'solid',
                borderImage: 'linear-gradient(to bottom, rgba(250, 200, 38, 1), rgba(0,0,0,0)) 1 100%',
              }}
            >
              <h3 className="ft-2 order-1 text-center md:order-2 mb-8 text-brand-1 font-bold">Collares y dijes</h3>
              <p className="order-3 text-center">Maestros joyeros con más de 20 años de experiencia elaboran tu pieza
                con
                los mejores materiales.</p>
            </div>
          </div>
          <div className="w-full">
            <div className="relative mx-auto w-2/3 pt-[66%]">
              <Image src={pulsera} layout="fill" objectFit="contain"/>
            </div>
            <div
              className="flex flex-col justify-center items-center px-12 py-6"
              style={{
                borderWidth: '1px',
                borderStyle: 'solid',
                borderImage: 'linear-gradient(to bottom, rgba(250, 200, 38, 1), rgba(0,0,0,0)) 1 100%',
              }}
            >
              <h3 className="ft-2 order-1 text-center md:order-2 mb-8 text-brand-1 font-bold">Brazaletes y pulseras</h3>
              <p className="order-3 text-center">Maestros joyeros con más de 20 años de experiencia elaboran tu pieza
                con
                los mejores materiales.</p>
            </div>
          </div>
          <div className="w-full">
            <div className="relative mx-auto w-2/3 pt-[66%]">
              <Image src={aretes} layout="fill" objectFit="contain"/>
            </div>
            <div
              className="flex flex-col justify-center items-center px-12 py-6"
              style={{
                borderWidth: '1px',
                borderRightWidth: '2px',
                borderStyle: 'solid',
                borderImage: 'linear-gradient(to bottom, rgba(250, 200, 38, 1), rgba(0,0,0,0)) 1 100%',
              }}
            >
              <h3 className="ft-2 order-1 text-center md:order-2 mb-8 text-brand-1 font-bold">Aretes</h3>
              <p className="order-3 text-center">Maestros joyeros con más de 20 años de experiencia elaboran tu pieza
                con
                los mejores materiales.</p>
            </div>
          </div>
        </div>
      </section>
      {/*------------------------------------------------------------------ */}
      <section
        className="relative flex flex-col justify-end min-h-[40rem] md:min-h-[60rem] py-40 w-full -z-10 bg-[url(/landing/bg-ring.png)] bg-cover bg-top bg-no-repeat">
        <div className='container'>
          <h2 className="text-center">Un diseño que celebra tus logros</h2>
        </div>
      </section>
      <div className="reading-container flex flex-col gap-4">
        <div className="flex gap-8 p-8 border">
          <div className="flex flex-col justify-center items-center w-1/4">
            <div className="relative w-full pt-[100%] rounded-full overflow-hidden mb-4">
              <Image src={eduardo} layout="fill" objectFit="contain"/>
            </div>
            <p className="-ft-2">Eduardo M.</p>
          </div>
          <div className="-ft-1 w-3/4">
            <p className="flex gap-4"><span className="material-icons text-yellow-300">star star star star star</span>5/5
            </p>
            <p>Hicieron posible un diseño que representa nuestro amor de una manera única. Ver la emoción de mi novia
              al recibirlo no tuvo precio.</p>
          </div>
        </div>
        <div className="flex gap-8 p-8 border">
          <div className="flex flex-col justify-center items-center w-1/4">
            <div className="relative w-full pt-[100%] rounded-full overflow-hidden mb-4">
              <Image src={paola} layout="fill" objectFit="cover" objectPosition="top"/>
            </div>
            <p className="-ft-2">Paola G.</p>
          </div>
          <div className="-ft-1 w-3/4">
            <p className="flex gap-4"><span className="material-icons text-yellow-300">star star star star star</span>4.5/5
            </p>
            <p>Desde los bocetos entendieron lo que quería, esta pieza tiene mucho significado para mi y quedó
              perfecta.</p>
          </div>
        </div>
        <div className="flex gap-8 p-8 border">
          <div className="flex flex-col justify-center items-center w-1/4">
            <div className="relative w-full pt-[100%] rounded-full overflow-hidden mb-4">
              <Image src={alejandro} layout="fill" objectFit="contain"/>
            </div>
            <p className="-ft-2">Alejandro T.</p>
          </div>
          <div className="-ft-1 w-3/4">
            <p className="flex gap-4"><span className="material-icons text-yellow-300">star star star star star</span>5/5
            </p>
            <p>Todo estuvo perfecto, desde la primera sesión hasta la entrega de nuestros anillos de bodas.</p>
          </div>
        </div>
      </div>
      {/*------------------------------------------------------------------ */}
      <Blockbuster
        overhead="Proceso"
        background={i03}
      />
      {/*------------------------------------------------------------------ */}
      <section className="my-16 py-20 md:py-40 bg-[url('/survey/bg-marmol.png')] bg-cover">
        <div className="container mb-40">
          <h2 className="text-center">Cada paso, una obra maestra en creación</h2>
        </div>
        {/* <p className="reading-container">
          Te comparto tres razones para que inviertas en el crecimiento de tu empresa (no vas a necesitar más):
        </p> */}
        <div className="container grid grid-cols-1 md:grid-cols-4 ">
          <div
            className="flex flex-col justify-center items-center px-12 py-6"
            style={{
              borderWidth: '3px',
              borderStyle: 'solid',
              borderImage: 'linear-gradient(to bottom, rgba(250, 200, 38, 1), rgba(0,0,0,0)) 1 100%',
            }}
          >
            <h3 className="order-1 text-center md:order-2 mb-8 text-brand-1 font-bold">Tu visión inspira cada línea de
              diseño</h3>
            <p className="order-3 text-center">En una sesión privada, descubrimos la inspiración detrás de tu joya.</p>
          </div>
          <div
            className="flex flex-col justify-center items-center px-12 py-6"
            style={{
              borderWidth: '3px',
              borderStyle: 'solid',
              borderImage: 'linear-gradient(to bottom, rgba(250, 200, 38, 1), rgba(0,0,0,0)) 1 100%',
            }}
          >
            <h3 className="order-1 text-center md:order-2 mb-8 text-brand-1 font-bold">Traducimos emociones en formas,
              luz y arte</h3>
            <p className="order-3 text-center">Desde bocetos hasta renders 3D y moldes perfeccionamos cada detalle.</p>
          </div>
          <div
            className="flex flex-col justify-center items-center px-12 py-6"
            style={{
              borderWidth: '3px',
              borderStyle: 'solid',
              borderImage: 'linear-gradient(to bottom, rgba(250, 200, 38, 1), rgba(0,0,0,0)) 1 100%',
            }}
          >
            <h3 className="order-1 text-center md:order-2 mb-8 text-brand-1 font-bold">Maestría que se siente en cada
              detalle</h3>
            <p className="order-3 text-center">Maestros joyeros con más de 20 años de experiencia elaboran tu pieza con
              los mejores materiales.</p>
          </div>
          <div
            className="flex flex-col justify-center items-center px-12 py-6"
            style={{
              borderWidth: '3px',
              borderStyle: 'solid',
              borderImage: 'linear-gradient(to bottom, rgba(250, 200, 38, 1), rgba(0,0,0,0)) 1 100%',
            }}
          >
            <h3 className="order-1 text-center md:order-2 mb-8 text-brand-1 font-bold">El gran momento merece ser
              celebrado</h3>
            <p className="order-3 text-center">Recibes tu joya en un empaque de lujo, lista para perdurar toda la
              vida.</p>
          </div>
        </div>
      </section>
      {/*------------------------------------------------------------------ */}

      <Blockbuster
        overhead="FAQs"
        background={i17}
      />
      {/*------------------------------------------------------------------ */}
      <section className="py-8 bg-[#EFE6E3]/60">
        <div className="container my-20">
          <h2 className="text-center">Todo lo que necesitas saber para crear tu joya perfecta</h2>
        </div>
        <Faqs/>
      </section>
      {/*------------------------------------------------------------------ */}

      {/* Contacto  */}
      <section id="contact" className="border-t border-brand-2 py-20">
        <div className="container">
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="text-brand-1">
              Agenda una consulta gratuita con nuestro equipo y comencemos el proceso de creación.
            </h2>
            <p className="ft-1 my-8 sm:text-left">
              Agenda una cita para comenzar a diseñar tus piezas, Si ya llegaste hasta acá, compártenos unos datos y
              diseñemos tus piezas
            </p>

            <OptInForm
              lastClick={lastClick}
            />
          </div>
        </div>
      </section>
      {/*------------------------------------------------------------------ */}
    </>
  );
}
