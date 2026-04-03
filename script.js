/* script.js — version améliorée : modals riches, compétences apprises, textes CNC */
/* Utilise EXACTEMENT les noms de fichiers de ta capture d'écran (NE PAS RENOMMER) */

const MEDIA = {
  projects: [
    {
      id: "plaque",
      title_fr: "Plaque de taraudage",
      title_en: "Threading Plate",
      img: "plaque-taraudage.jpg.heic",
      date: "Winter 2025",
      tools: "SolidWorks; Drill Press; Manual Tapping",
      desc_fr: "Fabrication d'une plaque de taraudage en acier; perçage, taraudage et vérification des tolérances.",
      desc_en: "Manufacturing of a threading plate in steel using drill press, tapping, and tolerance verification.",
      skills: [
        {fr:"Lecture de plans et interprétation des cotes", en:"Reading technical drawings and interpreting dimensions"},
        {fr:"Perçage et taraudage avec contrôle de tolérances", en:"Drilling and tapping with tolerance checks"},
        {fr:"Contrôle dimensionnel (calibre, pied à coulisse)", en:"Dimensional inspection (calipers, gauges)"}
      ],
      files: ["plaque-taraudage.jpg.heic"]
    },
    {
      id: "hammer_body",
      title_fr: "Corps du marteau",
      title_en: "Hammer Body",
      img: "hammer-body-1.jpg.heic",
      date: "Winter 2025",
      tools: "Lathe machine; measurement tools",
      desc_fr: "Usinage du manche au tour: facing, turning, grooving. Travail sur la précision de l'axe et de la surface.",
      desc_en: "Lathe machining of a hammer handle from raw material, including facing, turning, and grooving.",
      skills: [
        {fr:"Mise en place et alignement d'outil au tour", en:"Setup and tool alignment on the lathe"},
        {fr:"Contrôle de surface et finition", en:"Surface finish control"},
        {fr:"Lecture de plan et sécurité machine", en:"Reading drawings and machine safety"}
      ],
      files: ["hammer-body-1.jpg.heic","hammer-body-2.jpg.heic"]
    },
    {
      id: "hammer_head",
      title_fr: "Tête du marteau",
      title_en: "Hammer Head",
      img: "hammer-head-1.jpg.heic",
      date: "Winter 2025",
      tools: "Milling machine; SolidWorks",
      desc_fr: "Usinage complet de la tête au fraisage; contrôle précis des profondeurs et des profils.",
      desc_en: "Milling of a hammer head, involving precise dimensioning, setup, and quality control.",
      skills: [
        {fr:"Programmation basique d'opérations de fraisage", en:"Basic milling operation programming"},
        {fr:"Contrôle de profondeur et tolérances", en:"Depth control and tolerance verification"},
        {fr:"Préparation et serrage de la pièce", en:"Workholding and setup"}
      ],
      files: ["hammer-head-1.jpg.heic","hammer-head-2.jpg.jpg"]
    },
    {
      id: "scan3d",
      title_fr: "Numérisation 3D",
      title_en: "3D Scanning",
      img: "numerisation3d.jpg.JPG",
      date: "Winter 2025",
      tools: "AMETEK 3D Scanner; point cloud software",
      desc_fr: "Acquisition de nuage de points et reconstruction 3D; reverse engineering. Plusieurs passes pour couvrir toute la surface et post‑traitement du nuage.",
      desc_en: "Use of a portable 3D scanner to capture geometry and generate a digital model.",
      skills: [
        {fr:"Acquisition de nuage de points et alignement de scans", en:"Point cloud acquisition and scan alignment"},
        {fr:"Nettoyage de données et reconstruction 3D", en:"Data cleanup and 3D reconstruction"},
        {fr:"Compréhension des limites de précision du scanner", en:"Understanding scanner accuracy limits"}
      ],
      files: ["numerisation3d.jpg.JPG","numerisation3d-2.jpg.JPG","aileron1.jpg.HEIC","aileron2.jpg.JPG"]
    },
    {
      id: "phone_holder",
      title_fr: "Support de téléphone",
      title_en: "Phone Holder",
      img: "printing2.jpg.HEIC",
      date: "Winter 2026",
      tools: "SolidWorks; Haas CNC Controller",
      desc_fr: "Conception et usinage complet; gestion des offsets G54 et dépannage en temps réel lors du chargement de fichier sur la machine.",
      desc_en: "Complete design and manufacturing; programming and setup on a Haas CNC controller.",
      skills: [
        {fr:"Transition CAO → FAO → machine (G54, offsets)", en:"CAD → CAM → machine workflow (G54, offsets)"},
        {fr:"Dépannage de fichiers et gestion d'outils", en:"File troubleshooting and tool management"},
        {fr:"Contrôle des paramètres de coupe", en:"Cutting parameter control"}
      ],
      files: ["printing2.jpg.HEIC","printing.mp4.MP4"]
    },
    {
      id: "f1_wing",
      title_fr: "Aile avant F1",
      title_en: "Formula 1 Front Wing",
      img: "image-F1-frontwings1.jpg.HEIC",
      date: "Winter 2026",
      tools: "SolidWorks; 3D Printer",
      desc_fr: "Conception avancée et préparation pour impression 3D; optimisation orientation/supports pour pièces fines.",
      desc_en: "Design and manufacturing of a complex Formula 1 front wing; optimized for 3D printing.",
      skills: [
        {fr:"Surfacing avancé en CAO", en:"Advanced CAD surfacing"},
        {fr:"Optimisation pour impression 3D", en:"3D print orientation and support optimization"},
        {fr:"Assemblage multi‑pièces", en:"Multi‑part assembly planning"}
      ],
      files: ["image-F1-frontwings1.jpg.HEIC"]
    },
    {
      id: "mg996r",
      title_fr: "Bras robotique MG996R",
      title_en: "MG996R Robotic Arm",
      img: "robot-arm.jpg.HEIC",
      date: "Winter 2026",
      tools: "SolidWorks; MG996R servos",
      desc_fr: "Assemblage CAO et optimisation pour impression 3D; gestion des tolérances pour articulations et passages de câbles.",
      desc_en: "Design of a robotic arm actuated by MG996R servos; optimized for additive manufacturing.",
      skills: [
        {fr:"Intégration électromécanique basique", en:"Basic electromechanical integration"},
        {fr:"Tolérances pour ajustements mécaniques", en:"Tolerance planning for mechanical fits"},
        {fr:"Préparation de pièces pour impression", en:"Preparing parts for 3D printing"}
      ],
      files: ["robot-arm.jpg.HEIC"]
    }
  ],
  videos: {
    cnc: "cnc.mp4.MOV",
    cnc2: "cnc2.mp4.MOV",
    printing: "printing.mp4.MP4"
  },
  miscThumbs: [
    "aileron1.jpg.HEIC","aileron2.jpg.JPG","cnc2.jpg.HEIC","hammer-body-2.jpg.heic",
    "hammer-head-2.jpg.jpg","numerisation3d-2.jpg.JPG","piston1.jpg.HEIC","piston2.jpg.PNG","piston3.jpg.PNG"
  ]
};

/* Traductions FR/EN */
const I18N = {
  fr: {
    hero_title: "Portfolio — Projets de fabrication & CAO",
    hero_lead: "Go crazy — découvrez des projets réels, des vidéos CNC et des modèles 3D.",
    projects_title: "Projets",
    cnc_title: "CNC & Programmation",
    cnc_caption: "Vidéo machine usinée",
    cnc2_caption: "Programmation Fusion 360",
    cnc_skills_title: "Compétences montrées dans cette vidéo",
    additive_title: "Impression 3D & CAO",
    contact_title: "Contact",
    modal_files: "Fichiers associés",
    modal_skills: "Compétences acquises"
  },
  en: {
    hero_title: "Portfolio — Manufacturing & CAD Projects",
    hero_lead: "Go crazy — explore real projects, CNC videos and 3D models.",
    projects_title: "Projects",
    cnc_title: "CNC & Programming",
    cnc_caption: "Machine machining video",
    cnc2_caption: "Fusion 360 programming",
    cnc_skills_title: "Skills shown in this video",
    additive_title: "3D Printing & CAD",
    contact_title: "Contact",
    modal_files: "Associated files",
    modal_skills: "Skills learned"
  }
};

/* --- Build projects grid --- */
function buildProjects(lang){
  const grid = document.getElementById('projectsGrid');
  if(!grid) return;
  grid.innerHTML = '';
  MEDIA.projects.forEach((p, idx)=>{
    const card = document.createElement('article');
    card.className = 'project-card';
    card.dataset.id = p.id;
    card.innerHTML = `
      <div class="project-thumb"><img src="${p.img}" alt="${lang==='fr'?p.title_fr:p.title_en}" loading="lazy"></div>
      <div class="project-meta">
        <h4>${lang==='fr'?p.title_fr:p.title_en}</h4>
        <p class="muted">${p.date} • ${p.tools}</p>
      </div>
    `;
    // micro interaction: tilt on mousemove
    card.addEventListener('mousemove', (e)=>{
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width/2) / r.width;
      const y = (e.clientY - r.top - r.height/2) / r.height;
      card.style.transform = `perspective(800px) rotateX(${ -y * 6 }deg) rotateY(${ x * 8 }deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', ()=>{ card.style.transform = ''; });
    card.addEventListener('click', ()=> openProjectModal(p, lang));
    grid.appendChild(card);
  });
}

/* --- Open project modal with rich info --- */
function openProjectModal(p, lang){
  const modal = document.getElementById('projectModal');
  const body = document.getElementById('modalBody');
  // build skills list
  const skillsHtml = p.skills.map(s => `<li>${lang==='fr'?s.fr:s.en}</li>`).join('');
  // build files list
  const filesHtml = (p.files || []).map(f => `<li>${f}</li>`).join('');
  body.innerHTML = `
    <div class="modal-grid">
      <div class="modal-left">
        <img src="${p.img}" alt="${lang==='fr'?p.title_fr:p.title_en}" onerror="this.style.opacity=.6;this.nextElementSibling.style.display='block'">
        <div class="img-fallback" style="display:none;color:var(--muted);margin-top:8px">Image non affichable dans ce navigateur (HEIC?).</div>
      </div>
      <div class="modal-right">
        <h2>${lang==='fr'?p.title_fr:p.title_en}</h2>
        <p class="muted"><strong>${p.date}</strong> • ${p.tools}</p>
        <p style="margin-top:12px">${lang==='fr'?p.desc_fr:p.desc_en}</p>
        <h4 style="margin-top:12px">${lang==='fr'?I18N.fr.modal_skills:I18N.en.modal_skills}</h4>
        <ul class="skill-list">${skillsHtml}</ul>
        <h4 style="margin-top:12px">${lang==='fr'?I18N.fr.modal_files:I18N.en.modal_files}</h4>
        <ul class="file-list">${filesHtml || '<li>—</li>'}</ul>
      </div>
    </div>
  `;
  modal.setAttribute('aria-hidden','false');
  // focus for accessibility
  modal.querySelector('.modal-right h2').focus();
}

/* --- Close modal --- */
document.addEventListener('click', (e)=>{
  if(e.target.id==='modalClose' || e.target.id==='projectModal') {
    document.getElementById('projectModal').setAttribute('aria-hidden','true');
  }
});

/* --- Lang toggle --- */
const langToggle = document.getElementById('langToggle');
function setLang(lang){
  document.body.setAttribute('data-lang', lang);
  document.documentElement.lang = (lang==='fr'?'fr':'en');
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    el.textContent = I18N[lang][key] || el.textContent;
  });
  // update CNC captions area text if present
  const cncSkillsTitle = document.getElementById('cncSkillsTitle');
  if(cncSkillsTitle) cncSkillsTitle.textContent = I18N[lang].cnc_skills_title;
  buildProjects(lang);
  if(langToggle) langToggle.textContent = (lang==='fr'?'English':'Français');
}
if(langToggle) langToggle.addEventListener('click', ()=>{
  const current = document.body.getAttribute('data-lang') || 'fr';
  setLang(current==='fr'?'en':'fr');
});

/* --- Background change on scroll --- */
const panels = document.querySelectorAll('.panel');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{
    if(en.isIntersecting){
      const bg = en.target.dataset.bg || 'metal';
      document.body.dataset.activeBg = bg;
      // small CSS class toggle for subtle animation
      document.body.classList.add('bg-transition');
      setTimeout(()=>document.body.classList.remove('bg-transition'), 900);
    }
  });
},{threshold:0.45});
panels.forEach(p=>observer.observe(p));

/* --- Init --- */
document.addEventListener('DOMContentLoaded', ()=>{
  const initialLang = document.body.getAttribute('data-lang') || 'fr';
  setLang(initialLang);

  // assigner les sources vidéos EXACTES et ajouter descriptions sous vidéos
  const v1 = document.getElementById('videoCNC');
  const v2 = document.getElementById('videoCNC2');
  const v3 = document.getElementById('videoPrinting');
  if(v1){
    v1.querySelector('source').src = MEDIA.videos.cnc;
    v1.load();
    // add description block
    const p = document.createElement('p'); p.className='video-desc muted';
    p.textContent = (initialLang==='fr') ? "Compétences: lecture G‑code basique; observation d'usinage; sécurité machine." : "Skills: basic G‑code reading; observing machining; machine safety.";
    v1.parentElement.appendChild(p);
  }
  if(v2){
    v2.querySelector('source').src = MEDIA.videos.cnc2;
    v2.load();
    const p = document.createElement('p'); p.className='video-desc muted';
    p.textContent = (initialLang==='fr') ? "Compétences: simulation Fusion 360; vérification trajectoire d'outil; préparation FAO." : "Skills: Fusion 360 simulation; toolpath verification; CAM prep.";
    v2.parentElement.appendChild(p);
  }
  if(v3){
    v3.querySelector('source').src = MEDIA.videos.printing;
    v3.load();
    const p = document.createElement('p'); p.className='video-desc muted';
    p.textContent = (initialLang==='fr') ? "Compétences: paramétrage impression 3D; optimisation orientation/supports." : "Skills: 3D print setup; orientation/support optimization.";
    v3.parentElement.appendChild(p);
  }

  // préchargement images
  MEDIA.projects.forEach(p=>{ const img = new Image(); img.src = p.img; });
  MEDIA.miscThumbs.forEach(f=>{ const i = new Image(); i.src = f; });

  // close modal with Esc
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') document.getElementById('projectModal').setAttribute('aria-hidden','true'); });

  // initial build
  buildProjects(initialLang);
});
