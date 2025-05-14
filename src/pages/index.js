import Image from 'next/image';
import Blockbuster from '../components/blockbuster';
import Link from 'next/link';
import OptInForm from '../components/form/opt-in-form';
import { useEffect, useState } from 'react';
import scrollDepth from '../utils/scrollDepth';
import portrait from '../../public/survey/portrait.png';
import i00 from '../../public/survey/00.png';
import i01 from '../../public/landing/01.png';
import i02 from '../../public/landing/02.png';
import i03 from '../../public/landing/03.png';
import i04 from '../../public/landing/04.jpeg';
import pic01 from '../../public/profile-pics/01.jpeg';
import pic02 from '../../public/profile-pics/02.jpeg';
import pic03 from '../../public/profile-pics/03.jpeg';
import pic04 from '../../public/profile-pics/04.jpeg';
import pic05 from '../../public/profile-pics/alejandro.png';
import pic06 from '../../public/profile-pics/06.jpeg';
import pic07 from '../../public/profile-pics/07.jpeg';
import pic08 from '../../public/profile-pics/08.jpeg';
import pic09 from '../../public/profile-pics/09.jpeg';
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
    main: 'No lo pienses, da clic!',
    description: 'Programa la simulación de tu retiro sin compromisos',
  };

  return (
    <>
      {/*------------------------------------------------------------------ */}
      <section
        className="relative flex flex-col min-h-[60rem] md:min-h-[72rem] bg-[url('/survey/00.png')] bg-cover bg-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-1 to-indigo-500 opacity-25"/>

        <div className="container flex-grow flex flex-col items-center justify-center z-20">
          <h1
            className="ft-10 md:w-2/3 mx-auto relative text-white text-center [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)]">
            El mejor momento para pensar en tu retiro fue ayer… hoy es tu segunda mejor opción
          </h1>
          <p className="ft-2 mt-12 font-medium text-center text-white">Descubre como puedes tener el retiro de tus sueños</p>
          <div className="absolute bottom-8 flex flex-col justify-center items-center mt-12">
            <p className="-ft-2 md:text-left text-white mt-auto">Conoce más sobre tu plan de retiro</p>
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
            Puede sonar duro, pero es real: <br/><br/>
            si hoy no te alcanza… imagínate en 20 o 30 años, sin ingresos fijos, con
            inflación y con gastos médicos que no perdonan.
            <br/><br/>
            Mucha gente piensa que el retiro está lejos, que “ya habrá tiempo” o que “no es el momento”. <br/>
            Pero el momento
            siempre fue ayer… y hoy es tu segunda mejor opción.
            <br/><br/>
            Nosotros no vendemos miedo.<br/>
            Te ayudamos a salir de esta trampa sin dejar de vivir bien hoy.<br/>
            Y empieza con un cambio: hacer que tu dinero trabaje para cuando estes viejo.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link href="#contact">
            <a
              onClick={() => setLastClick('story')}
              className="button mb-4 mx-auto"
            >{cta.main}</a>
          </Link>
          <p className="-ft-2 !mt-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Beneficios"
        title="Seguir ahorrando en tu cuenta del banco es como esconder dinero en un cajón… y esperar magia"
        background={i01}
        imgPos="object-bottom"
      />

      <section className="reading-container my-16">
        <p>
          Si ya estás “ahorrando” y tu dinero sigue igual o peor, no es tu culpa: el sistema está hecho para que
          pierdas sin darte cuenta.
          <br/><br/>
          Los bancos te dan migajas de interés.<br/>
          Las tandas no te hacen crecer.<br/>
          Y los seguros disfrazados de inversión… bueno, ya sabes.<br/>
          <br/><br/>
          El plan OptiMaxx Plus de Allianz te ofrece una salida clara:
        </p>

        <h3>12% anual real</h3>
        <p>Basado en el S&P 500 y otros indicadores bursátiles estables. Sin atarte a seguros ni pagar comisiones
          ocultas.</p>
        <h3>Flexibilidad total</h3>
        <p>Para que puedas hacer pausas, ajustes de tus aportaciones y retiros sin dramas.</p>
        <h3>Deducción fiscal del 100%</h3>
        <p>Para que aproveches todos los beneficios fiscales y ganes incluso cuando pagas impuestos.</p>

        <p>Es hora de dejar de guardar tu lana… y empezar a multiplicarla.</p>
        <div className="flex flex-col justify-center items-center">
          <Link href="#contact">
            <a
              onClick={() => setLastClick('story')}
              className="button mb-4 mx-auto"
            >{cta.main}</a>
          </Link>
          <p className="-ft-2 !mt-2 text-center">{cta.description}</p>
        </div>
      </section>

      {/*------------------------------------------------------------------ */}
      <Blockbuster
        overhead="Testimonios"
        title="Esto no lo decimos nosotros… lo dicen los que ya ven su lana crecer"
        background={i02}
      />
      <section className="container my-20">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          <div className="flex gap-8 p-8 border rounded-xl">
            <div className="flex flex-col justify-center items-center w-1/4">
              <div className="relative w-full pt-[100%] rounded-full overflow-hidden mb-4">
                <Image src={pic01} layout="fill" objectFit="cover"/>
              </div>
              <p className="-ft-2">Luis G.</p>
            </div>
            <div className="-ft-1 w-3/4">
              <p className="flex gap-4"><span className="material-icons text-yellow-300">star star star star star</span>5/5
              </p>
              <p>Pensé que esto iba a ser otra promesa más… pero no. Empecé con $3,000 al mes y en menos de un año ya
                veía
                rendimientos. Me dio paz mental sin volverme contador.</p>
            </div>
          </div>
          <div className="flex gap-8 p-8 border rounded-xl">
            <div className="flex flex-col justify-center items-center w-1/4">
              <div className="relative w-full pt-[100%] rounded-full overflow-hidden mb-4">
                <Image src={pic06} layout="fill" objectFit="cover" objectPosition="top"/>
              </div>
              <p className="-ft-2">Andrea M.</p>
            </div>
            <div className="-ft-1 w-3/4">
              <p className="flex gap-4"><span className="material-icons text-yellow-300">star star star star star</span>4.5/5
              </p>
              <p>Siempre sentí que ahorrar era para cuando ya ‘ganara más’. Además, con mi plan deduzco impuestos!
                Siento
                que ahora sí estoy haciendo algo inteligente con mi dinero.</p>
            </div>
          </div>
          <div className="flex gap-8 p-8 border rounded-xl">
            <div className="flex flex-col justify-center items-center w-1/4">
              <div className="relative w-full pt-[100%] rounded-full overflow-hidden mb-4">
                <Image src={pic02} layout="fill" objectFit="cover"/>
              </div>
              <p className="-ft-2">Alejandro T.</p>
            </div>
            <div className="-ft-1 w-3/4">
              <p className="flex gap-4"><span className="material-icons text-yellow-300">star star star star star</span>5/5
              </p>
              <p>El hecho de que no me amarren a plazos forzosos me dio confianza. Ya llevo 8 meses y ver cómo crece mi
                dinero me motiva a no soltarlo.</p>
            </div>
          </div>
          <div className="flex gap-8 p-8 border rounded-xl">
            <div className="flex flex-col justify-center items-center w-1/4">
              <div className="relative w-full pt-[100%] rounded-full overflow-hidden mb-4">
                <Image src={pic03} layout="fill" objectFit="contain"/>
              </div>
              <p className="-ft-2">Eduardo M.</p>
            </div>
            <div className="-ft-1 w-3/4">
              <p className="flex gap-4"><span
                className="material-icons text-yellow-300">star star star star star_outline</span>4/5
              </p>
              <p>Este plan me dio claridad par mi retiro y por fin siento que tengo control de mi ahorro.</p>
            </div>
          </div>
          <div className="flex gap-8 p-8 border rounded-xl">
            <div className="flex flex-col justify-center items-center w-1/4">
              <div className="relative w-full pt-[100%] rounded-full overflow-hidden mb-4">
                <Image src={pic04} layout="fill" objectFit="cover" objectPosition="top"/>
              </div>
              <p className="-ft-2">Sergio M.</p>
            </div>
            <div className="-ft-1 w-3/4">
              <p className="flex gap-4"><span
                className="material-icons text-yellow-300">star star star star star</span> 5/5
              </p>
              <p>Ya estaba harto de que mi banco me diera $15 pesos al mes en intereses. Con mi plan se ve que pinta
                bien
                para mi retiro.</p>
            </div>
          </div>
          <div className="flex gap-8 p-8 border rounded-xl">
            <div className="flex flex-col justify-center items-center w-1/4">
              <div className="relative w-full pt-[100%] rounded-full overflow-hidden mb-4">
                <Image src={pic07} layout="fill" objectFit="contain"/>
              </div>
              <p className="-ft-2">Mariana R.</p>
            </div>
            <div className="-ft-1 w-3/4">
              <p className="flex gap-4"><span className="material-icons text-yellow-300">star star star star star</span>5/5
              </p>
              <p>Llevo más de $80,000 ahorrados en año y medio. Ni cuenta me di cómo lo logré.</p>
            </div>
          </div>
          <div className="flex gap-8 p-8 border rounded-xl">
            <div className="flex flex-col justify-center items-center w-1/4">
              <div className="relative w-full pt-[100%] rounded-full overflow-hidden mb-4">
                <Image src={pic08} layout="fill" objectFit="cover"/>
              </div>
              <p className="-ft-2">Karen H.</p>
            </div>
            <div className="-ft-1 w-3/4">
              <p className="flex gap-4"><span
                className="material-icons text-yellow-300">star star star star star</span>5/5
              </p>
              <p>Empecé con $2,500 y ahora estoy en $5,000 mensuales. Lo mejor es que puedo ajustar si tengo un mes
                complicado y el asesor siempre responde.</p>
            </div>
          </div>
          <div className="flex gap-8 p-8 border rounded-xl">
            <div className="flex flex-col justify-center items-center w-1/4">
              <div className="relative w-full pt-[100%] rounded-full overflow-hidden mb-4">
                <Image src={pic05} layout="fill" objectFit="cover" objectPosition="top"/>
              </div>
              <p className="-ft-2">Alejandro J.</p>
            </div>
            <div className="-ft-1 w-3/4">
              <p className="flex gap-4"><span
                className="material-icons text-yellow-300">star star star star star_outline</span> 4.5/5
              </p>
              <p>Ya lo recomendé a varios de mis clientes porque la mayoría no sabe que existe una opción así.</p>
            </div>
          </div>
          <div className="flex gap-8 p-8 border rounded-xl">
            <div className="flex flex-col justify-center items-center w-1/4">
              <div className="relative w-full pt-[100%] rounded-full overflow-hidden mb-4">
                <Image src={pic09} layout="fill" objectFit="contain"/>
              </div>
              <p className="-ft-2">Lili S.</p>
            </div>
            <div className="-ft-1 w-3/4">
              <p className="flex gap-4"><span
                className="material-icons text-yellow-300">star star star star star</span> 5/5
              </p>
              <p>Pensé que esto era para gente con mucho dinero, pero me explicaron que no, y me sentí muy acompañada
                desde el principio.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link href="#contact">
            <a
              onClick={() => setLastClick('testimonials')}
              className="button mb-4 mx-auto"
            >{cta.main}</a>
          </Link>
          <p className="-ft-2 !mt-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Extras"
        title="¿Te animas hoy? Entonces ahí te van unos extras que sí valen la pena"
        background={i03}
      />

      <section className="container my-20">
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <p className="border p-8 bg-brand-1/10 rounded-2xl text-center font-medium">Proyección a 10, 20 y 25 años con
            números reales, no estimados mágicos.</p>
          <p className="border p-8 bg-brand-1/10 rounded-2xl text-center font-medium">Acceso al boletín mensual con
            hacks para hacer rendir tu lana sin volverte financiero.</p>
          <p className="border p-8 bg-brand-1/10 rounded-2xl text-center font-medium">Asesoría continua sin costo
            adicional, con seguimiento personalizado.</p>
          <p className="border p-8 bg-brand-1/10 rounded-2xl text-center font-medium">Una sesión especial para deducción
            fiscal, que te ahorra más de lo que imaginas.</p>
        </div>

        <p className="reading-container ft-2">
          Y no te preocupes: no te vamos a presionar. Solo te vamos a mostrar exactamente lo que podrías lograr si empiezas hoy.
        </p>

        <div className="flex flex-col mt-16 justify-center items-center">
          <Link href="#contact">
            <a
              onClick={() => setLastClick('extras')}
              className="button mb-4 mx-auto"
            >{cta.main}</a>
          </Link>
          <p className="-ft-2 !mt-2 text-center">{cta.description}</p>
        </div>
      </section>

      {/* Contacto  */}
      <section id="contact" className="border-t border-brand-2 py-20">
        <div className="container">
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="text-brand-1">
              Agenda la simulación de tu retiro gratuita y deja de decir ‘luego lo veo’.
            </h2>
            <p className="ft-2 mt-8 sm:text-left">
              En este zoom veremos:
            </p>
            <ul className="ft-2 my-8">
              <li>— Cuánto puede crecer tu ahorro</li>
              <li>— Cuánto puedes deducir</li>
              <li>— Cómo empezar sin complicarte la vida</li>
            </ul>
            <p className="ft-2 mb-8">
              Sin compromisos, sin letras chiquitas y sin venderte humo. <br/>
              Solo claridad y una estrategia que sí se adapte a ti.
            </p>

            <OptInForm
              lastClick={lastClick}
            />
          </div>
        </div>
      </section>
    </>
  );
}
