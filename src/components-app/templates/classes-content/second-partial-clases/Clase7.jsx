import { Modal, ModalBody } from "@/base-components";
import { faker as $f } from "@/utils";
import { Lucide } from "@/base-components";

const Clase7 = ({
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
              EFECTO TOTAL
            </h3>
            <br />
            <div className="w-3/5 h-64 mr-6 float-left image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://i.ytimg.com/vi/lhxPWPQk9Wo/hqdefault.jpg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <br />
            <br />
            <p className="mb-5">
              Cuando el precio de un bien cambia, el ingreso real del consumidor
              puede aumentar o disminuir, lo que afecta su comportamiento de
              compra.
            </p>
            <p className="mb-5">
              <b>Efecto Ingreso: </b>
              Refleja cómo el cambio en el precio afecta el poder adquisitivo
              del consumidor. Si el precio de un bien disminuye, el consumidor
              puede sentir que su ingreso ha aumentado, permitiéndole comprar
              más del bien.
            </p>
            <p className="mb-5">
              <b>Efecto Sustitución: </b>
              Describe cómo el consumidor puede optar por bienes alternativos
              ante variaciones en el precio de un bien específico. Cuando el
              precio de un bien cambia, los consumidores pueden sustituir ese
              bien por otros disponibles.
            </p>

            <br />
            <h3 className="text-2xl font-medium leading-none mt-3">
              INGRESO Y SUSTITUCIÓN
            </h3>
            <br />
            <div className="w-3/5 h-64 mr-6 float-left image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://economipedia.com/wp-content/uploads/Efecto-sustitucion-y-efecto-renta.png"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <p>
              Cuando el precio de un bien cambia, el ingreso real del consumidor
              puede aumentar o disminuir, lo que afecta su comportamiento de
              compra.
            </p>
            <p>
              <b>Efecto Ingreso: </b> Si el precio de un bien disminuye, el consumidor siente que su ingreso ha aumentado, lo que le permite adquirir más del bien.
            </p>
            <p className="mb-5">
              <b>Efecto Sustitución: </b>Se refiere a la tendencia de los consumidores a cambiar a bienes alternativos si el precio de un bien específico varía. Ambos efectos son cruciales para entender cómo varía la cantidad demandada.
            </p>
            <h3 className="text-2xl font-medium leading-none mt-3">
            LA DEMANDA Y LA OFERTA (CONCEPTOS GENERALES)
            </h3>
            <div className="w-full h-64 my-5 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://www.ionos.es/startupguide/fileadmin/StartupGuide/Screenshots_2019/ES-oferta-demanda.png"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <p className="mb-5">
            La demanda se refiere a la cantidad de un bien o servicio que los consumidores están dispuestos a comprar a diferentes precios. La oferta representa la cantidad que los productores están dispuestos a vender a esos mismos precios. La interacción entre la demanda y la oferta determina el precio y la cantidad de equilibrio en el mercado. <br />
            Un aumento en la demanda o una disminución en la oferta puede llevar a un aumento en el precio, mientras que una disminución en la demanda o un aumento en la oferta puede resultar en una disminución del precio.
            </p>

            <h3 className="text-2xl font-medium leading-none mt-3">
            DETERMINANTES
            </h3>
            <br />
            <div className="w-3/5 h-64 mr-6 float-left image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://economiapedia.com/wp-content/uploads/2020/09/increase-in-demand-1024x819-1.png"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <p className="mb-5">Los determinantes de la demanda incluyen factores como:
            </p>
            <p className="mb-5">
              <b>Ingreso del consumidor: </b> Aumentos en el ingreso generalmente incrementan la demanda de bienes normales.
            </p>
            <p className="mb-5">
              <b>Precios de bienes relacionados: </b>Incluyen sustitutos y complementos, que pueden influir en la decisión de compra.
            </p>
            <p className="mb-5">
              <b>Preferencias y gustos: </b> Cambios en las preferencias pueden afectar la cantidad demandada.
            </p>
            <p className="mb-5">
              <b>Expectativas futuras: </b>  Las expectativas sobre precios futuros o ingresos pueden influir en la demanda.
            </p>
            <p className="mb-5">
              <b>Número de consumidores: </b> Un aumento en el número de consumidores en el mercado puede incrementar la demanda general de un bien.
            </p>
          </div>
        </ModalBody>
      </Modal>
      {/* END: Super Large Modal Content */}
    </>
  );
};

export default Clase7;
