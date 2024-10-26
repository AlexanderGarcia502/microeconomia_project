import { Modal, ModalBody } from "@/base-components";
import { faker as $f } from "@/utils";
import { Lucide } from "@/base-components";

const Clase1 = ({ classNum, open, onClose = () => {}, onDownload = () => {} }) => {
  return (
    <>
      {/* BEGIN: Super Large Modal Content */}
      <Modal size="modal-xl" show={open} onHidden={onClose}>
        <ModalBody className="p-10 text-left">
          <div className="leading-relaxed">
            <div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
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
                  "https://i.ytimg.com/vi/lQctvB9XWyk/maxresdefault.jpg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <h3 className="text-2xl font-medium leading-none mt-3">
              FUNCIÓN DE PRODUCCIÓN
            </h3>
            <br />
            <p className="mb-5">
              La función de producción describe la relación entre la cantidad de insumos utilizados en el proceso de producción y la cantidad de producto obtenido. Esta relación puede expresarse matemáticamente y muestra cómo los recursos se combinan para generar un nivel específico de output.
            </p>
            <p className="mb-5">
              La función de producción permite a las empresas entender cómo varía la producción al cambiar la cantidad de insumos, siendo esencial para la toma de decisiones sobre la producción.
            </p>
                
            <h3 className="text-2xl font-medium leading-none mt-3">
              FUNCIÓN DE PRODUCCIÓN CON UN INSUMO VARIABLE
            </h3>
            <br />
            <div className="w-3/5 h-64 mr-6 float-left image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://www.lifeder.com/wp-content/uploads/2019/04/tipos-de-variables.jpg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <p className="mb-5">
              Cuando se considera un insumo variable, la función de producción muestra cómo cambia la producción al variar la cantidad de ese insumo específico, manteniendo los otros insumos constantes. 
            </p>
            <p className="mb-5">
              Este análisis es crucial para entender la ley de rendimientos marginales, que establece que, al aumentar la cantidad de un insumo variable, el incremento en la producción eventual disminuirá después de un cierto punto.
            </p>
  <br />
            <h3 className="text-2xl font-medium leading-none mt-3">
              PRODUCTO TOTAL, PROMEDIO Y MARGINAL
            </h3>
            <br />
            <div className="w-3/5 h-64 mr-6 float-left image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArtynbw6yinIMXY1CAruJMKC588WdEFN7Ow&s"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <p className="mb-5">
             <b>Producto Total (PT):</b> Es la cantidad total de bienes producidos por una empresa en un período determinado, dado un conjunto de insumos.
            </p>
            <p className="mb-5">
            <b>Producto Promedio (PP):</b> Es el producto total dividido por la cantidad de insumos utilizados. Mide la eficiencia media de los insumos en el proceso de producción.
            </p>
            <p className="mb-5">
            <b>Producto Marginal (PM): </b> Es el cambio en el producto total resultante de utilizar una unidad adicional de un insumo variable. Es un indicador clave para decidir si aumentar o disminuir la producción.
            </p>
  
            <h3 className="text-2xl font-medium leading-none mt-3">
              LAS ETAPAS DE LA PRODUCCIÓN
            </h3>
            <br />
            <div className="w-3/5 h-64 mr-6 float-left image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://m.econlink.com.ar/files/funcion-produccion-2.png"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <p className="mb-5">
              La producción se puede dividir en tres etapas según la relación entre el producto total y el insumo variable:
            </p>
            <p className="mb-5">
              <b>Primera Etapa: </b> En esta etapa, el producto marginal es positivo y crece a medida que se añaden más insumos. La empresa debe continuar aumentando la producción.
            </p>
            <p className="mb-5">
              <b>Segunda Etapa: </b> Aquí, el producto marginal comienza a disminuir, pero el producto total sigue aumentando. Es una etapa eficiente, aunque el crecimiento de la producción comienza a desacelerarse.
            </p>
            <p className="mb-5">
              <b>Tercera Etapa: </b> En esta etapa, el producto marginal se vuelve negativo, lo que indica que añadir más insumos está reduciendo la producción total. La empresa debe reducir la cantidad de insumos utilizados.
            </p>
            <div className="w-full h-64 my-5 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://www.campustraining.es/wp-content/uploads/2023/02/que-son-recursos-empresariales.png"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <h3 className="text-2xl font-medium leading-none mt-3">Recursos</h3>
            <br />
            <p className="mb-5">
              Los recursos son elementos fundamentales en la economía, ya que son los insumos necesarios para producir bienes y servicios que satisfacen las necesidades y deseos de las personas. Sin recursos, no sería posible llevar a cabo ninguna actividad económica. Los recursos se dividen en varias categorías:
            </p>
            {/* Aquí puedes continuar con el resto de la información como en tu ejemplo original. */}
          </div>
        </ModalBody>
      </Modal>
      {/* END: Super Large Modal Content */}
    </>
  );
  
};

export default Clase1;
