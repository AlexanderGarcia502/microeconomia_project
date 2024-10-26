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
              TASA MARGINAL DE SUSTITUCIÓN
            </h3>
            <br />
            <div className="w-3/5 h-64 mr-6 float-left image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/a/aa/Tms.jpg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <p className="mb-5">
              La tasa marginal de sustitución (TMS) es un concepto fundamental
              en la teoría del consumidor en microeconomía. Se refiere a la
              cantidad de un bien que un consumidor está dispuesto a renunciar
              para obtener una unidad adicional de otro bien, manteniendo el
              mismo nivel de satisfacción o utilidad. En otras palabras, mide la
              disposición de un consumidor para intercambiar un bien por otro,
              considerando que la satisfacción total se mantiene constante.
            </p>

            <br />
            <h3 className="text-2xl font-medium leading-none mt-3">
              Interpretación de la Tasa Marginal de Sustitución
            </h3>
            <br />

            <p className="mb-5">
              <b>Curvas de Indiferencia: </b> La TMS se relaciona directamente
              con las curvas de indiferencia. En un gráfico que representa estas
              curvas, la TMS es la pendiente de la tangente a la curva en un
              punto específico. Esta pendiente indica cuántas unidades del bien
              Y se están sacrificando para obtener una unidad más del bien X.
            </p>
            <p className="mb-5">
              <b>Ley de la TMS Decreciente: </b> A medida que un consumidor
              consume más del bien X y menos del bien Y, la TMS tiende a
              disminuir. Esto se debe a la ley de la utilidad marginal
              decreciente, que sugiere que a medida que un consumidor tiene más
              de un bien, la satisfacción adicional que obtiene de consumir una
              unidad más de ese bien disminuye. Por lo tanto, está dispuesto a
              renunciar a menos del otro bien para obtener más del primero.
            </p>
            <h3 className="text-2xl font-medium leading-none mt-3">
              Aplicaciones de la Tasa Marginal de Sustitución
            </h3>
            <br />
            <p className="mb-5">
              <b>Decisiones de Consumo: </b> La TMS ayuda a los consumidores a
              tomar decisiones informadas sobre cómo asignar su presupuesto
              entre diferentes bienes. Al conocer su TMS, los consumidores
              pueden maximizar su utilidad seleccionando combinaciones de bienes
              que igualen la TMS a la razón de precios.
            </p>
            <p className="mb-5">
              <b>Optimización del Consumo: </b> En el contexto de la restricción
              presupuestaria, el equilibrio del consumidor se alcanza cuando la
              TMS es igual a la relación de precios de los dos bienes. Esto
              significa que el consumidor está maximizando su utilidad dado su
              presupuesto.
            </p>
            <p className="mb-5">
              <b>Análisis de Cambios en Precios: </b> Cambios en los precios de
              los bienes pueden afectar la TMS. Por ejemplo, si el precio de las
              manzanas aumenta, la TMS cambia, lo que puede llevar al consumidor
              a ajustar sus elecciones de consumo.
            </p>
            <br />
            <p className="mb-5">
              La tasa marginal de sustitución es un concepto clave en la teoría
              del consumidor que proporciona una comprensión profunda de cómo
              los consumidores toman decisiones sobre el consumo de diferentes
              bienes. A través de su relación con las curvas de indiferencia y
              la optimización del consumo, la TMS permite a los economistas
              analizar el comportamiento del consumidor y cómo se ajustan las
              decisiones de compra en respuesta a cambios en precios y
              preferencias. Aunque tiene limitaciones, la TMS sigue siendo un
              componente esencial en el análisis microeconómico.
            </p>
            <h3 className="text-2xl font-medium leading-none mt-3">
              LA LÍNEA DEL PRESUPUESTO
            </h3>
            <br />
            <div className="w-full h-64 my-5 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://slideplayer.es/slide/5546369/2/images/20/Ejemplo+num%C3%A9rico+Observen+que+la+pendiente+de+la+l%C3%ADnea+de+presupuesto+es+igual+a+Pc+%2F+Pp+%3D+10%2F4.+Pantalones..jpg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <p className="mb-5">
              La línea del presupuesto es un concepto fundamental en
              microeconomía que representa todas las combinaciones posibles de
              dos bienes (o más) que un consumidor puede adquirir dado su
              ingreso y los precios de esos bienes. Esta línea es crucial para
              entender cómo los consumidores toman decisiones de gasto y cómo
              estas decisiones se ven afectadas por cambios en el ingreso o los
              precios.
            </p>

            <h3 className="text-2xl font-medium leading-none mt-3">
              Pendiente de la Línea del Presupuesto
            </h3>
            <br />
            <p className="mb-5">
              La pendiente de la línea del presupuesto es crucial porque
              representa la tasa de cambio entre los bienes: <br />
              Pendiente = Px / Py
              <br />
              Esto indica cuántas unidades del bien Y debe renunciar el
              consumidor para obtener una unidad adicional del bien X, dado que
              se mantiene constante el gasto total. Esta relación también se
              relaciona con la tasa marginal de sustitución (TMS).
            </p>

            <h3 className="text-2xl font-medium leading-none mt-3">
              Limitaciones de la Línea del Presupuesto
            </h3>
            <br />
            <p className="mb-5">
              <b>Supuestos Simplificados: </b>
              La línea del presupuesto asume que los consumidores son racionales
              y tienen información perfecta, lo que puede no reflejar la
              realidad.
            </p>
            <p className="mb-5">
              <b>Bienes Divisibles: </b>
              Se asume que los bienes son divisibles y se pueden consumir en
              fracciones, lo que no siempre se aplica a bienes indivisibles.
            </p>
            <p className="mb-5">
              <b>No Considera Preferencias: </b>La línea del presupuesto no toma
              en cuenta las preferencias individuales o las utilidades, por lo
              que debe combinarse con curvas de indiferencia para un análisis
              completo.
            </p>

            <p className="mb-5">
              La línea del presupuesto es una herramienta esencial en la teoría
              del consumidor que ilustra las limitaciones financieras de un
              individuo al elegir entre diferentes bienes. Su análisis permite
              comprender mejor cómo los cambios en ingresos y precios afectan
              las decisiones de consumo y cómo los consumidores maximizan su
              satisfacción dentro de sus restricciones presupuestarias. Junto
              con las curvas de indiferencia, proporciona una base sólida para
              el estudio del comportamiento del consumidor en microeconomía.
            </p>
          </div>
        </ModalBody>
      </Modal>
      {/* END: Super Large Modal Content */}
    </>
  );
};

export default Clase4;
