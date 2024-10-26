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
            <br />
            <h3 className="text-2xl font-medium leading-none mt-3">
              EL MERCADO
            </h3>
            <br />
            <div className="w-3/5 h-64 mr-6 float-left image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://elviajedelcliente.com/wp-content/uploads/2023/05/MERCADO_OBJETIVO-770x400.jpg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <p className="mb-5">
              Un mercado es un sistema o entorno en el cual se llevan a cabo
              intercambios de bienes y servicios entre compradores (demandantes)
              y vendedores (ofertantes). En este contexto, los precios de los
              productos y servicios se determinan a través de la interacción de
              la oferta y la demanda. La dinámica que surge de esta interacción
              es fundamental para comprender el funcionamiento de la economía,
              ya que influye directamente en la producción, distribución y
              consumo de bienes. En un mercado, los compradores buscan
              satisfacer sus necesidades y deseos mediante la adquisición de
              productos a precios que consideran razonables. Por su parte, los
              vendedores, que pueden ser empresas o individuos, buscan maximizar
              sus ingresos vendiendo sus productos a los precios más altos que
              el mercado permite.
            </p>
            <h3 className="text-2xl font-medium leading-none mt-3">
              Estructuras de Mercado
            </h3>
            <br />
            <p className="mb-5">
              Las estructuras de mercado se refieren a la organización y
              características de un mercado en particular, influyendo en el
              comportamiento de los agentes económicos que operan en él, así
              como en los resultados económicos. Estas estructuras son
              fundamentales para entender cómo funcionan los mercados y cómo se
              determinan los precios, la producción y el consumo de bienes y
              servicios. Las principales estructuras de mercado incluyen:
            </p>
            <h3 className="text-2xl font-medium leading-none mt-3">
              Competencia Perfecta
            </h3>
            <br />
            <p className="mb-5">
              En una competencia perfecta, existen numerosos compradores y
              vendedores en el mercado, donde ninguno tiene el poder suficiente
              para influir en el precio del producto. Las características clave
              de esta estructura son:
            </p>
            <p className="mb-5">
              <b>Homogeneidad del producto: </b> Todos los productos ofrecidos
              son idénticos, lo que significa que los consumidores no prefieren
              un vendedor sobre otro basándose en la calidad.
            </p>
            <p className="mb-5">
              <b>Libre entrada y salida: </b>
              No hay barreras significativas que impidan que nuevas empresas
              ingresen al mercado o que las existentes se retiren.
            </p>
            <p className="mb-5">
              <b>Información perfecta: </b>
              Todos los participantes tienen acceso a la misma información sobre
              precios y productos.
            </p>
            <p className="mb-5">
              En esta estructura, los precios son determinados por la
              interacción entre la oferta y la demanda, y las empresas son
              tomadoras de precios. Esto significa que deben aceptar el precio
              de mercado sin poder alterarlo.
            </p>
            <div className="w-full h-64 my-5 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={"https://i.ytimg.com/vi/r3HUnZ80kD4/maxresdefault.jpg"}
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <h3 className="text-2xl font-medium leading-none mt-3">
              Monopolio
            </h3>
            <br />
            <p className="mb-5">
              El monopolio es una estructura de mercado en la que un solo
              vendedor controla la totalidad del suministro de un bien o
              servicio en el mercado. Las características del monopolio
              incluyen:
            </p>
            <p className="mb-5">
              <b>Un único productor: </b> La empresa monopolista es la única que
              ofrece el producto o servicio.
            </p>
            <p className="mb-5">
              <b>Altas barreras de entrada: </b>
              Las empresas competidoras enfrentan dificultades significativas
              para ingresar al mercado, como la posesión de recursos únicos,
              regulaciones gubernamentales o economías de escala.
            </p>
            <p className="mb-5">
              <b>Control de precios: </b>
              El monopolista puede influir en el precio del producto,
              estableciendo precios más altos que en un mercado competitivo, lo
              que puede llevar a una menor producción y a una pérdida de
              bienestar social.
            </p>
            <p className="mb-5">
              Un monopolio puede resultar en una eficiencia económica reducida,
              ya que la falta de competencia tiende a disminuir la innovación y
              puede llevar a precios más altos y una menor variedad de
              productos.
            </p>
            <div className="w-full h-64 my-5 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://www.shutterstock.com/image-vector/monopoly-vector-illustration-flat-tiny-260nw-1382998568.jpg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <h3 className="text-2xl font-medium leading-none mt-3">
              Oligopolio
            </h3>
            <br />
            <p className="mb-5">
              El oligopolio es una estructura de mercado en la que un pequeño
              número de grandes empresas controla la mayor parte del mercado.
              Sus características son:
            </p>
            <p className="mb-5">
              <b>Pocos vendedores: </b> Un número limitado de empresas domina la
              oferta, lo que significa que las decisiones de una empresa afectan
              directamente a las demás.
            </p>
            <p className="mb-5">
              <b>Interdependencia: </b> Las empresas en un oligopolio deben
              considerar las reacciones de sus competidores al fijar precios y
              producir, lo que puede llevar a prácticas como la colusión, donde
              las empresas acuerdan mantener precios altos.
            </p>
            <p className="mb-5">
              <b>Diferenciación del producto: </b>Los productos pueden ser
              homogéneos (como el petróleo) o diferenciados (como los
              automóviles), lo que puede influir en la competencia.
            </p>
            <p className="mb-5">
              El oligopolio puede llevar a una competencia menos agresiva, en la
              que las empresas tienden a evitar la guerra de precios y optan por
              estrategias de marketing y diferenciación de productos.
            </p>
            <div className="w-full h-64 my-5 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={"https://i.ytimg.com/vi/H2GuoYHykVA/maxresdefault.jpg"}
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <h3 className="text-2xl font-medium leading-none mt-3">
              Competencia Monopolística
            </h3>
            <br />
            <p className="mb-5">
              La competencia monopolística es una estructura de mercado que
              combina elementos de competencia perfecta y monopolio. Se
              caracteriza por:
            </p>
            <p className="mb-5">
              <b>Numerosos vendedores: </b> Hay muchas empresas que compiten en
              el mercado, pero cada una ofrece un producto ligeramente
              diferenciado.
            </p>
            <p className="mb-5">
              <b>Facilidad de entrada y salida: </b> Las barreras de entrada son
              relativamente bajas, permitiendo que nuevas empresas ingresen al
              mercado fácilmente.
            </p>
            <p className="mb-5">
              <b>Diferenciación del producto: </b>Las empresas se esfuerzan por
              diferenciar sus productos a través de características, calidad o
              publicidad, lo que les permite tener cierto control sobre los
              precios.
            </p>
            <p className="mb-5">
              En la competencia monopolística, los precios pueden ser más altos
              que en una competencia perfecta debido a la diferenciación, y las
              empresas pueden disfrutar de beneficios a corto plazo, pero a
              largo plazo, los beneficios tienden a disminuir debido a la
              entrada de nuevos competidores.
            </p>
            <div className="w-full h-64 my-5 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://thumbnails.genially.com/61fd6a5a912b6f0012cd9570/screenshots/bbe1b11d-6b30-44d6-9241-fe6f8c061666.jpg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <p className="mb-5">
              Las estructuras de mercado son cruciales para entender el
              comportamiento de las empresas y los consumidores en la economía.
              Cada tipo de estructura presenta características únicas que
              influyen en la competencia, la fijación de precios y la eficiencia
              económica. La identificación de la estructura de mercado en la que
              opera una industria particular ayuda a los economistas y a los
              responsables de la política económica a formular estrategias y
              regulaciones adecuadas para promover el bienestar social y
              económico.
            </p>
            <h3 className="text-2xl font-medium leading-none mt-3">
              COMPETENCIA IMPERFECTA
            </h3>
            <br />
            <p className="mb-5">
              La competencia imperfecta tiene varias implicaciones económicas.
              En primer lugar, puede conducir a precios más altos y menor
              producción que en un mercado de competencia perfecta. Esto puede
              resultar en una reducción del bienestar social, ya que los
              consumidores deben pagar más por los productos y servicios.
              <br />
              <br />
              Además, la competencia imperfecta puede incentivar la innovación y
              la diferenciación de productos, ya que las empresas buscan atraer
              a los consumidores y ganar cuota de mercado. Sin embargo, la
              colusión entre empresas puede limitar la competencia y llevar a
              precios abusivos, lo que es perjudicial para los consumidores.
            </p>
            <h3 className="text-2xl font-medium leading-none mt-3">
              FORMACION DE PRECIOS EN LAS DIFERENTES ESTRUCTURAS DE MERCADO
            </h3>
            <br />
            <p className="mb-5">
              La formación de precios es un proceso esencial en la economía que
              se ve profundamente afectado por la estructura de mercado en la
              que operan las empresas. A continuación, se analizan cómo se
              forman los precios en diferentes estructuras de mercado:
              competencia perfecta, monopolio, oligopolio y competencia
              monopolística.
            </p>
            <p className="mb-5">
              La formación de precios varía significativamente entre las
              diferentes estructuras de mercado. En la competencia perfecta, los
              precios son determinados por el mercado, mientras que en el
              monopolio, el productor tiene control total sobre los precios. El
              oligopolio introduce complejidades debido a la interdependencia
              entre empresas, y la competencia monopolística permite cierto
              control de precios a través de la diferenciación de productos.
              Comprender estas diferencias es crucial para analizar cómo las
              empresas toman decisiones estratégicas y cómo estas afectan a los
              consumidores y la economía en su conjunto.
            </p>
          </div>
        </ModalBody>
      </Modal>
      {/* END: Super Large Modal Content */}
    </>
  );
};

export default Clase4;
