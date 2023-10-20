Vue.component("modal-service", {
  data: function () {
    return {
      devloper: "RahimDev",
    };
  },
  template: `
  <div>
    <div
        class="modal fade"
        :id="'exampleModal'+identifiant"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{title}}</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
            <ul>
              <li v-for="line in lines" :key="lines.id">
                {{line}}
              </li>
            </ul>
          </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
  </div>
  `,
  props: ["lines","identifiant","title"],
});

var vm = new Vue({
  el: "#rahim-app",
  data: {
    first_name: "Abderrahim",
    last_name: "Mechache",
    Email: " abderrahim.mechache@univ-lyon1.fr",
    section: "Home",
    my_about: [
      "I'm Mechache Abderrahim, a 23-year-old Algerian student pursuing my Ph.D. at the University of Lyon 1. My research primarily focuses on graph theory and machine learning. I'm deeply passionate about these fields, driven by an insatiable curiosity and the desire to unravel complex problems. Beyond my academic pursuits, I'm an avid web developer, and I take pleasure in crafting innovative and user-friendly web applications. My commitment to my studies and my creative endeavors reflects my strong work ethic and dedication.",
      "In addition to my academic and technological pursuits, I approach life with a sense of seriousness and purpose. I consider myself a diligent and detail-oriented individual who values the importance of both intellectual and personal growth. My commitment to learning is unwavering, and I'm constantly seeking new avenues for self-improvement. With a deep sense of curiosity and a strong work ethic, I aspire to make meaningful contributions to both my academic field and the broader community."
    ],
    currentMode: "light", // Initialisez le mode initial
    modeBtnClass: "fas fa-moon", // Classe CSS de l'icône
    modeBtnColor: "blue", // Couleur de l'icône
    showModal: false,
    services: [
      {
        id: 0,
        name: "ML Engeneer",
        title:"Machine Learning",
        description:
          "design and develop machine learning models and systems to solve complex problems and enable intelligent decision-making.",
        modal_visible: false,
        languages : [
          {lang : 'Python',prog : 90, icon : 'fab fa-python'},
          {lang : 'SKLearn',prog : 80, icon : 'fas fa-cogs'},
          {lang : 'Tensorflow',prog : 70, icon : 'fa-solid fa-t'},
          {lang : 'Pytorch',prog : 70, icon : 'fa-solid fa-p'}
        ],
        icon: "robot",
        lines: [
          "Develop predictive algorithms",
          "Enhance data-driven decision-making.",
          "Create intelligent applications.",
          "Optimize model performance.",
          "Solve complex problems with AI.",
          "Create DNN, CNN, RNN and GNN models."
        ],
      },
      {
        id: 1,
        name: "Data Scientist",
        title:"Data Science",
        description:
          "analyze large datasets to extract valuable insights and trends, helping organizations make data-driven decisions. ",
        modal_visible: false,
        languages : [
          {lang : 'Python',prog : 90, icon : 'fab fa-python'},
          {lang : 'MatplotLib',prog : 80, icon : 'fab fa-python'},
          {lang : 'Seaborn',prog : 80, icon : 'fas fa-chart-line'},
          {lang : 'R',prog : 50, icon : 'fab fa-r-project'},
        ],
        icon: "chart-line",
        lines: [
          "Unearth data insights.",
          "Predict trends with analytics.",
          "Unlock business value.",
          "Drive data-driven decisions.",
          "Mine valuable information."
        ],
      },
      {
        id: 2,
        name: "Web Devloper",
        title:"Web Devlopment",
        description:
          "build and maintain websites and web applications, ensuring they function smoothly and provide an excellent user experience. ",
        modal_visible: false,
        languages : [
          {lang : 'html',prog : 90, icon : 'fab fa-html5'},
          {lang : 'css & bootstrap',prog : 90, icon : 'fab fa-css3-alt'},
          {lang : 'Js & VueJs',prog : 70, icon : 'fab fa-js'},
          {lang : 'Django',prog : 60, icon : 'fab fa-python'},
          {lang : 'Php',prog : 40, icon : 'fab fa-php'}
        ],
        icon: "code",
        lines: [
          "Build responsive websites.",
          "Create seamless user experiences.",
          "Optimize for performance.",
          "Implement interactive features.",
          "Craft visually appealing designs."
        ],
      },
      {
        id: 3,
        name: "DataBase Administrator",
        title:"DataBase Administration",
        description:
          "Database Administrators manage and maintain databases, ensuring data integrity, security, and availability for efficient data retrieval.",
        modal_visible: false,
        languages : [
          {lang : 'SQL',prog : 90, icon : 'fa-solid fa-s'},
          {lang : 'MySql',prog : 70, icon : 'fas fa-database'},
          {lang : 'MangoDB',prog : 40, icon : 'fas fa-database'},
          {lang : 'Neo4J',prog : 40, icon : 'fa-solid fa-diagram-project'},
        ],
        icon: "database",
        lines: [
          "Ensure data integrity.",
          "Manage database systems.",
          "Enhance data security.",
          "Optimize query performance.",
          "Ensure data availability."
        ],
      },
      {
        id: 4,
        name: "Data Entry",
        title:"Data Entry",
        description:
          "Data Entry professionals input, verify, and organize data accurately into computer systems, maintaining data quality and organization.",
        modal_visible: false,
        languages : [
          {lang : 'BeautifulSoup',prog : 70, icon : 'fas fa-code'},
          {lang : 'Scrapy',prog : 65, icon : 'fas fa-spider'},
          {lang : 'Selenium',prog : 40, icon : 'fas fa-robot'}
        ],
        icon: "table",
        lines: [
          "Accurate data input.",
          "Maintain data organization.",
          "Ensure data quality.",
          "Efficient data handling.",
          "Data accuracy assurance."
        ],
      },
    ],
    formations: [
      {id:0,abrv: "GRADIENT Project", title:'Graph models and analysis of 3D complex structers',type: "PhD Student", prime: "2023- Now", univ:'Lyon 1 University', place:'Lyon, France',show:false, link:'https://gradient.projet.liris.cnrs.fr/',
      description :
      `Shape classification is one of the most important tasks in computer vision as demonstrated by the large body of work dealing with 3D shape analysis. Recent advances in 3D data acquisition as well as the availability of large 3D repositories have been instrumental in the design of new and more efficient algorithms for shape classification. 3D shapes may be represented by graphs and consequently, graph techniques may be strongly useful for their classification. In the GRADIENT project, we address the problem of 3D protein deformable shapes classification. Proteins are macromolecules characterized by deformable and complex shapes which are linked to their function making their classification an important task namely for drug discovery and disease characterization. Protein shapes can be standardly and robustly generated from their high-resolution 3D structures available in the Protein Data Bank. Their conformational space can be sampled using molecular dynamics simulations. In the GRADIENT project, proteins are assimilated to 3D dynamic deformable objects and their surfaces are represented by graphs, such as triangular tessellations or meshes. Since molecular dynamics can be used to efficiently sample the trajectories of molecular 3D objects, they constitute a perfect case of study for dynamic graph matching.

      The goal of the GRADIENT project is to develop a platform containing robust techniques and algorithms based on graphs, algorithms and machine learning able to classify and analyze 3D deformable (dynamic) shapes of proteins`},
      
      {id:1, title:'Advanced Information Systems',abrv: "SIA", type: "Master degree's", rang: '2nd between 38 students', prime: "2021-2023", univ:'Bejaia University', place:'Bejaia, Algeria', description :"This formation descritpion", show:false},
      {id:2, title:'Information Systems',abrv: "SI", type: "Licence degree's", rang: '2nd between 55 students', prime: "2018-2021", univ:'Bejaia University', place:'Bejaia, Algeria', description :"This formation descritpion", show:false},
      {id:3, title:"Bachelor's degree in experimental sciences",abrv: "S", type: "bachelor's degree", prime: "2018", univ:' Bechloul High School', place:'Bouira, Algeria', description :"This formation descritpion", show:false},
    ],
    projects: [
      {id:0, type:'indivdual', abrv:'Portfolio',title:'Personnel portfolio', year:'2023',show:false,place:'Remote', company:'Personnel Project',
      description:'Personnel portfolio using html, css, Bootstrap, VueJS'}
    ],
    papers: [
      {id:0, abrv:'M2 Paper',title:'Enhancing Decision-Making in Autonomous Vehicles: A Study on the Integration of K-Nearest Neighbor Algorithm and Reinforcement Learning', year:'2023', conf: 'Coc 2023 Tunisia', show:false, place:'Remote', univ:'Bejaia University',
      description:
      `
      This paper focuses on decision-making for autonomous vehicles using reinforcement learning. The primary objective is to develop a robust approach for the overall behavior of autonomous vehicles by leveraging the k-nearest neighbors (KNN) algorithm. The proposed method enables the vehicle to make appropriate decisions based on learned situations, enhancing its adaptability and performance. Furthermore, we plan to extend this approach to incorporate additional criteria such as driving comfort, rule adherence, and safety. By equipping autonomous vehicles with mechanisms to effectively respond to road disruptions, we aim to improve their navigation capabilities. Experimental results demonstrate a significant improvement in the model's performance. Additionally, the proposed approach holds the potential for addressing decision-making challenges in complex urban environments. This research contributes to the advancement of autonomous vehicles, enabling safe and efficient operations without human intervention.
      `
      ,authors:'A. MECHACHE, T. CHENACHE, S. AISSANI and Mawlod Omar'}
    ]
  },
  methods: {
    show_Modal(x) {
      this.services[x].modal_visible=true
    },
    show(x) {
      // Faites quelque chose en réponse au clic, par exemple afficher une section spécifique
      this.section = x;
    },
    afficherModal() {
      alert('executed')
      this.showModal = true;
    },
    toggleMode() {
      const root = document.documentElement;

      if (this.currentMode === "light") {
        this.currentMode = "dark";
        this.modeBtnClass = "fa-solid fa-sun";
        this.modeBtnColor = "yellow";
        root.style.setProperty("--mode-", "dark");
        root.style.setProperty("--second-color", "rgba(233,230,248,1)");
        root.style.setProperty("--background-color", "rgb(47, 46, 46)");
      } else {
        this.currentMode = "light";
        this.modeBtnClass = "fas fa-moon";
        this.modeBtnColor = "blue";
        root.style.setProperty("--mode-", "light");
        root.style.setProperty("--second-color", "rgba(13,23,48,1)");
        root.style.setProperty("--background-color", "white");
      }
    },
  },
});
