import React from "react";
import {
  AccordionGroup,
  AccordionItem,
  Accordion,
  AccordionPanel,
} from "@/base-components";

const SecondDictionary = () => {
  return (
    <div className="intro-y grid grid-cols-12 gap-6 mt-5">
      {/* BEGIN: Basic Accordion */}
      <div className="col-span-12 lg:col-span-6">
        <div className="p-5">
          <AccordionGroup className="accordion-boxed">
            <AccordionItem>
              <Accordion>Equilibrio del Consumidor</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El equilibrio del consumidor se refiere al punto en el que un
                consumidor maximiza su utilidad dados sus ingresos y los precios
                de los bienes. En este equilibrio, el consumidor no tiene
                incentivos para cambiar su consumo, ya que ha optimizado su
                satisfacción. Esto se representa gráficamente donde la curva de
                indiferencia toca la restricción presupuestaria.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Curva de Ingreso Consumo</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La curva de ingreso consumo muestra cómo varía la cantidad
                demandada de un bien a medida que cambia el ingreso del
                consumidor, manteniendo los precios constantes. A medida que el
                ingreso aumenta, se espera que la demanda del bien también
                aumente, reflejando la relación directa entre el ingreso y el
                consumo.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Curva de Engel</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La curva de Engel representa la relación entre el ingreso del
                consumidor y la cantidad demandada de un bien específico. A
                medida que el ingreso aumenta, la curva muestra cómo cambia la
                demanda de ese bien. Esta curva es útil para identificar si un
                bien es normal o inferior.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Curva de Precio Consumo</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La curva de precio consumo ilustra cómo la cantidad demandada de
                un bien varía con su precio, manteniendo constantes los ingresos
                y otros precios. Se espera que a medida que el precio disminuye,
                la cantidad demandada aumente, y viceversa, lo que se refleja en
                la pendiente negativa de la curva de demanda.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Curva de la Demanda Individual</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La curva de la demanda individual representa la relación entre
                el precio de un bien y la cantidad demandada por un solo
                consumidor. Esta curva permite entender cómo el consumidor
                reacciona a los cambios en los precios y es fundamental para el
                análisis del comportamiento del consumidor en el mercado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Equilibrio del Consumidor</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El equilibrio del consumidor se refiere al punto en el cual un
                consumidor maximiza su satisfacción o utilidad, dado su ingreso
                y los precios de los bienes. Este equilibrio se alcanza cuando
                la tasa de sustitución entre dos bienes es igual a la razón de
                sus precios.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Curva de Ingreso Consumo</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La curva de ingreso consumo muestra cómo varía la cantidad
                demandada de un bien cuando el ingreso del consumidor cambia,
                manteniendo constantes los precios. Esta curva ilustra la
                relación entre el ingreso y la demanda, y es fundamental para
                entender el comportamiento del consumidor.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Curva de Engel</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La curva de Engel representa la relación entre el ingreso de un
                consumidor y la cantidad demandada de un bien. Muestra cómo la
                demanda de un bien cambia a medida que varía el ingreso,
                ayudando a identificar si un bien es normal o inferior.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Curva de Precio Consumo</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La curva de precio consumo ilustra la relación entre el precio
                de un bien y la cantidad demandada por un consumidor. Esta curva
                es esencial para entender cómo los cambios en el precio afectan
                el comportamiento del consumidor y la demanda de un producto
                específico.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Curva de la Demanda Individual</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La curva de la demanda individual representa la cantidad de un
                bien que un consumidor específico está dispuesto a comprar a
                diferentes precios. Esta curva es fundamental para analizar el
                comportamiento del consumidor y la formación de precios en el
                mercado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Efecto Total</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El efecto total se refiere al cambio en la cantidad demandada de
                un bien debido a variaciones en su precio, que incluye tanto el
                efecto ingreso como el efecto sustitución. Este concepto es
                esencial para entender cómo los consumidores responden a cambios
                en los precios.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Demanda y Oferta</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La demanda y oferta son los dos pilares fundamentales de la
                economía de mercado. La demanda representa la cantidad de un
                bien que los consumidores están dispuestos a comprar a
                diferentes precios, mientras que la oferta indica la cantidad
                que los productores están dispuestos a vender. Su interacción
                determina los precios en el mercado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Determinantes</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Los determinantes de la demanda y oferta son factores que
                influyen en la cantidad demandada o ofrecida de un bien. Estos
                pueden incluir cambios en los ingresos, precios de bienes
                relacionados, preferencias del consumidor y tecnología, y son
                clave para entender cómo se forman los precios en el mercado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Formación de las Curvas</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La formación de las curvas de demanda y oferta se basa en la
                interacción de los consumidores y productores en el mercado. Las
                preferencias de los consumidores y los costos de producción son
                factores clave que determinan la forma y posición de estas
                curvas, influyendo en el equilibrio del mercado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>La Medida de las Elasticidades</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La medida de las elasticidades se refiere a cómo se cuantifica
                la sensibilidad de la cantidad demandada u ofrecida ante cambios
                en el precio o ingreso. Estas medidas son cruciales para la toma
                de decisiones empresariales y la formulación de políticas
                económicas, ya que indican el grado de respuesta de los
                consumidores y productores.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Elasticidad Precio de la Demanda</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La elasticidad precio de la demanda mide la sensibilidad de la
                cantidad demandada de un bien ante cambios en su precio. Este
                concepto es vital para las empresas, ya que les ayuda a entender
                cómo las variaciones de precios afectan sus ventas y a tomar
                decisiones de precios informadas.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Elasticidad Ingreso de la Demanda</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La elasticidad ingreso de la demanda mide cómo varía la cantidad
                demandada de un bien ante cambios en el ingreso del consumidor.
                Esta medida permite clasificar los bienes como normales o
                inferiores, ayudando a las empresas a entender el comportamiento
                de los consumidores en función de sus ingresos.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Elasticidad Cruzada de la Demanda</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La elasticidad cruzada de la demanda mide la variación de la
                cantidad demandada de un bien en respuesta a cambios en el
                precio de otro bien. Este concepto es fundamental para
                identificar si dos bienes son sustitutos o complementarios, lo
                que influye en las estrategias de precios y marketing.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Elasticidad Precio de la Oferta</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La elasticidad precio de la oferta mide la sensibilidad de la
                cantidad ofrecida de un bien ante cambios en su precio. Este
                concepto es crucial para entender cómo los productores responden
                a las variaciones de precios y para analizar la efectividad de
                las políticas de precios en el mercado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Función de Producción</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La función de producción es una relación matemática que describe
                cómo se combinan los insumos para generar un determinado nivel
                de producción. Este concepto es esencial para entender la
                eficiencia y el rendimiento en el proceso productivo, así como
                para realizar análisis de costos y planificación empresarial.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Renta del Consumidor</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La renta del consumidor se refiere a la cantidad total de
                ingresos disponibles que un individuo tiene para gastar en
                bienes y servicios. Este concepto es fundamental para entender
                el comportamiento del consumidor y su capacidad para participar
                en el mercado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Satisfacción Marginal</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La satisfacción marginal es el aumento en la satisfacción o
                utilidad que un consumidor obtiene al consumir una unidad
                adicional de un bien. Este concepto es clave en la teoría del
                consumo, ya que ayuda a explicar cómo los consumidores toman
                decisiones sobre la cantidad de bienes a adquirir.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Precio de Mercado</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El precio de mercado es el precio al cual se realiza una
                transacción en un mercado determinado. Este precio es el
                resultado de la interacción entre la oferta y la demanda y puede
                fluctuar según diversos factores, como cambios en la preferencia
                del consumidor o en la capacidad de producción.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Utilidad Total</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La utilidad total es la satisfacción o beneficio total que un
                consumidor obtiene de la cantidad consumida de un bien o
                servicio. Este concepto es fundamental para entender el
                comportamiento del consumidor y la toma de decisiones sobre el
                consumo.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Costo Marginal</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El costo marginal es el costo adicional que incurre una empresa
                al producir una unidad más de un bien. Este concepto es crucial
                para la toma de decisiones de producción, ya que ayuda a
                determinar el nivel óptimo de producción y el precio adecuado
                para maximizar beneficios.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Escala de Producción</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La escala de producción se refiere a la cantidad de producción
                que una empresa puede alcanzar en un período determinado. Este
                concepto es importante para analizar la eficiencia y la
                capacidad productiva, así como para la planificación estratégica
                de una empresa.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Costos Fijos y Variables</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Los costos fijos son aquellos que no cambian con el nivel de
                producción, mientras que los costos variables varían
                directamente con la cantidad producida. Comprender esta
                distinción es crucial para la gestión financiera y la
                elaboración de presupuestos en una empresa.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Mercado Competitivo</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Un mercado competitivo es aquel en el que hay numerosos
                compradores y vendedores, y donde ninguno tiene el poder
                suficiente para influir en el precio de mercado. Este tipo de
                mercado se caracteriza por la libre entrada y salida de
                empresas, lo que promueve la eficiencia y la innovación.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Producto Marginal</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El producto marginal es el aumento en la producción total que
                resulta de utilizar una unidad adicional de un insumo,
                manteniendo constantes los demás insumos. Este concepto es
                fundamental para la toma de decisiones en la producción y la
                optimización de recursos.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Efecto Total, Ingreso y Sustitución</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El efecto total se refiere a cómo cambia la cantidad demandada
                de un bien debido a cambios en su precio, descomponiéndose en el
                efecto ingreso y el efecto sustitución. El efecto ingreso
                refleja el cambio en la cantidad demandada debido a la variación
                del poder adquisitivo del consumidor, mientras que el efecto
                sustitución muestra cómo los consumidores ajustan su consumo
                hacia bienes sustitutos.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Demanda y Oferta</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La demanda y la oferta son conceptos fundamentales en economía
                que explican cómo se determinan los precios y las cantidades en
                un mercado. La demanda representa la cantidad de un bien que los
                consumidores están dispuestos a comprar a diferentes precios,
                mientras que la oferta es la cantidad que los productores están
                dispuestos a vender. La intersección de las curvas de demanda y
                oferta determina el precio de equilibrio.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Determinantes</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Los determinantes son factores que influyen en la oferta y la
                demanda de un bien. Para la demanda, incluyen el ingreso del
                consumidor, los gustos y preferencias, los precios de bienes
                relacionados (sustitutos y complementarios) y la expectativa de
                cambios futuros. Para la oferta, los determinantes son los
                costos de producción, la tecnología, el número de vendedores en
                el mercado y las expectativas de precios futuros.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Formación de las Curvas</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La formación de las curvas de demanda y oferta implica entender
                cómo se construyen a partir de las decisiones de los
                consumidores y productores en el mercado. Las curvas se forman
                al graficar la relación entre los precios y las cantidades
                demandadas u ofrecidas, respectivamente, lo que permite
                visualizar el comportamiento del mercado ante diferentes
                condiciones.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>La Medida de las Elasticidades</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La medida de las elasticidades se refiere a la capacidad de un
                bien para responder a cambios en los precios o ingresos. Las
                elasticidades pueden ser precio de la demanda, ingreso de la
                demanda, y cruzadas, y ayudan a determinar cuán sensible es el
                consumidor a cambios en el entorno del mercado, lo que es vital
                para las decisiones de precios y producción.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Elasticidad Precio de la Demanda</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La elasticidad precio de la demanda mide la sensibilidad de la
                cantidad demandada de un bien ante un cambio en su precio. Se
                calcula como el cambio porcentual en la cantidad demandada
                dividido por el cambio porcentual en el precio. Un valor mayor a
                uno indica una demanda elástica, mientras que un valor menor a
                uno indica una demanda inelástica.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Elasticidad Ingreso de la Demanda</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La elasticidad ingreso de la demanda mide cómo cambia la
                cantidad demandada de un bien en respuesta a cambios en el
                ingreso del consumidor. Un bien con elasticidad ingreso positiva
                es considerado normal, mientras que uno con elasticidad negativa
                es considerado inferior. Este concepto ayuda a entender cómo el
                ingreso afecta las decisiones de consumo.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Elasticidad Cruzada de la Demanda</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La elasticidad cruzada de la demanda mide la respuesta de la
                cantidad demandada de un bien ante cambios en el precio de otro
                bien. Esta elasticidad es útil para identificar si los bienes
                son sustitutos o complementarios. Un valor positivo indica que
                los bienes son sustitutos, mientras que un valor negativo indica
                que son complementarios.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Elasticidad Precio de la Oferta</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La elasticidad precio de la oferta mide la sensibilidad de la
                cantidad ofrecida de un bien a cambios en su precio. Al igual
                que la elasticidad de la demanda, se calcula como el cambio
                porcentual en la cantidad ofrecida dividido por el cambio
                porcentual en el precio. Esta medida es fundamental para
                entender cómo los productores responden a cambios en los precios
                del mercado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Función de Producción</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La función de producción describe la relación entre los insumos
                utilizados en la producción y la cantidad de producto
                resultante. Este concepto es esencial para entender cómo los
                recursos se transforman en bienes y servicios y permite a las
                empresas optimizar su producción. La función también puede
                ayudar a analizar la eficiencia y los costos de producción.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Preferencia del Consumidor</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La preferencia del consumidor se refiere a las elecciones y
                gustos que los consumidores tienen respecto a diferentes bienes
                y servicios. Estas preferencias influyen en las decisiones de
                compra y determinan cómo los consumidores distribuyen su ingreso
                entre diferentes opciones. Las preferencias son fundamentales
                para entender la demanda en el mercado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Utilidad</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La utilidad es una medida de satisfacción o placer que un
                consumidor obtiene al consumir un bien o servicio. Este concepto
                es central en la teoría del consumidor, ya que se supone que los
                consumidores buscan maximizar su utilidad a través de sus
                decisiones de compra. La utilidad puede ser cardinal o ordinal,
                y se utiliza para analizar el comportamiento de los
                consumidores.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Utilidad Marginal</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La utilidad marginal es el incremento en la utilidad que un
                consumidor obtiene al consumir una unidad adicional de un bien.
                Este concepto ayuda a entender cómo los consumidores toman
                decisiones de consumo, ya que generalmente buscan consumir hasta
                el punto donde la utilidad marginal es igual al costo del bien.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Ley de la Utilidad Marginal Decreciente</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La ley de la utilidad marginal decreciente establece que a
                medida que un consumidor consume más unidades de un bien, la
                utilidad que obtiene de cada unidad adicional tiende a
                disminuir. Esta ley es fundamental para explicar la forma de las
                curvas de demanda y el comportamiento de los consumidores.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Eficiencia del Mercado</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La eficiencia del mercado se refiere a la capacidad del mercado
                para asignar recursos de manera óptima, donde no es posible
                mejorar la situación de un individuo sin perjudicar a otro. Un
                mercado eficiente maximiza la suma de la utilidad del consumidor
                y la del productor, lo que lleva a la mejor utilización de los
                recursos disponibles.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Teorema de la Elección del Consumidor</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El teorema de la elección del consumidor establece que los
                consumidores eligen la combinación de bienes que maximiza su
                utilidad, dadas sus restricciones presupuestarias. Este teorema
                es la base para entender la teoría del consumidor y se puede
                ilustrar a través de curvas de indiferencia y restricciones
                presupuestarias.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Análisis de Equilibrio General</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El análisis de equilibrio general es un enfoque que estudia cómo
                interactúan múltiples mercados simultáneamente. A diferencia del
                análisis de equilibrio parcial, que se centra en un solo
                mercado, el equilibrio general considera las interacciones entre
                diferentes mercados y cómo estos afectan el bienestar general de
                la economía.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Maximización de la Utilidad</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La maximización de la utilidad es el proceso mediante el cual un
                consumidor selecciona la combinación de bienes y servicios que
                le proporciona la mayor satisfacción posible, dado su ingreso y
                los precios de los bienes. Este concepto es esencial para
                entender las decisiones de consumo en economía.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Bienes Normales</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Los bienes normales son aquellos cuya demanda aumenta cuando el
                ingreso del consumidor aumenta. Estos bienes son fundamentales
                para el análisis del comportamiento del consumidor, ya que
                representan la mayoría de las compras de los hogares a medida
                que su nivel de ingresos crece.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Bienes Inferiores</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Los bienes inferiores son aquellos cuya demanda disminuye a
                medida que aumenta el ingreso del consumidor. Esto puede suceder
                porque los consumidores optan por bienes de mayor calidad o
                preferidos cuando sus ingresos aumentan. Este concepto es clave
                para entender cómo cambian las preferencias de consumo con el
                ingreso.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Bienes Complementarios</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Los bienes complementarios son aquellos que se consumen juntos,
                de modo que la demanda de uno está relacionada con la demanda
                del otro. Un cambio en el precio de un bien complementario puede
                afectar la cantidad demandada del otro bien. Este concepto es
                vital para entender las relaciones entre diferentes productos en
                el mercado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Bienes Sustitutos</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Los bienes sustitutos son aquellos que pueden reemplazarse entre
                sí en el consumo. Un aumento en el precio de un bien puede
                llevar a un aumento en la demanda de su sustituto. Este concepto
                es esencial para entender la competencia entre productos en el
                mercado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Utilidad Total</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La utilidad total es la satisfacción total que un consumidor
                obtiene al consumir una cierta cantidad de un bien o servicio.
                Esta medida es útil para entender cómo la cantidad consumida de
                un bien afecta la satisfacción general del consumidor y se
                utiliza en el análisis del comportamiento del consumidor.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Costo de Oportunidad</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El costo de oportunidad es el valor de la mejor alternativa que
                se sacrifica al tomar una decisión. Este concepto es fundamental
                en economía, ya que resalta la importancia de considerar las
                opciones disponibles y los trade-offs en el proceso de toma de
                decisiones.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Escasez</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La escasez se refiere a la limitación de recursos disponibles en
                comparación con las necesidades y deseos ilimitados de los
                individuos. Este concepto es fundamental en economía, ya que
                impulsa la necesidad de tomar decisiones sobre cómo asignar
                recursos de manera eficiente.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Eficiencia Productiva</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La eficiencia productiva se refiere a la situación en la que una
                empresa produce la máxima cantidad de bienes y servicios con la
                menor cantidad de insumos posible. Este concepto es esencial
                para entender la productividad y la competitividad en el
                mercado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Eficiencia Asignativa</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La eficiencia asignativa ocurre cuando los recursos se
                distribuyen de manera que se maximiza el bienestar social. En
                esta situación, los precios reflejan los costos marginales de
                producción, lo que asegura que los recursos se utilicen donde
                son más valorados.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Economía de Mercado</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La economía de mercado es un sistema económico en el cual las
                decisiones sobre producción y consumo se basan en la oferta y la
                demanda. En este sistema, los precios actúan como señales para
                los consumidores y productores, guiando la asignación de
                recursos sin intervención gubernamental.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Monopolio</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Un monopolio es una estructura de mercado en la cual un solo
                vendedor controla la oferta de un bien o servicio, lo que le
                permite fijar precios y excluir a competidores. Esta situación
                puede resultar en precios más altos y menos opciones para los
                consumidores.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Oligopolio</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Un oligopolio es una estructura de mercado donde un pequeño
                número de empresas dominan la industria. Estas empresas son
                interdependientes, lo que significa que las decisiones de una
                afectan a las otras. Esta situación puede llevar a prácticas de
                colusión y precios más altos para los consumidores.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Competencia Perfecta</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La competencia perfecta es un modelo de mercado en el cual
                existen muchos compradores y vendedores, donde los productos son
                homogéneos y no hay barreras de entrada o salida. En este tipo
                de mercado, los precios son determinados por la oferta y la
                demanda, y las empresas no tienen poder de mercado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Competencia Monopolística</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La competencia monopolística es una estructura de mercado en la
                cual muchas empresas venden productos que son similares pero no
                idénticos. Las empresas tienen cierto control sobre el precio
                debido a la diferenciación del producto, pero aún enfrentan
                competencia de otros productos similares.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Costos Fijos</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Los costos fijos son aquellos que no cambian con el nivel de
                producción de una empresa. Estos costos deben ser cubiertos
                independientemente de la cantidad producida, como el alquiler y
                los salarios de los empleados. Comprender los costos fijos es
                crucial para el análisis de rentabilidad.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Costos Variables</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Los costos variables son aquellos que cambian directamente con
                el nivel de producción. Estos costos aumentan a medida que se
                produce más y disminuyen cuando la producción disminuye. Es
                importante para las empresas entender sus costos variables para
                gestionar la eficiencia de producción.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Punto de Equilibrio</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El punto de equilibrio es el nivel de producción en el cual los
                ingresos totales son iguales a los costos totales. En este
                punto, la empresa no obtiene ganancias ni pérdidas. Este
                concepto es esencial para la toma de decisiones sobre producción
                y precios.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Elasticidad Precio de la Demanda</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La elasticidad precio de la demanda mide cómo cambia la cantidad
                demandada de un bien en respuesta a cambios en su precio. Si la
                demanda es elástica, un pequeño cambio en el precio resulta en
                un gran cambio en la cantidad demandada. Este concepto es
                crucial para entender el comportamiento del consumidor y la
                fijación de precios.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Elasticidad Precio de la Oferta</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La elasticidad precio de la oferta mide la respuesta de la
                cantidad ofrecida de un bien a cambios en su precio. Si la
                oferta es elástica, un cambio en el precio resultará en un
                cambio proporcionalmente mayor en la cantidad ofrecida. Este
                concepto ayuda a los productores a entender cómo reaccionar a
                los cambios en el mercado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Ley de la Demanda</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La ley de la demanda establece que, manteniendo todo lo demás
                constante, a medida que el precio de un bien disminuye, la
                cantidad demandada del mismo aumenta, y viceversa. Este
                principio es fundamental para entender cómo los cambios en el
                precio afectan el comportamiento de los consumidores.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Ley de la Oferta</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La ley de la oferta establece que, manteniendo todo lo demás
                constante, a medida que el precio de un bien aumenta, la
                cantidad ofrecida de ese bien también aumenta, y viceversa. Este
                principio es clave para comprender la relación entre el precio y
                la cantidad ofrecida en el mercado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Desplazamiento de la Curva de Demanda</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El desplazamiento de la curva de demanda se refiere a un cambio
                en la cantidad demandada de un bien en respuesta a factores
                distintos del precio, como cambios en los ingresos o en las
                preferencias del consumidor. Un desplazamiento hacia la derecha
                indica un aumento en la demanda, mientras que un desplazamiento
                hacia la izquierda indica una disminución.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Desplazamiento de la Curva de Oferta</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El desplazamiento de la curva de oferta se refiere a un cambio
                en la cantidad ofrecida de un bien en respuesta a factores
                distintos del precio, como cambios en los costos de producción o
                en la tecnología. Un desplazamiento hacia la derecha indica un
                aumento en la oferta, mientras que un desplazamiento hacia la
                izquierda indica una disminución.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Intervención Gubernamental</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La intervención gubernamental se refiere a las acciones tomadas
                por el gobierno para influir en el funcionamiento del mercado.
                Esto puede incluir regulaciones, impuestos y subsidios, y su
                objetivo es corregir fallas del mercado o lograr objetivos
                sociales y económicos. Sin embargo, la intervención puede tener
                efectos no deseados y afectar la eficiencia del mercado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Política Fiscal</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La política fiscal se refiere a las decisiones del gobierno
                sobre el gasto y la recaudación de impuestos. Estas políticas
                pueden influir en la actividad económica, la distribución del
                ingreso y la estabilidad económica. Un uso efectivo de la
                política fiscal puede ayudar a promover el crecimiento y a
                suavizar las fluctuaciones económicas.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Política Monetaria</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La política monetaria se refiere a las decisiones del banco
                central sobre la oferta monetaria y las tasas de interés. A
                través de estas políticas, el banco central puede influir en la
                inflación, el empleo y el crecimiento económico. La política
                monetaria puede ser expansiva o contractiva, dependiendo de los
                objetivos económicos.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Inflación</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La inflación es el aumento generalizado y sostenido de los
                precios de bienes y servicios en una economía durante un período
                de tiempo. Este fenómeno puede reducir el poder adquisitivo del
                dinero y es un indicador clave de la salud económica. La
                inflación puede ser causada por un aumento en la demanda, un
                aumento en los costos de producción o políticas monetarias
                expansivas.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Deflación</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La deflación es la disminución generalizada de los precios de
                bienes y servicios en una economía. Este fenómeno puede ser
                problemático, ya que puede llevar a una disminución en la
                producción y el empleo. La deflación puede ser causada por una
                caída en la demanda, una sobreoferta de bienes o una contracción
                de la oferta monetaria.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Estanflación</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La estanflación es una situación económica caracterizada por la
                combinación de estancamiento económico, desempleo elevado e
                inflación. Este fenómeno es especialmente difícil de manejar
                para los formuladores de políticas, ya que las medidas para
                combatir la inflación pueden agravar el desempleo y viceversa.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Tasa de Interés</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La tasa de interés es el costo del dinero, expresado como un
                porcentaje del monto prestado. Las tasas de interés son
                fundamentales en la economía, ya que influyen en la inversión,
                el ahorro y el consumo. Un cambio en la tasa de interés puede
                tener efectos significativos en la actividad económica y en el
                comportamiento de los consumidores y las empresas.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Tasa de Desempleo</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La tasa de desempleo mide el porcentaje de la fuerza laboral que
                está desempleada y en busca de empleo. Esta medida es un
                indicador clave de la salud económica y puede influir en las
                políticas monetarias y fiscales. Un alto nivel de desempleo
                puede llevar a una disminución en el consumo y la inversión,
                afectando negativamente a la economía.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>PIB (Producto Interno Bruto)</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El PIB es el valor total de todos los bienes y servicios
                producidos en un país durante un período determinado. Este
                indicador es fundamental para medir la salud económica de una
                nación y su crecimiento. El PIB puede ser calculado a través del
                enfoque de producción, del gasto o de ingresos.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>PIB per cápita</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El PIB per cápita es el PIB dividido por la población total de
                un país, lo que proporciona una medida del ingreso promedio por
                persona. Este indicador es útil para comparar el nivel de vida
                entre diferentes países y evaluar el bienestar económico.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Balanza de Pagos</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                La balanza de pagos es un registro de todas las transacciones
                económicas entre un país y el resto del mundo durante un período
                determinado. Incluye la cuenta corriente, la cuenta de capital y
                la cuenta financiera. Este indicador es crucial para evaluar la
                salud económica de un país y su posición en la economía global.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Comercio Internacional</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                El comercio internacional se refiere al intercambio de bienes y
                servicios entre países. Este fenómeno es crucial para el
                crecimiento económico, ya que permite a los países
                especializarse en la producción de ciertos bienes y servicios.
                Sin embargo, también puede generar tensiones comerciales y
                desigualdades económicas entre naciones.
              </AccordionPanel>
            </AccordionItem>
          </AccordionGroup>
        </div>
      </div>
    </div>
  );
};

export default SecondDictionary;
