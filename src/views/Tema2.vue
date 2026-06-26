<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tipos de auditorías

    p Las auditorías como recurso para la gestión de la calidad pueden ser:
    

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1. Auditoría intermedia

    .bloque-texto-g.bg1.br-tr.p-3.p-sm-4.p-md-5(data-aos='fade')
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/1.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Es la programada en medio de las auditorías internas o externas, al término de una fase o parte de la auditoría total, antes que finalice, con el fin de poder evaluar esa parte para que la empresa pueda realizar los cambios necesarios antes que termine la auditoría. #[br] #[br]
        p.mb-0 Es importante la confidencialidad y buena comunicación del auditor con la empresa auditada, con el fin de lograr mejorar los resultados. #[br] #[br]
        p.mb-0 En procesos de certificación, se programan auditorías intermedias para mejorar los resultados, las cuales son realizadas por el consultor o auditor externo contratado por la empresa auditada.


    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2. Auditoría final

    .tarjeta.bg9.p-4(data-aos='fade')
      .row.justify-content-center.align-items-center
        .col-lg-1.col-md-2.col-4.mb-3.mb-md-0
          img(src='@/assets/curso/temas/t2/2.svg', alt='')
        .col-lg-8.col-md-10
          p.mb-0 Es la última auditoría en el proceso de certificación ISO 9001, cuyos resultados son definitivos para otorgar la certificación a la empresa auditada. En ella debe constatar que se tuvo en cuenta los hallazgos encontrados, se realizaron las acciones correctivas para mejorar el sistema.


    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3. Auditoría interna
      
    .row.justify-content-center.align-items-center.mb-4      
      .col-lg-7.mb-3.mb-lg-0(data-aos="fade-right")
        .row.mb-3
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/3.svg', alt='')           
        .tarjeta.bg1.p-4
          p.mb-0 Conocidas por desarrollarse en primera fase en un sistema de gestión, se conocen también como auditorías de primera parte, corresponde a un auto evaluación de la empresa con el fin de comprobar la conformidad respecto a una norma o las especificaciones establecidas por la empresa. La dirección responsabiliza a personas de la empresa que puedan realizar la revisión de los productos, procesos y procedimientos, evaluando la calidad mediante las diferentes técnicas de calidad.  
      .col-lg-5.col-md-8(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/4.png', alt='') 

    p.mb-4 El auditor valora la efectividad de los controles de calidad, pues debido en gran medida al distanciamiento entre la dirección y el área de producción se puede desconocer el cumplimiento de los planes de calidad, puede ser a causa del tamaño de la empresa, el uso de tecnología, la comunicación o la localización entre las plantas de producción y el área administrativa.

    .row.justify-content-center.mb-4
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/5.png', alt='') 
      .col-lg-9(data-aos="fade-left")
        .bg8.p-4.px-lg-5.h-100.d-flex.flex-column.justify-content-center
          h4.mb-4 Toda auditoría debe establecer:
          ul.lista-ul.fa-lista.list-ico.mb-0
            li.mb-lg-4
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 #[b Objetivos y alcance:] se establece que se va a auditar, los planes, programas, que pueda realizar las recomendaciones y los límites de la auditoría.
            li.mb-lg-4
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 #[b Funciones y responsabilidades:] precisar las actividades sin eliminar responsabilidades a miembros de la parte operativa. Mantener la coordinación de las actividades y realizarlas con ética.
            li.mb-lg-4
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 #[b Cronograma de auditoría:] se determinan de acuerdo con un programa de auditorías por lo tanto se conoce la fecha a realizar de manera previa, la frecuencia es conocida por el personal, y si existe la necesidad de ajuste de fechas puede ser modificado con previo acuerdo entre el equipo de calidad y la dirección de la empresa.
            li.mb-lg-0
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 #[b Orden de la auditoría:] Se tiene en cuenta el sistema y los requisitos a auditar, además se puede realizar una evaluación en detalle del proceso o producto a auditar.

    p.mb-4 En la siguiente imagen se presentan las partes a auditar, las cuales se explicitan a continuación.

    .tarjeta.bg8.p-4.px-lg-5.mb-5(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido
        h5 Figura 3.
        span Tipos de auditorías en los procesos de calidad 
      figure.p-lg-5
        img(src='@/assets/curso/temas/t2/fig3.svg', alt='Infografía horizontal en forma de flechas conectadas que representa cuatro tipos de auditorías en los procesos de calidad. Cada sección tiene un color e ícono diferente: auditoría de planes de calidad en color verde con un documento y lupa; auditoría de procesos en azul con una lista de verificación; auditorías de proveedores en amarillo con una carpeta y lupa; y auditorías de producto en gris oscuro con un documento inspeccionado. El diseño tiene fondo gris claro y estilo moderno.')

    .row.bgimg-1.align-items-center.p-3.p-md-4.p-lg-5.mb-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-lg-12
              .bgimg-2.p-4
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center
                    .col-11.col-lg-6.mb-4.mb-md-0
                      p En los #[b planes de calidad] se auditan los problemas relacionados y se asigna prioridad. En la auditoría de procesos se compara lo descrito en planes de calidad y su implementación en la realidad de la empresa.
                      p Los pasos para realizar la auditoría son los siguientes:
                      ul.lista-ul.fa-lista.list-ico
                        li
                          img(src='@/assets/curso/temas/t1/ico-list.svg')
                          span.mb-0 Dividir el sistema en las actividades a evaluar.
                        li
                          img(src='@/assets/curso/temas/t1/ico-list.svg')
                          span.mb-0 Asignar en cada actividad los criterios a evaluar.
                        li
                          img(src='@/assets/curso/temas/t1/ico-list.svg')
                          span.mb-0 Asignar un porcentaje de valoración de cada criterio a evaluar.
                        li
                          img(src='@/assets/curso/temas/t1/ico-list.svg')
                          span.mb-0 Evaluar cada criterio y asignar el puntaje.
                        li
                          img(src='@/assets/curso/temas/t1/ico-list.svg')
                          span.mb-0 Determinar según el porcentaje el grado de cumplimiento.
                        li
                          img(src='@/assets/curso/temas/t1/ico-list.svg')
                          span.mb-0 Realizar el informe.
                    .col-11.col-lg-5.col-md-8
                      img(src='@/assets/curso/temas/t2/slider1-1.png', alt='')
                  .row.justify-content-center.align-items-center
                    .col-11.col-lg-6.mb-4.mb-md-0
                      p En la #[b auditoría de procesos] se compara que lo descrito en los planes de calidad se implementó en la realidad, comprende los siguientes aspectos:
                      p Los pasos para realizar la auditoría son los siguientes:
                      .row.justify-content-center.mb-3
                        .col-lg-6
                          ul.lista-ul.fa-lista.list-ico.mb-0
                            li
                              img(src='@/assets/curso/temas/t1/ico-list.svg')
                              span.mb-0 Materiales: selección, identificación y monitoreo de los materiales.
                            li
                              img(src='@/assets/curso/temas/t1/ico-list.svg')
                              span.mb-0 Cambios de los procesos.
                            li
                              img(src='@/assets/curso/temas/t1/ico-list.svg')
                              span.mb-0 Especificaciones de los procesos.
                            li
                              img(src='@/assets/curso/temas/t1/ico-list.svg')
                              span.mb-0 Desarrollo de cada producto.
                            li
                              img(src='@/assets/curso/temas/t1/ico-list.svg')
                              span.mb-0 Trazabilidad.
                        .col-lg-6
                          ul.lista-ul.fa-lista.list-ico.mb-0
                            li
                              img(src='@/assets/curso/temas/t1/ico-list.svg')
                              span.mb-0 Material no conforme.
                            li
                              img(src='@/assets/curso/temas/t1/ico-list.svg')
                              span.mb-0 Condiciones de trabajo: iluminación, ventilación seguridad, orden y aseo.
                            li
                              img(src='@/assets/curso/temas/t1/ico-list.svg')
                              span.mb-0 Instrumentos de medición.
                            li
                              img(src='@/assets/curso/temas/t1/ico-list.svg')
                              span.mb-0 Puesta a punto de máquinas.
                      p En el análisis de los procesos debe tener en cuenta los fallos del proceso, la capacidad del proceso y las quejas y reclamos de los clientes.
                    .col-11.col-lg-5.col-md-8
                      img(src='@/assets/curso/temas/t2/slider1-2.png', alt='')
                  .row.justify-content-center.align-items-center
                    .col-11.col-lg-6.mb-4.mb-md-0
                      p En el #[b análisis de los proveedores] se deben tener en cuenta los costos asociados a las distancias, la comunicación, los acuerdos establecidos y la disposición del proveedor frente al proceso de auditoría. Por ello, es necesario acordar previamente los aspectos que serán revisados, con el fin de verificar el cumplimiento de los requisitos de calidad, entrega y trazabilidad. Criterios de selección y evaluación del proveedor.
                      ul.lista-ul.fa-lista.list-ico.mb-0
                        li
                          img(src='@/assets/curso/temas/t1/ico-list.svg')
                          span.mb-0 Cumplimiento de requisitos técnicos y de calidad acordados.
                        li
                          img(src='@/assets/curso/temas/t1/ico-list.svg')
                          span.mb-0 Tiempos de entrega y capacidad de respuesta.
                        li
                          img(src='@/assets/curso/temas/t1/ico-list.svg')
                          span.mb-0 Trazabilidad de materias primas, insumos o servicios suministrados.
                        li
                          img(src='@/assets/curso/temas/t1/ico-list.svg')
                          span.mb-0 Manejo de no conformidades y acciones correctivas.
                        li
                          img(src='@/assets/curso/temas/t1/ico-list.svg')
                          span.mb-0 Condiciones de almacenamiento, transporte y entrega.
                        li
                          img(src='@/assets/curso/temas/t1/ico-list.svg')
                          span.mb-0 Comunicación y cumplimiento de acuerdos comerciales.
                        li
                          img(src='@/assets/curso/temas/t1/ico-list.svg')
                          span.mb-0 Evidencias documentales, certificaciones o registros de calidad.        
                    .col-11.col-lg-5.col-md-8
                      img(src='@/assets/curso/temas/t2/slider1-3.png', alt='')
                    .col-11
                      p En el análisis de los proveedores se deben considerar la calidad de los materiales o servicios suministrados, el cumplimiento de los acuerdos, la oportunidad en las entregas, la trazabilidad y la respuesta frente a quejas, reclamos o no conformidades.
                  .row.justify-content-center.align-items-center
                    .col-11.col-lg-6.mb-4.mb-md-0
                      p La #[b auditoría del producto] es la evaluación una vez se realizó la inspección, en donde se valore la calidad y la proyección en auditorías futuras. Una auditoría se puede realizar al ser recibido por el cliente, pero genera altos costos y se dificulta por políticas comerciales y la distancia con el cliente.
                      p En la auditoría se compara de acuerdo con una norma y los procedimientos de la empresa en los que se puede:
                      ul.lista-ul.fa-lista.list-ico.mb-0
                        li
                          img(src='@/assets/curso/temas/t1/ico-list.svg')
                          span.mb-0 Establecer comunicación abierta entre los auditores y los miembros del equipo de producción.
                        li
                          img(src='@/assets/curso/temas/t1/ico-list.svg')
                          span.mb-0 Se relacionan los aspectos de producción y comerciales con el fin de acordar los requisitos a enfocar los esfuerzos para mejorar.
                        li
                          img(src='@/assets/curso/temas/t1/ico-list.svg')
                          span.mb-0 Aplicación de las normas de calidad.
                        li
                          img(src='@/assets/curso/temas/t1/ico-list.svg')
                          span.mb-0 Direccionar los planes de calidad.
                    .col-11.col-lg-5.col-md-8
                      img(src='@/assets/curso/temas/t2/slider1-4.png', alt='')
                  .row.justify-content-center
                    .col-11.mb-4.mb-md-0
                      p La metodología en la auditoría de los procesos y los productos se realiza conforme la valoración de indicadores por atributos o por variables teniendo en cuenta lo realizado en:
                      .row.justify-content-center.align-items-center
                        .col-lg-7
                          .tarjeta.bg8.p-4.mb-3.mb-lg-0
                            ul.lista-ul.fa-lista.list-ico.mb-0
                              li
                                img(src='@/assets/curso/temas/t1/ico-list.svg')
                                span.mb-0 Los procesos, teniendo en cuenta la ingeniería de calidad: conceptualización del orden de los procesos y la especificación de los puntos críticos del proceso productivo y puntos de inspección y los resultados de la inspección. Además realizar gráficos de calidad e incluir en los análisis acciones de corrección ejecutadas, y su influencia en la mejora de la calidad.
                              li.mb-0
                                img(src='@/assets/curso/temas/t1/ico-list.svg')
                                span.mb-0 Los productos terminados, en los cuales se debe considerar el método de inspección, punto inspección producto terminado, criterios de aceptación y rechazo. La clasificación de los defectos y las tablas de recolección de datos. Por último los informes de calidad.
                        .col-lg-5
                          p Así mismo y con el fin de documentar el proceso de auditoría se definen los documentos utilizados en la auditoría, como los formatos, procedimiento de la auditoría, instructivos para el desarrollo de las actividades de la auditoría y listas de chequeo.
                          p Con base en los procedimientos se crean las preguntas de los requisitos, teniendo en cuenta el mapa de preguntas se redactan las preguntas específicas y se realiza la lista de verificación. Es importante relacionar el requisito de la norma.
                  .row.justify-content-center.align-items-center
                    .col-11.col-lg-6.mb-4.mb-md-0
                      p Se redactan las preguntas según las siguientes pautas:
                      ul.lista-ul.fa-lista.list-ico.ps-lg-3
                        li
                          img(src='@/assets/curso/temas/t1/ico-list.svg')
                          span.mb-0 Usar siempre signos de interrogación.
                        li
                          img(src='@/assets/curso/temas/t1/ico-list.svg')
                          span.mb-0 Usar términos cotidianos, léxico entendible.
                        li
                          img(src='@/assets/curso/temas/t1/ico-list.svg')
                          span.mb-0 La respuesta exige una evidencia o comprobación.
                        li
                          img(src='@/assets/curso/temas/t1/ico-list.svg')
                          span.mb-0 Orientada en establecer la conformidad del cumplimiento.
                        li
                          img(src='@/assets/curso/temas/t1/ico-list.svg')
                          span.mb-0 Expresión amable.
                        li
                          img(src='@/assets/curso/temas/t1/ico-list.svg')
                          span.mb-0 Exige respuesta objetiva.
                        li
                          img(src='@/assets/curso/temas/t1/ico-list.svg')
                          span.mb-0 Adheridas a la norma.
                    .col-11.col-lg-5.col-md-6
                      img(src='@/assets/curso/temas/t2/slider1-5.png', alt='')



    p.mb-4 En la siguiente figura del diagrama de tortuga se presentan las preguntas básicas para así desarrollar las preguntas específicas que se necesitan para construir la lista de verificación.

    .mb-5(data-aos='fade-down')
      .tarjeta.bg8.p-4.px-lg-5.mb-2
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span Enfoque basado en procesos y orientación al cliente
        .row.justify-content-center
          .col-lg-8
            figure.py-lg-5
              img(src='@/assets/curso/temas/t2/fig4.svg', alt='Diagrama tortuga utilizado para representar la gestión de procesos orientada al cliente. En el centro se encuentra la palabra “Procesos”, rodeada por cuatro áreas principales: entradas, salidas, requisitos del cliente y recursos necesarios. El lado izquierdo pregunta “¿Qué necesita el cliente?” y el derecho “¿Qué le entregamos al cliente?”. En la parte inferior se muestran los apartados “¿Cómo medir?” con indicadores de desempeño y “¿Cómo?” con métodos, procedimientos e instrucciones. El diseño incluye flechas, formas circulares y colores azul, verde, gris y beige sobre fondo gris claro.')
      figcaption Fuente. (Jiménez, 2020)

    .tarjeta.bg5.p-4.p-lg-5(data-aos='fade')
      .row.justify-content-around.align-items-center
        .col-lg-4.col-md-6.col-8.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t2/6.svg', alt='')
        .col-lg-6
          .titulo-segundo.color-secundario.mb-4
            h2 Documentos
          p Para complementar el estudio del tema se presentan los ejemplos para la documentación de la auditoría interna en el material complementario
          .tarjeta.color-primario.p-3.mb-2
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-2
                img.px-lg-2(src="@/assets/curso/temas/t1/cta.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-0 Lista de verificación de auditoría interna
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/Lista_de_verificacion_auditoria_interna.xlsx')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download
          .tarjeta.color-primario.p-3.mb-2
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-2
                img.px-lg-2(src="@/assets/curso/temas/t1/cta.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-0  Plan de auditoría
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/Plan_de_auditoria.xlsx')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-2
                img.px-lg-2(src="@/assets/curso/temas/t1/cta.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-0 Informe de auditoría
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/Informe_de_auditoria.xlsx')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download

    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4. Auditoría externa

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-md-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/7.png', alt='') 
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/8.svg', alt='') 
          .col-lg-10
            p.mb-0 Las auditorías externas son las realizadas en segunda y tercera parte en la aplicación de un sistema de gestión de calidad.
        .tarjeta.bg11.p-4
          p.mb-0 Las de segunda parte son las realizadas por las partes que tienen interés en mayor medida comerciales como es el caso de los clientes o proveedores. Así mismo, las de tercera parte son realizadas por organizaciones independientes que pueden acreditar en una norma como es el caso de la ISO 9001:2015.

    p En la auditoría externa también se realiza un cronograma de auditoría el cual es acordado entre el auditor y la empresa auditada, es importante que la dirección no permita el liderazgo en el establecimiento de las fechas por parte del auditor. Los tiempos de duración dependen de la complejidad de los procesos y el tamaño de la empresa, y es necesario prever tiempos límites sean mínimos y máximos para atender si se presenta alguna novedad y retrasos.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
