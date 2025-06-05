import { info } from '../../info'
import { getCookie } from 'cookies-next';
import Image from 'next/image';
import portrait from '../../public/survey/portrait.png';
import { useEffect, useState } from 'react';

export default function Cotizador() {
  const [leadInfo, setLeadInfo] = useState(null);

  useEffect(() => {
    const lead = getCookie('lead');
    if (typeof lead === 'string') {
      try {
        setLeadInfo(JSON.parse(lead));
      } catch (e) {
        console.error('Cookie malformada:', e);
      }
    }
  }, []);

  if (!leadInfo) return null; // o spinner / mensaje de carga

  const { name, edad, ahorro } = leadInfo;
  const firstName = name.split(' ')[0];
  const monthlyPayment = parseInt(ahorro);
  const savingYears = 65 - parseInt(edad);

  const formatoMXN = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  });

  function fvAnual(payment) {
    let balance = 0;
    for (let i = 0; i < savingYears; i++) {
      balance += payment * 12;
      balance *= (1 + .12);
    }
    return formatoMXN.format(balance);
  }

  return (
    <div className="relative flex flex-col flex-grow bg-gradient-to-t from-blue-50 to-white">
      <div
        className="relative container !px-0 md:pb-0 flex flex-col flex-grow md:flex-grow-0 items-center pointer-events-auto touch-auto">
        <div className="survey-card border-b pb-12">
          <div className="w-full py-12">
            <p className="ft-3"><span className="font-semibold">{firstName}</span>, te dejo 3 opciones de cuanto tendrías a tus 65 años:</p>
          </div>

          <div className="w-full mb-8 grid grid-cols-2 border border-blue-500 rounded-2xl overflow-hidden">
            <div className="p-8 border-r">
              <p className="-ft-1 font-semibold">Ahorro mensual:</p>
              <p className="ft-4 font-bold mt-4">{formatoMXN.format(monthlyPayment)} <span className="ft-1">mxn</span></p>
            </div>
            <div className="flex flex-col p-8 bg-blue-50">
              <p className="-ft-1 font-semibold">Tu ahorro proyectado:</p>
              <p className="ft-4 font-bold mt-4">{fvAnual(monthlyPayment)} <span className="ft-1">mxn</span></p>
              <a href={info.schedulerLink}
                 target="_blank"
                 className="ft-0 mt-4 underline tracking-wider">Platiquemos →</a>
            </div>
          </div>

          <div className="w-full mb-8 grid grid-cols-2 border border-blue-500 rounded-2xl overflow-hidden">
            <div className="p-8 border-r">
              <p className="-ft-1 font-semibold">Ahorro mensual:</p>
              <p className="ft-4 font-bold mt-4">{formatoMXN.format(monthlyPayment + 500)} <span className="ft-1">mxn</span></p>
            </div>
            <div className="flex flex-col p-8 bg-blue-50">
              <p className="-ft-1 font-semibold">Tu ahorro proyectado:</p>
              <p className="ft-4 font-bold mt-4">{fvAnual(monthlyPayment + 500)} <span className="ft-1">mxn</span></p>
              <a href={info.schedulerLink}
                 target="_blank"
                 className="ft-0 mt-4 underline tracking-wider">Platiquemos →</a>
            </div>
          </div>

          <div className="w-full mb-8 grid grid-cols-2 border border-blue-500 rounded-2xl overflow-hidden">
            <div className="p-8 border-r">
              <p className="-ft-1 font-semibold">Ahorro mensual:</p>
              <p className="ft-4 font-bold mt-4">{formatoMXN.format(monthlyPayment + 1000)} <span className="ft-1">mxn</span></p>
            </div>
            <div className="flex flex-col p-8 bg-blue-50">
              <p className="-ft-1 font-semibold">Tu ahorro proyectado:</p>
              <p className="ft-4 font-bold mt-4">{fvAnual(monthlyPayment + 1000)} <span className="ft-1">mxn</span></p>
              <a href={info.schedulerLink}
                 target="_blank"
                 className="ft-0 mt-4 underline tracking-wider">Platiquemos →</a>
            </div>
          </div>
          <p className="ft-2 mb-8">
            Vamos platicando para desglosar el plan de ahorro que más te convenga.
          </p>
          <a
            href={info.schedulerLink}
            target="_blank"
            className="button ft-3 mt-auto !w-full"
          >
            Programa una asesoría gratuita
          </a>
        </div>

        <div className={`survey-card`}>
          <div className="relative w-full my-8 pt-[70%] rounded-2xl overflow-hidden">
            <Image src={portrait} layout="fill" objectFit="cover" objectPosition="top"/>
          </div>
          <p className="ft-6 sans text-center font-bold">Deja me presento:</p>
          <p className="ft-2 mt-4 text-center mb-12">
            Soy Luis Castañeda, asesor de Allianz® desde hace más de 8 años y me gustaría poder platicar
            contigo.
          </p>
          <p className="ft-2 mt-4 text-center mb-12">
            ¿Por qué no agendas una asesoría sin compromisos para solucionar todas tus dudas?
          </p>
          <a
            href={info.schedulerLink}
            target="_blank"
            className="button ft-3 mt-auto !w-full"
          >
            Ya dale clic, venga!
          </a>
        </div>
      </div>

    </div>
  );
}