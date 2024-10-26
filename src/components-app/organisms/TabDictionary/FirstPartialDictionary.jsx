import React from "react";
import {
  AccordionGroup,
  AccordionItem,
  Accordion,
  AccordionPanel,
} from "@/base-components";

const FirstDictionary = () => {
  return (
    <div className="intro-y grid grid-cols-12 gap-6 mt-5">
      {/* BEGIN: Basic Accordion */}
      <div className="col-span-12 lg:col-span-6">
        <div className="p-5">
          <AccordionGroup className="accordion-boxed">
            {/* Palabras del glosario */}
            <AccordionItem>
              <Accordion>Economía</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La economía es el estudio de cómo se gestionan los recursos para
                satisfacer necesidades.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>La economía como ciencia</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La economía se considera una ciencia social que estudia la
                producción y el consumo.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>División de la economía</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Se divide en microeconomía y macroeconomía, cada una con
                enfoques diferentes.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Microeconomía</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Estudia el comportamiento de individuos y empresas en la toma de
                decisiones.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Macroeconomía</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Analiza la economía a nivel nacional y global, como el
                crecimiento y la inflación.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Teoría de la utilidad marginal</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Propone que la satisfacción de un bien disminuye con cada unidad
                consumida adicional.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Medición de la utilidad marginal</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Se mide a través del cambio en satisfacción al consumir un bien
                adicional.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Curvas de la utilidad marginal</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Representan la relación entre la cantidad consumida y la
                utilidad obtenida.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Curvas de indiferencia</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Muestran combinaciones de bienes que proporcionan el mismo nivel
                de satisfacción.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Tasa marginal de sustitución</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Indica la cantidad de un bien que un consumidor está dispuesto a
                renunciar para obtener más de otro.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Línea del presupuesto</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Representa todas las combinaciones posibles de bienes que se
                pueden comprar con un ingreso dado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Movimientos de la línea del presupuesto</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Ocurren debido a cambios en el ingreso o en los precios de los
                bienes.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Recursos</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Insumos necesarios para producir bienes y servicios.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Costos de producción</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Gastos incurridos en la creación de bienes y servicios.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Costos fijos</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Gastos que no varían con el nivel de producción.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Costos variables</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Gastos que cambian con el nivel de producción.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Costos totales</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Suma de costos fijos y costos variables.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Costos unitarios</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Costos totales divididos por la cantidad producida.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Producción a corto plazo</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Periodo en el que al menos un insumo es fijo.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Producto total</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Cantidad total de bienes producidos en un periodo determinado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Producto marginal</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Incremento en el producto total por la adición de una unidad de
                insumo.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Utilidad</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Satisfacción o beneficio que obtiene un consumidor de un bien.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Ley de rendimientos decrecientes</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Afirma que al agregar insumos a un proceso productivo, los
                aumentos en la producción disminuirán después de cierto punto.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Estructuras de mercado</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Clasificaciones del mercado según el número de vendedores y
                compradores.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Competencia perfecta</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Tipo de mercado con muchos vendedores y compradores donde los
                productos son homogéneos.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Monopolio</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Mercado donde hay un único vendedor que controla el suministro
                de un bien.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Oligopolio</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Mercado donde un pequeño número de empresas dominan la oferta de
                un producto.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Competencia monopolística</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Tipo de mercado con muchos vendedores que ofrecen productos
                diferenciados.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Formación de precios</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Proceso por el cual se determina el precio de un bien en el
                mercado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Elasticidad</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Medida de la respuesta de la demanda o la oferta ante cambios en
                precio.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Demanda</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Cantidad de un bien que los consumidores están dispuestos a
                comprar a diferentes precios.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Oferta</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Cantidad de un bien que los productores están dispuestos a
                vender a diferentes precios.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Equilibrio de mercado</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Punto donde la cantidad demandada es igual a la cantidad
                ofrecida.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Intervención del gobierno</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Acción del estado para regular o intervenir en la economía.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Política fiscal</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Uso del gasto público y la tributación para influir en la
                economía.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Política monetaria</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Estrategias del banco central para controlar la oferta monetaria
                y las tasas de interés.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Inflación</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Aumento generalizado y sostenido de los precios de bienes y
                servicios.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Desempleo</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Situación en la que hay personas dispuestas a trabajar pero no
                encuentran empleo.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Producto Interno Bruto (PIB)</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Valor total de los bienes y servicios producidos en un país en
                un periodo determinado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Diferenciación entre Micro y Macroeconomía</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La microeconomía se enfoca en decisiones individuales y mercados
                específicos, mientras que la macroeconomía examina fenómenos
                económicos globales, como el crecimiento económico, las tasas de
                interés y las políticas fiscales. Ambas son esenciales para
                entender el funcionamiento económico.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Teoría de la Utilidad Marginal</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La teoría de la utilidad marginal sostiene que los consumidores
                toman decisiones basadas en la satisfacción adicional que
                obtienen al consumir unidades adicionales de un bien. Esta
                teoría ayuda a explicar la demanda y el comportamiento del
                consumidor en el mercado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Medición de la Utilidad Marginal</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La medición de la utilidad marginal implica evaluar el nivel de
                satisfacción que proporciona cada unidad adicional de un bien.
                Esta medición es clave para entender cómo los consumidores
                distribuyen su ingreso entre diferentes bienes y maximizar su
                utilidad.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Las Curvas de la Utilidad Marginal</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Las curvas de la utilidad marginal representan gráficamente cómo
                cambia la utilidad marginal a medida que se consumen unidades
                adicionales de un bien. Estas curvas son útiles para ilustrar el
                concepto de la disminución de la utilidad marginal y el
                comportamiento del consumidor.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Las Curvas de Indiferencia</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Las curvas de indiferencia muestran combinaciones de dos bienes
                que proporcionan el mismo nivel de satisfacción al consumidor.
                Estas curvas son importantes para analizar preferencias y
                elecciones, así como para entender el equilibrio del consumidor.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Tasa Marginal de Sustitución</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La tasa marginal de sustitución es la cantidad de un bien que un
                consumidor está dispuesto a renunciar para obtener una unidad
                adicional de otro bien, manteniendo constante su nivel de
                utilidad. Este concepto es clave para analizar decisiones de
                consumo y preferencias.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>La Línea del Presupuesto</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La línea del presupuesto representa las combinaciones de bienes
                que un consumidor puede adquirir dado su ingreso y los precios
                de los bienes. Esta línea ayuda a visualizar las limitaciones
                presupuestarias y las elecciones que enfrentan los consumidores.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Movimientos de la Línea del Presupuesto</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Los movimientos de la línea del presupuesto ocurren cuando hay
                cambios en el ingreso del consumidor o en los precios de los
                bienes. Estos movimientos permiten analizar cómo los cambios en
                las condiciones económicas afectan las decisiones de consumo y
                la elección de bienes.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Utilidad Total</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La utilidad total es la satisfacción acumulativa que un
                consumidor obtiene al consumir múltiples unidades de un bien.
                Este concepto es esencial para entender cómo los consumidores
                toman decisiones de compra y cómo distribuyen su ingreso entre
                diferentes bienes.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Preferencias del Consumidor</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Las preferencias del consumidor son los gustos y elecciones que
                influyen en las decisiones de compra. Estas preferencias
                determinan cómo los consumidores valoran diferentes bienes y
                servicios y son fundamentales para la teoría del consumo y la
                demanda.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Elasticidad de la Utilidad</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La elasticidad de la utilidad mide la sensibilidad de la
                utilidad total a cambios en la cantidad consumida de un bien.
                Este concepto ayuda a entender cómo varía la satisfacción del
                consumidor con diferentes niveles de consumo.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Demanda Relativa</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La demanda relativa se refiere a la cantidad demandada de un
                bien en relación con otros bienes. Este concepto es importante
                para analizar cómo los cambios en los precios de los bienes
                relacionados afectan las decisiones de consumo.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Efecto Ingreso</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El efecto ingreso describe cómo un cambio en el ingreso de un
                consumidor afecta la cantidad demandada de un bien. Este efecto
                se combina con el efecto sustitución para explicar la variación
                en la demanda cuando cambian los precios.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Efecto Sustitución</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El efecto sustitución se refiere a cómo los consumidores cambian
                su demanda de un bien en respuesta a cambios en el precio de
                otro bien. Este concepto es esencial para comprender cómo se
                ajustan las decisiones de consumo en función de los precios
                relativos.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Bienes Normales</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Los bienes normales son aquellos cuya demanda aumenta a medida
                que aumenta el ingreso del consumidor. Estos bienes son opuestos
                a los bienes inferiores y son importantes para entender el
                comportamiento del consumidor y la formación de la demanda.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Bienes Inferiores</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Los bienes inferiores son aquellos cuya demanda disminuye a
                medida que aumenta el ingreso del consumidor. Este concepto es
                clave para analizar cómo los cambios en el ingreso afectan las
                decisiones de compra y la composición del consumo.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Costos de Oportunidad</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Los costos de oportunidad son el valor de la alternativa a la
                que se renuncia al tomar una decisión. Este concepto es
                fundamental en economía, ya que ayuda a entender las decisiones
                de consumo y producción en un contexto de recursos limitados.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Utilidad y Consumo</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La relación entre utilidad y consumo es central en la economía
                del consumidor. La utilidad determina las preferencias y
                decisiones de consumo, mientras que el consumo, a su vez,
                influye en la satisfacción y el bienestar del consumidor.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Bienes Sustitutos</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Los bienes sustitutos son aquellos que pueden reemplazarse entre
                sí en el consumo. Un cambio en el precio de un bien sustituto
                puede afectar la demanda del bien original, ilustrando la
                interrelación entre diferentes productos en el mercado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Bienes Complementarios</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Los bienes complementarios son aquellos que se consumen juntos,
                de modo que un aumento en la demanda de uno puede llevar a un
                aumento en la demanda del otro. Este concepto es esencial para
                entender las relaciones entre productos y sus efectos en el
                mercado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Crecimiento económico</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Aumento sostenido en el PIB de un país.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Desarrollo económico</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Proceso por el cual un país mejora su calidad de vida y
                bienestar económico.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Comercio internacional</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Intercambio de bienes y servicios entre países.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Balanza de pagos</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Registro de todas las transacciones económicas de un país con el
                resto del mundo.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Tasa de cambio</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Valor de una moneda en relación a otra.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Globalización</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Proceso de integración económica y cultural entre países.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Desarrollo sostenible</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Enfoque de desarrollo que satisface las necesidades actuales sin
                comprometer a las futuras generaciones.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Economía circular</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Modelo económico que busca maximizar la reutilización de
                recursos y minimizar residuos.
              </AccordionPanel>
            </AccordionItem>
          </AccordionGroup>
        </div>
      </div>
      {/* END: Basic Accordion */}
    </div>
  );
};

export default FirstDictionary;
