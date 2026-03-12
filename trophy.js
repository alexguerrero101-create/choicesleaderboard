// ========== 3D TROPHY MODULE ==========
// Loads purchased trophy_cup.glb via GLTFLoader
(function() {
  'use strict';

  if (typeof THREE === 'undefined') {
    console.warn('[TROPHY] Three.js not loaded, skipping trophy initialization');
    return;
  }

  if (typeof THREE.GLTFLoader === 'undefined') {
    console.warn('[TROPHY] GLTFLoader not loaded, skipping trophy initialization');
    return;
  }

  let miniScene = null;
  let modalScene = null;
  let initialized = false;

  const TROPHY_PATH = 'trophy_cup.glb';

  function loadTrophy(scene, callback) {
    const loader = new THREE.GLTFLoader();
    loader.load(
      TROPHY_PATH,
      function(gltf) {
        const model = gltf.scene;

        // Auto-center and scale the model to fit nicely
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 4.0 / maxDim; // Fit within ~4 units
        model.scale.setScalar(scale);
        model.position.sub(center.multiplyScalar(scale));

        scene.add(model);
        if (callback) callback(model);
      },
      function(xhr) {
        console.log('[TROPHY] Loading: ' + Math.round(xhr.loaded / xhr.total * 100) + '%');
      },
      function(err) {
        console.error('[TROPHY] Error loading GLB:', err);
      }
    );
  }

  // Generate a procedural environment map for metallic reflections
  function createEnvMap(renderer) {
    var pmremGen = new THREE.PMREMGenerator(renderer);
    pmremGen.compileEquirectangularShader();

    // Build a small scene with colored lights to create reflections
    var envScene = new THREE.Scene();
    envScene.background = new THREE.Color(0x808080);

    // Moderate studio lighting for warm gold reflections
    var topLight = new THREE.DirectionalLight(0xfff0d0, 2.0);
    topLight.position.set(0, 5, 0);
    envScene.add(topLight);

    var keyLight = new THREE.DirectionalLight(0xffe0a0, 1.8);
    keyLight.position.set(-3, 3, 5);
    envScene.add(keyLight);

    var fillLight = new THREE.DirectionalLight(0xffffff, 1.5);
    fillLight.position.set(4, 2, 3);
    envScene.add(fillLight);

    var rimLight = new THREE.DirectionalLight(0xcce0ff, 1.0);
    rimLight.position.set(0, 2, -5);
    envScene.add(rimLight);

    var bounceLight = new THREE.DirectionalLight(0xffdead, 0.8);
    bounceLight.position.set(0, -3, 0);
    envScene.add(bounceLight);

    envScene.add(new THREE.AmbientLight(0xffffff, 1.0));

    // Smaller warm-toned spheres for subtle highlight spots
    var sphereGeo = new THREE.SphereGeometry(0.5, 16, 16);

    var brightMat1 = new THREE.MeshBasicMaterial({ color: 0xfff5e0 });
    var s1 = new THREE.Mesh(sphereGeo, brightMat1);
    s1.position.set(2, 3, 3);
    s1.scale.set(2.5, 2.5, 2.5);
    envScene.add(s1);

    var brightMat2 = new THREE.MeshBasicMaterial({ color: 0xffe8c0 });
    var s2 = new THREE.Mesh(sphereGeo, brightMat2);
    s2.position.set(-3, 2, 2);
    s2.scale.set(2, 2, 2);
    envScene.add(s2);

    var brightMat3 = new THREE.MeshBasicMaterial({ color: 0xe0e0f0 });
    var s3 = new THREE.Mesh(sphereGeo, brightMat3);
    s3.position.set(0, 4, -2);
    s3.scale.set(2, 2, 2);
    envScene.add(s3);

    var envMap = pmremGen.fromScene(envScene, 0.04).texture;
    pmremGen.dispose();

    return envMap;
  }

  function setupScene(canvas, isModal) {
    const w = isModal ? (canvas.clientWidth || 560) : 320;
    const h = isModal ? (canvas.clientHeight || 420) : 280;
    const dpr = Math.min(window.devicePixelRatio, 2);

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0d0b2e);

    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    camera.position.set(0, 1, 7);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(dpr);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.physicallyCorrectLights = true;

    // Create environment map for realistic metallic reflections
    var envMap = createEnvMap(renderer);
    scene.environment = envMap;

    // Moderate studio-style lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    var dl = new THREE.DirectionalLight(0xfff5cc, 2.0);
    dl.position.set(3, 6, 5);
    scene.add(dl);

    var dl2 = new THREE.DirectionalLight(0xffffff, 1.2);
    dl2.position.set(-4, 4, 3);
    scene.add(dl2);

    var dl3 = new THREE.DirectionalLight(0xe0e8ff, 0.8);
    dl3.position.set(0, 3, -4);
    scene.add(dl3);

    var rl = new THREE.PointLight(0xffd700, 1.5, 25);
    rl.position.set(-3, 2, 4);
    scene.add(rl);

    var fl = new THREE.PointLight(0xffeedd, 1.0, 20);
    fl.position.set(3, -1, 3);
    scene.add(fl);

    // Controls
    const controls = new THREE.OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enableZoom = isModal;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = isModal ? 1.5 : 2.5;
    controls.minPolarAngle = Math.PI * 0.15;
    controls.maxPolarAngle = Math.PI * 0.85;
    controls.target.set(0, 0, 0);

    let animId;
    function animate() {
      animId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    function onResize() {
      const nw = canvas.clientWidth;
      const nh = canvas.clientHeight;
      if (nw > 0 && nh > 0) {
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh);
      }
    }

    // Load the GLB model and apply envMap to all materials
    loadTrophy(scene, function(model) {
      model.traverse(function(child) {
        if (child.isMesh && child.material) {
          var mat = child.material;
          var name = child.name.toLowerCase();

          mat.envMap = envMap;
          mat.envMapIntensity = 0.8;

          if (name.indexOf('gold') >= 0) {
            // Gold cup: deep rich gold matching Sketchfab reference
            mat.metalnessMap = null;
            mat.roughnessMap = null;
            mat.metalness = 0.95;
            mat.roughness = 0.28;
            // Deep dark gold
            mat.color = new THREE.Color(0x342708);
            mat.emissive = new THREE.Color(0x000000);
            mat.emissiveIntensity = 0.0;
          } else if (name.indexOf('base') >= 0) {
            // Wooden base: dark reddish-brown mahogany
            mat.metalnessMap = null;
            mat.roughnessMap = null;
            mat.metalness = 0.08;
            mat.roughness = 0.85;
            mat.color = new THREE.Color(0x5C3320);
          }

          mat.needsUpdate = true;
        }
      });
    });

    return { scene, camera, renderer, controls, animId, onResize };
  }

  function initMini() {
    if (initialized) return;
    initialized = true;

    const canvas = document.getElementById('trophy-canvas');
    if (!canvas) return;
    miniScene = setupScene(canvas, false);

    // Click-to-expand (distinguish from drag)
    const container = document.getElementById('trophy-container');
    let downPos = null;
    container.addEventListener('pointerdown', function(e) {
      downPos = { x: e.clientX, y: e.clientY };
    });
    container.addEventListener('pointerup', function(e) {
      if (!downPos) return;
      var dx = e.clientX - downPos.x;
      var dy = e.clientY - downPos.y;
      downPos = null;
      if (Math.sqrt(dx*dx + dy*dy) < 8) openModal();
    });

    window.addEventListener('resize', function() {
      if (miniScene) miniScene.onResize();
    });
  }

  function openModal() {
    var modal = document.getElementById('trophy-modal');
    modal.classList.remove('hidden');
    if (!modalScene) {
      requestAnimationFrame(function() {
        var canvas = document.getElementById('trophy-modal-canvas');
        modalScene = setupScene(canvas, true);
      });
    } else {
      modalScene.onResize();
    }
    // Sync winner name to modal
    var name = document.getElementById('trophy-winner-name').textContent;
    var modalNameEl = document.getElementById('trophy-modal-winner-name');
    if (modalNameEl) modalNameEl.textContent = name;
  }

  function closeModal() {
    document.getElementById('trophy-modal').classList.add('hidden');
  }

  // Modal event listeners
  document.getElementById('trophy-modal-close').addEventListener('click', closeModal);
  document.getElementById('trophy-modal-overlay').addEventListener('click', closeModal);

  // Expose functions globally for app.js integration
  window.initTrophyMini = initMini;
  window.closeTrophyModal = closeModal;
  window.updateTrophyWinner = function() {
    if (typeof getRankedSalesrooms === 'function') {
      var ranked = getRankedSalesrooms();
      var nameEl = document.getElementById('trophy-winner-name');
      var modalNameEl = document.getElementById('trophy-modal-winner-name');
      if (ranked.length && ranked[0].weightedScore > 0) {
        var winner = ranked[0].name;
        if (nameEl) nameEl.textContent = winner;
        if (modalNameEl) modalNameEl.textContent = winner;
      } else {
        if (nameEl) nameEl.textContent = '\u2014';
        if (modalNameEl) modalNameEl.textContent = '\u2014';
      }
    }
  };
})();
