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
              DIVISIÓN DE LA ECONOMÍA
            </h3>
            <br />
            <h3 className="text-2xl font-medium leading-none mt-3">
              Microeconomía
            </h3>
            <br />
            <p className="mb-5">
              La microeconomía se ocupa de entender cómo funcionan los pequeños
              componentes dentro de la economía en su conjunto. Esta rama se
              centra en el comportamiento de unidades individuales, como los
              consumidores, las empresas y los trabajadores, y en cómo toman
              decisiones para maximizar su bienestar o beneficios en distintos
              entornos.
            </p>
            <p className="mb-5">
              <b>Análisis de consumidores: </b> Examina cómo los consumidores
              deciden gastar su dinero limitado. Esto implica comprender sus
              preferencias, su ingreso disponible y cómo responden a cambios en
              los precios de los bienes y servicios que desean. Los consumidores
              buscan maximizar su satisfacción, que en economía se denomina
              utilidad.
            </p>
            <p className="mb-5">
              <b>Estudio de empresas: </b> Analiza cómo las empresas deciden
              cuánto producir y a qué precio vender sus productos. Las empresas
              buscan maximizar sus beneficios, pero deben hacerlo gestionando
              sus costos de producción y enfrentándose a competidores. Las
              decisiones de producción también dependen de si están en un
              mercado competitivo, monopolista u oligopolista, ya que cada
              estructura de mercado ofrece diferentes oportunidades y desafíos.
            </p>
            <p className="mb-5">
              <b>Mercados y precios: </b> La microeconomía estudia cómo se
              determinan los precios en diferentes mercados y cómo la oferta y
              la demanda de bienes y servicios afectan estos precios. Los
              precios funcionan como señales, indicando a los productores qué
              productos son rentables y a los consumidores qué productos pueden
              ser asequibles o inaccesibles.
            </p>
            <div className="w-full h-64 my-5 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://www.bbva.com/wp-content/uploads/2016/03/microeconomia-finanzas-economia-sistema-financiero-recurso-BBVA.jpg"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <h3 className="text-2xl font-medium leading-none mt-3">
              Macroeconomía
            </h3>
            <br />
            <p className="mb-5">
              La macroeconomía, en cambio, es la rama que estudia la economía
              desde una perspectiva amplia, enfocándose en el comportamiento
              agregado de la economía de un país o región. Esta área aborda los
              grandes fenómenos económicos que afectan a toda una economía y que
              suelen ser la base de las políticas económicas de un país.
            </p>
            <p className="mb-5">
              <b>Producción y crecimiento: </b> Un concepto clave en
              macroeconomía es el Producto Interno Bruto (PIB), que mide el
              valor de todos los bienes y servicios producidos en un país. La
              macroeconomía analiza cómo lograr el crecimiento económico
              sostenido y qué factores, como la inversión, la tecnología y la
              fuerza laboral, son esenciales para aumentar la producción a lo
              largo del tiempo.
            </p>
            <p className="mb-5">
              <b>Inflación y estabilidad de precios: </b> La inflación es el
              aumento generalizado de los precios en una economía. La
              macroeconomía estudia sus causas y efectos, así como las
              herramientas para controlarla. Una inflación alta erosiona el
              poder adquisitivo, mientras que una inflación baja o negativa
              puede indicar una economía estancada. Los bancos centrales
              utilizan políticas monetarias, como la regulación de la oferta
              monetaria, para controlar la inflación.
            </p>
            <p className="mb-5">
              <b>Empleo y desempleo: </b> El desempleo es una medida crítica que
              refleja la salud de una economía. La macroeconomía explora las
              causas del desempleo (como recesiones o cambios en la tecnología)
              y las políticas que pueden ayudar a reducirlo, como estímulos
              económicos o programas de capacitación laboral.
            </p>
            <div className="w-full h-64 my-5 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0030/1302/macroeconomia.png?1522637451"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <h3 className="text-2xl font-medium leading-none mt-3">
              {" "}
              Economía del Desarrollo
            </h3>
            <br />
            <p className="mb-5">
              La economía del desarrollo se enfoca en los países de ingresos
              bajos y medios, analizando los obstáculos y estrategias para
              lograr un crecimiento sostenible y mejorar la calidad de vida.
            </p>
            <div className="w-3/5 h-64 mr-6 float-left image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={
                  "https://www.cepal.org/sites/default/files/styles/1920x1080/public/images/featured/10_redim_0.jpg?itok=tgkNR6EU"
                }
                data-action="zoom"
                className="w-full rounded-md"
              />
            </div>
            <p className="mb-5">
              <b>Factores de desarrollo: </b> Esta rama investiga qué factores
              impulsan el desarrollo, incluyendo la inversión en capital humano
              (educación y salud), infraestructura, instituciones políticas
              estables y acceso a tecnología. Estos elementos son clave para
              elevar el nivel de vida en los países en desarrollo.
            </p>
            <p className="mb-5">
              <b>Desigualdad y pobreza: </b> La economía del desarrollo aborda
              temas de pobreza y desigualdad, estudiando cómo distribuir de
              manera equitativa los beneficios del crecimiento económico.
              También analiza las políticas para reducir la pobreza, como
              programas de transferencias condicionadas y la promoción del
              empleo.
            </p>
            <p className="mb-5">
              <b>Sostenibilidad: </b> El crecimiento a largo plazo debe ser
              sostenible, lo cual implica no agotar los recursos naturales y
              proteger el medio ambiente. Los economistas del desarrollo
              estudian cómo los países pueden crecer económicamente sin
              comprometer los recursos y la calidad de vida de futuras
              generaciones.
            </p>
            <p className="mb-5">
              <b>Ayuda internacional y cooperación: </b> La economía del
              desarrollo también se ocupa de la ayuda externa, como los
              préstamos y asistencia técnica de organismos internacionales
              (Banco Mundial, FMI). Estos recursos buscan fomentar el
              crecimiento y reducir la pobreza, pero deben ser gestionados
              cuidadosamente para evitar dependencia o mal uso.
            </p>

            <p>
              Las divisiones de la economía nos permiten estudiar y entender
              mejor cómo funciona el mundo económico desde distintas
              perspectivas, abarcando tanto el comportamiento de los individuos
              y las empresas (microeconomía) como los grandes fenómenos y
              políticas que afectan a la economía en su conjunto
              (macroeconomía). La economía internacional y la economía del
              desarrollo completan el panorama, centrándose en la relación
              económica entre países y en los esfuerzos por lograr el
              crecimiento equitativo en las regiones menos desarrolladas del
              mundo.
            </p>
          </div>
        </ModalBody>
      </Modal>
      {/* END: Super Large Modal Content */}
    </>
  );
};

export default Clase3;
