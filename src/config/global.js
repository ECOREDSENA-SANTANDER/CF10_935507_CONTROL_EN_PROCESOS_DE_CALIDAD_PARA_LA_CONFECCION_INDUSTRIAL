export default {
  global: {
    Name: 'Procedimiento de auditorías',
    Description:
      'Para lograr una adecuada gestión en las empresas es necesario hacer uso de las auditorías, un examen de los procesos y procedimientos ejecutados para observar su rendimiento, asimismo para identificar los puntos clave y generar acciones de mejora que garanticen la calidad del producto.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Procedimiento de auditoría',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características de la auditoría',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Procedimiento de la auditoría',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Plan anual de auditoría',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tipos de auditorías',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Auditoría intermedia',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Auditoría final',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Auditoría interna',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Auditoría externa',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Premios de calidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Norma ISO 19011',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Hallazgos de las auditorías',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Inspección vs auditoría',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Efectividad',
      significado:
        'considerada como el equilibrio entre la efectividad y la eficacia. ',
    },
    {
      termino: 'Eficacia',
      significado:
        'es el nivel de la capacidad de conseguir los logros propuestos.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'es la relación dada por los resultados obtenidos por la optimización en la utilización de los recursos.',
    },
    {
      termino: '<em>Good will</em>',
      significado:
        'Se refiere al prestigio alcanzado por la empresa, el buen nombre que hace que se valore el negocio comercialmente.',
    },
    {
      termino: '<em>Staff</em>',
      significado:
        'equipo de personal que realizan actividades de asesoramiento.',
    },
  ],
  referencias: [
    {
      referencia: 'Auditool.org. (2020). Auditool.',
      link: '',
    },
    {
      referencia: 'CONSULTORES CTMA. (2020). Auditoría interna de calidad.',
      link: '',
    },
    {
      referencia:
        'Duque de Serna, F. (1990). Procedimientos para el control de la calidad. SENA.',
      link: '',
    },
    {
      referencia:
        'Evans, J. y Lindsay, W. (2015). Administración y Control de la calidad (9ª ed.). Cengage.',
      link: '',
    },
    {
      referencia:
        'Océano Administración. (2020). Evolución del concepto de calidad y auditorías de calidad.',
      link: '',
    },
    {
      referencia:
        'Gómez, J. (2018). Guía para la aplicación de ISO 9001 2015 (1ª ed., Págs. 268 a 280). AENOR.',
      link: '',
    },
    {
      referencia:
        'Jimenez, D. (2020). Auditorías: Como hacer una lista de verificación usando diagrama de tortuga.',
      link: '',
    },
    {
      referencia: 'Pola Maseda, Á. (2009). Gestión de la calidad. Marcombo.',
      link: '',
    },
    {
      referencia:
        'Ramón, J. (2013). Auditoría interna (3a. ed.) Pearson Educación.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Nelftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Sandra Cecilia Gutiérrez',
          cargo: 'Experta temática',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Vilma Lucía Perilla Méndez',
          cargo: ' Diseñadora instruccional',
          centro: 'Centro de Gestión Empresarial - Regional Distrito Capital',
        },
        {
          nombre: 'Oscar Andrés Fernández Urrego',
          cargo: ' Evaluador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Cenigraf - Regional Bogotá',
        },
        {
          nombre: 'Julieth Paola Vital López',
          cargo: 'Corrección de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        /*{
          nombre: ' ',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },*/
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
