import { Modal, ModalBody } from "@/base-components";
import { faker as $f } from "@/utils";
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
              LEY DE RENDIMIENTOS DECRECIENTES
            </h3>
            <br />
            <div className="w-3/5 h-64 mr-6 float-left image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://pmcollege.edu.ni/wp-content/uploads/2021/12/Retornos-Decrecientes1.jpg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <br />
            <br />
            <p className="mb-5">
              La Ley de Rendimientos Decrecientes, también conocida como Ley de
              Rendimientos Marginales Decrecientes, es un principio económico
              que describe el comportamiento de la producción a medida que se
              añaden más unidades de un insumo variable, manteniendo constantes
              los otros insumos. Esta ley establece que, después de un cierto
              punto, el aumento de la cantidad de insumo variable utilizado en
              el proceso de producción resultará en incrementos menores en el
              producto total.
            </p>

            <br />
            <h3 className="text-2xl font-medium leading-none mt-3">
              Etapas de la Ley de Rendimientos Decrecientes
            </h3>
            <br />

            <p className="mb-5">
              <b>Etapa de Rendimientos Crecientes: </b> En esta fase inicial, al
              aumentar el insumo variable, el producto total y el producto
              marginal también aumentan. La producción es más eficiente debido a
              la mejor utilización de los insumos.
            </p>
            <p className="mb-5">
              <b>Etapa de Rendimientos Decrecientes: </b> Aquí, el producto
              marginal comienza a disminuir. Esto significa que cada unidad
              adicional del insumo variable contribuye menos al aumento del
              producto total. Aunque el producto total sigue creciendo, lo hace
              a un ritmo más lento.
            </p>
            <p className="mb-5">
              <b>Etapa de Rendimientos Negativos: </b> Si se sigue aumentando el
              insumo variable, eventualmente el producto marginal puede volverse
              negativo, lo que indica que el uso excesivo del insumo variable
              está reduciendo el producto total.
            </p>
            <h3 className="text-2xl font-medium leading-none mt-3">
              Implicaciones
            </h3>
            <div className="w-full h-64 my-5 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://i.ytimg.com/vi/FsCWUaEWRjs/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC3AOKAgwIABABGGUgZShlMA8=&rs=AOn4CLCbhZPVCPYr19MSwD3vntAiT4x9Mg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <p className="mb-5">
              <b>Decisiones de Producción: </b>
              La Ley de Rendimientos Decrecientes es fundamental para las
              empresas al tomar decisiones sobre la cantidad de insumos a
              utilizar. Conocer en qué punto los rendimientos comienzan a
              decrecer les ayuda a optimizar la producción y a evitar costos
              innecesarios.
            </p>
            <p className="mb-5">
              <b>Costos de Producción: </b>A medida que el producto marginal
              disminuye, el costo por unidad de producción puede aumentar, lo
              que puede afectar la rentabilidad.
            </p>
            <p className="mb-5">
              <b>Estrategia Empresarial: </b> Las empresas deben encontrar un
              equilibrio entre la cantidad de insumos utilizados y la eficiencia
              de producción para maximizar sus beneficios.
            </p>
          </div>
        </ModalBody>
      </Modal>
      {/* END: Super Large Modal Content */}
    </>
  );
};

export default Clase2;
