'use client';
import { useForm, FormProvider } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { setCookie, getCookie } from 'cookies-next';
import { info } from '../../info';
import StepRenderer from '../components/form/stepRenderer';
import fbEvent from '../services/fbEvents';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import allianz from '../../public/allianz-logo-white.png';
import i00 from '../../public/survey/00.png';
import i01 from '../../public/survey/01.png';
import i02 from '../../public/survey/02.png';
import i03 from '../../public/survey/03.jpg';
import portrait from '../../public/survey/portrait.png';
import { stepTracker } from '../utils/stepTracker';


const setFormSteps = ({fullName, email, phone}) => ([
  {
    type: 'checkpoint',
    name: 'checkpoint-1',
    render: () => (
      <div className={`relative flex-grow`}>
        <p className="ft-6 sans text-center font-bold">El mejor momento para pensar en tu retiro fue ayer, hoy es tu
          segunda mejor opción.</p>
        <div className="relative w-full my-8 pt-[80%] rounded-2xl overflow-hidden">
          <Image src={i01} layout="fill" objectFit="cover"/>
        </div>
        <p className="ft-2 mt-4 text-center mb-12">Comienza a hacer que tu dinero trabaje por ti.</p>
      </div>
    ),
  },
  {
    type: 'checkbox',
    name: 'fin-ahorro',
    title: '¿Con qué fin ahorras normalmente?',
    options: [
      {value: 'vejez', label: 'Para mi vejez'},
      {value: 'viajar', label: 'Para viajar'},
      {value: 'coche', label: 'Comprar un coche'},
      {value: 'intereses', label: 'Para generar intereses'},
      {value: 'ceros', label: 'Dejar de estar en ceros'},
    ],
    cols: 1,
    inputOptions: {required: true},
  },
  {
    type: 'radio',
    name: 'frase-identidad',
    title: '¿Con cuál de estas frases te identificas más?',
    options: [
      {value: 'gano-pero-se-va', label: '“Gano bien, pero no sé a dónde se va”'},
      {value: 'no-me-alcanza', label: '“Me gustaría ahorrar, pero nunca me alcanza”'},
      {value: 'hacer-rendir', label: '“Estoy buscando cómo hacer rendir mi lana”'},
      {value: 'no-avanzar', label: '“Ya me cansé de no avanzar”'},
    ],
    cols: 1,
    inputOptions: {required: true},
  },
  {
    type: 'radio',
    name: 'tienes-ahorro',
    title: '¿Tienes actualmente un ahorro estructurado que crece cada mes?',
    options: [
      {value: 'constante', label: 'Sí, con constancia y estrategia'},
      {value: 'a-veces', label: 'A veces ahorro, pero sin disciplina'},
      {value: 'cuando-puedo', label: 'No, ahorro solo cuando puedo (y a veces ni eso)'},
    ],
    cols: 1,
    inputOptions: {required: true},
  },
  {
    type: 'checkbox',
    name: 'metodos-ahorro',
    title: '¿Qué métodos de ahorro has intentado antes?',
    options: [
      {value: 'banco', label: 'Cuenta de banco'},
      {value: 'apps', label: 'Apps (FinTechs)'},
      {value: 'tandas', label: 'Tandas'},
      {value: 'empresa', label: 'Plan de ahorro de mi empresa'},
      {value: 'metales', label: 'Metales como oro y plata'},
      {value: 'bolsa', label: 'Inversión en bolsa'},
      {value: 'otro', label: 'Otro'},
    ],
    cols: 1,
    inputOptions: {required: true},
  },
  {
    type: 'radio',
    name: 'dinero-extra',
    title: 'Normalmente, ¿qué haces con tu dinero una vez que cubres tus gastos fijos?',
    options: [
      {value: 'invierte', label: 'Lo invierto o lo asigno a objetivos financieros'},
      {value: 'guarda-sin-claridad', label: 'Trato de guardarlo, pero sin mucha claridad'},
      {value: 'se-va', label: 'Se me va en gastos no planeados o lo dejo en la cuenta'},
    ],
    cols: 1,
    inputOptions: {required: true},
  },
  {
    type: 'checkpoint',
    name: 'checkpoint-2',
    render: () => (
      <div className={`relative flex-grow`}>
        <p className="ft-6 sans text-center font-bold">Seguir ahorrando en tu cuenta del banco es como esconder dinero
          en un cajón y esperar magia</p>
        <div className="relative w-full my-8 pt-[80%] rounded-2xl overflow-hidden">
          <Image src={i02} layout="fill" objectFit="cover" objectPosition="top"/>
        </div>
        <p className="ft-2 mt-4 text-center mb-12">
          Mejor decídete por:
        </p>
        <div className="flex flex-col gap-4">
          <div className="p-8 border border-blue-100 rounded-2xl ft-2 bg-white text-center shadow-md">
            <b>12% anual real</b><br/> Sin atarte a seguros ni pagar comisiones ocultas.
          </div>
          <div className="p-8 border border-blue-100 rounded-2xl ft-2 bg-white text-center shadow-md">
            <b>Flexibilidad total</b><br/> Pausas, ajustes de aportaciones y retiros sin dramas.
          </div>
          <div className="p-8 border border-blue-100 rounded-2xl ft-2 bg-white text-center shadow-md">
            <b>Deducción fiscal del 100%</b><br/> Para que ganes incluso cuando pagas impuestos.
          </div>
        </div>
      </div>
    ),
  },
  {
    type: 'radio',
    name: 'metas-financieras',
    title: '¿Tienes metas financieras específicas a mediano o largo plazo?',
    options: [
      {value: 'claras', label: 'Sí, muy claras y definidas'},
      {value: 'maso', label: 'Más o menos, pero no en papel'},
      {value: 'nada', label: 'No realmente, no he pensado en eso aún'},
    ],
    cols: 1,
    inputOptions: {required: true},
  },
  {
    type: 'text',
    name: 'edad',
    title: '¿Cuántos años tienes?',
    inputOptions: {required: true},
  },
  {
    type: 'text',
    name: 'edad-retiro',
    title: '¿A los cuántos años piensas retirarte?',
    inputOptions: {required: true},
  },
  {
    type: 'radio',
    name: 'conocimiento-inversion',
    title: '¿Cuánto sabes sobre instrumentos de inversión como Allianz, CETES, fondos o seguros?',
    options: [
      {value: 'conozco', label: 'Conozco y he invertido antes'},
      {value: 'he-escuchado', label: 'He escuchado, pero no sé exactamente cómo funcionan'},
      {value: 'poco', label: 'Sé muy poco o nada'},
    ],
    cols: 1,
    inputOptions: {required: true},
  },
  {
    type: 'radio',
    name: 'presupuesto',
    title: '¿Cuánto puedes ahorrar al mes?',
    options: [
      {value: '2500-3000', label: 'De $2,500 a $3,000'},
      {value: '3000-5000', label: 'De $3,000 a $5,000'},
      {value: '5000-10000', label: 'De $5,000 a $10,000'},
      {value: '10000+', label: 'Más de $10,000'},
    ],
    cols: 1,
    inputOptions: {required: true},
  },
  {
    type: 'checkpoint',
    name: 'checkpoint-3',
    render: () => (
      <div className={`relative flex-grow`}>
        <p className="ft-6 sans text-center font-bold">Tu retiro administrado por una de las aseguradoras más grandes
          del mundo: Allianz</p>
        <div className="relative w-full my-8 pt-[80%] rounded-2xl overflow-hidden">
          <Image src={i03} layout="fill" objectFit="cover"/>
        </div>
        <p className="ft-2 mt-4 text-center mb-12">No necesitas ser financiero ni comprometerte de por vida para tener
          acceso a portafolios de inversión que te generen rendimientos para tu retiro.</p>
      </div>
    ),
  },
  {
    type: 'radio',
    name: 'compromiso-inversion',
    title: '¿Qué tan dispuesto estás a comprometerte con un plan mensual de inversión?',
    options: [
      {value: 'muy-dispuesto', label: 'Muy dispuesto, si tiene sentido y me da resultados'},
      {value: 'flexible', label: 'Lo consideraría si es flexible'},
      {value: 'miedo', label: 'No estoy seguro, me da miedo atarme a algo'},
    ],
    cols: 1,
    inputOptions: {required: true},
  },
  {
    type: 'radio',
    name: 'liquidez-importancia',
    title: '¿Qué tan importante es que tu inversión que esté disponible para retirar en cualquier momento?',
    options: [
      {value: 'muy-importante', label: 'Muy importante, lo necesito disponible'},
      {value: 'interesa-esperar', label: 'Me interesa, pero puedo esperar si vale la pena'},
      {value: 'no-considerado', label: 'No lo había considerado'},
    ],
    cols: 1,
    inputOptions: {required: true},
  },
  {
    type: 'radio',
    name: 'beneficios-fiscales',
    title: '¿Te interesa aprovechar beneficios fiscales como la deducción de impuestos?',
    options: [
      {value: 'si', label: 'Sí, totalmente'},
      {value: 'tal-vez', label: 'Tal vez, si no es muy complicado'},
      {value: 'no-sabia', label: 'No sabía que eso era posible'},
    ],
    cols: 1,
    inputOptions: {required: true},
  },
  {
    type: 'radio',
    name: 'que-detiene',
    title: '¿Qué te detiene hoy para empezar a invertir en tu retiro?',
    options: [
      {value: 'no-saber', label: 'No saber por dónde empezar'},
      {value: 'desconfianza', label: 'No confiar en las opciones que he visto'},
      {value: 'no-suficiente-dinero', label: 'Sentir que no tengo suficiente dinero'},
      {value: 'listo', label: 'Nada, estoy listo'},
      {value: 'otro', label: 'Otro'},
    ],
    cols: 1,
    inputOptions: {required: true},
  },
  {
    type: 'checkpoint',
    name: 'checkpoint-4',
    autoAdvance: true,
    render: () => (
      <div className="container flex flex-col justify-center items-center z-10">
        <p className="ft-4 font-semibold mt-12 text-center">Dame unos segundos</p>
        <h1 className="ft-8 mb-12 text-center md:w-2/3">Estamos analizando tus respuestas</h1>

        <div className="w-full max-w-[50rem] h-12 p-2 mt-20 mb-4 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{width: '0%'}}
            animate={{width: '100%'}}
            transition={{duration: 5, ease: 'easeInOut'}}
            className="h-full bg-gradient-to-br from-blue-800 to-indigo-500 rounded-2xl"
          />
        </div>
        <p className="-ft-1 flex items-center text-center">
          Analizando
          <span
            className="-ft-1 material-symbols-outlined animate-spin ml-4">progress_activity</span>
        </p>
      </div>
    ),
  },
  {
    type: 'opt-in',
    title: 'Ok, tengo una opción para tu plan de ahorro',
    description: 'Compárteme tus datos para platicar sobre tu plan y enviarte una plantilla para que puedas proyectarlo.',
    fields: [
      {
        type: 'text',
        name: 'name',
        title: 'Tu nombre completo',
        inputOptions: {value: fullName, required: true},
      },
      {
        type: 'email',
        name: 'email',
        title: 'Tu correo',
        inputOptions: {value: email, required: true},
      },
      {
        type: 'tel',
        name: 'phone',
        title: 'Tu WhatsApp',
        inputOptions: {value: phone, required: true, maxLength: 10, minLength: 10},
      },
    ],
  },
]);

export default function Survey() {
  const [showIntro, setShowIntro] = useState(true);
  const [showOutro, setShowOutro] = useState(false);
  const [formStep, setFormStep] = useState(18);
  const [inputError, setInputError] = useState(null);
  const [sending, setSending] = useState(false);
  const [lead, setLead] = useState({fullName: '', email: '', phone: ''});
  const methods = useForm({mode: 'all'});
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
  } = methods;
  const router = useRouter();

  useEffect(() => {
    const leadCookie = getCookie('lead')
    setLead(JSON.parse(leadCookie))
  }, []);
  useEffect(() => {
    if (showIntro) {
      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [showIntro]);
  useEffect(() => {
    const current = formSteps[formStep];

    if (current.autoAdvance) {
      const timer = setTimeout(() => {
        setFormStep((prev) => Math.min(prev + 1, formSteps.length - 1));
      }, 5000);

      return () => clearTimeout(timer);
    }
  },[formStep]);
  useEffect(() => {
    const step = formSteps[formStep];

    if (step?.type === 'checkpoint') {
      fbEvent(step?.name);
      console.log(step?.name);
    }
  }, [formStep]);

  const formSteps = setFormSteps({fullName: lead.fullName, email: lead.email, phone: lead.phone});
  const lastInputIndex = formSteps.reduce((lastIndex, step, i) => {
    return step.type !== 'checkpoint' ? i : lastIndex;
  }, 0);
  const handleNext = async () => {
    const currentStep = formSteps[formStep];
    if (currentStep.type === 'checkpoint') {
      return setFormStep((prev) => Math.min(prev + 1, formSteps.length - 1));
    }

    const valid = await methods.trigger(currentStep.name);
    if (!valid) {
      setInputError(formStep);
      return;
    }

    setInputError(null);
    window.scrollTo(0, 0);
    setFormStep((prev) => Math.min(prev + 1, formSteps.length - 1));
  };
  const onSubmit = async (data) => {
    setSending(true);
    try {
      const _fbc = getCookie('_fbc');
      const _fbp = getCookie('_fbp');
      const leadUtm = getCookie('lead_utm');
      const utm = JSON.parse(leadUtm);
      data.whatsapp = '521' + data.phone.replace(/^(MX)?\+?(52)?\s?0?1?|\s|\(|\)|-|[a-zA-Z]/g, '');

      const payload = {...data, ...utm, _fbc, _fbp};

      await fetch(info.surveyWebhook, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      await fbEvent('Lead', {phone: data.whatsapp, email: data.email});

      // if (info.schedulerLink) {
      //   const forwardLink = document.createElement('a');
      //   forwardLink.href = `${info.schedulerLink}?name=${data.name}&email=${data.email}&phone=${data.whatsapp}`;
      //   forwardLink.target = '_blank';
      //   forwardLink.click();
      // }

      setShowOutro(true);
    } catch (err) {
      console.error('Error al enviar formulario:', err);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <div className="relative flex flex-col flex-grow bg-gradient-to-t from-blue-50 to-white">
        <AnimatePresence mode="wait">
          {showIntro && (
            <motion.div
              key="intro"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.5}}
              className="relative flex-grow flex flex-col items-center justify-center px-4 pt-[40vh] pb-12"
            >
              <Image src={i00} layout="fill" objectFit="cover"/>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-1 to-indigo-500 opacity-25"/>

              <div className="container flex flex-col justify-center items-center z-10">
                <p className="ft-4 font-semibold mt-12 text-center text-white">Tu ahorro, tu ritmo.</p>
                <h1 className="ft-8 mb-12 text-center md:w-2/3 text-white">Descubre como puedes tener el retiro de tus
                  sueños</h1>

                <div className="w-full max-w-[50rem] h-12 p-2 mt-20 mb-4 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{width: '0%'}}
                    animate={{width: '100%'}}
                    transition={{duration: 5, ease: 'easeInOut'}}
                    className="h-full bg-gradient-to-br from-blue-800 to-indigo-500 rounded-2xl"
                  />
                </div>
                <p className="-ft-1 flex items-center text-center text-gray-100">
                  Cargando el test
                  <span
                    className="-ft-1 material-symbols-outlined animate-spin ml-4">progress_activity</span>
                </p>
              </div>
              <div className="relative mt-auto inset-x-0 w-[12rem] pt-[6rem] md:pt-[6rem]">
                <Image src={allianz} layout="fill" className="object-contain grayscale-50 "/>
              </div>
            </motion.div>
          )}
          {!showIntro && !showOutro && (
            <motion.div
              key="survey"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.5}}
              className="flex flex-col flex-grow pb-[8rem]"
            >
              <div className="sticky top-0 bg-white mx-auto w-full max-w-[56rem] p-8 z-10">
                <div className="relative bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-4 bg-brand-1`} style={{width: `${((formStep + 1) / formSteps.length) * 100}%`}}/>
                </div>
              </div>
              <div
                className="relative container !px-0 md:pb-0 flex flex-col flex-grow md:flex-grow-0 items-center pointer-events-auto touch-auto">
                <div className="survey-card">
                  <FormProvider {...methods}>
                    <form className="flex flex-col flex-grow" onSubmit={handleSubmit(onSubmit)}>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={formStep} // importante para animaciones entre pasos
                          initial={{opacity: 0, x: 100}}
                          animate={{opacity: 1, x: 0}}
                          exit={{opacity: 0, x: -100}}
                          transition={{duration: 0.4, ease: 'easeInOut'}}
                        >
                          <StepRenderer
                            step={formSteps[formStep]}
                            index={formStep}
                            currentStep={formStep}
                            inputError={inputError}
                            register={register}
                          />
                        </motion.div>
                      </AnimatePresence>
                      <div
                        className={`fixed p-8 bottom-0 inset-x-0 grid ${formSteps[formStep].type === 'checkpoint' ? 'grid-cols-1' : 'grid-cols-2'} gap-8 w-full mt-auto bg-white border-t-2 border-gray-200 z-50`}>
                        {formSteps[formStep].type !== 'checkpoint' &&
                          <button
                            type="button"
                            onClick={() => setFormStep(formStep - 1)}
                            className="!bg-transparent !text-brand-1 border-none !w-full hover:text-brand-1 disabled:!text-gray-100"
                            disabled={formStep <= 0}
                          >Atrás
                          </button>
                        }
                        <button
                          type="button"
                          disabled={sending}
                          onClick={() => {
                            if (formStep === lastInputIndex) {
                              handleSubmit(onSubmit)();
                            } else {
                              handleNext();
                            }
                          }}
                          className="mt-auto !w-full"
                        >
                          {sending && <span className="animate-spin mr-4">+</span>}
                          {formStep === lastInputIndex ? 'Continuar' : 'Siguiente'}
                        </button>
                      </div>
                    </form>
                  </FormProvider>
                </div>
              </div>
            </motion.div>
          )}
          {showOutro && (
            <div
              className="relative container !px-0 md:pb-0 flex flex-col flex-grow md:flex-grow-0 items-center pointer-events-auto touch-auto">
              <div className="survey-card">
                <div className={`relative flex-grow`}>
                  <div className="relative w-full my-8 pt-[70%] rounded-2xl overflow-hidden">
                    <Image src={portrait} layout="fill" objectFit="cover" objectPosition="top"/>
                  </div>
                  <p className="ft-6 sans text-center font-bold">Deja me presento:</p>
                  <p className="ft-2 mt-4 text-center mb-12">
                    Soy Luis Castañeda, asesor de Allianz® desde hace más de 8 años y me gustaría poder platicar contigo.
                  </p>
                  <p className="ft-2 mt-4 text-center mb-12">
                    ¿Por qué no agendas una asesoría sin compromisos para solucionar todas tus dudas?
                  </p>
                </div>
                <div
                  className={`fixed p-8 bottom-0 inset-x-0 grid grid-cols-1 gap-8 w-full mt-auto bg-white border-t-2 border-gray-200 z-50`}>
                  <a
                    href={info.schedulerLink}
                    target="_blank"
                    className="button mt-auto !w-full"
                    onMouseUp={() => router.push('/')}
                  >
                    Agendar mi asesoría
                  </a>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}