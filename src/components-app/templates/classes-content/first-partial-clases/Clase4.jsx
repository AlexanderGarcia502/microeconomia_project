import { Modal, ModalBody } from "@/base-components";
import { faker as $f } from "@/utils";
import { Lucide } from "@/base-components";

const Clase4 = ({
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
              CAMPO DE ESTUDIO DE LA MICROECONOMÍA
            </h3>
            <br />
            <div className="w-3/5 h-64 mr-6 float-left image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://premiotransparencia.org.mx/wp-content/uploads/2023/08/Diferencia-entre-Microeconomia-y-Macroeconomia-1024x576.jpg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <p className="mb-5">
              El campo de estudio de la microeconomía se centra en entender cómo
              los individuos, las empresas y otros agentes económicos toman
              decisiones para asignar recursos limitados en mercados
              específicos, y cómo esas decisiones influyen en los precios, la
              producción y el consumo de bienes y servicios. La microeconomía
              busca explicar y predecir los comportamientos económicos a pequeña
              escala, proporcionando el fundamento para comprender fenómenos
              económicos complejos.
            </p>
            <h3 className="text-2xl font-medium leading-none mt-3">
              Principales Áreas de Estudio en Microeconomía
            </h3>
            <br />
            <p className="mb-5">
              <b>Teoría del Consumidor: </b> Esta área estudia cómo los
              consumidores toman decisiones de compra y consumo, dadas sus
              limitaciones presupuestarias y sus preferencias. La teoría del
              consumidor examina cómo las personas buscan maximizar su utilidad
              o satisfacción, y cómo responden ante cambios en el precio de los
              bienes, el ingreso y la disponibilidad de productos. También
              aborda conceptos como la elasticidad de la demanda, que mide la
              sensibilidad de los consumidores a los cambios de precio.
            </p>
            <p className="mb-5">
              <b>Teoría de la Empresa: </b> La teoría de la empresa analiza cómo
              las empresas deciden cuánto producir, a qué costo y a qué precio
              vender sus bienes o servicios, considerando el objetivo de
              maximizar sus beneficios. Esta área incluye el estudio de la
              producción y los costos, que examina cómo la tecnología y los
              recursos disponibles afectan la producción de una empresa. También
              se abordan temas como la productividad, la eficiencia y la toma de
              decisiones bajo condiciones de competencia y regulación.
            </p>
            <p className="mb-5">
              <b>Mercados y Estructura de Mercado: </b> La microeconomía estudia
              los diferentes tipos de mercados en los que operan consumidores y
              empresas, como el mercado de competencia perfecta, el monopolio,
              el oligopolio y la competencia monopolística. Cada estructura de
              mercado presenta diferentes condiciones en términos de número de
              empresas, nivel de competencia, control de precios y barreras de
              entrada. El análisis de la estructura de mercado permite entender
              cómo varía el comportamiento de las empresas y el precio de los
              bienes dependiendo de la cantidad de competencia y poder de
              mercado.
            </p>
            <div className="w-full h-64 my-5 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://facs.ort.edu.uy/innovaportal/file/134815/1/por-que-es-tan-importante-el-estudio-de-la-economia.jpg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <p className="mb-5">
              <b>Teoría de Juegos y Comportamiento Estratégico: </b> La teoría
              de juegos se aplica en microeconomía para estudiar cómo los
              agentes económicos toman decisiones estratégicas cuando sus
              resultados dependen de las acciones de otros. Esto es
              especialmente relevante en mercados oligopólicos, donde pocas
              empresas dominan el mercado y las decisiones de una empresa pueden
              afectar las decisiones de las demás. La teoría de juegos analiza
              interacciones competitivas y cooperativas y ayuda a entender cómo
              los agentes anticipan y reaccionan ante las estrategias de otros.
            </p>
            <p className="mb-5">
              <b>Economía del Bienestar: </b> Esta área de la microeconomía
              analiza cómo se distribuyen los recursos en la sociedad y si esa
              distribución es eficiente y justa. A través de conceptos como la
              eficiencia de Pareto, se estudia cuándo es posible mejorar el
              bienestar de alguien sin afectar negativamente a otros. La
              economía del bienestar también evalúa los efectos de las
              intervenciones gubernamentales, como los impuestos y subsidios, en
              el bienestar general y la equidad.
            </p>
            <p className="mb-5">
              <b>Fallos de Mercado y Externalidades: </b> La microeconomía
              también se enfoca en los casos donde el mercado falla en asignar
              recursos de manera eficiente, lo que se conoce como fallos de
              mercado. Esto incluye situaciones como externalidades (efectos
              secundarios, como la contaminación, que afectan a terceros no
              involucrados en una transacción), bienes públicos (bienes no
              excluibles y no rivales, como la seguridad nacional), y problemas
              de información asimétrica (cuando una parte tiene más información
              que otra en una transacción). La microeconomía estudia cómo
              intervenciones, como regulaciones y subsidios, pueden corregir
              estos fallos.
            </p>
            <div className="w-3/5 h-64 mr-6 float-left image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://img.freepik.com/vector-gratis/gestion-personal-definicion-perspectivas-orientacion-objetivos-organizacion-trabajo-equipo-coach-negocios-ejecutivo-empresa-personajes-dibujos-animados-personal_335657-2967.jpg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <h3 className="text-2xl font-medium leading-none mt-3">
            Objetivos de la Microeconomía
            </h3>
            <br />
            <p>
            La microeconomía tiene como objetivo proporcionar un marco analítico para entender cómo los recursos son asignados en la economía y cómo los agentes pueden tomar decisiones óptimas dadas sus restricciones. Además, busca identificar las condiciones bajo las cuales el mercado alcanza resultados eficientes y proponer soluciones cuando estos resultados no son alcanzables debido a fallos del mercado.
            </p>
          </div>
        </ModalBody>
      </Modal>
      {/* END: Super Large Modal Content */}
    </>
  );
};

export default Clase4;
