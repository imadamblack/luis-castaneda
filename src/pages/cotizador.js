import { info } from '../../info'
import { getCookie } from 'cookies-next';
import Image from 'next/image';
import SavingsChart from '../components/chart';
import portrait from '../../public/survey/portrait.png';

export default function Cotizador({lead}) {

  const { fullName, edad, ahorro } = lead;
  const firstName = fullName.split(' ')[0];
  const monthlyPayment = parseInt(ahorro);
  const savingYears = 65 - parseInt(edad);

  const formatoMXN = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0,
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
            <p className="ft-3"><span className="font-semibold">{firstName}</span>, te dejo 3 opciones de cuanto
              tendrías a tus <nobr>65 años</nobr>:
            </p>
          </div>

          <div className="w-full mb-8 grid grid-cols-2 border border-blue-500 rounded-2xl overflow-hidden">
            <div className="p-8 border-r">
              <p className="-ft-1 font-semibold">Ahorro mensual:</p>
              <p className="ft-4 font-bold mt-4">{formatoMXN.format(monthlyPayment)} <span className="ft-1">mxn</span>
              </p>
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
              <p className="ft-4 font-bold mt-4">{formatoMXN.format(monthlyPayment + 500)} <span
                className="ft-1">mxn</span></p>
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
              <p className="ft-4 font-bold mt-4">{formatoMXN.format(monthlyPayment + 1000)} <span
                className="ft-1">mxn</span></p>
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

          <div className="w-full p-8 my-12 rounded-2xl overflow-hidden bg-gradient-to-br border border-blue-500">
            <SavingsChart age={edad} monthly={ahorro}/>
            <div className="flex justify-between mt-8">
              <p className="-ft-1 flex">
                <span className="material-icons ft-0 mr-4" style={{color: '#999999'}}>timeline</span>
                Tu ahorro
              </p>
              <p className="-ft-1 flex">
                <span className="material-icons ft-0 mr-4" style={{color: '#4ade80'}}>timeline</span>
                Tu ahorro final
              </p>
            </div>
          </div>

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

export async function getServerSideProps(ctx) {
  const {req, res} = ctx;
  const leadCookie = getCookie('lead', {req, res}) || '{}';
  const _fbc = getCookie('_fbc') || '';
  const _fbp = getCookie('_fbp') || '';

  const lead = JSON.parse(leadCookie);

  if (!lead || lead === 'null' || Object.keys(lead).length === 0) {
    return {
      redirect: {
        permanent: false,
        destination: '/survey',
      },
    };
  }

  return {
    props: {
      lead: {
        fullName: lead.fullName,
        email: lead.email,
        phone: lead.phone,
        whatsapp: lead.whatsapp,
        ahorro: lead.ahorro,
        edad: lead.edad,
        sheetRow: lead.sheetRow || '',
        crmId: lead.crmId || '',
        _fbc,
        _fbp,
      },
    },
  };
}