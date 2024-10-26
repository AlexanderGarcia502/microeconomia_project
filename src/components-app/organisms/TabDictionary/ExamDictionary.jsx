import React from "react";
import {
  AccordionGroup,
  AccordionItem,
  Accordion,
  AccordionPanel,
} from "@/base-components";

const ExamDictionary = () => {
  return (
    <div className="intro-y grid grid-cols-12 gap-6 mt-5">
      {/* BEGIN: Basic Accordion */}
      <div className="col-span-12 lg:col-span-6">
        <div className="p-5">
          <AccordionGroup className="accordion-boxed">
            <AccordionItem>
              <Accordion>
                Función de Producción con un Insumo Variable
              </Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La función de producción con un insumo variable es un modelo que
                muestra cómo varía la producción total al cambiar la cantidad de
                un insumo específico, manteniendo los demás insumos constantes.
                Este concepto es esencial para entender la relación entre la
                cantidad de insumos utilizados y el nivel de producción
                alcanzado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Producto Total</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El producto total es la cantidad total de bienes y servicios
                producidos en un período determinado. Se utiliza para evaluar la
                eficiencia de los procesos productivos y determinar el
                rendimiento general de la empresa. Este concepto se relaciona
                estrechamente con otros indicadores, como el producto marginal y
                promedio.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Producto Promedio</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El producto promedio se calcula dividiendo el producto total
                entre la cantidad de insumos utilizados. Este indicador es
                fundamental para analizar la eficiencia de la producción, ya que
                permite a las empresas determinar cuánto producen en promedio
                por cada unidad de insumo.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Producto Marginal</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El producto marginal es el incremento en el producto total que
                resulta de añadir una unidad adicional de un insumo variable,
                manteniendo constantes los demás insumos. Este concepto es
                crucial para las decisiones de producción, ya que ayuda a
                determinar el punto óptimo de uso de los insumos.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Etapas de la Producción</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Las etapas de la producción se dividen generalmente en tres
                fases: aumento de producción, rendimientos constantes y
                rendimientos decrecientes. En la fase de aumento, el incremento
                en insumos resulta en un aumento proporcional en la producción.
                En la fase de rendimientos constantes, el aumento de insumos
                produce un aumento constante en el output. Por último, en la
                fase de rendimientos decrecientes, el incremento en insumos
                produce un aumento cada vez menor en la producción.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Insumo Variable</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Un insumo variable es aquel cuya cantidad puede ser ajustada en
                el proceso de producción a corto plazo. A diferencia de los
                insumos fijos, los insumos variables permiten a las empresas
                adaptarse a cambios en la demanda y optimizar sus costos de
                producción. Ejemplos comunes incluyen mano de obra, materias
                primas y energía.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Costo Fijo</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Un costo fijo es un gasto que no varía con el nivel de
                producción, como el alquiler de un local o los sueldos de los
                empleados permanentes. Estos costos son constantes a corto plazo
                y deben ser cubiertos independientemente de las ventas
                realizadas. Comprender la naturaleza de los costos fijos es
                crucial para la planificación financiera de cualquier empresa.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Costo Variable</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Un costo variable es un gasto que cambia en función del nivel de
                producción. A medida que una empresa produce más, los costos
                variables aumentan. Ejemplos incluyen materias primas,
                comisiones de ventas y costos de energía. Estos costos son
                importantes para la toma de decisiones sobre producción y
                precios.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Equilibrio de Mercado</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El equilibrio de mercado se produce cuando la cantidad demandada
                de un bien o servicio es igual a la cantidad ofrecida. En este
                punto, no hay presión para que el precio suba o baje, y se
                considera que el mercado está en equilibrio. Este concepto es
                fundamental para entender cómo funcionan los mercados y se
                determina el precio.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Oferta Agregada</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La oferta agregada es la cantidad total de bienes y servicios
                que las empresas están dispuestas a vender en un período
                determinado a diferentes niveles de precios. Este concepto se
                utiliza en macroeconomía para analizar la producción total de
                una economía y su relación con el nivel de precios.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Demanda Agregada</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La demanda agregada es la cantidad total de bienes y servicios
                que los consumidores, empresas y el gobierno están dispuestos a
                comprar en una economía a diferentes niveles de precios. Este
                concepto es esencial para entender las fluctuaciones en la
                producción y el empleo en una economía.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Punto de Equilibrio</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El punto de equilibrio es el nivel de producción en el cual los
                ingresos totales igualan a los costos totales, resultando en una
                ganancia neta de cero. Este análisis es crucial para las
                empresas al establecer precios y tomar decisiones sobre
                producción, ya que permite identificar cuántas unidades deben
                venderse para cubrir los costos.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Elasticidad Ingreso</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La elasticidad ingreso de la demanda mide cómo varía la cantidad
                demandada de un bien ante cambios en el ingreso del consumidor.
                Se clasifica en bienes normales (demanda aumenta con el ingreso)
                y bienes inferiores (demanda disminuye con el ingreso). Este
                concepto es fundamental para entender el comportamiento del
                consumidor y la clasificación de los productos.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Elasticidad Cruzada</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La elasticidad cruzada de la demanda mide la sensibilidad de la
                cantidad demandada de un bien respecto a cambios en el precio de
                otro bien. Se utiliza para clasificar bienes como sustitutos
                (elasticidad positiva) o complementarios (elasticidad negativa),
                lo que ayuda a las empresas a entender las relaciones entre
                diferentes productos en el mercado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Monopolio</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Un monopolio es una estructura de mercado donde una sola empresa
                domina la oferta de un bien o servicio sin competencia cercana.
                Esta falta de competencia permite a la empresa establecer
                precios más altos y controlar la cantidad de producto disponible
                en el mercado, lo que puede afectar negativamente a los
                consumidores.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Oligopolio</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Un oligopolio es una estructura de mercado en la que un pequeño
                número de empresas controla la mayoría de la oferta de un
                producto o servicio. Las decisiones de precios y producción de
                una empresa en un oligopolio pueden afectar a las demás, lo que
                puede llevar a prácticas como la colusión y el establecimiento
                de precios predatorios.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Competencia Monopolística</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La competencia monopolística es una estructura de mercado en la
                que muchas empresas ofrecen productos diferenciados, lo que les
                permite tener cierto poder sobre el precio. Este tipo de
                competencia se caracteriza por la existencia de muchas empresas,
                productos similares pero no idénticos, y la facilidad de entrada
                y salida del mercado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Costos de Oportunidad</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Los costos de oportunidad son los beneficios que se sacrifican
                al elegir una opción sobre otra. En economía, este concepto es
                crucial para tomar decisiones informadas, ya que ayuda a las
                empresas y a los consumidores a evaluar las alternativas
                disponibles y a entender el verdadero costo de sus elecciones.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Mercado de Trabajo</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El mercado de trabajo es el espacio donde se encuentran los
                empleadores que buscan trabajadores y las personas que buscan
                empleo. Este mercado se rige por las leyes de oferta y demanda,
                donde los salarios y las condiciones laborales son determinados
                por la interacción entre trabajadores y empleadores.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Intervención Gubernamental</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La intervención gubernamental se refiere a las acciones del
                gobierno para regular o influir en la economía. Esto puede
                incluir la implementación de impuestos, subsidios, tarifas y
                regulaciones. La intervención puede tener efectos positivos al
                corregir fallos del mercado, pero también puede introducir
                distorsiones y afectar la eficiencia económica.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Regulación de Precios</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La regulación de precios es una medida adoptada por el gobierno
                para establecer límites en los precios que pueden cobrar las
                empresas por sus bienes y servicios. Esta intervención busca
                proteger a los consumidores de precios excesivos y garantizar la
                competencia justa en el mercado, aunque también puede llevar a
                escasez si se establecen precios por debajo del equilibrio de
                mercado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Productividad</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La productividad es una medida de la eficiencia con la que se
                utilizan los insumos para generar productos o servicios. Se
                puede medir como la cantidad de output producida por unidad de
                input. Aumentar la productividad es un objetivo clave para las
                empresas, ya que puede conducir a menores costos y mayores
                márgenes de beneficio.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Crecimiento Económico</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El crecimiento económico se refiere al aumento sostenido en la
                producción de bienes y servicios de una economía a lo largo del
                tiempo. Este crecimiento se mide a menudo a través del Producto
                Interno Bruto (PIB) y es fundamental para el desarrollo
                económico y la mejora del nivel de vida de la población.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Desarrollo Sostenible</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El desarrollo sostenible es un enfoque de desarrollo económico
                que busca satisfacer las necesidades del presente sin
                comprometer la capacidad de las futuras generaciones para
                satisfacer sus propias necesidades. Este concepto abarca
                aspectos económicos, sociales y ambientales, promoviendo un
                crecimiento equilibrado y responsable.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Bienestar Económico</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El bienestar económico se refiere a la calidad de vida de los
                individuos y a su nivel de satisfacción económica. Este concepto
                incluye no solo el ingreso y el empleo, sino también factores
                como la educación, la salud y el acceso a servicios básicos. Es
                fundamental para evaluar el desarrollo de una sociedad.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Externalidades</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Las externalidades son efectos colaterales de las actividades
                económicas que afectan a terceros no involucrados en la
                transacción. Pueden ser positivas (beneficios para otros) o
                negativas (costos para otros). Este concepto es crucial para
                entender las fallas del mercado y la necesidad de intervención
                gubernamental en ciertos casos.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Competencia Perfecta</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La competencia perfecta es un modelo de mercado donde hay un
                gran número de compradores y vendedores, todos ofrecen productos
                homogéneos y la información es perfecta. En este tipo de
                mercado, ninguna empresa puede influir en el precio y se asume
                que todos los participantes actúan de manera racional. Este
                concepto es fundamental para la teoría económica.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Precio de Reserva</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El precio de reserva es el precio mínimo al que un vendedor está
                dispuesto a vender un bien o servicio. Este precio es crucial
                para los vendedores en el proceso de negociación, ya que les
                ayuda a determinar su límite inferior y a tomar decisiones sobre
                la aceptación de ofertas en una transacción.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Teoría de Juegos</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La teoría de juegos es un campo de estudio en economía que
                analiza las decisiones estratégicas de diferentes agentes en
                situaciones de competencia. Este enfoque se utiliza para modelar
                interacciones en mercados oligopólicos, negociaciones y otros
                contextos donde las decisiones de un agente afectan a los demás.
                Es fundamental para entender el comportamiento estratégico en la
                economía.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Análisis de Costos</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El análisis de costos es una herramienta utilizada por las
                empresas para evaluar los costos asociados con la producción de
                bienes o servicios. Este análisis ayuda a las empresas a
                identificar áreas de eficiencia, establecer precios adecuados y
                tomar decisiones informadas sobre la producción y la inversión.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Contabilidad de Gestión</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La contabilidad de gestión es un campo de la contabilidad que se
                centra en la provisión de información útil para la toma de
                decisiones dentro de la empresa. Este tipo de contabilidad
                incluye el análisis de costos, la planificación financiera y la
                elaboración de presupuestos, y es esencial para ayudar a los
                gerentes a tomar decisiones informadas sobre la operación y
                estrategia de la empresa.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Mercado Financiero</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El mercado financiero es el sistema donde se compran y venden
                activos financieros, como acciones, bonos y divisas. Este
                mercado es crucial para la economía, ya que facilita la
                asignación de capital y permite a las empresas obtener
                financiamiento para sus operaciones y proyectos. La eficiencia
                de los mercados financieros es esencial para el crecimiento
                económico.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Interés Compuesto</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El interés compuesto es el interés calculado sobre el capital
                inicial y también sobre los intereses acumulados de períodos
                anteriores. Este concepto es fundamental en finanzas y ahorros,
                ya que permite que el dinero crezca de manera más rápida en
                comparación con el interés simple, donde solo se calcula sobre
                el capital inicial.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Inversión</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La inversión es la asignación de recursos, generalmente dinero,
                en la expectativa de obtener un beneficio en el futuro. Las
                inversiones pueden realizarse en activos financieros,
                propiedades o proyectos empresariales. Evaluar las oportunidades
                de inversión es crucial para la planificación financiera y el
                crecimiento económico personal y empresarial.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Ley de Rendimientos Decrecientes</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La ley de rendimientos decrecientes establece que al añadir
                insumos variables a un insumo fijo, la cantidad adicional de
                producto que se obtiene disminuirá a partir de un cierto punto.
                Este principio es fundamental para la teoría de la producción,
                ya que determina el nivel óptimo de insumos que se deben
                utilizar en el proceso productivo.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Costos de Producción</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Los costos de producción son los gastos totales que incurre una
                empresa para fabricar un bien o servicio. Estos costos incluyen
                costos fijos (que no cambian con la producción, como el
                alquiler) y costos variables (que cambian con el nivel de
                producción, como las materias primas). Comprender estos costos
                es vital para determinar los precios y la rentabilidad.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Costos de Producción a Corto Plazo</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Los costos de producción a corto plazo son aquellos que no
                pueden ser ajustados de inmediato debido a la rigidez de los
                costos fijos. Estos costos incluyen tanto los costos fijos como
                los variables y son esenciales para la planificación y gestión
                financiera de una empresa.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Costos Totales</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Los costos totales son la suma de todos los costos asociados con
                la producción de un bien o servicio. Esto incluye tanto los
                costos fijos como los variables. Conocer los costos totales es
                fundamental para determinar la viabilidad económica de un
                producto y establecer estrategias de precios adecuadas.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Costos Unitarios</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Los costos unitarios se obtienen dividiendo los costos totales
                entre la cantidad de bienes producidos. Este indicador es
                crucial para las empresas, ya que ayuda a determinar el precio
                de venta mínimo necesario para cubrir los costos y generar
                ganancias. Una comprensión adecuada de los costos unitarios es
                esencial para la estrategia de precios.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Mercado</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Un mercado es un sistema donde compradores y vendedores
                interactúan para intercambiar bienes y servicios. En el estudio
                de la economía, los mercados son fundamentales para entender
                cómo se determina el precio y cómo se distribuyen los recursos
                en una economía. Existen diferentes tipos de mercados, cada uno
                con sus características específicas.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Estructuras de Mercado</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Las estructuras de mercado se refieren a la organización de un
                mercado según el número de competidores, el tipo de producto y
                la facilidad de entrada y salida de empresas. Las estructuras de
                mercado incluyen competencia perfecta, monopolio, oligopolio y
                competencia monopolística, cada una de las cuales tiene
                implicaciones diferentes para el comportamiento del mercado y la
                fijación de precios.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Competencia Perfecta</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La competencia perfecta es una estructura de mercado idealizada
                en la que hay muchos compradores y vendedores, productos
                homogéneos y libertad de entrada y salida del mercado. En este
                tipo de mercado, los precios son determinados por la oferta y la
                demanda, y ninguna empresa tiene poder para influir en el precio
                del mercado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Competencia Imperfecta</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La competencia imperfecta es una estructura de mercado en la que
                no se cumplen las condiciones de la competencia perfecta. En
                este tipo de mercado, puede haber pocos vendedores, productos
                diferenciados y barreras de entrada que limitan la competencia.
                Esto permite a las empresas tener algún poder sobre el precio de
                sus productos.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>
                Formación de Precios en Diferentes Estructuras de Mercado
              </Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La formación de precios varía significativamente en función de
                la estructura del mercado. En mercados de competencia perfecta,
                los precios son determinados por el equilibrio entre oferta y
                demanda. En estructuras de competencia imperfecta, como el
                monopolio u oligopolio, las empresas pueden influir en los
                precios a través de su estrategia de producción y marketing, lo
                que puede llevar a precios más altos que en un mercado
                competitivo.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>
                Función de Producción con un Insumo Variable
              </Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La función de producción con un insumo variable describe cómo la
                cantidad de un insumo variable (como el trabajo) afecta la
                producción total de un bien o servicio. En este contexto, se
                analiza cómo ajustar el uso de insumos puede maximizar el
                output.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Producto Total, Promedio y Marginal</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El producto total es la cantidad total de bienes producidos. El
                producto promedio es el producto total dividido por la cantidad
                de insumos, y el producto marginal es el aumento en el producto
                total resultante de añadir una unidad adicional de insumo. Estos
                conceptos son fundamentales para la optimización de la
                producción.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Etapas de la Producción</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Las etapas de la producción incluyen el aumento de producción,
                rendimientos constantes y rendimientos decrecientes. Cada etapa
                tiene implicaciones para la eficiencia de los insumos y la
                capacidad productiva de la empresa.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Ley de Rendimientos Decrecientes</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La ley de rendimientos decrecientes establece que, al añadir
                insumos variables a un insumo fijo, el incremento en la
                producción total disminuirá a partir de un cierto punto. Este
                principio es esencial para la planificación de la producción.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Costos de Producción</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Los costos de producción son los gastos totales incurridos en la
                creación de un bien o servicio. Esto incluye costos fijos, como
                alquiler y maquinaria, y costos variables, como materias primas
                y mano de obra.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Costos de Producción a Corto Plazo</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Los costos de producción a corto plazo se refieren a aquellos
                costos que no pueden ser ajustados inmediatamente. Incluyen
                costos fijos que permanecen constantes y costos variables que
                pueden cambiar con el nivel de producción.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Costos Totales</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Los costos totales son la suma de todos los costos asociados con
                la producción. Incluyen tanto los costos fijos como los
                variables, y son cruciales para determinar la rentabilidad de un
                negocio.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Costos Unitarios</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Los costos unitarios son el costo total de producción dividido
                por el número de unidades producidas. Este indicador es esencial
                para establecer precios y evaluar la eficiencia de la
                producción.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Mercado</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Un mercado es un sistema donde compradores y vendedores
                interactúan para intercambiar bienes y servicios. Su estudio es
                fundamental para entender la oferta y la demanda, así como los
                mecanismos de fijación de precios.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Estructuras de Mercado</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Las estructuras de mercado son las características que definen
                un mercado en particular, incluyendo el número de competidores,
                el tipo de productos, y la facilidad de entrada al mercado.
                Estas estructuras afectan la competencia y la fijación de
                precios.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Competencia Perfecta</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La competencia perfecta es una estructura de mercado donde
                existen numerosos compradores y vendedores, productos homogéneos
                y libre entrada y salida de empresas. En este mercado, el precio
                se determina a través de la interacción entre la oferta y la
                demanda.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Competencia Imperfecta</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La competencia imperfecta se refiere a mercados donde existen
                barreras a la entrada y salida, productos diferenciados y un
                número limitado de competidores. Esta estructura influye en la
                capacidad de las empresas para fijar precios y maximizar
                beneficios.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>
                Formación de Precios en Diferentes Estructuras de Mercado
              </Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La formación de precios varía según la estructura del mercado.
                En competencia perfecta, los precios son establecidos por el
                mercado, mientras que en mercados monopolísticos, las empresas
                pueden influir en los precios. Comprender estas dinámicas es
                clave para la estrategia empresarial.
              </AccordionPanel>
            </AccordionItem>
          </AccordionGroup>
        </div>
      </div>
      {/* END: Basic Accordion */}
    </div>
  );
};

export default ExamDictionary;
