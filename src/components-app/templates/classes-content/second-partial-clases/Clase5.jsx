import { Modal, ModalBody } from "@/base-components";
import { faker as $f } from "@/utils";
import { Lucide } from "@/base-components";

const Clase5 = ({
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
              MOVIMIENTOS DE LA LÍNEA DEL PRESUPUESTO
            </h3>
            <br />
            <div className="w-3/5 h-64 mr-6 float-left image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://www.iedge.eu/wp-content/uploads/2013/02/IEDGE-linea-presupuesto-1.jpg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <br />
            <br />
            <p className="mb-5">
              Los movimientos de la línea del presupuesto son cambios que
              reflejan variaciones en el ingreso del consumidor o en los precios
              de los bienes. Estas variaciones afectan la cantidad de bienes que
              un consumidor puede adquirir, y es crucial entender cómo se
              desplaza esta línea para analizar el comportamiento del consumidor
              en microeconomía.
            </p>

            <br />
            <h3 className="text-2xl font-medium leading-none mt-3">
              Tipos de Movimientos de la Línea del Presupuesto
            </h3>
            <br />

            <p className="mb-5">
              <b>Desplazamiento hacia Afuera: </b> Cuando el ingreso del
              consumidor aumenta, la línea del presupuesto se desplaza hacia
              afuera. Esto significa que el consumidor puede comprar más
              combinaciones de bienes, lo que le permite acceder a una mayor
              variedad de opciones.
            </p>
            <p className="mb-5">
              <b>Desplazamiento hacia Dentro: </b> Cuando el ingreso del
              consumidor disminuye, la línea del presupuesto se desplaza hacia
              adentro. Esto indica que el consumidor tiene menos capacidad de
              gasto y, por lo tanto, puede adquirir menos bienes.
            </p>
            <p className="mb-5">
              <b>Rotación de la Línea del Presupuesto: </b> Un cambio en el
              precio de uno de los bienes afecta la pendiente de la línea del
              presupuesto y provoca una rotación en torno a uno de los ejes.
            </p>
            <p className="mb-5">
              <b>Cambios Simultáneos en Precios: </b> Si los precios de ambos
              bienes cambian, la línea del presupuesto puede experimentar un
              movimiento más complejo, combinando desplazamientos y rotaciones.
              Por ejemplo, si el precio de X disminuye y el precio de Y aumenta
              al mismo tiempo, la línea del presupuesto puede desplazarse de
              manera diferente dependiendo de la magnitud de estos cambios.
            </p>
            <h3 className="text-2xl font-medium leading-none mt-3">
              Implicaciones de los Movimientos de la Línea del Presupuesto
            </h3>
            <br />
            <p className="mb-5">
              <b>Decisiones de Consumo: </b> Los movimientos de la línea del
              presupuesto permiten a los economistas y analistas observar cómo
              los consumidores ajustan sus decisiones de consumo en respuesta a
              cambios en el ingreso y los precios. Un desplazamiento hacia
              afuera puede resultar en un aumento en la cantidad demandada de
              ambos bienes, mientras que un desplazamiento hacia adentro puede
              resultar en un menor consumo general.
            </p>
            <p className="mb-5">
              <b>Análisis de Políticas Económicas: </b> Los movimientos de la
              línea del presupuesto son útiles para evaluar el impacto de
              políticas fiscales (como subsidios o impuestos) que afectan los
              precios de los bienes o el ingreso disponible. Comprender cómo
              estos cambios afectan la capacidad de consumo puede ayudar a los
              formuladores de políticas a diseñar intervenciones más efectivas.
            </p>
            <p className="mb-5">
              <b>Comportamiento del Consumidor: </b> La forma en que los
              consumidores responden a los movimientos de la línea del
              presupuesto es esencial para entender su comportamiento y sus
              preferencias. La forma en que se ajustan a cambios en los ingresos
              y los precios revela mucho sobre la elasticidad de la demanda y
              las prioridades de consumo.
            </p>
            <br />
            <p className="mb-5">
              Los movimientos de la línea del presupuesto son fundamentales para
              comprender el comportamiento del consumidor y cómo se ven
              afectados por cambios en el ingreso y los precios. Estos
              movimientos ayudan a los economistas a modelar decisiones de
              consumo y a evaluar el impacto de políticas económicas. La línea
              del presupuesto, junto con las curvas de indiferencia, proporciona
              una base sólida para analizar la maximización de la utilidad y la
              asignación de recursos en la economía.
            </p>
            <h3 className="text-2xl font-medium leading-none mt-3">
              EQUILIBRIO DEL CONSUMIDOR
            </h3>
            <div className="w-full h-64 my-5 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={"https://www.ioe-emp.org/fileadmin/_processed_/f/d/csm_image_N343_AdobeStock_221048670_20d2f2bde6.jpeg"}
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <p className="mb-5">
              El equilibrio del consumidor es un concepto fundamental en
              microeconomía que describe la situación en la que un consumidor
              maximiza su satisfacción o utilidad, dado su ingreso y los precios
              de los bienes. En este estado, el consumidor elige una combinación
              de bienes que le proporciona el mayor nivel de satisfacción
              posible, considerando sus restricciones presupuestarias.
            </p>

            <h3 className="text-2xl font-medium leading-none mt-3">
              Aplicaciones del Equilibrio del Consumidor
            </h3>
            <br />
            <p className="mb-5">
              <b>Análisis de Decisiones de Consumo: </b>
              Comprender el equilibrio del consumidor permite a los economistas
              analizar cómo los consumidores toman decisiones sobre el gasto y
              cómo responden a cambios en precios y salarios.
            </p>
            <p className="mb-5">
              <b>Evaluación de Políticas Públicas: </b>Las políticas fiscales,
              como impuestos y subsidios, pueden afectar el equilibrio del
              consumidor, y comprender estas dinámicas es crucial para la
              evaluación de políticas públicas.
            </p>
            <p className="mb-5">
              <b>Estudios de Bienestar: </b>
              El concepto de equilibrio del consumidor se utiliza en estudios de
              bienestar económico para analizar cómo el cambio en los ingresos y
              precios afecta la calidad de vida de los consumidores.
            </p>
            <p className="mb-5">
              El equilibrio del consumidor es un concepto clave en la
              microeconomía que ayuda a entender cómo los consumidores toman
              decisiones sobre el consumo de bienes y servicios, dado su ingreso
              y los precios. Al analizar cómo los cambios en ingresos y precios
              afectan el equilibrio, se puede obtener una comprensión más
              profunda del comportamiento del consumidor y de la dinámica de la
              oferta y la demanda en los mercados. La intersección entre la
              línea del presupuesto y las curvas de indiferencia proporciona un
              marco robusto para estudiar la maximización de la utilidad y las
              elecciones de consumo.
            </p>
          </div>
        </ModalBody>
      </Modal>
      {/* END: Super Large Modal Content */}
    </>
  );
};

export default Clase5;
