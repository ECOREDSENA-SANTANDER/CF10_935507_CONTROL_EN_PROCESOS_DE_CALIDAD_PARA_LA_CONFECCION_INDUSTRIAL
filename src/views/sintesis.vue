<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-4 El control en procesos de calidad para la confección industrial permite garantizar que los productos cumplan con los estándares establecidos mediante auditorías, inspecciones y normas de calidad. Además, promueve la mejora continua, la detección de no conformidades y la aplicación de acciones correctivas para optimizar los procesos de producción y aumentar la competitividad de las empresas.
    
    .row.justify-content-center
      .col-lg-10.mb-5.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Esquema en la parte superior aparece el título principal “Control en procesos de calidad para la confección industrial”. Desde este se desprenden cuatro categorías: “Procedimiento de auditoría”, con los temas características, procedimiento y plan anual; “Tipos de auditorías”, con auditoría intermedia, final, interna y externa; “Premios de calidad”; y “Norma ISO 19011”, que incluye inspección vs auditoría y hallazgos de las auditorías. El diagrama utiliza líneas de conexión y bloques de colores azul, verde, gris y naranja sobre fondo claro.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis



</template>

<script>
export default {
  name: 'Sintesis',
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
