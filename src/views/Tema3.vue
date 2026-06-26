<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Premios de calidad 

    .bloque-texto-g.color-secundario.br-tr.p-3.p-sm-4.p-md-5.mb-4(data-aos='fade')
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/1.png')})`}")
      .bloque-texto-g__texto.p-4.py-lg-5
        p.mb-0 Existen premios con el fin de reconocer el liderazgo de la calidad tanto a nivel internacional como a nivel nacional, a los ganadores se les entrega una medalla como símbolo del premio. Estos premios generan competitividad conforme la exigencia del mundo globalizado de más altos estándares de calidad buscando aumentar siempre el nivel hacia la excelencia.

    h5.mb-4 Los premios internacionales son:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9(data-aos="fade-right")
        ol.lista-ol--cuadro.lista-ol--separador.fa-lista
          li
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 1
            span.mb-0 #[b Premio Malcolm Baldrige:] su nombre es por el secretario de comercio de EE.UU. de 1981, quien creía la calidad como factor clave de la prosperidad; el premio se creó a partir de 1987. El premio es otorgado a empresas de diversos sectores.
          li
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 2
            span.mb-0 #[b Premio canadiense a la excelencia.]
          li
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 3
            span.mb-0 #[b Premio iberoamericano de la calidad.]
          li
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 4
            span.mb-0 #[b Premio colombiano a la calidad para la exportación:] creado desde 1975 como estímulo a la empresa con avance tecnológico, a partir de 2019, estimula a las empresas que demuestren altos estándares de calidad como estrategia para la exportación de sus productos y servicios. Dirigido a pymes de los diferentes sectores productivos del país.
          li
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 5
            span.mb-0 #[b Premio europeo de la calidad:] creado desde 1991, los organizadores son EOQ, (Organización Europea para la Calidad), EFQM (Fundación Europea de la Calidad) y la comisión europea, herramienta para evaluar y mejorar la calidad total.
          li
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 6
            span.mb-0 #[b Premio Deming a la calidad:] en honor a Edward Deming, otorgado por la unión japonesa de ingenieros y científicos JUSE, a empresas tanto de origen japones como de otras partes del mundo; que demuestren el mejoramiento de la calidad.
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/2.png', alt='')

    p.mb-4 Como todos los premios tienen criterios relacionados con el control total de calidad además de varias categorías de entrega. Los criterios a evaluar se presentan en el siguiente cuadro y se debe tener en cuenta que cualquier empresa que cumpla con los requisitos establecidos para la participación puede obtener uno de estos premios.

    .tarjeta.bg8.p-4.px-lg-5(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido
        h5 Figura 5. 
        span Factores clave para la gestión y aseguramiento de la calidad organizacional.
      figure
        img(src='@/assets/curso/temas/t3/fig5.svg', alt='Infografía con nueve factores relacionados con la gestión de calidad organizacional, presentados en bloques verdes con iconos azules. Los factores son: políticas organizacionales orientadas a la calidad, organización empresarial y relacionamiento con otras empresas, sistemas de información, estandarización, desarrollo de recurso humano en pro de la calidad, gestión de aseguramiento de la calidad, mantenimiento y control de procesos, resultados y planes a mediano y largo plazo.')



</template>

<script>
export default {
  name: 'Tema3',
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
