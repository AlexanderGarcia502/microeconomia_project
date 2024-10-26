import { Modal, ModalBody } from "@/base-components";
import { faker as $f } from "@/utils";
import { Lucide } from "@/base-components";
import ejemplotabla from "../../../../assets/images/ejemplotabla.png";

const Clase3 = ({
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
            <div className="w-full h-64 my-5 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://www.core-econ.org/the-economy/v1/book/es/images/web/figure-07-06-01-02.jpg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <h3 className="text-2xl font-medium leading-none mt-3">
              LAS CURVAS DE LA UTILIDAD MARGINAL
            </h3>
            <br />
            <p className="mb-5">
              Las curvas de la utilidad marginal son representaciones gráficas
              que muestran cómo cambia la utilidad marginal de un bien a medida
              que un consumidor aumenta la cantidad consumida de ese bien. Estas
              curvas son fundamentales para entender el comportamiento del
              consumidor y la teoría de la utilidad marginal en microeconomía.
            </p>

            <h3 className="text-2xl font-medium leading-none mt-3">
              Características de la Curva de Utilidad Marginal
            </h3>
            <br />

            <p className="mb-5">
              <b>Forma Descendente: </b> La curva de utilidad marginal
              generalmente tiene una pendiente negativa, lo que significa que a
              medida que se consume más unidades de un bien, la utilidad
              marginal de cada unidad adicional tiende a disminuir. Este
              fenómeno es conocido como la ley de la utilidad marginal
              decreciente. Por ejemplo, la satisfacción obtenida de la primera
              rebanada de pizza es mayor que la de la segunda y así
              sucesivamente.
            </p>
            <p className="mb-5">
              <b>Ejes de la Curva: </b> <br />
              El eje horizontal (X) representa la cantidad consumida de un bien.
              <br />
              El eje vertical (Y) representa la utilidad marginal, que se mide
              en unidades de utilidad.
            </p>
            <p className="mb-5">
              <b>Puntos de Intersección: </b>
              En la curva de utilidad marginal, los puntos en la gráfica pueden
              mostrar la utilidad marginal asociada a diferentes niveles de
              consumo. Cada punto en la curva representa la utilidad marginal de
              una unidad adicional de consumo.
            </p>
            <h3 className="text-2xl font-medium leading-none mt-3">
              Ejemplo de Curva de Utilidad Marginal
            </h3>
            <br />
            <p className="mb-5">
              Supongamos que un consumidor está evaluando su consumo de helado.
              La tabla a continuación muestra cómo la utilidad total y la
              utilidad marginal cambian a medida que consume más helado:
            </p>
            <div className="w-full h-64 my-5 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={ejemplotabla}
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <h3 className="text-2xl font-medium leading-none mt-3">
              Interpretación de la Tabla:
            </h3>
            <br />
            <p className="mb-5">
              Cuando el consumidor consume la primera unidad de helado, obtiene
              una utilidad total de 10, lo que significa que la utilidad
              marginal es de 10. <br />
              Al consumir la segunda unidad, la utilidad total aumenta a 18, lo
              que da una utilidad marginal de 8. <br />
              Al llegar a la sexta unidad, la utilidad marginal se reduce a 0,
              indicando que el consumidor ya no obtiene satisfacción adicional
              al consumir más helado.
            </p>
            <h3 className="text-2xl font-medium leading-none mt-3">
              Gráfico de la Curva de Utilidad Marginal
            </h3>
            <br />
            <p className="mb-5">
              El gráfico resultante de la tabla anterior tendría la siguiente
              apariencia: <br />
              La curva comenzaría en un punto alto en el eje Y y se inclinaría
              hacia abajo a medida que se mueve hacia la derecha en el eje X.{" "}
              <br />
              La pendiente negativa indica la disminución de la utilidad
              marginal a medida que el consumo aumenta.
            </p>

            <h3 className="text-2xl font-medium leading-none mt-3">
              LAS CURVAS DE INDIFERENCIA
            </h3>
            <br />
            <div className="w-full h-64 my-5 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={'https://www.monografias.com/trabajos57/preferencias-consumidor/Image18851.gif'}
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <p className="mb-5">
              Las curvas de indiferencia son una herramienta gráfica utilizada
              en microeconomía para representar las combinaciones de bienes que
              proporcionan al consumidor el mismo nivel de satisfacción o
              utilidad. Estas curvas son fundamentales en el análisis del
              comportamiento del consumidor y en la teoría de la elección.
            </p>
            <h3 className="text-2xl font-medium leading-none mt-3">
              Conceptos Clave
            </h3>
            <br />
            <p className="mb-5">
              Una curva de indiferencia muestra todas las combinaciones de dos
              bienes (o más) que proporcionan al consumidor el mismo nivel de
              utilidad. Por ejemplo, si un consumidor tiene un nivel de
              satisfacción constante al consumir 2 manzanas y 3 plátanos, o 3
              manzanas y 2 plátanos, ambas combinaciones estarán en la misma
              curva de indiferencia.
            </p>
            <p className="mb-5">
              <b>Ejes de la Curva: </b> <br />
              El eje horizontal (X) representa la cantidad de un bien (por
              ejemplo, manzanas). <br />
              El eje vertical (Y) representa la cantidad del otro bien (por
              ejemplo, plátanos).
            </p>
            <h3 className="text-2xl font-medium leading-none mt-3">
              Propiedades de las Curvas de Indiferencia
            </h3>
            <br />
            <p className="mb-5">
              <b>Pendiente Negativa: </b> Las curvas de indiferencia tienen una
              pendiente negativa, lo que refleja la tasa marginal de sustitución
              (TMS). Esta tasa indica cuántas unidades de un bien el consumidor
              está dispuesto a renunciar para obtener una unidad adicional del
              otro bien, manteniendo el mismo nivel de satisfacción. A medida
              que el consumidor se mueve a lo largo de la curva, la TMS tiende a
              disminuir, lo que significa que el consumidor necesita renunciar a
              menos unidades de un bien a medida que consume más del otro.
            </p>
            <p className="mb-5">
              <b>Curvas Convexas: </b> Las curvas de indiferencia suelen ser
              convexas hacia el origen. Esto se debe a la ley de la TMS
              decreciente, que establece que a medida que un consumidor tiene
              más de un bien, está dispuesto a renunciar a menos de otro bien
              para obtener más de ese bien.
            </p>
            <p className="mb-5">
              <b>No Se Cruzan: </b>
              Las curvas de indiferencia no pueden cruzarse. Si dos curvas de
              indiferencia se cruzaran, significaría que el mismo conjunto de
              combinaciones de bienes proporcionaría diferentes niveles de
              utilidad, lo que es contradictorio.
            </p>
            <p className="mb-5">
              <b>Niveles de Utilidad: </b>
              Las curvas de indiferencia más alejadas del origen representan
              niveles más altos de utilidad. Cuanto más lejos esté una curva del
              origen, mayor será la satisfacción que proporcionará al
              consumidor.
            </p>

            <h3 className="text-2xl font-medium leading-none mt-3">
              Limitaciones de las Curvas de Indiferencia
            </h3>
            <br />
            <p className="mb-5">
              <b>Dificultades en la Medición: </b> La utilidad es subjetiva y no siempre es fácil de medir. Las preferencias de los consumidores pueden variar ampliamente y no siempre son constantes.
            </p>
            <p className="mb-5">
              <b>Supuestos de Racionalidad: </b> La teoría asume que los consumidores son racionales y buscan maximizar su utilidad. Sin embargo, en la práctica, las decisiones pueden estar influenciadas por factores emocionales y sociales.
            </p>
            <p className="mb-5">
              <b>Bienes Indivisibles: </b> La teoría se basa en la premisa de que los bienes son divisibles y pueden consumirse en cantidades variables. Esto puede no aplicarse a todos los tipos de bienes y servicios.
            </p>

            <p>
              La medición de la utilidad marginal es fundamental para comprender
              el comportamiento del consumidor y cómo se toman decisiones de
              consumo. A través de diferentes enfoques y métodos, los
              economistas pueden inferir cómo los consumidores asignan valor a
              sus elecciones y cómo esas decisiones afectan la oferta y la
              demanda en los mercados. A pesar de sus limitaciones, la utilidad
              marginal sigue siendo un concepto clave en la teoría económica y
              en el análisis de la conducta del consumidor.
            </p>
            <br />
          </div>
        </ModalBody>
      </Modal>
      {/* END: Super Large Modal Content */}
    </>
  );
};

export default Clase3;
