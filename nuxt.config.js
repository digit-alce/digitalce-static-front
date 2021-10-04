export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Digit Alce',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Digit Alce' },
      { data: 'Attribution', content: 'Flags icons mmade by https://www.freepik.com/' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/fontawesome-free-5.14.0-web/css/all.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-i18n',
      {
        locales: ['en', 'fr'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              path: {
                method: 'Innov&Scale® method',
                benefits: 'Innov&Scale® benefits',
                tool: 'Innov&Scale® 2.0',
                'use-case': 'Use case',
                'use-case-facom': 'Use Case: FACOM',
                services: 'Services',
                'privacy-policy': 'Privacy Policy',
                'terms-of-use': 'Terms of Use',
                about: 'About'
              },
              cta: {
                benefits: 'See the benefits',
                method: 'About our method',
                services: 'Our services',
                'innov-scale': 'Innov&Scale® 2.0',
                tool: 'About our tool',
                discover: 'Discover',
                'use-case': 'See use case',
                contact: 'Contact us',
                'click-here': 'Click here',
                'learn-more': 'Learn more'
              },
              pages: {
                landing: {
                  title: 'Make your digital transformation a success',
		              subtitle: 'Did you know that only 1 out of 5 companies successfully manage to scale up their innovative projects?',
                  body: 'The difficulty of successfully scaling up innovation projects is real and prevents companies from sustainably transforming innovation into value and responding to new business opportunities.',
                  categories: {
                    work: {
                      title: 'Our work',
                      subtitle: 'At Digit alce, we help companies realize their digital transformation projects from innovation to industrialization, thanks to our Innov&Scale® method, in 5 structured  and achievable steps.',
                      body: ''
                    },
                    method: {
                      title: 'Our method',
                      subtitle: ' A unique and innovative 5-steps method to successfully create and scale your digital transformations',
                      body: '',
                      icons: [
                        'Envision',
                        'Co-create',
                        'Prepare',
                        'Enhance',
                        'Scale',
                      ]
                    },
                    benefits: {
                      title: 'Innov&Scale® benefits',
                      subtitle: '"Each step must be carried out in order with rigor and perseverance, the Innov&Scale® method allows us to successfully carry out this project from start to finish"',
                      body: '- Yves Antier - VP et GM Tool & Storage France, FACOM Black & Decker'
                    },
                    tool: {
                      title: 'Innov&Scale® 2.0',
                      subtitle: 'A unique digital tool to ensure and share completion and time management of the innovation project',
                      body: 'Innov&Scale® 2.0 allows you to carry out the digital transformation in real time using our method'
                    },
                    'use-case': {
                      title: 'Innov&Scale® use case',
                      subtitle: 'Discover how FACOM reshaped its lifetime guarantee with Innov&Scale® method',
                      body: ''
                    }
                  }
                },
                about: {
                  title: 'About'
                },
                benefits: {
                  title: 'Innov&Scale® method benefits',
                  items: [
                    {
                      title: 'Vision',
                      body: 'Create a common end-to-end vision of the innovation project within a company or an ecosystem.'
                    },
                    {
                      title: 'Cohesion',
                      body: 'Share the progress of the innovation project with all the participants and respect the objectives throughout its implementation.<br /><br />Allow the emergence of a collective strategy that encourages dialogue between participants and improve cohesion within the orgnanization.'
                    },
                    {
                      title: 'Efficiency',
                      body: 'Guarantee the effective and efficient implementation of an innovation project.'
                    },
                    {
                      title: 'Success',
                      body: 'Guarantee the success by ensuring the integration of the solution within a company or an ecosystem through a full-scale test.<br /><br />Reach and achieve the objectives of the innovation project.'
                    },
                    {
                      title: 'Anticipation',
                      body: 'Anticipate the means necessary to ensure the scaling of the solution'
                    },
                    {
                      title: 'Control',
                      body: 'Control all the changes to be made to successfully industrialize the solution.'
                    }
                  ]
                },
                method: {
                  title: 'Innov&Scale® Method',
                  subtitle: ' A unique and innovative 5-steps method to successfully create and scale your digital transformations',
                  body: 'The 5 steps of the Innov&Scale® method guide the digital transformation project towards success, in successive and achievable steps.<br/><br/>The right mix of innovative methods (design thinking, mural...) and legacy methods (change management...) at the right place and the right time. <br/><br/>Each step requires the completion of pre-work to prepare the step, then the completion of a deliverable that formalizes the work accomplished.<br/><br/>Each step feeds the next step and is part of a complete process.<br/><br/>The 5-steps allow the collaborator to follow and share step by step the progress of the digital transformation project towards its realization and the achievement of its objectives.',
                  items: [
                    {
                      title: 'Envision: Share a unique vision of the innovation project',
                      body: 'Through scoping and strategic alignement, generate a common vision of the innovation project and ensure full alignment among stakeholders on objectives, communication and constraints of the project.'
                    },
                    {
                      title: 'Co-create: Co-create the future solution',
                      body: 'Through co-creation workshops, co-create with end-users, the envisioned solution using innovative methods and tools.'
                    },
                    {
                      title: 'Prepare: Prepare solution real testing',
                      body: 'Use an agile method to quickly develop the solution and prepare real testing objectives and environment.'
                    },
                    {
                      title: 'Enhance: Enhance the solution and organize scaling',
                      body: 'Use pilot to ensure real-life usage of the new processes and solution. Enable lessons learned to adapt and adjust to real environment.<br/>Create a precise and complete industrialization playbook to prepare and anticipate solution scaling.'
                    },
                    {
                      title: 'Scale: Scale the solution',
                      body: 'Develop a comprehensive change management organization and process to avoid fallbacks and ensure objective completeness of the innovation.<br/>Prepare post-industrialization environment to integrate project into core enterprise processes.'
                    }
                  ]
                },
                tool: {
                  title: 'Innov&Scale® 2.0',
                  subtitle: 'A unique innovation management web app that ensures the success of your digital transformation thanks to our registered method.',
                  body: 'Innov&Scale® 2.0 allows you to carry out the digital transformation in real time using the Innov&Scale method.',
                  items: [
                    {
                      title: 'Quick and easy innovation project visualisation',
                      body: 'The Innov&Scale® 2.0 dashboard provides you with quick and easy way to visualize the innovation project situation as you move forward and use the Innov&Scale® method.<br/><br/>These graphs, in addition to accompanying the organization towards the realization of the innovation project, also serve as progress management tool. Indeed, for each of the five steps, the tool determines the completion rate and time management of the project.'
                    },
                    {
                      title: 'Every step of the 5-steps method is detailed',
                      body: 'Each sub-steps has its own completeness rate and time management detailed.<br/><br/>The completeness rate corresponds to the organization\'s real time progress toward the complete achievement of the steps and its objectives.<br/><br/>The time management graph corresponds to the respect of the forecasted deadlines indicated for each sub-step'
                    },
                    {
                      title: 'Completeness of to-do pre-work and deliverables for each sub-step',
                      body: 'The organization applies the Innov&Scale® method through the implementation of concrete and understandable actions at each sub-steps of the method.<br/><br/>The pre-work and deliverables requirements to be carried out at each sub-steps are clearly defined. Their completion contributes to the progress of the project and thus the success of the digital transformation.'
                    },
                    {
                      title: 'Quick and easy update of each tool',
                      body: 'To-do pre-work and deliverables are quickly and easily updated through a questionnaire.'
                    }
                  ]
                },
                'use-case': {
                  title: 'Use Case',
                  subtitle: 'Discover use cases examples of the implementation of the Innov&Scale® method within different fields and organization',
                  'facom-pre-cta': 'Discover FACOM\'s<br/>Innov&Scale® experience',
                  items: [
                    {
                      title: 'Sales & marketing',
                      body: 'Create a full integrated eshop with distributors<br/><br/>Transform paper catalog for sales efficiency and cost avoidance'
                    },
                    {
                      title: 'After sales',
                      body: 'Transform traditional after sales processes<br/><br/>Boost after sales business '
                    },
                    {
                      title: 'Quality & audit',
                      body: 'Ensure full auditabily and compliance of finished goods<br/><br/>Align recycling ecosystem for better performance'
                    },
                    {
                      title: 'Production & logistics',
                      body: 'Avoid logistic shortfalls with tracability<br/><br/>Change end-to-end production ecosystem to secure on-time delivery'
                    },
                    {
                      title: 'Finance',
                      body: 'Avoid claims within a distributor ecosystem<br/><br/>Create new easy-to-use financial service'
                    },
                    {
                      title: 'Human resources',
                      body: 'Adapt working space for post-covid usage<br/><br/>Rebuild GenZ employee onboarding for better retention'
                    }
                  ]
                },
                'use-case-facom': {
                  title: 'Use Case FACOM',
                  subtitle: 'Facom Lifetime Guarantee: Simpler, Faster And Greener',
                  body: 'How did we reshape lifetime guarantee with Innov&Scale®?',
                  items: [
                    {
                      title: 'Envision',
                      body: 'The value of FACOM brand is quality... and quality means lifetime guarantee.<br/><br/>Everything begins with an idea but everyone had its own idea of what the new lifetime guarantee could be. <br/><br/>Through scoping and strategic alignment, a unique and shared vision has been created. Stakeholders have defined together unique objectives, clear communication, creators and users of the solution which will remain valid until the end of implementation. '
                    },
                    {
                      title: 'Co-Create',
                      body: 'FACOM\'s strong desire to remain close to its distributors and customers naturally led to the co-creation of its new solution with FACOM customers and distributors. <br/><br/>Thanks to a participative model session using design-thinking and agile methods, the objective was successfully achieved: <br/><br/>Share the vision, converge and create the storyboard of the new solution.'
                    },
                    {
                      title: 'Prepare',
                      body: 'Both the development of the solution and the pilot playbook were done at the same time. <br/><br/>Through an agile work method, FACOM was able to develop in just 2 months a ready-to-be-launched digital application. <br/><br/>In the meantime, a pilot playbook, gathering the main elements to the solution real testing was created.'
                    },
                    {
                      title: 'Enhance',
                      body: 'The decision to carry out the pilot was shared and approved by FACOM stakeholders. <br/><br/>The objective of the pilot was to bring the FACOM lifetime Guarantee qualification decision to life through the new process and tool. The pilot was also the opportunity to enhance the solution through process and technical modifications with the integration of major lessons learned. <br/><br/>Simultaneously to the pilot, FACOM stakeholders have defined an industrialization playbook to prepare efficient scaling.'
                    },
                    {
                      title: 'Scale',
                      body: 'Efficient change management method was used to scale successfully the new FACOM Lifetime Guarantee process and tool from 200 to more than 10,000 clients.<br/><br/>Anticipating after project in order to become core activity.'
                    }
                  ],
                  testimony: {
                    title: 'Yves Antier, VP and GM Tool & Storage France, FACOM Black & Decker testimony',
                    body: '"We had identified an idea to digitize one of FACOM\'s core brand values, and everyone came up with a solution.<br/>The Innov&Scale® method did two things that we would have been unable to do alone:<br/><ul><li>Share a unique vision of the project<li>Co-create the solution with end-users and our distribution partners</ul>These two elements were fundamental to the success of this project.<br/><br/>The speed of execution in the preparation of the full-scale test and the rapid successive improvements in contact with a start up state of mind are often incompatible with the matrix mode of operation of large groups.<br/><br/>Finally, the stumbling block is often the industrialization because it is necessary to put larger amounts of investment on the table, which calls upon a multitude of internal functions. Only the preparation of a structured business case allows the project to be brought to term.<br/>In fact, each of the steps must be carried out in order with rigor and perseverance. The Innov&Scale® method allows you to successfully carry out this project from start to finish.<br/><br/>I think that the method provided the collective confidence to carry out the project, each step being structuring, with an external project manager who makes us move forward more quickly.<br/><br/>Thanks to this method, the brand has been enhanced with end-users, our distribution partners and internally. This project could snowball into other brands and other countries in the group."'
                  }
                },
                services: {
                  title: 'Services',
                  'cta-pre-text': 'Please, contact us for pricing informations at <a href="mailto:contact@digitalce.fr">contact@digitalce.fr</a>',
                  items: [
                    {
                      title: 'Coaching',
                      body: 'Coach project directors to use Innov&Scale® method for current innovative projects',
                      icon: 'fas fa-users'
                    },
                    {
                      title: 'Training',
                      body: 'To rapidly take ownership of the method, we offer training modules based on real-life cases and practical situations in order to ensure a high level of competence.',
                      icon: 'far fa-play-circle'
                    },
                    {
                      title: 'Innov&Scale® 2.0',
                      body: 'Specifically designed to support and equip the implementation of the Innov&Scale® method.<br/><br/>Provides you quick and easy visualisation of your on-time completeness and time management of your innovation project.',
                      icon: 'fas fa-chart-line'
                    }
                  ],
                  pricings: [
                    {
                      title: 'Mid size company',
                      body: 'From 1 to 50 project(s)/user(s)<br/><br/>Access to the platform<br/><br/>Evolutionary maintenance<br/><br/>4 days of initial training<br/><br/>2 days of annual coaching'
                    },
                    {
                      title: 'Enterprise',
                      body: 'From 1 to 500 project(s)/user(s)<br/><br/>Access to the platform<br/><br/>Evolutionary maintenance<br/><br/>5 days of initial training<br/><br/>3 days of annual coaching'
                    }
                  ]
                },
              }
            },
            fr: {
              path: {
                benefits: 'Innov&Scale®: Bénéfices',
                method: 'Innov&Scale®: Méthode',
                tool: 'Innov&Scale® 2.0',
                'use-case': 'Cas d\'usage',
                'use-case-facom': 'Cas d\'usage: FACOM',
                services: 'Services',
                contact: 'Contact',
                'privacy-policy': 'RGPD',
                'terms-of-use': 'Mentions légales',
                about: 'À propos'
              },
              cta: {
                benefits: 'Bénéfices',
                method: 'Méthode',
                services: 'Services',
                tool: 'L\'outil',
                'innov-scale': 'Innov&Scale® 2.0',
                discover: 'Découvrir',
                'use-case': 'Cas d\'usage',
                contact: 'Contact',
                'click-here': 'Cliquez ici',
                'learn-more': 'Découvrir'
              },
              pages: {
                landing: {
                  title: 'Faites de votre transformation digitale un succès',
		              subtitle: 'Saviez-vous que seule 1 entreprise sur 5 parvient à concrétiser ses projets d’innovation?',
                  body: 'La difficulté de réaliser avec succès les projets de transformation digitale est réelle et empêche les entreprises de transformer durablement l’innovation en valeur et de répondre aux nouvelles opportunités commerciales.',
                  categories: {
                    work: {
                      title: 'Notre valeur',
                      subtitle: 'Chez Digit alce, nous aidons les entreprises à réaliser leurs projets de transformation digitale, grâce à notre méthode Innov&scale®, en 5 étapes structurées et innovantes.',
                      body: ''
                    },
                    method: {
                      title: 'Notre méthode',
                      subtitle: 'Une méthode unique et innovante en 5 étapes pour réaliser et mettre à l’échelle vos projets d’innovation.',
                      body: '',
                      icons: [
                        'Envisager',
                        'Co-créer',
                        'Préparer',
                        'Affiner',
                        'Industrialiser',
                      ]
                    },
                    benefits: {
                      title: 'Les bénéfices Innov&Scale®',
                      subtitle: '"Chaque étape doit être réalisée dans l\'ordre avec rigueur et persévérance, la méthode Innov&Scale® nous permet de mener à bien ce projet du début à la fin"',
                      body: 'Yves Antier - Vice président et Directeur général de FACOM, groupe Stanley Black & Decker'
                    },
                    tool: {
                      title: 'Innov&Scale® 2.0',
                      subtitle: 'Un outil digital unique pour concrétiser et partager en temps réel son projet d\'innovation',
                      body: 'Innov&Scale® 2.0 permet de réaliser avec succès en temps réel votre transformation digitale grâce notre méthode'
                    },
                    'use-case': {
                      title: 'Cas d\'usage',
                      subtitle: 'Découvrez comment la marque d\'outillage FACOM a transformé sa promesse de garantie à vie avec la méthode Innov&Scale®',
                      body: '',
                    }
                  }
                },
                about: {
                  title: 'À Propos'
                },
                benefits: {
                  title: 'Bénéfices',
                  items: [
                    {
                      title: 'Vision ',
                      body: 'Créez et partagez une vision commune du projet d\'innovation au sein de votre entreprise ou d\'un écosystème.'
                    },
                    {
                      title: 'Cohésion ',
                      body: 'Partagez l\'avancement de votre projet d\'innovation avec l\'ensemble des participants et respectez les objectifs tout au long de sa mise en œuvre.<br /><br />Faites émerger une stratégie collective qui favorise le dialogue entre les participants et améliore la cohésion au sein de votre organisation.'
                    },
                    {
                      title: 'Efficacité ',
                      body: 'Garantissez la mise en oeuvre efficace de votre projet d\'innovation grâce à l\'alignement des différentes parties prenantes.'
                    },
                    {
                      title: 'Succès',
                      body: 'Atteignez les objectifs de votre projet d\'innovation grâce à une méthode concrète, étape par étape.<br /><br />Garantissez le succès de votre transformation digitale en assurant l\'intégration de la méthode au sein de votre entreprise ou d\'un écosystème, de la co-création à l\'industrialisation.'
                    },
                    {
                      title: 'Anticipation ',
                      body: 'Anticipez les étapes nécessaires pour éviter de perdre du temps et de faire face au "mur de l\'industrialisation".'
                    },
                    {
                      title: 'Contrôle ',
                      body: 'Maitrisez l\'ensemble des tâches à accomplir pour réaliser et industrialiser votre innovation.'
                    }
                  ]
                },
                method: {
                  title: 'La méthode Innov&Scale®',
                  subtitle: 'Une méthode unique et innovante en 5 étapes pour réaliser avec succès et mettre à l’échelle vos transformations digitales.',
                  body: 'Les 5 étapes de la méthode Innov&Scale® guident le projet de transformation digitale vers le succès, par étapes successives et réalisables.<br/><br/>La méthode Innov&Scale® est le mélange parfait entre méthodes innovantes (design thinking, mural…) et méthodes traditionnelles (management du changement…) au bon endroit et au bon moment.<br/><br/>Chaque étape nécessite la réalisation d\'un travail préalable, puis la réalisation d\'un livrable qui formalise le travail accompli.<br/><br/>Chaque étape nourrit l\'étape suivante et s\'inscrit dans un processus complet.<br/><br/>Les 5 étapes permettent au collaborateur de suivre et de partager pas à pas l\'avancée du projet de transformation digitale vers sa réalisation et l\'atteinte de ses objectifs.',
                  items: [
                    {
                      title: 'Envisager: Partager une vision unique du projet d\'innovation',
                      body: 'A travers le cadrage et l\'alignement stratégique, créez une vision unique du projet d\'innovation et garantissez un alignement complet des parties prenantes sur les objectifs, la communication, et les contraintes du projet.'
                    },
                    {
                      title: 'Co-créer: Co-créer la future solution',
                      body: 'A travers l\'atelier de co-création, co-créez avec les utilisateurs finaux, la solution envisagée en utilisant des méthodes et outils innovants.'
                    },
                    {
                      title: 'Préparer: Préparer le pilote de la solution',
                      body: 'Utilisez une méthode agile pour développer rapidement la solution et préparez les objectifs et l\'environnement du pilote.'
                    },
                    {
                      title: 'Affiner: Affiner la solution et organiser l\'industrialisation',
                      body: 'Réalisez un pilote pour garantir l\'utilisation réelle des nouveaux processus et de la nouvelle solution. Tirez les leçons de l\'expérience pour ajuster votre solution à son environnement. Créez un dossier d\'industrialisation précis et complet pour préparer et anticiper la mise à l\'échelle de la solution.'
                    },
                    {
                      title: 'Industrialiser: Industrialiser la solution',
                      body: 'Développez une organisation et un processus complet de gestion du changement afin d\'éviter les écueils et de garantir l\'atteinte des objectifs du projet d\'innovation. Préparez l\'environnement post-industrialisation pour intégrer le projet dans les processus de base de l\'entreprise.'
                    }
                  ]
                },
                tool: {
                  title: 'Innov&Scale® 2.0',
                  subtitle: 'Une web app unique de gestion de projet d’innovation qui garantit le succès de votre projet de transformation digitale grâce à notre méthode déposée.',
                  body: 'Innov&scale® 2.0 vous permet de réaliser la transformation digitale en temps réel grâce à la méthode Innov&scale®',
                  items: [
                    {
                      title: 'Visualisation simple et rapide du projet d\'innovation',
                      body: 'Le tableau de bord Innov&Scale® 2.0 offre un moyen simple et rapide de visualiser la situation du projet d\'innovation au fur et à mesure de l\'avancement de l\'utilisation de la méthode Innov&Scale®.<br/><br/>Les graphiques, en plus d\'accompagner l\'organisation vers la réalisation du projet d\'innovation, servent également d\'outils de gestion de l\'avancement. En effet, pour chacune des 5 étapes, l\'outil détermine le taux de réalisation du projet et le temps passé.'
                    },
                    {
                      title: 'Chacune des 5 etapes est détaillée',
                      body: 'Chaque sous-étape a son propre taux de complétude et sa propre gestion du temps détaillée.<br/><br/>Le taux de complétude correspond à la progression en temps réel de l\'organisation vers la réalisation complète des étapes et de ses objectifs.<br/><br/>La gestion du temps correspond au respect des délais prévisionnels indiqués pour chaque sous-étape'
                    },
                    {
                      title: 'Exhaustivité du travail préalable à faire et des produits à livrer pour chaque sous-étape',
                      body: 'Application de la méthode Innov&Scale® à travers la mise en œuvre d\'actions concrètes et compréhensibles à chaque sous-étape de la méthode.<br/><br/>Les exigences en matière de travaux préalables et de livrables à réaliser à chaque sous-étape sont clairement définies. Leur réalisation contribue à l\'avancement du projet et donc à la réussite de la transformation digitale.'
                    },
                    {
                      title: 'Mise à jour facile et rapide de chaque tâche à accomplir',
                      body: 'Les tâches préalables et les livrables sont facilement et rapidement mis à jour grâce à un questionnaire.'
                    }
                  ]
                },
                'use-case': {
                  title: 'Cas d\'usage',
                  subtitle: 'Découvrez des exemples de cas d\'usage de la méthode Innov&Scale® dans différents domaines et organisations',
                  'facom-pre-cta': 'Découvrez l\'expérience<br/>FACOM Innov&Scale®',
                  items: [
                    {
                      title: 'Ventes & Marketing ',
                      body: 'Créer une boutique en ligne entièrement intégrée avec les distributeurs<br/><br/>Transformer un catalogue papier pour augmenter l\'efficacité des ventes et réduire les coûts'
                    },
                    {
                      title: 'Après-vente ',
                      body: 'Transformer les processus traditionnels d\'après-vente<br/><br/>Dynamiser l\'activite après-vente '
                    },
                    {
                      title: 'Audit & Qualité ',
                      body: 'Garantir un audit complet et la conformité des produits finis<br/><br/>Aligner l\'écosystème du recyclage pour une meilleure performance'
                    },
                    {
                      title: 'Production & logistique ',
                      body: 'Éviter les défaillances logistiques grâce à la traçabilité<br/><br/>Modifier l\'écosystème de production de bout-en-bout pour garantir une livraison dans les délais'
                    },
                    {
                      title: 'Finance',
                      body: 'Éviter les réclamations au sein d\'un écosystème de distributeurs<br/><br/>Créer un nouveau service financier facile à utiliser'
                    },
                    {
                      title: 'Ressources humaines ',
                      body: 'Adapter l\'espace de travail à l\'usage post-Covid<br/><br/>Reconstruire l\'accueil des employés de la génération Z pour mieux les retenir'
                    }
                  ]
                },
                'use-case-facom': {
                  title: 'Cas d\'usage FACOM',
                  subtitle: 'La garantie à vie facom: plus simple, plus rapide, plus verte',
                  body: 'Comment avons-nous remodelé la garantie à vie FACOM avec Innov&Scale®?',
                  items: [
                    {
                      title: 'Envisager',
                      body: 'À travers le cadrage et l\'alignement stratégique, une vision unique et partagée du projet a été créée.<br/><br/>Les parties prenantes ont défini ensemble des objectifs uniques, une communication claire, des créateurs et des utilisateurs de la solution qui resteront valables jusqu\'à la fin de la mise en œuvre. '
                    },
                    {
                      title: 'Co-créer',
                      body: 'La volonté forte de FACOM de rester proche de ses clients et de ses distributeurs a naturellement conduit à la co-création de sa nouvelle solution avec ses clients et distributeurs FACOM. <br/><br/>Grâce à une session de co-création participative utilisant le design-thinking et les méthodes agiles, l\'objectif a été atteint avec succès: <br/><br/>Partager la vision, converger et créer le storyboard de la nouvelle solution.'
                    },
                    {
                      title: 'Préparer',
                      body: 'Le développement de la solution et le dossier pilote ont été réalisés en même temps. <br/><br/>Grâce à une méthode de travail agile, FACOM a pu développer en deux mois seulement une application digitale prête à être lancée. <br/><br/>Dans le même temps, un dossier pilote, réunissant les éléments principaux de la solution à tester, a été créé.'
                    },
                    {
                      title: 'Affiner',
                      body: 'La décision de réaliser le pilote a été partagé et approuvé par les parties prenantes de FACOM. <br/><br/>L\'objectif du pilote était de donner vie à la décision de qualification de la garantie à vie FACOM grâce au nouveau processus et à la nouvelle solution. Le pilote a été l\'occasion d\'améliorer la solution par des modifications de processus et des modifications techniques. <br/><br/>Simultanément au pilote, les parties prenantes de FACOM ont défini un dossier d\'industrialisation pour préparer une mise à l\'échelle efficace.'
                    },
                    {
                      title: 'Industrialiser',
                      body: 'Une méthode efficace de gestion du changement a été utilisée pour faire évoluer avec succès le nouveau processus et l\'outil de garantie à vie FACOM, de 200 à plus de 10 000 clients.<br/><br/>Anticiper l\'après-projet pour en faire une activité principale à l\'entreprise.'
                    }
                  ],
                  testimony: {
                    title: 'Témoignage d\'Yves Antier, Vice Président et Directeur Général de FACOM, groupe Stanley Black&Decker',
                    body: '" Nous avions identifié une idée de digitalisation d\'une des valeurs piliers de la marque Facom, et chacun y allait de sa solution.<br/>La Méthode a fait deux choses que nous aurions été incapables de faire seuls:<br/><ul><li>Partager une vision unique du projet<li>Co-créer la solution avec des utilisateurs finaux et nos partenaires distributeurs</ul>Ces deux éléments ont été fondateurs dans le succès de ce projet.<br/><br/>La vitesse d\'exécution dans la préparation du test grandeur nature et les améliorations successives rapides au contact d\'un esprit Start Up, sont souvent incompatibles avec le mode de fonctionnement en Matrice des grands groupes.<br/><br/>Enfin le point d\'achoppement est souvent l\'industrialisation car il faut mettre des montants d\'investissement plus importants sur la table ce qui fait appel à une multitudes de fonctions internes, seule la préparation du business case structuré permet d\'emmener le projet à terme.<br/>En fait chacune des étapes doit être réalisée dans l\'ordre avec rigueur et persévérance, la méthode Innov&Scale® permet de mener ce projet de bout en bout avec succès.<br/><br/>Je pense que la méthode Innov&Scale® a apporté la confiance collective pour mener à bien le projet, chaque étape étant structurante, avec un chef de projet extérieur qui nous fait avancer plus vite.<br/><br/>Grâce à cette méthode, la marque a été valorisée auprès des utilisateurs finaux, de nos partenaires de distribution et en interne. Ce projet pourrait faire boule de neige pour d\'autres marques et d\'autres pays du groupe."'
                  }
                },
                services: {
                  title: 'Services',
                  'cta-pre-text': 'N\'hésitez pas à nous contacter afin d\'obtenir un devis personnalisé',
                  items: [
                    {
                      title: 'Coaching',
                      body: 'Accompagner les directeurs de projets dans l\'utilisation de la méthode Innov&Scale®.',
                      icon: 'fas fa-users'
                    },
                    {
                      title: 'Formation ',
                      body: 'Pour une appropriation rapide de la méthode, nous proposons des modules de formation à partir de cas pratiques afin d\'assurer un haut niveau de compétence.',
                      icon: 'far fa-play-circle'
                    },
                    {
                      title: 'Innov&Scale® 2.0',
                      body: 'Spécifiquement conçu pour soutenir et outiller la mise en oeuvre de la méthode Innov&Scale®.<br/><br/>L\'outil vous permet de visualiser en temps réel, rapidement et facilement le taux d\'avancement du projet d\'innovation et le temps passé.',
                      icon: 'fas fa-chart-line'
                    }
                  ],
                  pricings: [
                    {
                      title: 'Business',
                      body: 'De 1 à 50 projet(s)/utilisateur(s)<br/><br/>Accès à la plateforme<br/><br/>Maintenance évolutive<br/><br/>4 jours de formation initiale<br/><br/>2 jours de coaching annuel'
                    },
                    {
                      title: 'Entreprise',
                      body: 'De 1 to 500 projet(s)/utilisateur(s)<br/><br/>Accès à la plateforme<br/><br/>Maintenance évolutive<br/><br/>5 jours de formation initiale<br/><br/>3 jours de coaching annuel'
                    }
                  ]
                },
                contact: {
                  title: 'Contact',
                  body: 'Intéressé par la méthode Innov&Scale®? Vous souhaitez plus d\'informations?<br/><br/>N\'hésitez pas à nous contacter à l\'adresse <a href="mailto:contact@digitalce.fr">contact@digitalce.fr</a><br/><br/>Nous reviendrons vers vous très rapidement.'
                }
              }
            },
          }
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
