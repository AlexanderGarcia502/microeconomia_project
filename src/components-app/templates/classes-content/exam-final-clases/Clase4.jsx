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
              COSTOS DE PRODUCCION A CORTO PLAZO
            </h3>
            <br />
            <p className="mb-5">
              Los costos de producción a corto plazo se refieren a los gastos
              incurridos en el proceso de producción de bienes y servicios en un
              periodo temporal reducido. En este contexto, algunos factores de
              producción son fijos, mientras que otros son variables, lo que
              influye en la estructura de costos de la empresa.
            </p>
            <div className="w-full h-64 my-5 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://concepto.de/wp-content/uploads/2019/10/costos-de-produccion-otros-costos-distribucion-e1571607937488.jpg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <h3 className="text-2xl font-medium leading-none mt-3">
              Costos Totales
            </h3>
            <br />
            <p className="mb-5">
              Los costos totales de producción son la suma de todos los costos
              incurridos en la producción de bienes y servicios durante un
              periodo específico. Se componen de:
            </p>
            <p className="mb-5">
              <b>Costos Fijos: </b> Son aquellos que no cambian con el nivel de
              producción, como el alquiler de la planta o los sueldos de los
              empleados fijos. Estos costos se deben pagar independientemente de
              la cantidad producida.
            </p>
            <p className="mb-5">
              <b>Costos Variables: </b> Son los costos que cambian en función
              del nivel de producción. Incluyen los gastos de materias primas,
              mano de obra directa y otros costos relacionados con el volumen de
              producción.
            </p>
            <p className="mb-5">
              <b>La fórmula para calcular el costo total es: </b> Costo total =
              costos fijos + costos variables
            </p>
            <p className="mb-5">
              <b>Ejemplo: </b> Si una empresa tiene costos fijos de $10,000 y
              costos variables de $5 por unidad producida, y produce 1,000
              unidades, el costo total sería: <br />
              costo total = 10,000 + (5 * 1,000) = 10,000 + 5,000 = 15,000
            </p>
            <h3 className="text-2xl font-medium leading-none mt-3">
            Costos Unitarios
            </h3>
            <br />
            <p className="mb-5">
              Los costos unitarios son el costo
              promedio de producir una unidad de producto. Se obtienen
              dividiendo el costo total de producción por el número total de
              unidades producidas. Este indicador es crucial para determinar el
              precio de venta y evaluar la rentabilidad de cada producto. <br />
              La fórmula para calcular el costo unitario es: <br />
              costo unitario = costo total / cantidad de unidades producidas
            </p>
          </div>
        </ModalBody>
      </Modal>
      {/* END: Super Large Modal Content */}
    </>
  );
};

export default Clase4;
