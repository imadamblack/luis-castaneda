import Image from 'next/image';
import Blockbuster from '../components/blockbuster';
import Link from 'next/link';
import OptInForm from '../components/form/opt-in-form';
import { useEffect, useState } from 'react';
import scrollDepth from '../utils/scrollDepth';
import portrait from '../../public/survey/portrait.png';
import i02 from '../../public/survey/02.png';
import i03 from '../../public/survey/01.png';
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
        className="relative flex flex-col min-h-[60rem] md:min-h-[72rem] bg-[url('/survey/00.png')] bg-cover bg-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-1 to-indigo-500 opacity-25"/>

        <div className="container flex-grow flex flex-col items-center justify-center z-20">
          <h1
            className="ft-10 md:w-2/3 mx-auto relative text-white text-center [text-shadow:_1px_1px_0_rgb(0_0_0_/_20%)]">
            El mejor momento para pensar en tu retiro fue ayer… hoy es tu segunda mejor opción
          </h1>
          <p className="ft-2 mt-12 text-center text-white">Descubre como puedes tener el retiro de tus sueños</p>
          <div className="flex flex-col justify-center items-center mt-12">
            <Link href="#contact">
              <a onClick={() => setLastClick('hero')} className="button !bg-brand-1 mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-2 md:text-left text-white">{cta.description}</p>
            <p className="material-icons animate-bounce"><span className="ft-9 text-white">expand_more</span></p>
          </div>
        </div>
      </section>
      {/*------------------------------------------------------------------ */}
      <section className="container grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
        <div className="relative min-h-[50vh] rounded-3xl overflow-hidden">
          <Image src={portrait} layout="fill" objectFit="cover"/>
        </div>
        <div className="w-full p-16 flex items-center justify-center border rounded-3xl">
          <p className="ft-2">
            Puede sonar duro, pero es real: si hoy no te alcanza… imagínate en 20 o 30 años, sin ingresos fijos, con
            inflación y con gastos médicos que no perdonan.
            <br/><br/>
            Mucha gente piensa que el retiro está lejos, que “ya habrá tiempo” o que “no es el momento”. Pero el momento
            siempre fue ayer… y hoy es tu segunda mejor opción.
            <br/><br/>
            Nosotros no vendemos miedo.
            Te ayudamos a salir de esta trampa sin dejar de vivir bien hoy.
            Y empieza con un cambio: hacer que tu dinero trabaje desde ya.
          </p>
        </div>
      </section>

      <section className="flex flex-col py-40 bg-[#EFE6E3]/60">
        <div className="reading-container mx-auto">
          <h2 className="text-brand-1">Seguir ahorrando en tu cuenta del banco es como esconder dinero en un cajón… y
            esperar magia</h2>
          <p className="pt-12">
            Si ya estás “ahorrando” y tu dinero sigue igual o peor, no es tu culpa: el sistema está hecho para que
            pierdas sin darte cuenta.
            <br/><br/>
            Los bancos te dan migajas de interés.<br/>
            Las tandas no te hacen crecer.<br/>
            Y los seguros disfrazados de inversión… bueno, ya sabes.<br/>
            <br/><br/>
            El plan OptiMaxx Plus de Allianz te ofrece una salida clara:
            <br/><br/>
            - 12% anual real, sin atarte a seguros ni pagar comisiones ocultas.<br/>
            - Flexibilidad total: pausas, ajustes y retiros sin dramas.<br/>
            - Deducción fiscal del 100%, para que ganes incluso cuando pagas impuestos.<br/>
            <br/><br/>
            Es hora de dejar de guardar tu lana… y empezar a multiplicarla.
          </p>
        </div>
      </section>

      {/*------------------------------------------------------------------ */}
      <Blockbuster
        title="Esto no lo decimos nosotros… lo dicen los que ya ven su lana crecer"
        background={i02}
      />
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

      {/*<Blockbuster*/}
      {/*  overhead="FAQs"*/}
      {/*  background={i03}*/}
      {/*/>*/}
      {/*/!*------------------------------------------------------------------ *!/*/}
      {/*<section className="py-8 bg-[#EFE6E3]/60">*/}
      {/*  <div className="container my-20">*/}
      {/*    <h2 className="text-center">Todo lo que necesitas saber para crear tu joya perfecta</h2>*/}
      {/*  </div>*/}
      {/*  <Faqs/>*/}
      {/*</section>*/}
      {/*------------------------------------------------------------------ */}

      {/* Contacto  */}
      <section id="contact" className="border-t border-brand-2 py-20">
        <div className="container">
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="text-brand-1">
              Agenda una simulación de tu retiro gratuita y deja de decir ‘luego lo veo’.
            </h2>
            <p className="ft-1 my-8 sm:text-left">
              Agenda hoy tu simulación personalizada: veremos cuánto puedes crecer, cuánto puedes deducir y cómo
              empezar sin complicarte la vida.
              <br/><br/>
              Sin compromiso, sin letra chiquita, sin venderte humo. Solo claridad, números y una estrategia que sí se
              adapta a ti.
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
