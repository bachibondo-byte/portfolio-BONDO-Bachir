/* script.js — version qui utilise EXACTEMENT les noms de fichiers de ta capture d'écran */

/* MEDIA_FILENAMES EXACTS (NE PAS RENOMMER) */
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
      desc_en: "Manufacturing of a threading plate in steel using drill press, tapping, and tolerance verification."
    },
    {
      id: "hammer_body",
      title_fr: "Corps du marteau",
      title_en: "Hammer Body",
      img: "hammer-body-1.jpg.heic",
      date: "Winter 2025",
      tools: "Lathe machine; measurement tools",
      desc_fr: "Usinage du manche au tour: facing, turning, grooving.",
      desc_en: "Lathe machining of a hammer handle from raw material, including facing, turning, and grooving."
    },
    {
      id: "hammer_head",
      title_fr: "Tête du marteau",
      title_en: "Hammer Head",
      img: "hammer-head-1.jpg.heic",
      date: "Winter 2025",
      tools: "Milling machine; SolidWorks",
      desc_fr: "Usinage complet de la tête au fraisage; contrôle précis des profondeurs.",
      desc_en: "Milling of a hammer head, involving precise dimensioning, setup, and quality control."
    },
    {
      id: "scan3d",
      title_fr: "Numérisation 3D",
      title_en: "3D Scanning",
      img: "numerisation3d.jpg.JPG",
      date: "Winter 2025",
      tools: "AMETEK 3D Scanner; point cloud software",
      desc_fr: "Acquisition de nuage de points et reconstruction 3D; reverse engineering.",
      desc_en: "Use of a portable 3D scanner to capture geometry and generate a digital model."
    },
    {
      id: "phone_holder",
      title_fr: "Support de téléphone",
      title_en: "Phone Holder",
      img: "printing2.jpg.HEIC",
      date: "Winter 2026",
      tools: "SolidWorks; Haas CNC Controller",
      desc_fr: "Conception et usinage complet; gestion des offsets G54 et dépannage en temps réel.",
      desc_en: "Complete design and manufacturing; programming and setup on a Haas CNC controller."
    },
    {
      id: "f1_wing",
      title_fr: "Aile avant F1",
      title_en: "Formula 1 Front Wing",
      img: "image-F1-frontwings1.jpg.HEIC",
      date: "Winter 2026",
      tools: "SolidWorks; 3D Printer",
      desc_fr: "Conception avancée et préparation pour impression 3D; optimisation orientation/supports.",
      desc_en: "Design and manufacturing of a complex Formula 1 front wing; optimized for 3D printing."
    },
    {
      id: "mg996r",
      title_fr: "Bras robotique MG996R",
      title_en: "MG996R Robotic Arm",
      img: "robot-arm.jpg.HEIC",
      date: "Winter 2026",
      tools: "SolidWorks; MG996R servos",
      desc_fr: "Assemblage CAO et optimisation pour impression 3D; gestion des tolérances pour articulations.",
      desc_en: "Design of a robotic arm actuated by MG996R servos; optimized for additive manufacturing."
    }
  ],
  videos: {
    cnc: "cnc.mp4.MOV",
    cnc2: "cnc2.mp4.MOV",
    printing: "printing.mp4.MP4"
  },
  miscThumbs: [
    "aileron1.jpg.HEIC",
    "aileron2.jpg.JPG",
    "cnc2.jpg.HEIC",
    "hammer-body-2.jpg.heic",
    "hammer-head-2.jpg.jpg",
    "numerisation3d-2.jpg.JPG",
    "piston1.jpg.HEIC",
    "piston2.jpg.PNG",
    "piston3.jpg.PNG"
  ]
};

/* Traductions FR/EN (inchangées) */
const I18N = {
  fr: {
    hero_title: "Portfolio — Projets de fabrication & CAO",
    hero_lead: "Go crazy — découvrez des projets réels, des vidéos CNC et des modèles 3D.",
    projects_title: "Projets",
    cnc_title: "CNC & Programmation",
    cnc_caption: "Vidéo machine usinée",
    cnc2_caption: "Programmation Fusion 360",
    additive_title: "Impression 3D & CAO",
    contact_title: "Contact"
  },
  en: {
    hero_title: "Portfolio — Manufacturing & CAD Projects",
    hero_lead: "Go crazy — explore real projects, CNC videos and 3D models.",
    projects_title: "Projects",
    cnc_title: "CNC & Programming",
    cnc_caption: "Machine machining video",
    cnc2_caption: "Fusion 360 programming",
    additive_title: "3D Printing & CAD",
    contact_title: "Contact"
  }
};

/* --- Génération des cartes projets --- */
function buildProjects(lang){
  const grid = document.getElementById('projectsGrid');
  if(!grid) return;
  grid.innerHTML = '';
  MEDIA.projects.forEach(p=>{
    const card = document.createElement('article');
    card.className = 'project-card';
    card.dataset.id = p.id;
    card.innerHTML = `
      <div class="project-thumb"><img src="${p.img}" alt="${lang==='fr'?p.title_fr:p.title_en}"></div>
      <div class="project-meta">
        <h4>${lang==='fr'?p.title_fr:p.title_en}</h4>
        <p>${p.date} • ${p.tools}</p>
      </div>
    `;
    card.addEventListener('click', ()=> openProjectModal(p, lang));
    grid.appendChild(card);
  });
}

/* --- Modal projet --- */
function openProjectModal(p, lang){
  const modal = document.getElementById('projectModal');
  const body = document.getElementById('modalBody');
  body.innerHTML = `
    <h2>${lang==='fr'?p.title_fr:p.title_en}</h2>
    <p><strong>${p.date}</strong> • ${p.tools}</p>
    <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:12px">
      <img src="${p.img}" style="max-width:320px;border-radius:8px;box-shadow:0 8px 20px rgba(0,0,0,0.6)">
      <div style="flex:1">
        <p>${lang==='fr'?p.desc_fr:p.desc_en}</p>
        <p style="color:var(--muted)">Outils & logiciels: ${p.tools}</p>
        <div style="margin-top:12px">
          <strong>Fichiers associés:</strong>
          <ul id="assocFiles" style="margin:8px 0 0 18px;color:var(--muted)"></ul>
        </div>
      </div>
    </div>
  `;
  // lister quelques fichiers associés si présents
  const assoc = document.getElementById('assocFiles');
  const related = MEDIA.miscThumbs.filter(f => f.toLowerCase().includes(p.id.split('_')[0]));
  if(related.length===0){
    // fallback: afficher quelques miniatures génériques
    MEDIA.miscThumbs.slice(0,4).forEach(f=> {
      const li = document.createElement('li'); li.textContent = f; assoc.appendChild(li);
    });
  } else {
    related.forEach(f=> { const li = document.createElement('li'); li.textContent = f; assoc.appendChild(li); });
  }
  modal.setAttribute('aria-hidden','false');
}

/* --- Fermer modal --- */
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
  buildProjects(lang);
  if(langToggle) langToggle.textContent = (lang==='fr'?'English':'Français');
}
if(langToggle) langToggle.addEventListener('click', ()=>{
  const current = document.body.getAttribute('data-lang') || 'fr';
  setLang(current==='fr'?'en':'fr');
});

/* --- Background change on scroll (intersection) --- */
const panels = document.querySelectorAll('.panel');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{
    if(en.isIntersecting){
      const bg = en.target.dataset.bg || 'metal';
      document.body.dataset.activeBg = bg;
    }
  });
},{threshold:0.45});
panels.forEach(p=>observer.observe(p));

/* --- Init --- */
document.addEventListener('DOMContentLoaded', ()=>{
  const initialLang = document.body.getAttribute('data-lang') || 'fr';
  setLang(initialLang);

  // assigner les sources vidéos EXACTES
  const v1 = document.getElementById('videoCNC');
  const v2 = document.getElementById('videoCNC2');
  const v3 = document.getElementById('videoPrinting');
  if(v1){
    v1.querySelector('source').src = MEDIA.videos.cnc;
    v1.load();
  }
  if(v2){
    v2.querySelector('source').src = MEDIA.videos.cnc2;
    v2.load();
  }
  // optional printing video if present in DOM
  if(v3){
    v3.querySelector('source').src = MEDIA.videos.printing;
    v3.load();
  }

  // préchargement images (tentative)
  MEDIA.projects.forEach(p=>{
    const img = new Image(); img.src = p.img;
  });
  MEDIA.miscThumbs.forEach(f=>{ const i = new Image(); i.src = f; });

  // close modal with Esc
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') document.getElementById('projectModal').setAttribute('aria-hidden','true'); });
});
