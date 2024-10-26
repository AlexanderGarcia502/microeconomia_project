import { Modal, ModalBody } from "@/base-components";
import { Lucide } from "@/base-components";

const Clase2 = ({
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
              LA ECONOMÍA COMO CIENCIA
            </h3>
            <br />
            <div className="w-3/5 h-64 mr-6 float-left image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://www.nuevatribuna.es/asset/thumbnail,992,558,center,center/media/nuevatribuna/images/2021/02/12/2021021218063052523.jpg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <p className="mb-5">
              La economía como ciencia se refiere al estudio sistemático de cómo
              las sociedades utilizan sus recursos limitados para producir
              bienes y servicios y distribuirlos entre sus miembros. A
              continuación, se desglosan varios aspectos que caracterizan a la
              economía como una disciplina científica:
            </p>
            <p className="mb-5">
              La economía es la ciencia que estudia la producción, distribución
              y consumo de bienes y servicios. Su objetivo es comprender cómo
              funcionan los sistemas económicos, cómo interactúan los diferentes
              agentes económicos (individuos, empresas y gobiernos) y cómo se
              toman decisiones en un entorno de recursos limitados.
            </p>
            <h3 className="text-2xl font-medium leading-none mt-3">
              Métodos de Investigación
            </h3>
            <br />
            <p className="mb-5">
              <b>Método Científico: </b> La economía utiliza el método
              científico para formular teorías, desarrollar modelos y realizar
              experimentos económicos. Esto implica la observación de fenómenos
              económicos, la formulación de hipótesis, la recolección de datos y
              el análisis para validar o refutar teorías.
            </p>
            <p className="mb-5">
              <b>Modelos Económicos: </b> Los economistas crean modelos
              simplificados de la realidad económica para explicar y predecir
              comportamientos. Estos modelos pueden ser gráficos, algebraicos o
              computacionales y ayudan a comprender relaciones complejas entre
              variables económicas.
            </p>
            <p className="mb-5">
              <b>Análisis Empírico: </b> La economía también se basa en datos
              cuantitativos y cualitativos para analizar comportamientos y
              tendencias. Los economistas utilizan estadísticas, encuestas y
              experimentos para respaldar sus teorías.
            </p>
            <div className="w-full h-64 my-5 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://www.lifeder.com/wp-content/uploads/2022/10/objeto-de-estudio-de-la-economia.jpg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <h3 className="text-2xl font-medium leading-none mt-3">
              {" "}
              Áreas de Estudio
            </h3>
            <br />
            <p className="mb-5">
              La economía se divide en varias ramas, cada una de las cuales se
              centra en diferentes aspectos del comportamiento económico:
            </p>
            <div className="w-3/5 h-64 mr-6 float-left image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://aulaucg.casagrande.edu.ec/pluginfile.php/184821/course/overviewfiles/microeconomia-macroeconomia-comparar-diferencia_518018-2432.jpg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <p className="mb-5">
              <b>Microeconomía: </b> Estudia el comportamiento de individuos y
              empresas en la toma de decisiones, así como la interacción en
              mercados específicos. Se ocupa de conceptos como la oferta, la
              demanda, la elasticidad y la competencia.
            </p>
            <p className="mb-5">
              <b>Macroeconomía: </b> Se centra en la economía en su conjunto,
              analizando indicadores agregados como el PIB, la inflación, el
              desempleo y la política monetaria. Busca entender los ciclos
              económicos y las políticas que afectan la economía a nivel
              nacional e internacional.
            </p>
            <h3 className="text-2xl font-medium leading-none mt-3">
              {" "}
              Economía Positiva vs. Normativa
            </h3>
            <br />
            <p className="mb-5">
              <b>Economía Positiva: </b> La economía positiva es una rama de la
              economía que se centra en el análisis de hechos y datos concretos
              para describir y explicar cómo funcionan los sistemas económicos
              en el mundo real. Se interesa por la manera en que los agentes
              económicos (individuos, empresas y gobiernos) toman decisiones y
              cómo estas decisiones influyen en la producción, distribución y
              consumo de bienes y servicios.
            </p>
            <div className="w-3/5 h-64 mr-6 float-left image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://encolombia.com/wp-content/uploads/2022/03/Economia-Positiva.jpg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <p className="mb-5">
              Esta disciplina se basa en el uso de métodos cuantitativos y
              cualitativos, incluyendo estadísticas y modelos matemáticos, para
              observar fenómenos económicos, realizar inferencias y formular
              teorías. Por ejemplo, un economista que estudia el impacto de un
              aumento en el salario mínimo en el empleo está realizando un
              análisis positivo al observar y medir los efectos reales de esta
              política en el mercado laboral.
            </p>
            <p className="mb-5">
              La economía positiva busca ser objetiva y se basa en evidencia
              empírica. Las afirmaciones que hace son verificables y se pueden
              respaldar con datos. Un ejemplo de una afirmación positiva sería:
              "Un aumento en los precios de los bienes de consumo conduce a una
              disminución en la cantidad demandada". Este tipo de análisis es
              crucial para entender las dinámicas del mercado y cómo las
              políticas económicas afectan el comportamiento de los consumidores
              y productores.
            </p>

            <p className="mb-5">
              <b>Economía Normativa: </b> La economía normativa, por otro lado,
              se ocupa de prescribir lo que debería ser en el ámbito económico.
              Se basa en juicios de valor, opiniones y creencias sobre lo que es
              justo o deseable en la sociedad. La economía normativa examina
              preguntas sobre cómo se deben asignar los recursos y qué políticas
              deberían implementarse para lograr ciertos objetivos, como el
              bienestar social, la equidad o la eficiencia económica.
            </p>
            <div className="w-3/5 h-64 mr-6 float-left image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://economipedia.com/wp-content/uploads/Economia-normativa.jpg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <p className="mb-5">
              Esta rama de la economía está involucrada en la evaluación de
              políticas públicas y la formulación de recomendaciones para
              mejorar la situación económica de un país o una región. Por
              ejemplo, un análisis que argumenta que un gobierno debería
              aumentar el gasto público en educación para reducir la desigualdad
              social se clasifica como un estudio de economía normativa. Estas
              afirmaciones suelen implicar valores éticos y consideraciones
              sobre el bien común, y pueden variar significativamente según las
              perspectivas políticas y sociales de quienes las emiten.
            </p>
            <p className="mb-5">
              La economía normativa a menudo utiliza los hallazgos de la
              economía positiva para fundamentar sus recomendaciones. Sin
              embargo, dado que se basa en juicios de valor, no siempre se puede
              probar o refutar de manera empírica. Por ejemplo, una afirmación
              como "el gobierno debería proporcionar atención médica gratuita a
              todos los ciudadanos" refleja una perspectiva normativa que puede
              ser defendida o criticada, pero que no se puede evaluar
              objetivamente en términos de verdad o falsedad.
            </p>
            <div className="w-3/5 h-64 mr-6 float-left image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://concepto.de/wp-content/uploads/2023/02/economia-mixta-ventajas-y-desventajas.jpg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <h3 className="text-2xl font-medium leading-none mt-3">
              El sistema centralizado y Mixto
            </h3>
            <br />
            <p className="mb-5">
              <b>Sistema Económico Centralizado: </b> Un sistema económico
              centralizado, también conocido como economía planificada o
              economía dirigida, es un modelo en el cual el gobierno o una
              autoridad central tiene el control total sobre la producción,
              distribución y consumo de bienes y servicios en la economía. En
              este tipo de sistema, las decisiones económicas no son tomadas por
              el libre mercado ni por los individuos, sino que son determinadas
              por un ente gubernamental que establece metas y directrices para
              la economía. Este enfoque se basa en la creencia de que la
              planificación centralizada puede asegurar la equidad y la
              distribución eficiente de los recursos, evitando las ineficiencias
              y desigualdades que a menudo se asocian con los sistemas de
              mercado.
            </p>
            <p className="mb-5">
              En un sistema centralizado, el gobierno toma decisiones sobre qué
              bienes y servicios se deben producir, en qué cantidad, y cómo se
              deben distribuir. Esto implica la asignación de recursos y la
              determinación de precios, así como la regulación de las
              actividades económicas. Por ejemplo, en un país con una economía
              planificada, el gobierno podría decidir aumentar la producción de
              bienes de consumo básico, como alimentos y ropa, mientras reduce
              la producción de bienes de lujo.
            </p>

            <p className="mb-5">
              <b>Sistema Económico Mixto: </b> Un sistema económico mixto es un
              modelo que combina elementos de la economía de mercado y de la
              economía planificada. En este sistema, tanto el sector privado
              como el sector público juegan roles importantes en la producción,
              distribución y consumo de bienes y servicios. La coexistencia de
              ambos sectores permite que la economía se beneficie de las
              ventajas de ambos enfoques, buscando un equilibrio entre la
              eficiencia del mercado y la intervención del gobierno para lograr
              ciertos objetivos sociales y económicos.
            </p>
            <p>
              En un sistema económico mixto, el mercado puede determinar los
              precios y la producción de muchos bienes y servicios, permitiendo
              a los individuos y empresas operar con cierta libertad en sus
              decisiones económicas. Sin embargo, el gobierno también interviene
              para regular ciertos sectores de la economía, proporcionar bienes
              públicos, y corregir fallos de mercado, como la desigualdad y la
              externalidad negativa. Por ejemplo, un gobierno puede regular el
              monopolio en ciertas industrias, proporcionar educación y atención
              médica, y establecer leyes laborales para proteger a los
              trabajadores.
            </p>
          </div>
        </ModalBody>
      </Modal>
      {/* END: Super Large Modal Content */}
    </>
  );
};

export default Clase2;
