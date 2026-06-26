<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-md-8.mb-3.mb-lg-0
        img(src='@/assets/curso/temas/intro/1.png', alt='') 
      .col-lg-7
        .row.justify-content-center.mb-4
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/intro/2.svg', alt='') 
          .col-lg-10
            p.mb-0 Los antecedentes de la historia presentan el oficio de las personas que comprobaban, lo que realizaban las otras personas, con el tiempo las diferentes agremiaciones de los oficios eran quienes establecían una serie de reglas para normalizar los materiales y los productos. Una vez se inició la producción en serie, se requirió especialización del trabajo y con ello la inspección del producto terminado.
        .tarjeta.bg1.p-4
          p.mb-0 Conforme al avance de la tecnología y la gestión de los procesos, los cambios en las necesidades y expectativas del cliente, se desarrollaron las normas, por tanto, se requiere la documentación y personal especialista en resolver los problemas de calidad; lo cual prontamente no fue suficiente para los cambios y la mejora de calidad exigida en las certificaciones de las normas que se crearon a nivel internacional.
    
    p Teniendo en cuenta lo anterior, la nueva visión de empresa valora la dimensión humana recurso fundamental de la empresa, con los cuales se debe articular nuevas maneras de comunicación, motivación y colaboración, dotando al personal de recursos tecnológicos y materiales, además de capacitación en donde actualicen o desarrollen más habilidades, se formen líderes para la gestión de la calidad, teniendo como resultado, personal más comprometido con la excelencia, con más capacidad de trabajo en equipo con otros, el caso de otros auditores; para desarrollar planes y programas los cuales logren establecer un sistema de calidad que garantice la mejora continua de la organización.



</template>

<script>
export default {
  name: 'Introduccion',
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
