<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Procedimiento de auditorías',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los aprendices sobre el procedimiento de auditoría, sus características, planificación, manual de auditoría, perfil del auditor, tipos de auditorías, premios de calidad, norma ISO 19011, hallazgos, no conformidades y diferencias entre inspección y auditoría en el control de calidad en confección industrial.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué es una auditoría dentro del procedimiento de calidad descrito en el componente?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una operación de confección que se realiza únicamente al final de la producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un análisis que compara el grado de cumplimiento de los requisitos de calidad establecidos por la empresa, la norma o el cliente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un proceso destinado solo a contar prendas terminadas antes del empaque.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una actividad de compra de insumos para evitar faltantes de materia prima.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es una característica que debe tener toda auditoría para que sus resultados sean válidos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Centrarse solo en opiniones personales del auditor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Realizarse sin patrón de comparación ni evidencias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar informar los hallazgos a la dirección.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ser analítica, sistémica, objetiva y libre de conflictos de interés.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Qué debe hacerse al iniciar el procedimiento de auditoría?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir los objetivos para tener claro qué se va a auditar y para qué.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Omitir los criterios de calidad para evitar dispersión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aplicar acciones correctivas sin recolectar información.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Auditar únicamente los aspectos comerciales del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Qué información debe detallar el plan anual de auditoría?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Solo el nombre de los proveedores y el precio de los insumos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente la fecha de entrega del producto al cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Lo que se va a auditar, el lugar, los tiempos, el método y el tipo de auditoría.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solamente el listado de prendas terminadas del lote.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes elementos forma parte del manual de auditoría?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La selección de colores de la colección de moda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los objetivos de las auditorías, el NAC, los procedimientos de muestreo y la metodología de presentación de resultados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La lista de precios de venta al consumidor final.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La publicidad de la empresa en redes sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Según el componente, ¿qué perfil debe tener una persona auditora?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Conocimiento técnico, pensamiento crítico, objetividad, ética, capacidad de comunicación y competencias digitales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Solo experiencia comercial sin conocimiento de normas ni procesos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Capacidad para decidir sin evidencias y sin independencia de criterio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Habilidad para ocultar hallazgos y evitar informar a la dirección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Qué es una auditoría intermedia?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La auditoría que se realiza únicamente después de entregar el producto al cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una inspección informal sin documentación previa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La evaluación final que otorga de manera definitiva una certificación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una auditoría programada durante una fase del proceso para evaluar avances y permitir cambios antes del cierre.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué caracteriza a la auditoría final en un proceso de certificación ISO 9001?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se realiza antes de iniciar el sistema de gestión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sus resultados son definitivos para otorgar la certificación a la empresa auditada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'No requiere revisar hallazgos ni acciones correctivas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Solo revisa la opinión del cliente, sin evaluar el sistema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué es una auditoría interna o de primera parte?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una auditoría realizada exclusivamente por clientes internacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una auditoría aplicada por un organismo certificador independiente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una autoevaluación de la empresa para comprobar la conformidad respecto a una norma o especificaciones establecidas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Una inspección visual de una sola prenda sin informe.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la diferencia entre auditorías externas de segunda y tercera parte?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las de segunda parte las realizan interesados comerciales como clientes o proveedores, y las de tercera parte organizaciones independientes que pueden acreditar una norma.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Las de segunda parte se realizan sin cronograma y las de tercera parte no tienen relación con normas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las dos son realizadas únicamente por operarios de la misma línea de producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las dos reemplazan por completo las auditorías internas de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué documentos apoyan la documentación del proceso de auditoría?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Catálogos de moda, fotografías publicitarias y listas de precios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo mensajes verbales entre operarios y supervisores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Únicamente órdenes de compra y facturas de proveedores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Formatos, procedimiento de auditoría, instructivos y listas de chequeo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué debe cumplir una pregunta incluida en la lista de verificación de auditoría?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser ambigua y permitir respuestas subjetivas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Exigir evidencia o comprobación, orientarse a la conformidad y estar adherida a la norma.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar signos de interrogación para que sea más breve.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Centrarse solo en opiniones personales del auditor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'En el diagrama de tortuga presentado, ¿qué aspecto se relaciona con "¿Cómo medir?"?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Indicadores de desempeño.', esCorrecta: true },
            { id: 'b', texto: 'Nombre de la prenda.', esCorrecta: false },
            { id: 'c', texto: 'Color de la tela.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Cantidad de botones del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es el propósito general de los premios de calidad mencionados en el componente?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reemplazar las normas y los procedimientos internos de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar que las empresas realicen auditorías internas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reconocer el liderazgo de la calidad y estimular altos estándares hacia la excelencia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Certificar automáticamente cualquier empresa sin evaluación previa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Qué orienta la norma ISO 19011:2018?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las directrices para la auditoría de los sistemas de gestión.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El diseño gráfico de las fichas técnicas de confección.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La clasificación de fibras textiles por origen.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La fórmula para calcular el consumo de tela por prenda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: 'Según el componente, ¿qué son los hallazgos de auditoría?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente errores de costura encontrados en una prenda terminada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Resultados de la evaluación de la evidencia recopilada frente a los criterios de auditoría.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Opiniones personales del auditor sin soporte documental.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Actividades comerciales ajenas al sistema de calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Qué es una no conformidad?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una recomendación opcional que no requiere análisis.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una evidencia positiva que demuestra excelencia del sistema.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una premiación otorgada por cumplir requisitos internacionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El incumplimiento de un requisito de la norma, legal o del sistema de gestión de calidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es el orden lógico de actuación ante una no conformidad?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Describirla, realizar corrección inmediata, analizar la causa, establecer acción correctiva y verificar su eficacia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Ignorarla, continuar el proceso y esperar la siguiente auditoría.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cambiar el producto sin analizar la causa raíz.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Comunicarla solo verbalmente y no registrar evidencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué diferencia se plantea entre observación y oportunidad de mejora?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La observación siempre es una certificación y la oportunidad de mejora siempre es una sanción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La observación no requiere atención y la oportunidad de mejora elimina el análisis de costo-beneficio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La observación corresponde a un cumplimiento que puede convertirse en incumplimiento; la oportunidad de mejora permite optimizar un hallazgo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Ambas significan rechazo automático del sistema de calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es una diferencia central entre inspección y auditoría?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La inspección analiza todo el sistema y la auditoría solo una prenda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La auditoría analiza el sistema y sus puntos fuertes y débiles; la inspección revisa de forma puntual en un momento determinado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La auditoría nunca se documenta y la inspección siempre certifica normas internacionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La inspección y la auditoría deben realizarse simultáneamente para ser válidas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
