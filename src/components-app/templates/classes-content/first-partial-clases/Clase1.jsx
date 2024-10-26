import { Modal, ModalBody } from "@/base-components";
import { Lucide } from "@/base-components";
import ejercicio1 from '../../../../assets/images/ejercicio1.jpg'

const Clase1 = ({
  classNum,
  open,
  onClose = () => {},
  onDownload = () => {},
}) => {
  return (
    <>
      {/* BEGIN: Super Large Modal Content */}
      <Modal size="modal-xl" show={open} onHidden={onClose}>
        <ModalBody className="p-10 text-left">
          <div className="leading-relaxed">
            <div
              style={{ width: "100%", display: "flex", justifyContent: "end" }}
            >
              <h5 className="text-lg text-warning font-medium leading-none font-bold">
                {classNum}
                <button
                  className="btn btn-warning w-32 mr-2 mb-2 ml-3"
                  onClick={onDownload}
                >
                  <Lucide icon="Download" className="w-4 h-4 mr-2" /> Descargar
                </button>
              </h5>
            </div>
            <h3 className="text-2xl font-medium leading-none mt-3">
              Ejercicio en clase
            </h3>
            <br />
            <div className="w-3/5 h-64 mr-6 float-buttom image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={ejercicio1}
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <br />
            <h3 className="text-2xl font-medium leading-none mt-3">
              CONCEPTO DE ECONOMÍA
            </h3>
            <br />
            <p className="mb-5">
              La economía es una disciplina científica y social que se ocupa del
              estudio de la administración, producción, distribución y consumo
              de bienes y servicios, centrándose en cómo las personas y las
              sociedades toman decisiones para asignar recursos limitados frente
              a necesidades y deseos ilimitados. Se interesa por los
              comportamientos individuales y colectivos que influyen en el
              bienestar material y social, analizando factores como la oferta y
              la demanda, los precios, los mercados, el trabajo, el capital, la
              riqueza y el desarrollo económico.
            </p>
            <p className="mb-5">
              La economía se desglosa en varias ramas, siendo las más amplias la
              microeconomía y la macroeconomía. La primera examina cómo los
              individuos y las empresas deciden, producen e intercambian en
              mercados específicos, mientras que la segunda analiza fenómenos
              agregados a nivel nacional o global, tales como el crecimiento
              económico, la inflación, el desempleo y las políticas públicas.
            </p>
            <p className="mb-5">
              Además, la economía busca explicar cuestiones fundamentales como
              el uso óptimo de los recursos, el equilibrio entre eficiencia y
              equidad, la creación de riqueza y la satisfacción de las
              necesidades humanas. También evalúa las dinámicas económicas
              internacionales, como el comercio, la inversión extranjera, las
              tasas de cambio y las políticas de desarrollo, proporcionando una
              base para formular estrategias y políticas que promuevan el
              bienestar y la sostenibilidad económica en una sociedad compleja e
              interconectada.
            </p>
            <div className="w-full h-64 my-5 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://www.102nueve.com/wp-content/uploads/2024/03/concepto-de-economia-y-que-estudia-1024x570.png"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <h3 className="text-2xl font-medium leading-none mt-3">Recursos</h3>
            <br />
            <p className="mb-5">
              Los recursos son elementos fundamentales en la economía, ya que
              son los insumos necesarios para producir bienes y servicios que
              satisfacen las necesidades y deseos de las personas. Sin recursos,
              no sería posible llevar a cabo ninguna actividad económica. Los
              recursos se dividen en varias categorías:
            </p>
            <div className="w-3/5 h-64 mr-6 float-left image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://culturacientifica.utpl.edu.ec/wp-content/uploads/2021/04/economia.jpg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <p className="mb-5">
              <b>Recursos Limitados: </b> El concepto de recursos limitados se
              basa en la realidad de la escasez. Aunque la humanidad tiene
              deseos y necesidades ilimitadas, los recursos disponibles para
              satisfacerlos son finitos. Esto crea un dilema central en
              economía: cómo gestionar y asignar recursos de manera efectiva.
            </p>

            <p className="mb-5">
              <b>Necesidades y Deseos: </b> Las necesidades y deseos son
              conceptos fundamentales en economía que describen lo que los seres
              humanos buscan para vivir y prosperar.
            </p>
            <p className="mb-5">
              <b>Necesidades: </b> Estas son elementos esenciales para la
              supervivencia y el bienestar humano. Las necesidades son
              relativamente universales y suelen incluir:
            </p>
            <p className="mb-5">
              <b>Alimentación: </b> La ingesta de alimentos es esencial para la
              vida. La falta de acceso a alimentos adecuados puede llevar a
              problemas de salud y subnutrición.
            </p>
            <p className="mb-5">
              <b>Vivienda: </b> Un lugar seguro para vivir es fundamental. La
              vivienda no solo proporciona refugio, sino que también afecta la
              salud, la seguridad y el bienestar emocional de las personas.
            </p>
            <p className="mb-5">
              <b>Salud: </b>El acceso a atención médica y servicios de salud es
              crucial para mantener la vida y prevenir enfermedades. Esto
              incluye la atención médica preventiva y tratamientos para
              enfermedades.
            </p>
            <p className="mb-5">
              <b>Educación: </b>La educación proporciona las habilidades
              necesarias para el desarrollo personal y profesional. El acceso a
              una educación de calidad es fundamental para la movilidad social y
              la mejora de las condiciones de vida.
            </p>
            <h3 className="text-2xl font-medium leading-none mt-3">
              ¿Qué es Mercado?
            </h3>
            <br />
            <p className="mb-5">
              Un mercado es un conjunto de interacciones entre compradores y
              vendedores que se agrupan para intercambiar bienes y servicios. En
              un mercado, los precios se determinan a través de la oferta y la
              demanda. La dinámica entre estos dos factores influye en cuánto se
              produce, a qué precio se vende y cómo se distribuyen los recursos.
            </p>
            <div className="w-3/5 h-64 mr-6 float-left image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={'https://img.freepik.com/vector-gratis/propietario-pequena-empresa-dandose-mano-prestamista_74855-20379.jpg'}
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>

            <p className="mb-5">
              El concepto de mercado es fundamental en economía y se refiere a
              un sistema o un entorno donde se llevan a cabo intercambios de
              bienes y servicios entre compradores y vendedores. Aquí tienes una
              explicación más detallada sobre el concepto de mercado, sus
              características y tipos:
            </p>
            <p>
            Los mercados están compuestos por individuos o empresas que actúan
              como compradores (demandantes) y vendedores (ofertantes). La
              interacción de estos agentes es fundamental para determinar el
              precio y la cantidad de bienes y servicios intercambiados.
            </p>
          </div>
        </ModalBody>
      </Modal>
      {/* END: Super Large Modal Content */}
    </>
  );
};

export default Clase1;
