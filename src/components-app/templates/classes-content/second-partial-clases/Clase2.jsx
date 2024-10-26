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
              MEDICIÓN DE LA UTILIDAD MARGINAL
            </h3>
            <br />
            <p className="mb-5">
              La medición de la utilidad marginal se refiere al proceso de
              cuantificar la satisfacción adicional que un consumidor obtiene al
              consumir una unidad adicional de un bien o servicio. Esta medición
              es esencial para entender el comportamiento del consumidor y cómo
              toman decisiones de compra en función de la utilidad que esperan
              recibir. Aquí se detallan los métodos y enfoques más comunes para
              medir la utilidad marginal.
            </p>
            
            <h3 className="text-2xl font-medium leading-none mt-3">
              Enfoque de Utilidad Ordinal
            </h3>
            <br />
            
            <p className="mb-5">
              La teoría de la utilidad ordinal sugiere que los consumidores
              pueden clasificar sus preferencias en orden de satisfacción, pero
              no pueden medir la utilidad en términos absolutos. Esto implica
              que, aunque los consumidores pueden decir que prefieren un bien a
              otro, no pueden cuantificar cuánta más satisfacción obtienen de
              uno en comparación con el otro.
            </p>
            <p className="mb-5">
              <b>Clasificación de Preferencias: </b> Los consumidores pueden
              ordenar diferentes combinaciones de bienes según su satisfacción,
              permitiendo inferir cómo se relacionan los bienes entre sí en
              términos de utilidad. Este enfoque es útil para representar las
              elecciones sin necesidad de medir la utilidad en unidades
              específicas.
            </p>
            <h3 className="text-2xl font-medium leading-none mt-3">
              Enfoque de Utilidad Cardinal
            </h3>
            <br />
            <p className="mb-5">
              El enfoque de utilidad cardinal, por otro lado, asume que la
              utilidad puede ser medida y cuantificada en términos absolutos.
              Esto significa que los consumidores pueden asignar un valor
              numérico a la satisfacción que obtienen de diferentes niveles de
              consumo.
            </p>
            <p className="mb-5">
              <b>Escalas de Utilidad: </b> A través de encuestas o experimentos,
              los investigadores pueden pedir a los consumidores que califiquen
              su satisfacción de distintos productos en una escala numérica. Por
              ejemplo, un consumidor podría asignar 10 unidades de utilidad a
              una pizza y 6 unidades a una hamburguesa. Esto permite calcular la
              utilidad marginal como la diferencia entre las utilidades totales
              de diferentes niveles de consumo.
            </p>
            <div className="w-full h-64 my-5 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://econ.web.uah.es/hpeweb/marg2/Marsheb.JPG"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <h3 className="text-2xl font-medium leading-none mt-3">
              Cálculo de la Utilidad Marginal
            </h3>
            <br />
            <p className="mb-5">
              La utilidad marginal UM se calcula como la variación en la
              utilidad total UT que resulta del consumo de una unidad adicional
              de un bien. La fórmula es la siguiente: UM=ΔUT/ΔQ
            </p>
            <p className="mb-5">
              <b>Ejemplo: </b> Supongamos que un consumidor consume 3 rebanadas
              de pizza, obteniendo una utilidad total de 30 unidades. Si al
              consumir la cuarta rebanada, la utilidad total aumenta a 36
              unidades, la utilidad marginal de la cuarta rebanada sería:
              <br />
              UM = 36 - 30 / 1 = 6 unidades de utilidad
            </p>
            <h3 className="text-2xl font-medium leading-none mt-3">
              Curvas de Utilidad Marginal
            </h3>
            <br />
            <div className="w-3/5 h-64 mr-6 float-left image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://www.econlink.com.ar/files/utilidad-marginal-2.png"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <p className="mb-5">
              Gráficamente, la utilidad marginal se representa a menudo mediante
              una curva que muestra la relación entre la cantidad consumida de
              un bien y su utilidad marginal. A medida que un consumidor consume
              más unidades de un bien, la curva de utilidad marginal
              generalmente se inclina hacia abajo, reflejando la ley de la
              utilidad marginal decreciente.
            </p>
            <p className="mb-5">
              <b>Interpretación Gráfica: </b> En el gráfico, el eje horizontal
              representa la cantidad consumida, mientras que el eje vertical
              representa la utilidad marginal. A medida que se consume más del
              bien, la utilidad marginal disminuye, lo que significa que cada
              unidad adicional proporciona menos satisfacción que la anterior.
            </p>
            <h3 className="text-2xl font-medium leading-none mt-3">
              Métodos Experimentales
            </h3>
            <br />
            <p className="mb-5">
              En la investigación económica, los métodos experimentales se
              utilizan para medir la utilidad marginal. A través de experimentos
              controlados, se pueden observar las decisiones de consumo de los
              participantes en diferentes escenarios y condiciones.
            </p>
            <p className="mb-5">
              <b>Experimentos de Elección: </b> Los investigadores pueden
              presentar a los participantes varias opciones de bienes y observar
              cómo eligen entre ellas, permitiendo inferir las utilidades
              marginales a partir de sus elecciones. Este método puede ayudar a
              capturar las preferencias y las utilidades de manera más precisa
              que las encuestas directas.
            </p>
            <h3 className="text-2xl font-medium leading-none mt-3">
              Limitaciones en la Medición
            </h3>
            <br />
            <p className="mb-5">
              A pesar de la importancia de la utilidad marginal, su medición
              presenta algunas limitaciones:
            </p>
            <p className="mb-5">
              <b>Subjetividad: </b> La utilidad es una medida subjetiva, y las
              preferencias de los consumidores pueden cambiar en diferentes
              contextos o circunstancias.
            </p>
            <p className="mb-5">
              <b>Dificultad en la Cuantificación: </b>
              No todos los bienes se pueden dividir fácilmente para medir la
              utilidad marginal. Por ejemplo, algunos servicios son indivisibles
              y no pueden ser consumidos en fracciones.
            </p>
            <p className="mb-5">
              <b>Influencias Externas: </b>
              Factores externos como la publicidad, la cultura o las
              recomendaciones de amigos pueden influir en las decisiones de
              consumo y afectar la percepción de la utilidad.
            </p>
            <div className="w-full h-64 my-5 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://mexicoindustry.com/admin/images/notas/2024/01/presenta-el-bajio-una-actividad-economica-creciente-21534.jpg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>

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

export default Clase2;
