// ==========================================
// SVGs & Templates
// ==========================================

// Helper: Get dynamic Cat SVG with expressions
function getCatSVG(emotion = 'normal') {
  // Base details
  let eyes = `<circle cx="38" cy="35" r="4" fill="#000"/><circle cx="62" cy="35" r="4" fill="#000"/>`;
  let mouth = `<path d="M 45 42 Q 50 48 55 42" fill="none" stroke="#000" stroke-width="2"/><path d="M 50 42 L 50 45" stroke="#000" stroke-width="2"/><polygon points="48,40 52,40 50,42" fill="#ef476f"/>`;
  let blush_opacity = 0.6;

  if (emotion === 'happy') {
    eyes = `<path d="M 34 35 Q 38 31 42 35" fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/><path d="M 58 35 Q 62 31 66 35" fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/>`;
    mouth = `<path d="M 45 42 Q 50 52 55 42" fill="none" stroke="#000" stroke-width="2"/><path d="M 45 42 Q 50 60 55 42 Z" fill="#ef476f" stroke="#000" stroke-width="2"/>`;
    blush_opacity = 0.9;
  } else if (emotion === 'love') {
    eyes = `<path d="M38 36 L34 32 L38 28 L42 32 Z" fill="#EF476F"/><path d="M62 36 L58 32 L62 28 L66 32 Z" fill="#EF476F"/>`;
    mouth = `<path d="M 45 42 Q 50 48 55 42" fill="none" stroke="#000" stroke-width="2"/>`;
    blush_opacity = 0.9;
  } else if (emotion === 'surprised') {
    eyes = `<circle cx="38" cy="33" r="5" fill="#000"/><circle cx="62" cy="33" r="5" fill="#000"/>`;
    mouth = `<circle cx="50" cy="45" r="4" fill="#000"/>`;
  }

  // Adding cute stripes to the cat
  return `
<svg viewBox="0 0 100 100" class="cat-svg">
  <g id="cat-body">
    <!-- Body -->
    <ellipse cx="50" cy="65" rx="30" ry="25" fill="#F4A261" stroke="#000" stroke-width="3"/>
    <!-- Head -->
    <circle cx="50" cy="35" r="28" fill="#F4A261" stroke="#000" stroke-width="3"/>
    <!-- Head Stripes -->
    <path d="M 50 7 L 50 20 M 40 10 L 43 20 M 60 10 L 57 20" stroke="#E76F51" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
    <!-- Ears -->
    <polygon points="20,25 30,2 45,20" fill="#E76F51" stroke="#000" stroke-width="3"/>
    <polygon points="80,25 70,2 55,20" fill="#E76F51" stroke="#000" stroke-width="3"/>
    <!-- Inner Ears -->
    <polygon points="25,22 30,10 38,20" fill="#F4C2C2"/>
    <polygon points="75,22 70,10 62,20" fill="#F4C2C2"/>
    
    <!-- Face Elements -->
    ${eyes}
    ${mouth}
    
    <!-- Nose -->
    <polygon points="47,38 53,38 50,41" fill="#EF476F" stroke="#000" stroke-width="1.5" stroke-linejoin="round"/>
    
    <!-- Blush -->
    <ellipse cx="32" cy="41" rx="5" ry="3" fill="#EF476F" opacity="${blush_opacity}"/>
    <ellipse cx="68" cy="41" rx="5" ry="3" fill="#EF476F" opacity="${blush_opacity}"/>
    
    <!-- Whiskers -->
    <line x1="12" y1="35" x2="28" y2="37" stroke="#000" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="10" y1="40" x2="28" y2="41" stroke="#000" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="88" y1="35" x2="72" y2="37" stroke="#000" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="90" y1="40" x2="72" y2="41" stroke="#000" stroke-width="1.5" stroke-linecap="round"/>
  </g>
</svg>
  `;
}

function setCatExpression(emotion) {
  const catCont = document.getElementById('cat-svg-container');
  if (catCont) {
    catCont.innerHTML = getCatSVG(emotion);
  }
}

const dogSVG = `
<svg viewBox="0 0 100 100" class="w-full h-full">
  <g>
    <!-- Ears -->
    <ellipse cx="25" cy="45" rx="10" ry="25" fill="#a98467" stroke="#000" stroke-width="3" transform="rotate(20 25 45)"/>
    <ellipse cx="75" cy="45" rx="10" ry="25" fill="#a98467" stroke="#000" stroke-width="3" transform="rotate(-20 75 45)"/>
    <!-- Head -->
    <rect x="25" y="20" width="50" height="45" rx="20" fill="#e2e1dc" stroke="#000" stroke-width="3"/>
    <!-- Snout -->
    <ellipse cx="50" cy="55" rx="15" ry="10" fill="#fff" stroke="#000" stroke-width="2"/>
    <!-- Nose -->
    <ellipse cx="50" cy="52" rx="6" ry="4" fill="#000"/>
    <!-- Eyes -->
    <circle cx="38" cy="35" r="4" fill="#000"/>
    <circle cx="62" cy="35" r="4" fill="#000"/>
    <!-- Mouth -->
    <path d="M 45 58 Q 50 62 55 58" fill="none" stroke="#000" stroke-width="2"/>
    <!-- Tongue -->
    <path d="M 48 60 Q 50 70 52 60 Z" fill="#ef476f" stroke="#000" stroke-width="1"/>
  </g>
</svg>
`;

// Helper: Sunflower SVG with proper multi-petal design
function getSunflowerSVG(size) {
  size = size || 80;
  let petals = '';
  const petalCount = 14;
  for (let i = 0; i < petalCount; i++) {
    const angle = (360 / petalCount) * i;
    petals += `<ellipse cx="50" cy="20" rx="8" ry="18" fill="#FFD166" stroke="#D4A017" stroke-width="1.5" transform="rotate(${angle} 50 50)"/>`;
  }
  // Second inner ring of petals, offset
  for (let i = 0; i < petalCount; i++) {
    const angle = (360 / petalCount) * i + (360 / petalCount / 2);
    petals += `<ellipse cx="50" cy="24" rx="6" ry="14" fill="#FFDD44" stroke="#D4A017" stroke-width="1" transform="rotate(${angle} 50 50)"/>`;
  }
  return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" style="overflow:visible">
    ${petals}
    <circle cx="50" cy="50" r="16" fill="#8B4513" stroke="#5C2D00" stroke-width="2"/>
    <circle cx="50" cy="50" r="12" fill="#A0522D"/>
    <!-- Seed pattern dots -->
    <circle cx="46" cy="46" r="1.5" fill="#5C2D00"/>
    <circle cx="50" cy="44" r="1.5" fill="#5C2D00"/>
    <circle cx="54" cy="46" r="1.5" fill="#5C2D00"/>
    <circle cx="48" cy="50" r="1.5" fill="#5C2D00"/>
    <circle cx="52" cy="50" r="1.5" fill="#5C2D00"/>
    <circle cx="46" cy="54" r="1.5" fill="#5C2D00"/>
    <circle cx="50" cy="56" r="1.5" fill="#5C2D00"/>
    <circle cx="54" cy="54" r="1.5" fill="#5C2D00"/>
    <circle cx="44" cy="50" r="1.2" fill="#5C2D00"/>
    <circle cx="56" cy="50" r="1.2" fill="#5C2D00"/>
  </svg>`;
}

// Helper: Rose SVG with layered spiral petals
function getRoseSVG(size, color) {
  size = size || 70;
  color = color || '#EF476F';
  let darkColor, lightColor;
  if (color === '#EF476F') { darkColor='#C83B5E'; lightColor='#FF7A9A'; }
  else if (color === '#FF6B9D') { darkColor='#C83B5E'; lightColor='#FFA0B4'; }
  else if (color === '#8A2BE2') { darkColor='#4B0082'; lightColor='#BA55D3'; } // Purple
  else if (color === '#1E90FF') { darkColor='#0000CD'; lightColor='#87CEFA'; } // Blue
  else { darkColor='#000'; lightColor='#fff'; }
  return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" style="overflow:visible">
    <!-- Outer petals -->
    <ellipse cx="50" cy="30" rx="20" ry="22" fill="${color}" stroke="${darkColor}" stroke-width="1.5" transform="rotate(0 50 50)"/>
    <ellipse cx="50" cy="30" rx="20" ry="22" fill="${color}" stroke="${darkColor}" stroke-width="1.5" transform="rotate(72 50 50)"/>
    <ellipse cx="50" cy="30" rx="20" ry="22" fill="${color}" stroke="${darkColor}" stroke-width="1.5" transform="rotate(144 50 50)"/>
    <ellipse cx="50" cy="30" rx="20" ry="22" fill="${color}" stroke="${darkColor}" stroke-width="1.5" transform="rotate(216 50 50)"/>
    <ellipse cx="50" cy="30" rx="20" ry="22" fill="${color}" stroke="${darkColor}" stroke-width="1.5" transform="rotate(288 50 50)"/>
    <!-- Middle petals -->
    <ellipse cx="50" cy="35" rx="14" ry="16" fill="${lightColor}" stroke="${darkColor}" stroke-width="1" transform="rotate(36 50 50)"/>
    <ellipse cx="50" cy="35" rx="14" ry="16" fill="${lightColor}" stroke="${darkColor}" stroke-width="1" transform="rotate(108 50 50)"/>
    <ellipse cx="50" cy="35" rx="14" ry="16" fill="${lightColor}" stroke="${darkColor}" stroke-width="1" transform="rotate(180 50 50)"/>
    <ellipse cx="50" cy="35" rx="14" ry="16" fill="${lightColor}" stroke="${darkColor}" stroke-width="1" transform="rotate(252 50 50)"/>
    <ellipse cx="50" cy="35" rx="14" ry="16" fill="${lightColor}" stroke="${darkColor}" stroke-width="1" transform="rotate(324 50 50)"/>
    <!-- Inner spiral center -->
    <circle cx="50" cy="50" r="10" fill="${color}" stroke="${darkColor}" stroke-width="1"/>
    <path d="M50 42 C 55 44, 56 50, 52 54 C 48 58, 44 56, 44 52 C 44 48, 47 45, 50 42Z" fill="${darkColor}" opacity="0.5"/>
  </svg>`;
}

// Helper: Tulip SVG
function getTulipSVG(size, color) {
  size = size || 65;
  color = color || '#FF6B9D';
  const darkColor = '#D44D7A';
  return `<svg viewBox="0 0 100 120" width="${size}" height="${size * 1.2}" style="overflow:visible">
    <!-- Stem -->
    <path d="M50 60 Q48 80 50 110" stroke="#2D8A4E" stroke-width="4" fill="none" stroke-linecap="round"/>
    <!-- Leaf -->
    <path d="M50 85 Q30 70 35 85 Q40 100 50 90" fill="#3CB371" stroke="#2D8A4E" stroke-width="1.5"/>
    <!-- Petals -->
    <path d="M50 20 C35 25 25 40 30 60 Q40 55 50 60" fill="${color}" stroke="${darkColor}" stroke-width="1.5"/>
    <path d="M50 20 C65 25 75 40 70 60 Q60 55 50 60" fill="${color}" stroke="${darkColor}" stroke-width="1.5"/>
    <path d="M50 18 C42 22 38 38 42 58 Q46 54 50 58 Q54 54 58 58 C62 38 58 22 50 18Z" fill="${darkColor}" opacity="0.3"/>
  </svg>`;
}

// Helper: Leaf SVG accent
function getLeafSVG(size, rotation) {
  size = size || 50;
  rotation = rotation || 0;
  return `<svg viewBox="0 0 60 100" width="${size * 0.6}" height="${size}" style="overflow:visible; transform: rotate(${rotation}deg)">
    <path d="M30 5 Q5 30 10 60 Q15 80 30 95 Q45 80 50 60 Q55 30 30 5Z" fill="#3CB371" stroke="#2D8A4E" stroke-width="2"/>
    <path d="M30 15 L30 85" stroke="#2D8A4E" stroke-width="1.5" fill="none"/>
    <path d="M30 30 L20 40" stroke="#2D8A4E" stroke-width="1" fill="none"/>
    <path d="M30 45 L22 52" stroke="#2D8A4E" stroke-width="1" fill="none"/>
    <path d="M30 35 L40 45" stroke="#2D8A4E" stroke-width="1" fill="none"/>
    <path d="M30 50 L38 58" stroke="#2D8A4E" stroke-width="1" fill="none"/>
  </svg>`;
}

// Generate bouquet
function generateBouquetHTML() {
  let html = '';
  
  // Wrapping paper (cone shape at the bottom)
  html += `<div style="position:absolute; left:50%; bottom:-30px; transform:translateX(-50%); z-index:2;">
    <svg viewBox="0 0 200 160" width="200" height="160" style="overflow:visible">
      <!-- Paper wrap -->
      <path d="M20 0 L100 155 L180 0 Z" fill="#FFE4B5" stroke="#073B4C" stroke-width="3"/>
      <path d="M30 0 L100 140 L170 0" fill="none" stroke="#D4A76A" stroke-width="1" stroke-dasharray="4,4"/>
      <!-- Ribbon -->
      <path d="M60 20 Q100 35 140 20" fill="none" stroke="#EF476F" stroke-width="5"/>
      <!-- Ribbon bow left -->
      <ellipse cx="80" cy="12" rx="18" ry="10" fill="#EF476F" stroke="#C83B5E" stroke-width="1.5" transform="rotate(-20 80 12)"/>
      <!-- Ribbon bow right -->
      <ellipse cx="120" cy="12" rx="18" ry="10" fill="#EF476F" stroke="#C83B5E" stroke-width="1.5" transform="rotate(20 120 12)"/>
      <!-- Ribbon knot -->
      <circle cx="100" cy="18" r="6" fill="#C83B5E" stroke="#A02D4A" stroke-width="1.5"/>
    </svg>
  </div>`;

  // Stems (green, fanning out from bottom center)
  const stemAngles = [-35, -25, -15, -5, 5, 15, 25, 35];
  const stemHeights = [170, 190, 200, 195, 195, 200, 185, 175];
  stemAngles.forEach((angle, i) => {
    html += `<div style="position:absolute; left:50%; bottom:20px; width:5px; height:${stemHeights[i]}px; background:linear-gradient(to top, #2D8A4E, #3CB371); border:1.5px solid #1E6B3A; border-radius:3px; transform-origin:bottom center; transform:translateX(-50%) rotate(${angle}deg); z-index:1;"></div>`;
  });
  
  // Flower positions: [{x, y, type, size, rotation}]
  const flowers = [
    // Top row - main showcase flowers
    { x: -70, y: -210, type: 'sunflower', size: 85, rot: -10 },
    { x: 0,   y: -230, type: 'rose',      size: 80, rot: 0, color: '#EF476F' },
    { x: 70,  y: -210, type: 'sunflower', size: 85, rot: 10 },
    
    // Background/Upper Middle accents
    { x: -35, y: -250, type: 'rose',      size: 60, rot: -15, color: '#8A2BE2' }, // Purple
    { x: 35,  y: -245, type: 'rose',      size: 65, rot: 15, color: '#1E90FF' }, // Blue
    
    // Middle row
    { x: -50, y: -160, type: 'rose',      size: 70, rot: -5, color: '#FF6B9D' },
    { x: 45,  y: -165, type: 'tulip',     size: 65, rot: 8, color: '#FF6B9D' },
    { x: 0,   y: -170, type: 'sunflower', size: 70, rot: 5 },
    
    // Lower middle
    { x: -25, y: -130, type: 'tulip',     size: 60, rot: -12, color: '#FFD166' },
    { x: 35,  y: -125, type: 'rose',      size: 65, rot: 5, color: '#EF476F' },
    { x: -65, y: -110, type: 'tulip',     size: 55, rot: -25, color: '#8A2BE2' },
    { x: 65,  y: -115, type: 'sunflower', size: 55, rot: 25 },
  ];

  // Leaf accents (behind/between flowers)
  const leaves = [
    { x: -85, y: -170, rot: -30, size: 45 },
    { x: 85,  y: -175, rot: 30,  size: 45 },
    { x: -65, y: -100, rot: -45, size: 40 },
    { x: 65,  y: -105, rot: 40,  size: 40 },
    { x: -15, y: -95,  rot: -15, size: 35 },
    { x: 50,  y: -90,  rot: 20,  size: 35 },
  ];

  // Render leaves first (behind flowers)
  leaves.forEach(l => {
    html += `<div style="position:absolute; left:50%; bottom:20px; transform:translate(calc(-50% + ${l.x}px), ${l.y}px); z-index:3; opacity:0.9; filter:drop-shadow(2px 2px 0px rgba(0,0,0,0.15));">
      ${getLeafSVG(l.size, l.rot)}
    </div>`;
  });

  // Render flowers
  flowers.forEach((f, i) => {
    let flowerHTML = '';
    if (f.type === 'sunflower') {
      flowerHTML = getSunflowerSVG(f.size);
    } else if (f.type === 'rose') {
      flowerHTML = getRoseSVG(f.size, f.color);
    } else if (f.type === 'tulip') {
      flowerHTML = getTulipSVG(f.size, f.color);
    }
    
    html += `<div class="bouquet-flower" style="position:absolute; left:50%; bottom:20px; transform:translate(calc(-50% + ${f.x}px), ${f.y}px) rotate(${f.rot}deg); z-index:${5 + i}; filter:drop-shadow(3px 3px 0px rgba(0,0,0,0.2)); transition: transform 0.3s ease;">
      ${flowerHTML}
    </div>`;
  });

  // Add sparkle particles around the bouquet
  for (let i = 0; i < 8; i++) {
    const sx = (Math.random() - 0.5) * 180;
    const sy = -(Math.random() * 180 + 60);
    const delay = Math.random() * 2;
    const dur = 1.5 + Math.random();
    html += `<div style="position:absolute; left:50%; bottom:20px; transform:translate(calc(-50% + ${sx}px), ${sy}px); z-index:20; pointer-events:none;">
      <div style="width:8px; height:8px; background:${Math.random() > 0.5 ? '#FFD166' : '#FF69B4'}; border-radius:50%; animation:sparkleFloat ${dur}s ease-in-out ${delay}s infinite; opacity:0.8;"></div>
    </div>`;
  }
  
  return html;
}

const galleryData = [
  { img: 'bebo.jpeg', cap: 'jawdrop hogaya ji' },
  { img: 'precious.jpeg', cap: 'so precious wtf' },
  { img: 'potato.jpeg', cap: 'laughing bhondu' },
  { img: 'heartemojiwitharrow.jpeg', cap: 'pretty pretty' },
  { img: 'heartemoji.jpeg', cap: '*gets a nosebleed*' },
  { img: 'donuts.jpeg', cap: 'donutsssssss' },
  { img: 'bhondu.jpeg', cap: 'my favorite onee <3' },
  { img: 'yummy.jpeg', cap: 'busy disecting a donut' }
];

// ==========================================
// Globals & Setup
// ==========================================

let isAudioPlaying = false;
let audioInit = false;

function initGlobalUI() {
  // Inject Custom Cursor if not present
  if (!document.getElementById('custom-cursor')) {
    document.body.insertAdjacentHTML('beforeend', `
       <div id="custom-cursor"></div>
       <div id="custom-cursor-follower"></div>
    `);
    initCursorLogic();
  }

  // Global click confetti burst
  document.body.addEventListener('click', (e) => {
    fireConfettiAt(e.clientX, e.clientY);
  });

  // Setup Cat Guide
  const catCont = document.getElementById('cat-svg-container');
  if (catCont && catCont.innerHTML.trim() === '') {
    catCont.innerHTML = getCatSVG('normal');
    // Cat Idle Animation - apply to container to survive innerHTML changes
    gsap.to(catCont, { y: -10, duration: 1, repeat: -1, yoyo: true, ease: "sine.inOut" });

    // Petting feature
    catCont.addEventListener('mouseenter', () => {
      setCatExpression('happy');
      // Shake body for a purr effect
      gsap.to('.cat-svg', { rotation: 5, yoyo: true, repeat: -1, duration: 0.1 });
      // Wiggle ears
      gsap.to('#cat-body > polygon', { scaleY: 0.9, duration: 0.1, yoyo: true, repeat: -1, transformOrigin: "bottom center" });
      
      // Floating heart
      let heart = document.createElement('div');
      heart.innerHTML = '❤️';
      heart.style.position = 'absolute';
      heart.style.top = '-20px';
      heart.style.left = '50%';
      heart.style.fontSize = '24px';
      heart.style.pointerEvents = 'none';
      heart.style.zIndex = '9999';
      catCont.appendChild(heart);
      gsap.to(heart, { y: -50, opacity: 0, duration: 1, onComplete: () => heart.remove() });
    });
    
    catCont.addEventListener('mouseleave', () => {
      setCatExpression('normal');
      gsap.killTweensOf('.cat-svg', 'rotation');
      gsap.killTweensOf('#cat-body > polygon');
      gsap.to('.cat-svg', { rotation: 0, duration: 0.2 });
      gsap.to('#cat-body > polygon', { scaleY: 1, duration: 0.2 });
    });
  }

  // Setup Audio (Always loop, no stop)
  const audioEl = document.getElementById('bg-music');
  if (audioEl && !document.body.dataset.audioBound) {
    document.body.dataset.audioBound = 'true';
    
    let tryPlay = () => {
      audioEl.volume = 0.5;
      audioEl.play().catch(e => console.log('Autoplay prevented, will play on interaction'));
    };
    
    tryPlay();
    
    // Bind to all clicks and touches globally to ensure the music stays active
    document.body.addEventListener('click', tryPlay);
    document.body.addEventListener('touchstart', tryPlay, {passive: true});
  }

  setupEasterEggs();
  setupMagneticButtons();
  wrapTextElements();
}

// Custom Cursor Interactions
function initCursorLogic() {
  const cursor = document.getElementById('custom-cursor');
  const follower = document.getElementById('custom-cursor-follower');
  
  if (!cursor || !follower) return;

  // Move them with GSAP quickTo for performance
  let cx = gsap.quickTo(cursor, "left", {duration: 0.1, ease: "power3"});
  let cy = gsap.quickTo(cursor, "top", {duration: 0.1, ease: "power3"});
  let fx = gsap.quickTo(follower, "left", {duration: 0.6, ease: "power3.out"});
  let fy = gsap.quickTo(follower, "top", {duration: 0.6, ease: "power3.out"});

  window.addEventListener("mousemove", e => {
    cx(e.clientX);
    cy(e.clientY);
    fx(e.clientX);
    fy(e.clientY);
  });

  // Add hover states recursively to all interactive elements
  const addHoverClass = () => document.body.classList.add('cursor-hover');
  const removeHoverClass = () => document.body.classList.remove('cursor-hover');

  document.querySelectorAll('a, button, .brutal-btn, .polaroid, #envelope-container, #audio-control, #tv-knob-1, #tv-knob-2').forEach(el => {
    el.addEventListener('mouseenter', addHoverClass);
    el.addEventListener('mouseleave', removeHoverClass);
  });
}

function fireConfettiAt(x, y) {
  for(let i = 0; i < 8; i++) {
    let p = document.createElement('div');
    p.style.cssText = `position: fixed; width: 12px; height: 12px; background: ${Math.random() > 0.5 ? '#EF476F' : '#06D6A0'}; border: 2px solid #073B4C; border-radius: ${Math.random() > 0.5 ? '50%' : '2px'}; pointer-events: none; z-index: 99999;`;
    p.style.left = x + 'px';
    p.style.top = y + 'px';
    document.body.appendChild(p);

    gsap.to(p, {
      x: (Math.random() - 0.5) * 150,
      y: (Math.random() - 0.5) * 150 - 50,
      rotation: Math.random() * 360,
      duration: Math.random() * 0.5 + 0.5,
      ease: "power2.out",
      opacity: 0,
      onComplete: () => p.remove()
    });
  }
}

function setupMagneticButtons() {
  const magnets = document.querySelectorAll('.brutal-btn, #audio-control');
  magnets.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const h = rect.width / 2;
      // Calculate distance from center
      const x = e.clientX - rect.left - h;
      const y = e.clientY - rect.top - (rect.height / 2);
      // Move btn slightly towards mouse utilizing GSAP
      gsap.to(btn, { x: x * 0.4, y: y * 0.4, duration: 0.3, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.3)' });
    });
  });
}

function wrapTextElements() {
  // Wrap H1s and text inside .rubber-band for crazy hovers
  document.querySelectorAll('h1:not(.wrapped), h2:not(.wrapped)').forEach(el => {
    el.classList.add('wrapped');
    const text = el.innerText;
    el.innerHTML = '';
    text.split('').forEach(char => {
      if(char === ' ') {
         el.innerHTML += '&nbsp;';
      } else {
         const span = document.createElement('span');
         span.innerText = char;
         span.className = 'rubber-band';
         el.appendChild(span);
      }
    });
  });
}

function speakCat(msg, emotion = 'normal', duration = 3000) {
  const speech = document.getElementById('cat-speech');
  if (!speech) return;
  speech.innerText = msg;
  
  setCatExpression(emotion);
  
  gsap.to(speech, { opacity: 1, y: 0, duration: 0.3 });
  
  // Wiggle the cat container while it speaks
  const catCont = document.getElementById('cat-svg-container');
  if (catCont) {
      gsap.fromTo(catCont, 
        { rotation: -5 }, 
        { rotation: 5, duration: 0.1, yoyo: true, repeat: 7, ease: "power1.inOut", onComplete: () => {
            gsap.to(catCont, { rotation: 0, duration: 0.2 });
        }}
      );
  }

  setTimeout(() => {
    gsap.to(speech, { opacity: 0, y: 10, duration: 0.3 });
    setCatExpression('normal');
  }, duration);
}

// Easter Eggs
function setupEasterEggs() {
  let keyBuffer = '';
  document.addEventListener('keydown', (e) => {
    // Ignore if input field (though we have none)
    if (e.key.length !== 1) return; 
    keyBuffer += e.key.toLowerCase();
    if (keyBuffer.length > 20) keyBuffer = keyBuffer.slice(-20);
    
    if (keyBuffer.includes('window')) {
        // Just a joke trap
    }

    if (keyBuffer.includes('remember?')) {
      keyBuffer = ''; // reset
      barba.go('axs.html'); // manually trigger barba transition
    }

    if (keyBuffer.includes('iloveyoutoo')) {
      keyBuffer = '';
      barba.go('secret.html');
    }
  });
}

// ==========================================
// Page Specific Initializers
// ==========================================

function initHome() {
  speakCat("Happy Birthday!!", "happy", 4000);
  
  // Decor inject
  const decor = document.getElementById('decor-container');
  if (decor) {
    for(let i=0; i<12; i++) {
      let isDog = Math.random() > 0.5;
      let el = document.createElement('div');
      el.className = 'absolute w-16 h-16 opacity-0 scale-0 origin-bottom';
      el.style.left = `${Math.random() * 90}%`;
      el.style.top = `${Math.random() * 90}%`;
      el.innerHTML = isDog ? dogSVG : getCatSVG('happy');
      // Random rotation
      el.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;
      decor.appendChild(el);
    }
  }

  // Animation timeline
  let tl = gsap.timeline({delay: 0.5});
  
  const itsTime = document.getElementById('its-time');
  const bdayText = document.getElementById('bday-text');

  if(itsTime && bdayText) {
    tl.fromTo(itsTime, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 1.5, ease: "slow" })
      .to(itsTime, { opacity: 0, scale: 2, duration: 0.5, ease: "power2.in" }, "+=1")
      .call(() => {
         itsTime.style.display = 'none';
         bdayText.classList.remove('hidden');
         bdayText.classList.add('flex');
      })
      .fromTo('#bday-text h1', { opacity: 0, scale: 0, rotation: -20 }, { opacity: 1, scale: 1, rotation: (i, t) => i===1 ? 2 : (i===2 ? -2 : 0), duration: 0.8, stagger: 0.2, ease: "elastic.out(1, 0.5)" })
      .fromTo('#bday-text a', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: "back.out" }, "-=0.2")
      .to('#decor-container > div', { opacity: 1, scale: 1, duration: 0.5, stagger: 0.05, ease: "back.out" }, "-=0.5");
  }
}

function initEnvelope() {
  speakCat("Tap the envelope!", "normal", 3000);
  const envelope = document.getElementById('envelope-container');
  const flap = document.getElementById('envelope-flap');
  const bouquet = document.getElementById('bouquet');
  const instruction = document.getElementById('tap-instruction');
  const nextBtn = document.getElementById('next-btn-2');
  let opened = false;

  if (envelope && bouquet) {
    bouquet.innerHTML = generateBouquetHTML();

    envelope.addEventListener('click', () => {
      if (opened) return;
      opened = true;
      gsap.to(instruction, { opacity: 0, duration: 0.3 });
      
      let tl = gsap.timeline();
      // Open flap
      tl.to(flap, { rotationX: 180, duration: 0.5, ease: "power2.inOut" })
        // Z-index trick so it goes behind
        .set(flap, { zIndex: 5 })
        // Rise bouquet
        .to(bouquet, { scale: 1, y: -40, duration: 1.2, ease: "elastic.out(1, 0.6)" })
        // Tiny jump animation for the env
        .to(envelope, { y: 20, duration: 0.3, yoyo: true, repeat: 1 }, "-=1.5");
        
      speakCat("Awww! Sunflowers!", "love", 4000);

      // Start continuous confetti shower
      let confettiInterval = setInterval(() => {
         fireConfettiAt(window.innerWidth / 2 + (Math.random() - 0.5) * 400, 50);
      }, 100);

      // After 2.5s, transition to page3.html
      setTimeout(() => {
         clearInterval(confettiInterval);
         barba.go('page3.html');
      }, 2500);
    });
  }
}

function initVibe() {
  speakCat("Vibes!", "love", 4000);
  const video = document.getElementById('vibe-video');
  if (video) {
    video.play().catch(e => console.log('Video autoplay prevented', e));
    video.addEventListener('ended', () => {
      let bgm = document.getElementById('bg-music');
      if(bgm) bgm.play().catch(()=>{});
      barba.go('page4.html');
    });
  }
}

function initLuvPic() {
  speakCat("Perfection!", "happy", 3000);
  
  // Awwwards-style reveal
  let tl = gsap.timeline();
  tl.to('.polaroid-container', {
    scale: 1,
    rotation: 0,
    opacity: 1,
    duration: 1.5,
    ease: "elastic.out(1, 0.5)"
  });

  // Floating Hearts background
  const heartsBg = document.getElementById('hearts-bg');
  if (heartsBg) {
    for (let i = 0; i < 20; i++) {
        let h = document.createElement('div');
        h.innerHTML = '💖';
        h.style.position = 'absolute';
        h.style.left = Math.random() * 100 + 'vw';
        h.style.top = Math.random() * 100 + 'vh';
        h.style.fontSize = (Math.random() * 20 + 20) + 'px';
        h.style.opacity = '0';
        heartsBg.appendChild(h);

        gsap.to(h, {
          y: -200,
          opacity: Math.random() * 0.5 + 0.3,
          rotation: Math.random() * 360,
          duration: Math.random() * 2 + 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
    }
  }

  // Go to next page after 3 seconds
  setTimeout(() => {
    barba.go('page5.html');
  }, 3000);
}

function initFolderGallery() {
  speakCat("Watch the video!", "surprised", 4000);
  const video = document.getElementById('madamji-video');
  const videoCont = document.getElementById('madamji-vid-container');
  const folder = document.getElementById('win-folder-widget');
  const scatter = document.getElementById('scatter-gallery');
  const scrollHint = document.getElementById('scroll-hint');
  const nextBtn = document.getElementById('next-btn-5');
  let folderShown = false;
  let galleryActive = false;
  let currentIndex = 0;
  let polaroidElements = [];

  // Hide the folder initially via GSAP to ensure no layout bugs
  gsap.set(folder, { y: 500, scale: 0, opacity: 0, pointerEvents: 'none' });

  if (video) {
    video.addEventListener('ended', () => {
       if (folderShown) return;
       folderShown = true;
       let bgm = document.getElementById('bg-music');
       if(bgm) bgm.play().catch(()=>{});
       speakCat("A folder!", "happy", 3000);
       // Fly the folder in from the bottom
       gsap.to(folder, { y: 0, scale: 1, opacity: 1, pointerEvents: 'auto', duration: 1.2, ease: "back.out(1.2)" });
    });
    // Auto play policy
    video.play().catch(e => console.log('Video autoplay prevented', e));
  }

  folder.addEventListener('click', () => {
    if (galleryActive) return;
    galleryActive = true;
    speakCat("So cute!!", "love", 4000);
    if(video) video.pause();

    // Hide video and folder smoothly
    gsap.to(videoCont, { scale: 0, opacity: 0, rotation: -20, duration: 0.8, ease: "power2.in" });
    gsap.to(folder, { scale: 0, opacity: 0, duration: 0.5, ease: "back.in(1.2)" });
    
    setTimeout(() => {
      videoCont.style.display = 'none';
      folder.style.display = 'none';
      buildScatterGallery();
    }, 800);
  });

  function buildScatterGallery() {
    scrollHint.classList.remove('hidden');
    gsap.to(scrollHint, { opacity: 1, duration: 1, delay: 1 });
    gsap.to(nextBtn, { opacity: 1, pointerEvents: 'auto', duration: 1, delay: 2 });

    scatter.style.pointerEvents = 'auto';

    // Inject Photos
    galleryData.forEach((d, i) => {
      const el = document.createElement('div');
      el.className = 'scatter-item';
      el.dataset.index = i;
      el.innerHTML = `
        <div class="polaroid-inner w-full h-full relative transition-transform duration-700" style="transform-style: preserve-3d; cursor: pointer;">
          <!-- Front -->
          <div class="polaroid-front absolute w-full h-full bg-white border-4 border-[var(--dark)] flex flex-col p-3 pb-12 brutal-shadow" style="-webkit-backface-visibility: hidden; backface-visibility: hidden;">
             <img src="picssss/${d.img}" alt="memory" class="w-full aspect-square object-cover border-4 border-[var(--dark)]">
             <p class="handwriting mt-4 text-[var(--dark)] text-lg text-center">${d.cap}</p>
          </div>
          <!-- Back -->
          <div class="polaroid-back absolute w-full h-full bg-[#FFE4B5] border-4 border-[var(--dark)] flex-center flex-col brutal-shadow" style="-webkit-backface-visibility: hidden; backface-visibility: hidden; transform: rotateY(180deg);">
             <p class="handwriting text-2xl text-[#EF476F] text-center p-6">I love you more than words can say! 🥰💕</p>
          </div>
        </div>
      `;
      
      scatter.appendChild(el);
      polaroidElements.push(el);

      // Flip logic
      let isFlipped = false;
      const inner = el.querySelector('.polaroid-inner');
      el.addEventListener('click', () => {
         isFlipped = !isFlipped;
         gsap.to(inner, { rotationY: isFlipped ? 180 : 0, duration: 0.8, ease: "back.out(1.5)" });
      });
    });

    // Randomize initial positions (offscreen)
    polaroidElements.forEach(el => {
       gsap.set(el, { 
         xPercent: -50, 
         yPercent: -50,
         x: (Math.random() - 0.5) * window.innerWidth * 2, 
         y: window.innerHeight, 
         rotation: Math.random() * 60 - 30 
       });
    });

    updateGalleryFocus();

    // Wheel listener for scrolling
    window.addEventListener('wheel', (e) => {
       if (!galleryActive) return;
       if (e.deltaY > 0) {
          currentIndex = (currentIndex + 1) % polaroidElements.length;
       } else {
          currentIndex = (currentIndex - 1 + polaroidElements.length) % polaroidElements.length;
       }
       updateGalleryFocus();
       gsap.to(scrollHint, { opacity: 0, duration: 0.3 }); // hide hint once they figure it out
    });
    
    // Add touch support for mobile gallery swap
    let touchStartY = 0;
    window.addEventListener('touchstart', e => touchStartY = e.touches[0].clientY, {passive:true});
    window.addEventListener('touchend', e => {
       if(!galleryActive) return;
       let touchEndY = e.changedTouches[0].clientY;
       if(touchEndY < touchStartY - 50) currentIndex = (currentIndex + 1) % polaroidElements.length;
       if(touchEndY > touchStartY + 50) currentIndex = (currentIndex - 1 + polaroidElements.length) % polaroidElements.length;
       updateGalleryFocus();
       gsap.to(scrollHint, { opacity: 0, duration: 0.3 });
    }, {passive:true});

    // Re-init Custom Cursor
    initCursorLogic();
  }

  function updateGalleryFocus() {
     polaroidElements.forEach((el, index) => {
        if (index === currentIndex) {
           // Center focus
           el.style.zIndex = 100;
           gsap.to(el, {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 1.2,
              duration: 0.6,
              ease: "back.out(1.2)"
           });
        } else {
           // Scatter randomly
           el.style.zIndex = 10;
           gsap.to(el, {
              x: (Math.random() - 0.5) * window.innerWidth * 0.6,
              y: (Math.random() - 0.5) * window.innerHeight * 0.6,
              rotation: Math.random() * 40 - 20,
              scale: 0.7 + Math.random() * 0.3,
              duration: 0.8,
              ease: "power2.out"
           });
        }
     });
  }
}

function initYouPage() {
  speakCat("Wow!", "happy", 3000);
  
  let tl = gsap.timeline();
  tl.to('.polaroid-container', { opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.5)" })
    .to('#you-message', { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.5");
}

function initWarning() {
  speakCat("Oh no!", "surprised", 5000);
  const video = document.getElementById('warning-video');
  if(video) {
     video.play().catch(e => console.log('Autoplay prevented', e));
     video.addEventListener('ended', () => {
        let bgm = document.getElementById('bg-music');
        if(bgm) bgm.play().catch(()=>{});
     });
  }
}

function initLunchDate() {
  speakCat("Say yes plsss!", "love", 4000);

  const videoPlssss = document.getElementById('lunch-video-plssss');
  const imgAyyy = document.getElementById('lunch-img-ayyy');
  const videoJoyy = document.getElementById('lunch-video-joyy');
  const rejectText = document.getElementById('lunch-reject-text');
  const yesBtn = document.getElementById('lunch-yes-btn');
  const noBtn = document.getElementById('lunch-no-btn');
  const confettiContainer = document.getElementById('lunch-confetti');
  const buttonsContainer = document.getElementById('lunch-buttons');
  let noHovered = false;
  let accepted = false;

  if (videoPlssss) {
    videoPlssss.play().catch(e => console.log('Autoplay prevented', e));
  }

  // Floating hearts bg
  const heartsBg = document.getElementById('lunch-hearts-bg');
  if (heartsBg) {
    for (let i = 0; i < 15; i++) {
      let h = document.createElement('div');
      h.innerHTML = ['💕', '🌸', '🍕', '✨', '💖'][Math.floor(Math.random() * 5)];
      h.style.position = 'absolute';
      h.style.left = Math.random() * 100 + 'vw';
      h.style.top = Math.random() * 100 + 'vh';
      h.style.fontSize = (Math.random() * 20 + 16) + 'px';
      h.style.opacity = '0';
      heartsBg.appendChild(h);
      gsap.to(h, {
        y: -150 - Math.random() * 200,
        opacity: Math.random() * 0.4 + 0.2,
        rotation: Math.random() * 360,
        duration: Math.random() * 3 + 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }

  // Entrance animations
  gsap.fromTo('#lunch-title', { opacity: 0, y: -50, scale: 0.5 }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" });
  gsap.fromTo('#lunch-media-wrap', { opacity: 0, scale: 0, rotation: -10 }, { opacity: 1, scale: 1, rotation: 0, duration: 1, delay: 0.3, ease: "back.out(1.5)" });
  gsap.fromTo('#lunch-yes-btn', { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 0.8, delay: 0.8, ease: "back.out(1.5)" });
  gsap.fromTo('#lunch-no-btn', { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 0.8, delay: 0.8, ease: "back.out(1.5)" });

  // ---- NO BUTTON: Runaway logic ----
  function teleportNoBtn() {
    if (accepted) return;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const btnW = noBtn.offsetWidth;
    const btnH = noBtn.offsetHeight;
    const newX = Math.random() * (vw - btnW - 40) + 20;
    const newY = Math.random() * (vh - btnH - 40) + 20;

    // Move no button to fixed position on screen
    noBtn.style.position = 'fixed';
    noBtn.style.zIndex = '9999';
    gsap.to(noBtn, {
      left: newX + 'px',
      top: newY + 'px',
      rotation: Math.random() * 40 - 20,
      duration: 0.2,
      ease: "power4.out"
    });

    // Switch media to ayyy.jpeg on first hover
    if (!noHovered) {
      noHovered = true;
      videoPlssss.classList.add('hidden');
      imgAyyy.classList.remove('hidden');
      rejectText.classList.remove('hidden');
      gsap.fromTo(imgAyyy, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.5)" });
      gsap.fromTo(rejectText, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.2 });
      speakCat("Hehe no escape!", "happy", 3000);
    }
  }

  noBtn.addEventListener('mouseenter', teleportNoBtn);
  noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    teleportNoBtn();
  }, { passive: false });

  // ---- YES BUTTON: Confetti + joy video ----
  yesBtn.addEventListener('click', () => {
    if (accepted) return;
    accepted = true;
    speakCat("YAAAY! 🎉🎉", "love", 5000);

    // Hide buttons and reject text
    gsap.to(noBtn, { opacity: 0, scale: 0, duration: 0.3 });
    gsap.to(rejectText, { opacity: 0, duration: 0.3 });
    gsap.to(yesBtn, { scale: 1.3, duration: 0.3, ease: "back.out", onComplete: () => {
      gsap.to(yesBtn, { opacity: 0, scale: 0, duration: 0.3, delay: 0.3 });
    }});

    // Change title
    const title = document.getElementById('lunch-title');
    if (title) {
      title.innerHTML = "IT'S A DATE! 🥰🍕";
      gsap.fromTo(title, { scale: 0.5 }, { scale: 1, duration: 0.8, delay: 0.3, ease: "elastic.out(1, 0.4)" });
    }

    // Switch to joy video
    setTimeout(() => {
      videoPlssss.classList.add('hidden');
      imgAyyy.classList.add('hidden');
      videoJoyy.classList.remove('hidden');
      videoJoyy.play().catch(e => console.log('Joy video autoplay prevented', e));
      gsap.fromTo(videoJoyy, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.5)" });
    }, 400);

    // MASSIVE confetti explosion covering entire screen
    function launchConfettiWave() {
      const colors = ['#EF476F', '#FFD166', '#06D6A0', '#118AB2', '#FF69B4', '#FFE66D', '#FF6B6B', '#C44DFF'];
      const shapes = ['50%', '0%', '30%'];
      for (let i = 0; i < 40; i++) {
        let p = document.createElement('div');
        const size = Math.random() * 14 + 6;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const borderRadius = shapes[Math.floor(Math.random() * shapes.length)];
        p.style.cssText = `position:fixed; width:${size}px; height:${size}px; background:${color}; border:2px solid rgba(0,0,0,0.3); border-radius:${borderRadius}; pointer-events:none; z-index:99999;`;
        p.style.left = Math.random() * window.innerWidth + 'px';
        p.style.top = '-20px';
        confettiContainer.appendChild(p);

        gsap.to(p, {
          y: window.innerHeight + 100 + Math.random() * 200,
          x: (Math.random() - 0.5) * 400,
          rotation: Math.random() * 720 - 360,
          duration: Math.random() * 2 + 1.5,
          ease: "power1.out",
          opacity: 0,
          delay: Math.random() * 0.5,
          onComplete: () => p.remove()
        });
      }
    }

    // Fire multiple waves of confetti
    launchConfettiWave();
    setTimeout(launchConfettiWave, 500);
    setTimeout(launchConfettiWave, 1000);
    setTimeout(launchConfettiWave, 1500);
    setTimeout(launchConfettiWave, 2000);
    setTimeout(launchConfettiWave, 2500);

    // Side cannons
    function sideCannon(fromLeft) {
      const colors = ['#EF476F', '#FFD166', '#06D6A0', '#FF69B4', '#C44DFF'];
      for (let i = 0; i < 25; i++) {
        let p = document.createElement('div');
        const size = Math.random() * 12 + 5;
        p.style.cssText = `position:fixed; width:${size}px; height:${size}px; background:${colors[Math.floor(Math.random() * colors.length)]}; border:2px solid rgba(0,0,0,0.2); border-radius:${Math.random() > 0.5 ? '50%' : '2px'}; pointer-events:none; z-index:99999;`;
        p.style.left = fromLeft ? '0px' : window.innerWidth + 'px';
        p.style.top = Math.random() * window.innerHeight * 0.5 + 'px';
        confettiContainer.appendChild(p);

        gsap.to(p, {
          x: fromLeft ? (Math.random() * window.innerWidth * 0.7 + 50) : -(Math.random() * window.innerWidth * 0.7 + 50),
          y: Math.random() * 400 + 100,
          rotation: Math.random() * 720,
          duration: Math.random() * 1.5 + 1,
          ease: "power2.out",
          opacity: 0,
          delay: Math.random() * 0.3,
          onComplete: () => p.remove()
        });
      }
    }

    setTimeout(() => sideCannon(true), 300);
    setTimeout(() => sideCannon(false), 600);
    setTimeout(() => sideCannon(true), 1200);
    setTimeout(() => sideCannon(false), 1800);

    // Navigate to warning page after celebration
    setTimeout(() => {
      barba.go('warning.html');
    }, 5000);
  });
}

function initMinigame() {
  speakCat("Get 20 Hearts!", "surprised", 5000);
  const canvas = document.getElementById('game-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  
  // Resize logic
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const basketEl = document.getElementById('basket');
  const scoreEl = document.getElementById('score-display');
  const finalCard = document.getElementById('final-card');
  const hint = document.getElementById('game-hint');
  
  let score = 0;
  let gameActive = true;
  let hearts = [];
  let basketX = canvas.width / 2;
  const basketWidth = 80;
  const targetScore = 20;

  // Move basket
  function updateBasket(x) {
    basketX = Math.max(basketWidth/2, Math.min(x, canvas.width - basketWidth/2));
    basketEl.style.left = `${basketX}px`;
  }

  window.addEventListener('mousemove', e => updateBasket(e.clientX));
  window.addEventListener('touchmove', e => {
    updateBasket(e.touches[0].clientX);
    gsap.to(hint, {opacity: 0, duration: 0.3});
  }, {passive:true});

  const mobileSlider = document.getElementById('mobile-basket-slider');
  if (mobileSlider) {
    mobileSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      const x = (val / 100) * canvas.width;
      updateBasket(x);
      gsap.to(hint, {opacity: 0, duration: 0.3});
    });
  }

  // Heart object
  class Heart {
    constructor() {
      this.x = Math.random() * (canvas.width - 40) + 20;
      this.y = -30;
      this.speedY = Math.random() * 3 + 2;
      this.speedX = (Math.random() - 0.5) * 1;
      this.size = Math.random() * 15 + 15;
      this.rotation = Math.random() * 360;
      this.rotSpeed = (Math.random() - 0.5) * 2;
      this.color = Math.random() > 0.5 ? '#EF476F' : '#FFD166';
      this.active = true;
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      this.rotation += this.rotSpeed;
      
      // Collision with basket (y roughly at bottom - 100)
      const basketY = window.innerHeight - 80;
      if (this.active && this.y + this.size > basketY && this.y < basketY + 40) {
        if (this.x > basketX - basketWidth/2 && this.x < basketX + basketWidth/2) {
          this.active = false; // caught
          score++;
          scoreEl.innerText = score;
          gsap.to(basketEl, { y: 10, duration: 0.1, yoyo: true, repeat: 1 });
          checkWin();
        }
      }
      
      if (this.y > canvas.height + 50) this.active = false;
    }
    draw() {
      if(!this.active) return;
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation * Math.PI / 180);
      ctx.fillStyle = this.color;
      
      // Simple path for a heart on canvas
      ctx.beginPath();
      ctx.moveTo(0, this.size/4);
      ctx.bezierCurveTo(this.size/2, -this.size/2, this.size, this.size/3, 0, this.size);
      ctx.bezierCurveTo(-this.size, this.size/3, -this.size/2, -this.size/2, 0, this.size/4);
      ctx.fill();
      
      // Black brutal border
      ctx.strokeStyle = '#073B4C';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    }
  }

  function spawn() {
    if(!gameActive) return;
    hearts.push(new Heart());
    setTimeout(spawn, Math.random() * 800 + 400); 
  }

  function checkWin() {
    if (score >= targetScore && gameActive) {
      gameActive = false;
      speakCat("YAY! You win!", "happy", 5000);
      
      // Animate out canvas and basket
      gsap.to([canvas, basketEl, document.querySelector('.absolute.top-8.right-8')], {
        opacity: 0, duration: 1, onComplete:() => {
          canvas.style.display = 'none';
        }
      });
      // Show card
      gsap.to(finalCard, {
        opacity: 1, scale: 1, pointerEvents: 'auto', duration: 1.2, ease: "elastic.out(1, 0.7)"
      });
      
      // Fire confetti
      const particleCont = document.getElementById('particles');
      if (particleCont) {
        for(let i=0; i<100; i++) {
          let p = document.createElement('div');
          p.style.cssText = `position:absolute; width:10px; height:10px; background:${Math.random()>0.5?'#EF476F':'#FFD166'}; border:2px solid #000; left:50%; top:50%;`;
          particleCont.appendChild(p);
          gsap.to(p, {
            x: (Math.random()-0.5)*1000,
            y: (Math.random()-0.5)*1000 + 500,
            rotation: Math.random()*360,
            duration: Math.random()*2+1,
            ease: "power2.out",
            opacity: 0,
            onComplete: () => p.remove()
          });
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(gameActive) {
      hearts.forEach(h => { h.update(); h.draw(); });
      // cleanup
      hearts = hearts.filter(h => h.active || (h.y <= canvas.height+50 && !h.active===false));
    }
    requestAnimationFrame(loop);
  }

  spawn();
  loop();
  
  // hide hint after 3s
  setTimeout(()=> gsap.to(hint, {opacity: 0, duration: 0.5}), 3000);
}

// ==========================================
// Barba.js Setup & Transitions
// ==========================================

function runPageLogic(namespace) {
  // Re-init audio triggers if lost
  initGlobalUI();
  
  switch(namespace) {
    case 'home':
      initHome();
      break;
    case 'envelope':
      initEnvelope();
      break;
    case 'vibe':
      initVibe();
      break;
    case 'luvpic':
      initLuvPic();
      break;
    case 'folderGallery':
      initFolderGallery();
      break;
    case 'youPage':
      initYouPage();
      break;
    case 'minigame':
      initMinigame();
      break;
    case 'lunchDate':
      initLunchDate();
      break;
    case 'warning':
      initWarning();
      break;
    case 'secret1':
    case 'secret2':
      speakCat("Shhh... Secret page", "surprised", 4000);
      break;
    default:
      console.log('Unknown namespace: ' + namespace);
  }
}

// Initial load
window.addEventListener('DOMContentLoaded', () => {
  initGlobalUI();
  
  // Simple check for barba namespace since Barba might init later
  const ns = document.querySelector('[data-barba="container"]').getAttribute('data-barba-namespace');
  runPageLogic(ns);
});

// Barba Init
if(typeof barba !== 'undefined') {
  barba.init({
    transitions: [{
      name: 'heart-transition',
      leave(data) {
        // Animate heart expanding to cover the screen
        const mask = document.getElementById('heart-mask');
        return gsap.to(mask, {
          scale: 250, // Huge scale to cover monitor
          duration: 0.8,
          ease: "power2.inOut"
        });
      },
      enter(data) {
        // Run logic for the new page
        runPageLogic(data.next.namespace);
        
        // Ensure new page starts at top
        window.scrollTo(0, 0);

        // Animate heart shrinking to reveal
        const mask = document.getElementById('heart-mask');
         return gsap.to(mask, {
          scale: 0,
          duration: 0.8,
          ease: "power2.inOut",
          delay: 0.2 // slight pause on solid pink
        });
      }
    }]
  });
}
