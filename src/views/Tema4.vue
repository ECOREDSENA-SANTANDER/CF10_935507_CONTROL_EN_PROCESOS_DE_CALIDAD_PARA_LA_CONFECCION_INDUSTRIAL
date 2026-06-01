<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Norma ISO 19011

    .bloque-texto-g.color-acento-botones.br-tr.p-3.p-sm-4.p-md-5.mb-4(data-aos='fade')
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t4/1.png')})`}")
      .bloque-texto-g__texto.p-4.py-lg-5
        p.mb-0 Las actividades de auditoría se iniciaron en los años 60 pero fue en la década de 1970 que se crearon las normas de la auditoría de los Sistema de Gestión. La ISO publicó la norma Directrices para la Auditoría de los Sistemas de Gestión ISO 19011:2018.

    p Esta norma en particular orienta los principios de las auditorías para todos los tipos y tamaños de empresas, concentrándose en las auditorías de primera parte o internas y las auditorías realizadas por las organizaciones a sus proveedores externos y a otras partes interesadas externas o auditorías de segunda parte. Así mismo orienta a las auditorías externas realizadas con fines diferentes a los de la obtención de la certificación en sistemas de gestión (de tercera parte).


    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1. Hallazgos de las auditorías

    p.mb-4 Según la norma ISO 9001 los hallazgos son “resultados de la evaluación de la evidencia de la auditoría recopilada frente a los criterios de auditoría”, por lo tanto, se puede concluir que los hallazgos son los registros, eventos, documentos que se presentan o aparecen en una auditoría y con las cuales se puede evaluar si cumple o no cumple con los requisitos de calidad.

    h5 Los hallazgos se clasifican en:

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-primario" data-aos='fade')
      .row.justify-content-center(titulo="No Conformidad")
        .col-11
          p.mb-4 Según la norma ISO 9001 es un incumplimiento de un requisito de la norma, legal o de cualquier requisito especificado en los procedimientos del sistema de gestión de la calidad referente a los productos o servicios que suministra la organización. Por lo tanto, una falla o un error en la empresa por el inadecuado desarrollo de los procesos se considera como no conformidad.
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-4
              h5 Ejemplos:
              img.d-none.d-lg-block(src='@/assets/curso/temas/t4/acord1-1-1.svg', alt='')
            .col-lg-8              
              ul.lista-ul.fa-lista.list-ico.mb-0
                li
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 No se evidencia de forma precisa en el mapa de procesos las entradas y salidas esperadas.
                li
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 En el control de inventarios de materia prima no coincide los registros de la tela referencia 01, el elástico referencia 101 y el hilo referencia c1321, de la información en el software con el inventario en físico.
                li
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 No se evidencia en la revisión de perfiles y fichas del personal de corte la formación recibida en el proceso de trazo y corte.
                li.mb-0
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 La empresa no evidencia pruebas de laboratorio de textiles que demuestren la estabilidad dimensional conforme lo descrito en fichas técnicas de los productos y solicitud del cliente.
          p Una vez se presenta la no conformidad se debe proceder de la siguiente manera:
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t4/acord1-1-2.svg', alt='')
            .col-lg-8             
              ol.lista-ol--cuadro.fa-lista
                li
                  .lista-ol--cuadro__vineta
                    span.text-dark.fw-bold 1
                  span.mb-0 Describir la no conformidad: se especifica de manera clara e identificable el hallazgo.
                li
                  .lista-ol--cuadro__vineta
                    span.text-dark.fw-bold 2
                  span.mb-0 Corrección inmediata: realizar la acción necesaria para corregir o revertirlo.
                li.mb-0
                  .lista-ol--cuadro__vineta
                    span.text-dark.fw-bold 3
                  span.mb-0 Analizar la causa: una de las metodologías más conocidas para encontrar las causas, es la de los 5 porqués; la cual consiste en preguntar de manera insistente con el cuestionamiento de por qué, una vez se tiene la respuesta preguntar nuevamente hasta definir la causa raíz.
          .mb-4
            .titulo-sexto.color-secundario.mb-3
              h5 Tabla 2.
              span Análisis de causa raíz de no conformidades en prendas mediante la técnica de los cinco porqués.
            .tabla-a.color-acento-contenido
              table
                thead
                  tr.bg7
                    th.text-white No conformidad para estudiar
                    th.text-white Existe gran número de devoluciones en la referencia XX.
                tbody.bg-white
                  tr
                    td 1. ¿Por qué se produjeron las no conformidades en las prendas?
                    td 
                      ul.lista-ul.l-circle.fa-lista.mb-0
                        li.mb-1
                          i.fas.fa-circle
                          span.mb-0 La máquina de la operación de pechera no estaba funcionando bien.
                        li.mb-0
                          i.fas.fa-circle
                          span.mb-0 Es necesario comprar una máquina.
                  tr
                    td 2. ¿Por qué no funciona la máquina?
                    td 
                      ul.lista-ul.l-circle.fa-lista.mb-0
                        li.mb-1
                          i.fas.fa-circle
                          span.mb-0 Se sobrecarga de trabajo y empieza a coser de manera deficiente.
                        li.mb-0
                          i.fas.fa-circle
                          span.mb-0 Bajaremos las unidades para colocar en la máquina.
                  tr
                    td 3. ¿Por qué se va a bajar el nivel de carga?
                    td 
                      ul.lista-ul.l-circle.fa-lista.mb-0
                        li.mb-1
                          i.fas.fa-circle
                          span.mb-0 No es suficiente con nivelar la carga. 
                        li.mb-0
                          i.fas.fa-circle
                          span.mb-0 Se debe cambiar el brazo que recoge las piezas.
                  tr
                    td 4. ¿Por qué se va a cambiar el brazo?
                    td 
                      ul.lista-ul.l-circle.fa-lista.mb-0
                        li.mb-0
                          i.fas.fa-circle
                          span.mb-0 El brazo funciona bien, pero parece que no está lubricado, se debe realizar lubricación del sistema del brazo.
                  tr
                    td 5. ¿Por qué se va a lubricar el brazo?
                    td 
                      ul.lista-ul.l-circle.fa-lista.mb-0 
                        li.mb-0
                          i.fas.fa-circle
                          span.mb-0 El brazo funciona, es un eje el que no se mueve, se encuentra desgastado.
                  tr
                    td Resultado de análisis causa raíz
                    td Se está desgastando fácilmente porque falta un filtro. Se debe instalar un filtro para evitar el desgaste.
          .row.justify-content-center.align-items-center
            .col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t4/acord1-1-3.svg', alt='')
            .col-lg-8             
              ol.lista-ol--cuadro.fa-lista
                li
                  .lista-ol--cuadro__vineta
                    span.text-dark.fw-bold 4
                  span.mb-0 Acción correctiva: una vez se define la causa raíz se establecen las acciones correctivas para eliminar la ocurrencia de la no conformidad.
                li
                  .lista-ol--cuadro__vineta
                    span.text-dark.fw-bold 5
                  span.mb-0 Eficacia de la acción: verificar que la no conformidad no se presenta de nuevo, en el caso que se vuelva a presentar se debe analizar pues lo más posible es que no se encontró la verdadera causa raíz.
      .row.justify-content-center(titulo="Observación")
        .col-11
          p.mb-4 Existe un cumplimiento, pero en un futuro puede convertirse en un incumplimiento. Representa un riesgo por lo cual es importante la especial atención para analizar y tomar las acciones correctivas.
          .row.justify-content-center.align-items-center
            .col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t4/acord1-2.svg', alt='')
            .col-lg-8
              h5.mb-4 Ejemplos:
              ul.lista-ul.fa-lista.list-ico.mb-0
                li.mb-lg-3
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 Aunque se llevan registros de las evaluaciones de las formaciones no existe claridad sobre los resultados de esta.
                li.mb-lg-3
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 No se puede comprobar la vigencia del contrato con uno de los asesores contables.
                li.mb-lg-3
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 Se observa que se lleva un registro exigido por el cliente en el contrato, pero no se encuentra descrito en el procedimiento.
      .row.justify-content-center(titulo="Oportunidad de mejora")
        .col-11
          p.mb-4 Existe un incumplimiento, pero tiene un margen para que pueda optimizar el hallazgo encontrado. Se deben igual analizar, pero teniendo en cuenta el costo beneficio de la empresa, el cual en varios casos puede diferenciarse del criterio del auditor.
          .row.justify-content-center.align-items-center
            .col-lg-4.d-none.d-lg-block
              img.px-lg-3(src='@/assets/curso/temas/t4/acord1-3.svg', alt='')
            .col-lg-8
              h5.mb-4 Ejemplos:
              ul.lista-ul.fa-lista.list-ico.mb-0
                li.mb-lg-3
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 Se puede mejorar la comunicación si se expresa quienes tienen la autoridad en las diferentes actividades.
                li.mb-lg-3
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 Sería recomendable adquirir un paquete de software especializado para el análisis de datos de las inspecciones.
                li.mb-lg-3
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 La empresa podría considerar la entrega de diplomas al personal que desarrolló el curso realizado.


    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2. Inspección vs auditoría

    p La diferencia entre la auditoría e inspección puede ser difusa, pero se debe entender que se centra en que el análisis de la auditoría es en el sistema, observa sus puntos débiles y fuertes de calidad; en la inspección, el análisis se realiza de manera puntual en un momento determinado. Ambas se requieren, ya que tienen varios aspectos en común y a su vez se complementan. No se deben realizar de manera simultánea y la persona puede ser la misma realizando ambos roles, pero se debe tener claro en el caso del inspector es un rol de supervisión del proceso, en el caso del auditor es un rol de consultor.
    p En la siguiente tabla se observan las diferencias entre ambas:

    .row.justify-content-center.mb-5(data-aos='fade-down')
      .col-lg-12
        .titulo-sexto.color-secundario
          h5 Tabla 3.
          span Comparación entre Inspección y Auditoría en los Sistemas de Gestión
      .col-lg-10
        .tabla-a.color-acento-contenido
          table
            thead
              tr.bg7
                th.text-white Inspección
                th.text-white Auditoría
            tbody
              tr
                td No requiere informar de manera previa.
                td Requiere informar de manera previa.
              tr
                td No siempre es planeada.
                td Debe ser siempre planeada.
              tr
                td Se puede o no documentar.
                td Debe documentarse.
              tr
                td Procura verificar errores o fallas.
                td Procura verificar hechos sean negativos o positivos.
              tr
                td Enfocada en realizar acciones.
                td Supervisa acciones.
              tr
                td Preguntas cerradas.
                td Preguntas abiertas.
              tr
                td Centrada en aspectos menos importantes de la gestión.
                td Centrada en aspectos más importantes de la gestión.

    p Una vez se reconoce la importancia de la auditoría como parte de la gestión de calidad de una empresa, la realización de auditorías debe generar los siguientes resultados:

    .tarjeta.bg4.p-4.p-xl-0(data-aos='fade')
      .row.justify-content-center.align-items-center
        .col-lg-4.col-md-4.col-7.px-lg-5
          img.px-lg-5(src='@/assets/curso/temas/t4/2.svg', alt='')
        .col-lg-8
          ul.lista-ul.fa-lista.list-ico.mb-0
            li.mb-lg-3
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Gestión de calidad por procesos.
            li.mb-lg-3
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Determinar puntos críticos y puntos fuertes dentro del sistema.
            li.mb-0
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Generar acciones de mejora y realizar el seguimiento con el fin de evaluar el avance y con ellos los indicadores de la empresa.



</template>

<script>
export default {
  name: 'Tema4',
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
