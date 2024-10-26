import { Modal, ModalBody } from "@/base-components";
import { faker as $f } from "@/utils";
import { Lucide } from "@/base-components";

const Clase6 = ({
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
              CURVA DE ENGEL
            </h3>
            <br />
            <div className="w-3/5 h-64 mr-6 float-left image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://economipedia.com/wp-content/uploads/Curva-de-engel-bien-normal.png"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <br />
            <br />
            <p className="mb-5">
              La Curva de Engel es un concepto en microeconomía que representa
              la relación entre el ingreso de un consumidor y la cantidad
              demandada de un bien específico. Este gráfico es fundamental para
              comprender cómo el consumo de un bien varía a medida que cambia el
              ingreso del consumidor, proporcionando información valiosa sobre
              las preferencias y el comportamiento del consumidor.
            </p>

            <br />
            <h3 className="text-2xl font-medium leading-none mt-3">
              Comportamiento de la Curva
            </h3>
            <br />

            <p className="mb-5">
              <b>Bienes Normales: </b> Para los bienes normales, a medida que el
              ingreso del consumidor aumenta, la cantidad demandada de estos
              bienes también aumenta. La Curva de Engel para bienes normales
              tiene una pendiente positiva, lo que indica que hay una relación
              directa entre el ingreso y el consumo. Por ejemplo, alimentos y
              ropa suelen clasificarse como bienes normales.
            </p>
            <p className="mb-5">
              <b>Bienes Inferiores: </b> Para los bienes inferiores, la relación
              es inversa. Cuando el ingreso del consumidor aumenta, la cantidad
              demandada de estos bienes disminuye. En este caso, la Curva de
              Engel puede mostrar una pendiente negativa. Ejemplos de bienes
              inferiores incluyen ciertos alimentos de bajo costo o productos
              genéricos. Los consumidores tienden a optar por productos de mejor
              calidad a medida que su ingreso crece.
            </p>
            <p className="mb-5">
              <b>Bienes de Lujo: </b> La Curva de Engel también se aplica a los
              bienes de lujo. A medida que el ingreso del consumidor aumenta, la
              demanda de estos bienes puede aumentar a un ritmo más acelerado.
              La pendiente de la curva para estos bienes puede ser más
              pronunciada, indicando que, a ingresos más altos, la proporción
              del ingreso gastada en bienes de lujo tiende a crecer más
              rápidamente.
            </p>
            <p className="mb-5">
              <b>Bienes de Necesidad: </b> En el caso de bienes de necesidad, la
              Curva de Engel puede mostrar que la cantidad demandada aumenta con
              el ingreso, pero a un ritmo más lento. Por ejemplo, los productos
              básicos de alimentación pueden ser considerados bienes de
              necesidad, donde el consumo tiende a estabilizarse después de
              cierto nivel de ingreso.
            </p>
            <h3 className="text-2xl font-medium leading-none mt-3">
              CURVA DE PRECIO CONSUMO
            </h3>
            <div className="w-full h-64 my-5 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://economipedia.com/wp-content/uploads/Curva-precio-consumo.png"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <p className="mb-5">
              La Curva de Precio Consumo es un concepto en microeconomía que
              describe cómo varía la cantidad demandada de un bien específico en
              respuesta a cambios en su precio, manteniendo constante el ingreso
              del consumidor y los precios de otros bienes. Este análisis es
              esencial para entender la relación entre precio y consumo, así
              como para identificar el comportamiento del consumidor ante
              cambios en el entorno del mercado.
            </p>

            <h3 className="text-2xl font-medium leading-none mt-3">
              Importancia en el Análisis Económico
            </h3>
            <br />
            <p className="mb-5">
              <b>Relación Inversa: </b>
              Generalmente, la Curva de Precio Consumo muestra una relación
              inversa entre el precio del bien y la cantidad demandada. Es
              decir, cuando el precio de un bien disminuye, la cantidad
              demandada tiende a aumentar, y viceversa. Esto se debe a la Ley de
              la Demanda, que establece que los consumidores tienden a comprar
              más de un bien cuando su precio baja, y menos cuando su precio
              sube.
            </p>
            <p className="mb-5">
              <b>Efecto Sustitución: </b>Cuando el precio de un bien cambia, los
              consumidores pueden sustituir ese bien por otros bienes
              disponibles. Si el precio de un bien A disminuye, los consumidores
              pueden optar por comprar más de A en lugar de un bien B. Esto
              provoca un aumento en la cantidad demandada de A, lo que se
              refleja en la Curva de Precio Consumo.
            </p>
            <p className="mb-5">
              <b>Efecto Ingreso: </b> La variación en el precio también afecta
              el poder adquisitivo del consumidor. Cuando el precio de un bien
              disminuye, el consumidor puede sentir que su ingreso real ha
              aumentado, lo que le permite comprar más del bien. Esto también
              contribuye a la variación en la cantidad demandada.
            </p>
            <p className="mb-5">
              <b>Ejemplo Ilustrativo: </b> Imaginemos que un consumidor está
              considerando la compra de manzanas. Si el precio de las manzanas
              se reduce de $1.00 a $0.80 por unidad, el consumidor puede decidir
              comprar más manzanas, pasando de 10 a 15 unidades. Este cambio en
              la cantidad demandada se reflejaría en la Curva de Precio Consumo,
              mostrando una relación inversa entre el precio y la cantidad
              demandada.
            </p>
            <p className="mb-5">
              La Curva de Precio Consumo es un concepto clave en microeconomía
              que ilustra la relación entre el precio de un bien y su cantidad
              demandada. Al analizar esta curva, los economistas pueden obtener
              información valiosa sobre el comportamiento del consumidor, la
              elasticidad de la demanda y las dinámicas del mercado. Esto no
              solo es relevante para la teoría económica, sino también para la
              práctica empresarial y la formulación de políticas que afectan el
              consumo y la producción en la economía.
            </p>
          </div>
        </ModalBody>
      </Modal>
      {/* END: Super Large Modal Content */}
    </>
  );
};

export default Clase6;
