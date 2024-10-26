import { Modal, ModalBody } from "@/base-components";
import { faker as $f } from "@/utils";
import { Lucide } from "@/base-components";

const Clase1 = ({
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
              TEORÍA DE LA UTILIDAD MARGINAL
            </h3>
            <br />
            
            <p className="mb-5">
              La teoría de la utilidad marginal es un principio fundamental en
              microeconomía que se centra en cómo los consumidores toman
              decisiones de consumo basadas en la satisfacción que obtienen de
              cada unidad adicional de un bien o servicio. Esta teoría se basa
              en la noción de utilidad, que es una medida de satisfacción o
              placer que un individuo obtiene del consumo de bienes y servicios.
            </p>
            <h3 className="text-2xl font-medium leading-none mt-3">
              Conceptos Clave
            </h3>
            <br />
            <div className="w-3/5 h-64 mr-6 float-left image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://cdn.kastatic.org/ka-perseus-graphie/e4c87e71eafc7c28b1a7fa4311e2816f82ab5965.svg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <p className="mb-5">
              <b>Utilidad Total: </b> La utilidad total se refiere a la
              satisfacción total que un consumidor recibe del consumo de una
              cantidad específica de un bien o servicio. A medida que un
              consumidor consume más unidades, la utilidad total generalmente
              aumenta.
            </p>
            <p className="mb-5">
              <b>Utilidad Marginal: </b> La utilidad marginal es la satisfacción
              adicional que un consumidor obtiene al consumir una unidad más de
              un bien o servicio. Se calcula como la variación en la utilidad
              total que resulta del consumo de una unidad adicional. La fórmula
              para la utilidad marginal ( UM) es: UM= ΔQ / ΔUT donde Δ𝑈𝑇 ΔUT es
              el cambio en la utilidad total y Δ𝑄 es el cambio en la cantidad
              consumida.
            </p>
            <p className="mb-5">
              <b>Ley de la Utilidad Marginal Decreciente: </b> Esta ley
              establece que, a medida que un consumidor consume más unidades de
              un bien, la utilidad marginal de cada unidad adicional tiende a
              disminuir. Por ejemplo, si una persona come una rebanada de pizza,
              la satisfacción que obtiene de la primera rebanada será mayor que
              la que obtiene de la segunda o tercera rebanada. Este fenómeno
              explica por qué los consumidores no seguirán comprando un bien
              indefinidamente.
            </p>
            <div className="w-full h-64 my-5 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://economipedia.com/wp-content/uploads/2017/10/UM.png"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <h3 className="text-2xl font-medium leading-none mt-3">
              {" "}
              Implicaciones de la Teoría de la Utilidad Marginal
            </h3>
            <br />
            <p className="mb-5">
              <b>Elección del Consumidor: </b> La teoría de la utilidad marginal
              ayuda a explicar cómo los consumidores toman decisiones de compra.
              Los consumidores buscan maximizar su utilidad total asignando su
              ingreso entre diferentes bienes de manera que la utilidad marginal
              por cada dólar gastado sea igual. Esto se puede expresar como:
              UMa/Pa = UMb/Pb = UMn/Pn <br />
              donde UM es la utilidad marginal y P es el precio de cada bien.
              Esta igualdad indica que el consumidor optimiza su gasto cuando la
              utilidad marginal por unidad de gasto es la misma para todos los
              bienes consumidos.
            </p>
            <div className="w-3/5 h-64 mr-6 float-left image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://economipedia.com/wp-content/uploads/Demanda-1.jpg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <p className="mb-5">
              <b>Demanda: </b> La utilidad marginal también está relacionada con
              la curva de demanda. A medida que el precio de un bien disminuye,
              la utilidad marginal que un consumidor está dispuesto a pagar por
              una unidad adicional del bien aumenta. Esto explica la relación
              inversa entre el precio y la cantidad demandada: cuando los
              precios son bajos, la cantidad demandada tiende a aumentar.
            </p>
            <p className="mb-5">
              <b>Curva de Utilidad: </b> Gráficamente, la utilidad marginal se
              representa a menudo con una curva que muestra la relación entre la
              cantidad consumida de un bien y su utilidad marginal. A medida que
              la cantidad consumida aumenta, la curva de utilidad marginal
              generalmente se inclina hacia abajo, reflejando la ley de la
              utilidad marginal decreciente.
            </p>
            <h3 className="text-2xl font-medium leading-none mt-3">
              {" "}
              Limitaciones de la Teoría de la Utilidad Marginal
            </h3>
            <br />
            <p className="mb-5">
              <b>Dificultad en la Medición: </b> La utilidad es una medida
              subjetiva, y es difícil cuantificar con precisión cuánta utilidad
              un consumidor obtiene de un bien o servicio específico. Esto puede
              limitar la aplicabilidad práctica de la teoría.
            </p>
            <p className="mb-5">
              <b>Supuestos de Racionalidad: </b> La teoría asume que los
              consumidores son racionales y siempre toman decisiones que
              maximizan su utilidad. Sin embargo, en la realidad, las decisiones
              de consumo pueden verse afectadas por emociones, información
              imperfecta o limitaciones cognitivas.
            </p>
            <p className="mb-5">
              <b>Bienes No Sucedidos: </b>
              La teoría se basa en la premisa de que los bienes son divisibles y
              pueden ser consumidos en cantidades variables. Sin embargo,
              algunos bienes (como ciertos servicios) pueden no ajustarse a este
              modelo.
            </p>
            <div className="w-3/5 h-64 mr-6 float-left image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://informacionlogistica.com/wp-content/uploads/2021/10/kpi-s-ventas-e1446033635873.jpg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>

            <p>
              La teoría de la utilidad marginal es fundamental para entender el
              comportamiento del consumidor y las decisiones de compra en la
              microeconomía. Proporciona una base teórica sólida para el
              análisis de la demanda y las interacciones en el mercado, a la vez
              que ayuda a explicar cómo y por qué los consumidores eligen entre
              diferentes opciones de consumo para maximizar su satisfacción. A
              pesar de sus limitaciones, sigue siendo un pilar en el estudio del
              comportamiento económico.
            </p>
            <br />
          </div>
        </ModalBody>
      </Modal>
      {/* END: Super Large Modal Content */}
    </>
  );
};

export default Clase1;
