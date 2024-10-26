import { Modal, ModalBody } from "@/base-components";
import { faker as $f } from "@/utils";
import { Lucide } from "@/base-components";

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

            <h3 className="text-2xl font-medium leading-none mt-3">
              CONCEPTO DE COSTOS DE PRODUCCION
            </h3>
            <br />
            <p className="mb-5">
              Los costos de producción son todos los gastos asociados con la
              fabricación de bienes y servicios. Estos costos son fundamentales
              para las empresas, ya que influyen en el precio de venta, la
              rentabilidad y la toma de decisiones estratégicas. Se pueden
              clasificar en varias categorías, según su naturaleza y función.
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
              Tipos de Costos de Producción
            </h3>
            <br />

            <p className="mb-5">
              <b>Costos Fijos: </b> Son aquellos que no cambian con el nivel de
              producción. Independientemente de la cantidad producida, estos
              costos deben ser cubiertos. <br />
              Ejemplos: alquiler de instalaciones, sueldos de empleados
              administrativos, seguros.
            </p>
            <p className="mb-5">
              <b>Costos Variables: </b> Estos costos varían directamente con el
              volumen de producción. A medida que se produce más, estos costos
              aumentan. <br />
              Ejemplos: materias primas, salarios de trabajadores de producción,
              costos de energía.
            </p>
            <p className="mb-5">
              <b>Costos Semivariables: </b> Tienen componentes fijos y
              variables. Incluyen costos que son constantes hasta un cierto
              nivel de producción y luego se vuelven variables. <br />
              Ejemplos: costos de mantenimiento que son fijos hasta un nivel de
              producción, y luego aumentan.
            </p>
            <p className="mb-5">
              <b>Costos Directos: </b> Se pueden atribuir directamente a la
              producción de un bien o servicio específico. Esto incluye los
              costos de materiales directos y mano de obra directa. <br />
              Ejemplo: el costo de los materiales utilizados para fabricar un
              producto.
            </p>
            <p className="mb-5">
              <b>Costos Indirectos: </b> No se pueden asignar directamente a un
              producto específico y generalmente se distribuyen entre varios
              productos. <br />
              Ejemplos: costos de administración, costos de mantenimiento de
              maquinaria.
            </p>
            <p className="mb-5">
              El concepto de costos de producción es esencial en el ámbito
              empresarial, ya que impacta todos los aspectos de la operación,
              desde la fijación de precios hasta la rentabilidad. Las empresas
              deben gestionar y analizar estos costos de manera efectiva para
              mantenerse competitivas y sostenibles en el mercado.
            </p>
          </div>
        </ModalBody>
      </Modal>
      {/* END: Super Large Modal Content */}
    </>
  );
};

export default Clase3;
