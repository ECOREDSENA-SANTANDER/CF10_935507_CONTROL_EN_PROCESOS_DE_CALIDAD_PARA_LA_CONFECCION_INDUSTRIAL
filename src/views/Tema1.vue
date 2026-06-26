<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Procedimiento de auditoría
      
    .bloque-texto-g.bg3.br-tr.p-3.p-sm-4.p-md-5.mb-4(data-aos='fade')
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/1.png')})`}")
      .bloque-texto-g__texto.p-4.py-lg-5
        p.mb-0 Las especificaciones de calidad establecidas para un producto son dadas por las normas relacionadas con este y las políticas de calidad de la empresa. Cada empresa desarrolla su normatividad, procedimientos e instructivos para realizar los procesos productivos, así mismo para realizar las inspecciones.

    .row.justify-content-center
      .col-lg-8(data-aos='fade-right')
        p La auditoría es el análisis en donde se compara el grado de cumplimiento de los requisitos de calidad establecidos por la empresa, por la norma o por el cliente. Por lo tanto, se constata un hecho y se informa el cumplimiento con las normas y procedimientos.
        .bg8.bg-compl1.p-4
          p La información recolectada en una auditoría debe presentarse en informes a la dirección de la empresa, una vez se han comunicado los resultados a los líderes y personas encargadas del proceso. Dentro del informe se debe describir, el método utilizado en la auditoría, la valoración de las áreas o procesos auditados, y las observaciones y mediciones realizadas. Las propuestas, en otras palabras, son las acciones de mejora, se deben presentar, una vez se realice un análisis dispendioso y realista con el fin de cumplir con los objetivos de calidad de la empresa.
          p.mb-0 Una vez la alta gerencia reciba los informes debe evaluar de manera objetiva y con mirada sistemática la eficacia del sistema de calidad y estratificar las situaciones de riesgo para dirigir su atención a los planes de mejora que fortalezcan la gestión de la calidad.
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t1/2.svg', alt='')

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1. Características de la auditoría 

    .row.justify-content-center.mb-4
      .col-lg-4.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/3.svg', alt='')
      .col-lg-8(data-aos='fade-left')
        .bg-color-secundario.text-white.p-4.h-100.d-flex.flex-column.justify-content-center
          p Toda auditoría debe ser realizada en forma analítica, sistémica y con un amplio sentido crítico por parte del auditor. Cada proceso debe estar libre de conflictos de intereses del examinador, quien actuará siempre con independencia para que su opinión tenga una verdadera validez ante los usuarios de esta.
          p.mb-0 La auditoría al ser un proceso de evaluación debe poseer un patrón contra el cual efectuar la comparación y poder concluir sobre el sistema de producción examinado. Para realizar una Auditoría, se requiere que el auditor tenga un gran conocimiento sobre la estructura y el funcionamiento tanto de la unidad económica de la empresa como del proceso que se inspecciona así como de la normatividad legal a la cual está sujeta. Además, el auditor debe tener habilidades para la comunicación, la redacción de informes y la capacidad de análisis para realizar un juicio objetivo sobre el sistema de producción auditado.   

    p Las auditorías en la empresa deben ser continuas y deben contribuir de forma efectiva y oportuna a la identificación, análisis y evaluación de los riesgos, por lo tanto deben ser estratégicas, es decir enfocadas en proporcionar una solución, objetivas y confiables. Así mismo los auditores deben actuar basados en conductas éticas de confidencialidad, discreción e integridad.


    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2. Procedimiento de la auditoría

    .row.justify-content-center.bg5.mb-4(data-aos='fade')
      .col-lg-4.px-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/4.png', alt='')
      .col-lg-8
        .p-4
          .row.align-items-center.mb-4
            .col-lg-auto.col-md-2.mb-3.mb-md-0
              img.w-85x(src='@/assets/curso/temas/t1/5.svg', alt='')
            .col-lg-auto.col-md-10
              p.mb-0 Como todo procedimiento la auditoría se compone de las siguientes actividades:
          ul.lista-ul.fa-lista.list-ico.mb-0
            li.mb-1
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Definir objetivos para tener claro que se va a auditar y para qué.
            li.mb-1
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Encaminar las actividades en lo relacionado con la calidad, con el fin que no se genere desenfoque o dispersión de las acciones.
            li.mb-1
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Auditar todos los criterios de calidad.
            li.mb-1
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Evaluar acciones desarrolladas entre las áreas.
            li.mb-1
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Su naturaleza es la objetividad.
            li.mb-0
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Basada en resultados, mostrados en evidencias.

    p.mb-4 El procedimiento de la auditoría se desarrolla en tres fases:

    .row.justify-content-center
      .col-lg-9(data-aos='fade-right')
        TabsA.color-secundario
          .tarjeta.bg5.p-4(titulo="Antes")
            ul.lista-ul.fa-lista.list-ico.mb-0
              li
                img(src='@/assets/curso/temas/t1/ico-list.svg')
                span.mb-0 Desarrollar un plan de auditorías descrito en el programa de calidad, el cual debe ser aprobado por la dirección de la empresa.
              li
                img(src='@/assets/curso/temas/t1/ico-list.svg')
                span.mb-0 Tener aprobación del equipo de calidad.
              li
                img(src='@/assets/curso/temas/t1/ico-list.svg')
                span.mb-0 Alistar la norma con la que se va a auditar, sistema de evaluación comprendida por los criterios, escala de medición y ponderación de cada aspecto a evaluar.
              li.mb-0
                img(src='@/assets/curso/temas/t1/ico-list.svg')
                span.mb-0 Informar a las personas encargadas del proceso a auditar: qué, cómo y cuando se va a auditar.
          .tarjeta.bg5.p-4(titulo="Durante")
            ul.lista-ul.fa-lista.list-ico.mb-0
              li
                img(src='@/assets/curso/temas/t1/ico-list.svg')
                span.mb-0 Acceso a la documentación asociada del proceso a auditar.
              li
                img(src='@/assets/curso/temas/t1/ico-list.svg')
                span.mb-0 Acceso a las actividades a auditar.
          .tarjeta.bg5.p-4(titulo="Después")
            ul.lista-ul.fa-lista.list-ico.mb-0
              li
                img(src='@/assets/curso/temas/t1/ico-list.svg')
                span.mb-0 Comunicar los hallazgos encontrados, con el fin de comparar la óptica del auditado y estructurar la apreciación firme del auditor.
              li
                img(src='@/assets/curso/temas/t1/ico-list.svg')
                span.mb-0 Revisar los hallazgos según las respuestas de la persona auditada, si es necesario recoger nueva información, la cual se debe incluir en el informe.
              li
                img(src='@/assets/curso/temas/t1/ico-list.svg')
                span.mb-0 Reunir a los auditores para intercambiar información, consolidar un informe para establecer las propuestas a la dirección.
              li
                img(src='@/assets/curso/temas/t1/ico-list.svg')
                span.mb-0 Presentar el informe a la dirección.
              li
                img(src='@/assets/curso/temas/t1/ico-list.svg')
                span.mb-0 Auditar nuevamente con el fin de revisar los avances según las acciones de mejora definidas por la dirección.
      .col-lg-3.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t1/6.png', alt='')


    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3. Plan anual de auditoría 

    p Las auditorías generan un plan, el cual debe estar constituido dentro del programa de calidad de la empresa en el que se detalla lo que se va a auditar, el lugar, los tiempos, el método y el tipo de auditoría.
    p Los planes de auditorías deben estar programados de manera anual, además de conformar los equipos de auditores los cuales tendrán claro los aspectos a auditar. El equipo definido de auditores realiza un cronograma de actividades anual el cual debe ejecutarse conforme a lo planeado.
    p.mb-4 Los aspectos del plan anual de auditorías se presentan a continuación:

    .tarjeta.bg8.p-4.px-lg-5.mb-5(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido
        h5 Figura 1.
        span Componentes clave en el proceso de auditoría de calidad
      figure.p-lg-5
        img(src='@/assets/curso/temas/t1/fig1.svg', alt='Ilustración de un tablero con los principales elementos del proceso de auditoría de calidad, incluyendo alcance, funciones de los auditores, técnicas de auditoría, herramientas de informes y aprobación de resultados.')

    .subt2.mb-4(data-aos="fade-right")
      h4.mb-0 Los planes deben tener en cuenta
    
    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-10
        .tarjeta.bg9.p-4
          ul.lista-ul.lista-ul--separador.fa-lista.list-ico.mb-0
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Normas aplicables, personas, sistema de evaluación, el procedimiento, la comunicación de los resultados relacionados con los aspectos a auditar.
            li.mb-0
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Información histórica de acciones correctivas anteriores, quejas y reclamos de los clientes, costos de calidad.

    .row.bgcolor-1.align-items-center.p-3.p-md-4.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-lg-12
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-1
                  img(src="@/assets/curso/temas/t1/cta.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col-12.col-lg-10.col-md-8.mb-3.mb-sm-0.text-white
                      h4.mb-1 Programa anual de auditoría.
                      p.mb-0 Revise un ejemplo de la planeación de las auditorías.
                    .col.col-lg-2.mb-3.mb-sm-0
                      a.boton.color-acento-botones(:href="obtenerLink('downloads/Programa_anual_auditoria.xlsx')" target="_blank" type="application/pdf")
                        span Descargar 
                        i.fas.fa-file-download 

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Manual de auditoría
    
    p.mb-4 La recopilación de los procedimientos de las auditorías constituye un manual, el cual garantiza realizar de manera óptima el plan.

    h4 El manual debe comprender las siguientes partes

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/7.png', alt='')
      .col-lg-4
        ol.lista-ol--cuadro.lista-ol--separador.fa-lista
          li
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 1
            span.mb-0 Objetivos de las auditorías.
          li
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 2
            span.mb-0 Introducción de las auditorías.
          li
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 3
            span.mb-0 Descripción de las necesidades del equipo auditor.
          li
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 4
            span.mb-0 Descripción de NAC (Nivel Aceptable de Calidad).
          li
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 5
            span.mb-0 Determinar los procedimientos de muestreos, selección de la muestra y cantidad de muestra.
          li
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 6
            span.mb-0 Las normas asociadas.
      .col-lg-4
        ol.lista-ol--cuadro.lista-ol--separador.fa-lista
          li
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 7
            span.mb-0 Metodología de recolección, tabulación y presentación de resultados.
          li
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 8
            span.mb-0 Metodología de difusión de los resultados a las áreas interesadas.
          li
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 9
            span.mb-0 Estructura de planes de mejora.
          li
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 10
            span.mb-0 Frecuencia de ejecutar auditorías.
          li
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 11
            span.mb-0 Descripción de la metodología para el seguimiento de avances de las acciones de mejora.

    .row.justify-content-end.mb-4(data-aos='fade')
      .col-lg-11
        .bg9.bg-compl2.p-4
          p Las ventajas de contar con un manual de auditoria es que se puede conocer el proceso, por tanto facilita las acciones de la auditoría y se confía en sus propias observaciones. En cuanto a las desventajas se puede mencionar que en la recolección de datos pueden obviar ciertos datos que afecten el desempeño de calidad del módulo y al no tener información documentada se dificulta establecer acciones que mejoren los resultados de calidad, asi como que se pueden generar falta de condiciones óptimas como tiempo para realizar una auditoría de manera exhaustiva.
          p.mb-0 Como se había mencionado antes el personal es un recurso de la empresa y por consiguiente la auditoría requiere de personas con formación, experiencia y pensamiento crítico para el desempeño de sus funciones. Por lo que los auditores pueden ser:
    
    .tarjeta.mb-4.bg9(data-aos='fade-down')
      img(src='@/assets/curso/temas/t1/8.png', alt='')
      .p-4.px-lg-5
        ul.lista-ul.lista-ul--separador.fa-lista.list-ico.mb-0
          li
            img(src='@/assets/curso/temas/t1/ico-list.svg')
            span.mb-0 Coequiperos de la misma área a auditar.
          li
            img(src='@/assets/curso/temas/t1/ico-list.svg')
            span.mb-0 Inspectores de calidad, personas especializadas de mando medio, que cuentan con independencia con respecto del objeto a auditar. Su participación no afecta los costos de calidad pues mantiene el costo derivado de sus funciones y puede suceder que sus observaciones no tengan el impacto esperado en la dirección para que se realicen las acciones necesarias.
          li
            img(src='@/assets/curso/temas/t1/ico-list.svg')
            span.mb-0 Auditores esporádicos son personas que trabajan en otra área de la empresa, pero tienen la experiencia como auditor, de forma que al participar en los procesos de auditoría adquiere nuevos conocimientos sobre el funcionamiento de la empresa, asi mismo, las actividades que realiza en otro espacio pueden afectar la actividad de auditoría encomendada.
          li
            img(src='@/assets/curso/temas/t1/ico-list.svg')
            span.mb-0 Auditores parciales, son personas que hacen parte del equipo de calidad y dentro de sus actividades está la de realizar auditorías, cuentan con la formación y la experiencia en la actividad, pero generalmente no cuentan con tiempo disponible para atender de manera completa las auditorías y acciones asociadas a la misma, de manera diaria o inmediata.
          li
            img(src='@/assets/curso/temas/t1/ico-list.svg')
            span.mb-0 Auditores totales, son personas externas a la empresa contratadas para realizar la actividad. Cuentan con el tiempo y la experiencia para atender de manera óptima las auditorías necesarias y tienen credibilidad en la parte operativa y dirección para la toma de decisiones.
          li.mb-0
            img(src='@/assets/curso/temas/t1/ico-list.svg')
            span.mb-0 Auditores externos, son llamados también consultores, los cuales cuentan con alto nivel académico y experiencia que genera credibilidad para los objetivos planteados de la auditoría, son contratados por la necesidad de la empresa en los casos de solicitud de la certificación en una norma, como es el caso de la norma ISO 9001:2015.También son encargadas de evaluar el sistema de gestión de la empresa certificadora.

    p.mb-5 Las personas que hacen parte de un equipo auditor deben cumplir con un perfil definido por su formación integral, su experiencia, capacitación, nivel de especialización y compromiso ético con sus actividades.

    h4 Teniendo en cuenta lo anterior se describen las siguientes características que debe cumplir un auditor

    .row.justify-content-center.mb-5
      .col-lg-9(data-aos='fade-right')
        .tarjeta.bg13.p-4
          ul.lista-ul.lista-ul--separador.fa-lista.list-ico.mb-0
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Título profesional en áreas similares de los procesos estratégicos y de apoyo en las empresas.
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Experiencia en el manejo de normas y procesos interdisciplinarios como financiero, comercial, administrativo, legal.
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Capacidad de trabajo en equipo y manejo de excelentes relaciones interpersonales.
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Conocimiento en normas legales de los procesos de la empresa.
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Tener las habilidades y capacidades técnicas para desarrollar las funciones asignadas.
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Ser buen observador crítico, analítico y sensato para emitir juicios.
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Tener cualidades de pedagogía con el fin de propiciar un entorno de aprendizaje.
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Demostrar a través de sus juicios y actuaciones reconocimiento y respeto por parte de los auditados.
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Independencia de criterios, trabajar de manera libre, e informar si se presenta alguna inhabilidad.
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Capacitación continua en auditorías o temas relacionados con las diferentes empresas y sus procesos.
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Capacidad de análisis y proyección de la situación para establecer decisiones acertadas.
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Tener valores como conciencia social, solidaridad, compromiso, ética en su actuar.
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Capacidad de afrontar retos y destreza para comunicarse tanto de forma oral como escrita.
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Debe ser objetivo, su opinión debe ser honesta e imparcial.
            li.mb-0
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Contar con competencias digitales.
      .col-lg-3.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t1/9.svg', alt='')

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Planificación de la auditoría

    p En cuanto a los encargados de planear las auditorías depende de la naturaleza de esta, si es interna es la empresa en su programa de auditorías quien las planea, en el caso que se encuentre en proceso de certificación, la planeación de la auditoría la realiza la empresa auditora y el auditor asignado.
    p.mb-4 Una vez se realiza la auditoría para procesos de certificación de alguna norma, se presentan tres opciones de decisión a tomar derivada de los resultados encontrados:

    .tarjeta.bg5.p-4.p-lg-5.mb-4(data-aos='fade')
      .row.justify-content-around.align-items-center
        .col-lg-3.col-md-6.col-8.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t1/10.svg', alt='')
        .col-lg-6
          ul.lista-ul.fa-lista.list-ico.mb-0
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 El sistema de calidad está cumpliendo con los requisitos de la norma relacionada.
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 El sistema de calidad no está cumpliendo con los requisitos de la norma relacionada. Presenta observaciones o hallazgos los cuales se pueden subsanar si se realizan acciones correctivas que pueda hacer que se acepte el sistema de calidad.
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 El sistema de calidad no cumple con los requisitos de la norma relacionada.

    p.mb-4 El resultado de la auditoría impacta no solo a la empresa, incluye al cliente quien puede establecer la norma como condición para las relaciones de negocios con la empresa auditada. En la siguiente figura se presenta la dimensión humana y los aspectos relacionados.

    .tarjeta.bg8.p-4.px-lg-5.mb-4(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido
        h5 Figura 2.
        span Dimensión humana en los procesos de auditoría y calidad
      .row.justify-content-center
          .col-lg-7
            figure.p-lg-5
              img(src='@/assets/curso/temas/t1/fig2.svg', alt='Infografía circular titulada “Dimensión humana en los procesos de auditoría y calidad”. El gráfico está dividido en cuatro secciones: Personal, Empresa, Auditor y Cliente. Cada segmento incluye íconos representativos y conceptos clave relacionados con responsabilidad, sistema de calidad, confidencialidad, objetividad y mejora del producto. En el centro aparece el texto “Dimensión humana”. Predominan los colores verde, amarillo, azul y gris oscuro sobre un fondo gris claro.')

    p.mb-4 Sean las auditorías internas o externas, es importante mencionar la participación del personal de la empresa en el desarrollo de la auditoría, siempre y cuando se encuentre especificado en sus responsabilidades; realizan las siguientes acciones:

    .tarjeta.bg11.p-4.mb-4(data-aos='fade')
      .row.justify-content-center.align-items-center
        .col-lg-3.col-md-3.col-5.px-lg-5.mb-3.mb-lg-0
          img.px-lg-3(src='@/assets/curso/temas/t1/11.svg', alt='')
        .col-lg-8
          ul.lista-ul.fa-lista.list-ico.mb-0
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Responden las preguntas formuladas por el auditor de manera precisa y concreta, mostrando las evidencias solicitadas.
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Asisten a las reuniones de apertura y cierre con actitud de atención y disposición.
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Si es su competencia, maneja el producto y los métodos para su inspección.
            li.mb-0
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Acompaña al auditor en sus actividades y si es asignada la función apoya para guiarlo en la empresa.
    
    p.mb-4 Uno de los recursos de especial atención es el espacio para que el auditor pueda realizar sus actividades, los cuales deben cumplir con las siguientes condiciones:

    .tarjeta.bg1.p-4.mb-5(data-aos='fade')
      .row.justify-content-center.align-items-center
        .col-lg-3.col-md-2.col-4.px-lg-5.mb-3.mb-lg-0
          img.px-lg-4(src='@/assets/curso/temas/t1/12.svg', alt='')
        .col-lg-8
          ul.lista-ul.fa-lista.list-ico.mb-0
            li.mb-lg-3
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Espacio cómodo cuya área sea holgada para poder colocar muebles y equipos, además debe tener privacidad para revisar con tranquilidad sus documentos o elementos a inspeccionar.
            li.mb-lg-3
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Espacio con seguridad para resguardar los documentos auditados, registros e informes.
            li.mb-0
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Dotado de recursos como computador, impresoras, acceso a internet para realizar los análisis y la generación de informes.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0  Análisis del sistema de calidad

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6(data-aos='fade-right')
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-2.col-md-2.col-3
            img(src='@/assets/curso/temas/t1/13.svg', alt='')
          .col-lg-10.col-md-10.col-9
            p.mb-0 Se realiza conforme al sistema de gestión de la empresa y a su vez a las normas relacionadas. La extensión del análisis depende de las intenciones de la auditoría, en el caso que sea conforme a una norma, depende de las actividades estipuladas a auditar dentro de la misma.
        p Los aspectos para analizar en las auditorías se presentan en la siguiente tabla:
      .col-lg-6.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t1/14.png', alt='')

    .mb-4
      .titulo-sexto.color-secundario.mb-3
        h5 Tabla 1.
        span Aspectos de la auditoría
      .tabla-a.color-acento-contenido
        table
          thead
            tr.bg7
              th.text-white Procedimientos
              th.text-white Evaluación
              th.text-white Ejemplo
          tbody
            tr
              td Normas
              td Plan de mantenimiento de maquinaria
              td Sistema de producción
            tr
              td Procedimientos
              td Plan de compras
              td Tiempo de ciclo
            tr
              td Instructivos
              td Acuerdos con proveedores
              td Planeación de producción
            tr
              td Registros de control
              td Gestión de inventarios
              td Inspecciones de inventario
            tr
              td Registros de comunicación
              td Reclamos entre los departamentos
              td Reporte de reclamos internos				
            tr
              td Procedimientos de inspección
              td Auditoría de productos
              td Verificación de producto terminado				
            tr
              td Registros de mejora
              td Registro de acciones correctivas
              td Plan de mejora				
            tr
              td Registros de calidad
              td Registro de no conformidades
              td Reporte de no conformidad				


</template>

<script>
export default {
  name: 'Tema1',
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
