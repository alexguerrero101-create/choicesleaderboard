// ===== STATE MANAGEMENT =====
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const AVATAR_COLORS = [
  '#7c3aed', '#ec4899', '#3b82f6', '#22d3ee', '#f59e0b',
  '#10b981', '#f43f5e', '#8b5cf6', '#06b6d4', '#84cc16',
  '#e879f9', '#fb923c', '#34d399', '#818cf8', '#fbbf24'
];

const EMOJIS = ['😎','💪','🔥','⚡','🚀','🎯','💎','🏅','✨','🌟','👑','🦾','💥','🎆','🎯','💰','📈','🏆','⭐','🔱','🎖️','🏹','🗡️','🛡️','🧲','💫','🎪'];

// Salesroom definitions (static list)
const SALESROOM_ROOMS = [
  { id: 1, name: 'Breathless Punta Cana', icon: '🏖️' },
  { id: 2, name: 'Dreams Flora Resort & Spa', icon: '🌺' },
  { id: 3, name: 'Dreams Macao Beach Punta Cana', icon: '🌊' },
  { id: 4, name: 'Dreams Onyx Resort & Spa', icon: '💎' },
  { id: 5, name: 'Dreams Playa Esmeralda Resort & Spa', icon: '🌴' },
  { id: 6, name: 'Secrets Cap Cana', icon: '🏝️' },
  { id: 7, name: 'Secrets Royal Beach Punta Cana', icon: '👑' },
  { id: 8, name: 'Secrets Tides Punta Cana Resort & Spa', icon: '🌅' },
  { id: 9, name: 'Sunscape Dominicus La Romana', icon: '☀️' }
];

// Real team data from the screenshot
const SAMPLE_DATA = {
  reps: [
    { id: 1,  name: 'Tobias Erhart',                     avatar: '😎' },
    { id: 2,  name: 'Fernando Juan Tous Gelabert',        avatar: '💪' },
    { id: 3,  name: 'Luis Alfonso Jimenez Cabrera',       avatar: '🔥' },
    { id: 4,  name: 'Heriberto Gispert Alvarez',          avatar: '⚡' },
    { id: 5,  name: 'David De Leon Sanchez',               avatar: '🚀' },
    { id: 6,  name: 'Gabriela Del Mar Garcia Rivas',      avatar: '🎯' },
    { id: 7,  name: 'William Mariano Castillo Belalcazar',avatar: '💎' },
    { id: 8,  name: 'Pablo Rafael Prisiallni Careaga',    avatar: '🏅' },
    { id: 9,  name: 'Jose Ambiorix Vargas Tejada',        avatar: '✨' },
    { id: 10, name: 'Miguel Angel Garcia Cordero',        avatar: '🌟' },
    { id: 11, name: 'Michael Mateo Ruiz',                  avatar: '👑' },
    { id: 12, name: 'Jorge Felix Cuello Vidal',            avatar: '🦾' },
    { id: 13, name: 'Jose Fernando Osorio Bravo',         avatar: '💥' },
    { id: 14, name: 'Federico Enrique Chevalier Salas',   avatar: '🎆' },
    { id: 15, name: 'Eddimson Rafael Boitel Diaz',        avatar: '🔱' },
    { id: 16, name: 'Algelis Rivera Zorrilla',             avatar: '💰' },
    { id: 17, name: 'Leixon Martinez Gil',                 avatar: '📈' },
    { id: 18, name: 'Vladimir Stalin Caba Santana',       avatar: '🏆' },
    { id: 19, name: 'Joan Manuel Osoria Castillo',        avatar: '⭐' },
    { id: 20, name: 'Franklyn Amaury Pimentel Rivera',    avatar: '🎖️' },
    { id: 21, name: 'Gregori Martinez Garcia',             avatar: '🏹' },
    { id: 22, name: 'Luis Mendoza Alvarez',                avatar: '🗡️' },
    { id: 23, name: 'Pablo Arturo Pena Mateo',            avatar: '🛡️' },
    { id: 24, name: 'Estefania Carolina Cegarra Osorio',  avatar: '🧲' },
    { id: 25, name: 'Edinson Jose Abreu Diaz',            avatar: '💫' },
    { id: 26, name: 'Jodian Atasha Bowman',                avatar: '🎪' },
    { id: 27, name: 'Andres Alberto Garrigo Bonelly',     avatar: '🚀' }
  ],
  months: {
    // Company Year: December 2025 – November 2026
    'November 2026': {
      scores: { 1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0 },
      salesCount: { 1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0 }
    },
    'October 2026': {
      scores: { 1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0 },
      salesCount: { 1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0 }
    },
    'September 2026': {
      scores: { 1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0 },
      salesCount: { 1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0 }
    },
    'August 2026': {
      scores: { 1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0 },
      salesCount: { 1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0 }
    },
    'July 2026': {
      scores: { 1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0 },
      salesCount: { 1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0 }
    },
    'June 2026': {
      scores: { 1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0 },
      salesCount: { 1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0 }
    },
    'May 2026': {
      scores: { 1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0 },
      salesCount: { 1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0 }
    },
    'April 2026': {
      scores: { 1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0 },
      salesCount: { 1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0 }
    },
    'March 2026': {
      scores: { 1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0 },
      salesCount: { 1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0 }
    },
    'February 2026': {
      scores: { 1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0 },
      salesCount: { 1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0 }
    },
    'January 2026': {
      scores: {
        1: 63956, 2: 57229, 3: 54808, 4: 45325, 5: 43324,
        6: 43123, 7: 43016, 8: 41354, 9: 40715, 10: 39932,
        11: 31827, 12: 28634, 13: 24000, 14: 18849, 15: 17748,
        16: 17349, 17: 13905, 18: 13802, 19: 12875, 20: 12339,
        21: 11948, 22: 11948, 23: 11685, 24: 7004, 25: 5974,
        26: 5974, 27: 5974
      },
      salesCount: {
        1: 10, 2: 9, 3: 9, 4: 7, 5: 7,
        6: 7, 7: 6, 8: 7, 9: 6, 10: 5,
        11: 5, 12: 4, 13: 3, 14: 3, 15: 3,
        16: 0, 17: 2, 18: 2, 19: 2, 20: 2,
        21: 2, 22: 2, 23: 2, 24: 1, 25: 1,
        26: 1, 27: 1
      }
    },
    'December 2025': {
      scores: {
        1: 58200, 2: 62100, 3: 49500, 4: 42800, 5: 47200,
        6: 38900, 7: 41300, 8: 44100, 9: 36700, 10: 35400,
        11: 38200, 12: 32100, 13: 28400, 14: 21300, 15: 15600,
        16: 19200, 17: 16800, 18: 11500, 19: 14200, 20: 9800,
        21: 13400, 22: 10500, 23: 8900, 24: 5200, 25: 7800,
        26: 3200, 27: 6100
      },
      salesCount: {
        1: 9, 2: 10, 3: 8, 4: 7, 5: 8,
        6: 6, 7: 6, 8: 7, 9: 5, 10: 5,
        11: 6, 12: 5, 13: 4, 14: 3, 15: 2,
        16: 3, 17: 3, 18: 2, 19: 2, 20: 1,
        21: 2, 22: 2, 23: 1, 24: 1, 25: 1,
        26: 0, 27: 1
      }
    }
  },
  currentMonth: 'January 2026',
  salesrooms: {
    'January 2026': {
      1: { shows: 40, netSales: 2, closePercent: 5.00, volume: 12875 },
      2: { shows: 40, netSales: 5, closePercent: 12.50, volume: 30797 },
      3: { shows: 28, netSales: 3, closePercent: 10.71, volume: 18849 },
      4: { shows: 18, netSales: 1, closePercent: 5.56, volume: 6365 },
      5: { shows: 4, netSales: 2, closePercent: 50.00, volume: 13076 },
      6: { shows: 27, netSales: 0, closePercent: 0.00, volume: 0 },
      7: { shows: 38, netSales: 2, closePercent: 5.26, volume: 12674 },
      8: { shows: 15, netSales: 4, closePercent: 26.67, volume: 27707 },
      9: { shows: 12, netSales: 1, closePercent: 8.33, volume: 6365 }
    },
    'December 2025': {
      1: { shows: 0, netSales: 0, closePercent: 0, volume: 0 },
      2: { shows: 0, netSales: 0, closePercent: 0, volume: 0 },
      3: { shows: 0, netSales: 0, closePercent: 0, volume: 0 },
      4: { shows: 0, netSales: 0, closePercent: 0, volume: 0 },
      5: { shows: 0, netSales: 0, closePercent: 0, volume: 0 },
      6: { shows: 0, netSales: 0, closePercent: 0, volume: 0 },
      7: { shows: 0, netSales: 0, closePercent: 0, volume: 0 },
      8: { shows: 0, netSales: 0, closePercent: 0, volume: 0 },
      9: { shows: 0, netSales: 0, closePercent: 0, volume: 0 }
    }
  }
};

// Pre-fill empty months for salesrooms in SAMPLE_DATA
Object.keys(SAMPLE_DATA.months).forEach(month => {
  if (!SAMPLE_DATA.salesrooms[month]) {
    SAMPLE_DATA.salesrooms[month] = {};
    SALESROOM_ROOMS.forEach(r => {
      SAMPLE_DATA.salesrooms[month][r.id] = { shows: 0, netSales: 0, closePercent: 0, volume: 0 };
    });
  }
});

// ===== FIREBASE STATE MANAGEMENT =====
const db = firebase.database();
const DB_REF = db.ref('salesboard');

let state = null;
let _saveQueued = false;

// Save entire state to Firebase (debounced to avoid excessive writes)
function saveState() {
  if (_saveQueued) return;
  _saveQueued = true;
  setTimeout(() => {
    _saveQueued = false;
    if (!state) return;
    DB_REF.set(state).catch(err => console.warn('Firebase save failed:', err));
  }, 300);
}

// Load state once from Firebase, seed if empty, then listen for real-time changes
function initFirebase() {
  DB_REF.get().then(snapshot => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      if (data && data.months && data.currentMonth && data.months[data.currentMonth]) {
        state = data;
        // Ensure salesrooms data exists in state
        if (!state.salesrooms) {
          state.salesrooms = JSON.parse(JSON.stringify(SAMPLE_DATA.salesrooms));
          saveState();
        }
      } else {
        state = JSON.parse(JSON.stringify(SAMPLE_DATA));
        saveState();
      }
    } else {
      // First run — seed with sample data
      state = JSON.parse(JSON.stringify(SAMPLE_DATA));
      saveState();
    }

    // Auto-detect the real current month so the page opens to it
    const realMonth = getCurrentMonthKey();
    if (state.months[realMonth]) {
      state.currentMonth = realMonth;
    }

    renderAll();
    renderAdminRepList();
    renderAdminSalesroomList();

    // Real-time listener: update all connected browsers when data changes
    DB_REF.on('value', snapshot => {
      const data = snapshot.val();
      if (!data) return;
      // Preserve the currently selected month across real-time updates
      const selectedMonth = state ? state.currentMonth : null;
      state = data;
      if (selectedMonth && state.months[selectedMonth]) {
        state.currentMonth = selectedMonth;
      }
      renderAll();
      renderAdminRepList();
      renderAdminSalesroomList();
    });
  }).catch(err => {
    console.error('Firebase connection failed:', err);
    // Graceful fallback: use sample data locally if Firebase fails
    state = JSON.parse(JSON.stringify(SAMPLE_DATA));
    const realMonth = getCurrentMonthKey();
    if (state.months[realMonth]) {
      state.currentMonth = realMonth;
    }
    renderAll();
    renderAdminRepList();
    renderAdminSalesroomList();
  });
}

function loadSampleData() {
  state = JSON.parse(JSON.stringify(SAMPLE_DATA));
  saveState();
  renderAll();
  renderAdminRepList();
  renderAdminSalesroomList();
}

// ===== INIT =====
initFirebase();

// ===== UTILITY =====
function getCurrentMonthKey() {
  const now = new Date();
  const monthName = now.toLocaleString('en-US', { month: 'long' });
  return `${monthName} ${now.getFullYear()}`;
}
function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}
function formatScore(score) {
  return '$' + score.toLocaleString();
}
function getAvatarColor(id) {
  return AVATAR_COLORS[(id - 1) % AVATAR_COLORS.length];
}
function getOrdinal(n) {
  const s = ['th','st','nd','rd'];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}
function getDisplayName(name) {
  return name;
}
function getShortName(name) {
  // Shortened for podium labels where space is tight
  const parts = name.split(' ');
  if (parts.length <= 2) return name;
  return parts[0] + ' ' + parts[parts.length - 1];
}

// Returns month keys sorted in company-year order: Dec 2025 → Nov 2026
function getSortedMonthKeys() {
  const monthOrder = ['December','January','February','March','April','May','June','July','August','September','October','November'];
  return Object.keys(state.months).sort((a, b) => {
    const [mA, yA] = [a.split(' ')[0], parseInt(a.split(' ')[1])];
    const [mB, yB] = [b.split(' ')[0], parseInt(b.split(' ')[1])];
    if (yA !== yB) return yA - yB;
    return monthOrder.indexOf(mA) - monthOrder.indexOf(mB);
  });
}

function getRankedReps() {
  const monthData = state.months[state.currentMonth];
  if (!monthData) return [];
  return state.reps
    .map(rep => ({
      ...rep,
      score: monthData.scores[rep.id] || 0,
      salesCount: monthData.salesCount?.[rep.id] || 0,
      shows: monthData.shows?.[rep.id] || 0
    }))
    .sort((a, b) => b.score - a.score);
}

function getPrevMonthKey() {
  const keys = Object.keys(state.months);
  const idx = keys.indexOf(state.currentMonth);
  if (idx < keys.length - 1) return keys[idx + 1];
  return null;
}

function getRankChange(repId) {
  const prevKey = getPrevMonthKey();
  if (!prevKey) return 0;
  const currentRanked = getRankedReps();
  const currentRank = currentRanked.findIndex(r => r.id === repId) + 1;
  const prevData = state.months[prevKey];
  if (!prevData) return 0;
  const prevRanked = state.reps
    .map(rep => ({ ...rep, score: prevData.scores[rep.id] || 0 }))
    .sort((a, b) => b.score - a.score);
  const prevRank = prevRanked.findIndex(r => r.id === repId) + 1;
  return prevRank - currentRank;
}

function getSparklineData(repId) {
  const sorted = getSortedMonthKeys();
  // Show up to 4 months ending at (and including) the currently selected month
  const currentIdx = sorted.indexOf(state.currentMonth);
  const endIdx = currentIdx >= 0 ? currentIdx + 1 : sorted.length;
  const startIdx = Math.max(0, endIdx - 4);
  const keys = sorted.slice(startIdx, endIdx);
  return keys.map(key => state.months[key]?.scores[repId] || 0);
}

function getBadges(rep) {
  const badges = [];
  if (rep.score >= 100000) badges.push({ label: '💎 100K Club', class: 'badge-100k' });
  if (rep.score >= 50000) badges.push({ label: '🔥 50K+', class: 'badge-50k' });
  if (rep.score >= 40000 && rep.score < 50000) badges.push({ label: '⭐ Closer', class: 'badge-closer' });

  const keys = Object.keys(state.months);
  let streak = 0;
  for (const key of keys) {
    const data = state.months[key];
    if (!data) break;
    const ranked = state.reps
      .map(r => ({ id: r.id, score: data.scores[r.id] || 0 }))
      .sort((a, b) => b.score - a.score);
    const pos = ranked.findIndex(r => r.id === rep.id) + 1;
    if (pos <= 3) streak++;
    else break;
  }
  if (streak >= 2) badges.push({ label: `🔥 ${streak}mo Streak`, class: 'badge-streak' });

  // Top 5 consistency
  let top5Count = 0;
  for (const key of keys) {
    const data = state.months[key];
    if (!data) continue;
    const ranked = state.reps
      .map(r => ({ id: r.id, score: data.scores[r.id] || 0 }))
      .sort((a, b) => b.score - a.score);
    if (ranked.findIndex(r => r.id === rep.id) < 5) top5Count++;
  }
  if (top5Count >= 3) badges.push({ label: '🏅 Consistent', class: 'badge-top5' });

  const change = getRankChange(rep.id);
  if (change >= 3) badges.push({ label: '📈 Rising Star', class: 'badge-rising' });

  return badges;
}

function getTitleForRank(rank) {
  if (rank === 1) return '👑 Sales Champion';
  if (rank === 2) return '🥈 Runner Up';
  if (rank === 3) return '🥉 Top Contender';
  if (rank <= 5) return '⭐ Senior Closer';
  if (rank <= 10) return '💪 Closer';
  if (rank <= 15) return '🎯 Contributor';
  return '📈 Building Momentum';
}

// ===== SPARKLINE =====
function renderSparkline(data, color = '#a855f7') {
  if (!data.length || data.every(v => v === 0)) return '';
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 80, h = 30, pad = 3;
  const points = data.map((v, i) => {
    const x = pad + (i / (data.length - 1)) * (w - pad * 2);
    const y = pad + (1 - (v - min) / range) * (h - pad * 2);
    return `${x},${y}`;
  });
  const gid = `g${Math.random().toString(36).slice(2)}`;
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
    </linearGradient></defs>
    <polygon points="${points[0].split(',')[0]},${h-pad} ${points.join(' ')} ${points[points.length-1].split(',')[0]},${h-pad}" fill="url(#${gid})"/>
    <polyline points="${points.join(' ')}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="${points[points.length-1].split(',')[0]}" cy="${points[points.length-1].split(',')[1]}" r="2.5" fill="${color}" stroke="#fff" stroke-width="1"/>
  </svg>`;
}

function renderLargeChart(data, labels, expanded = false) {
  if (!data.length || data.every(v => v === 0)) return '<div style="text-align:center;color:rgba(255,255,255,0.3);padding:20px;">No history yet</div>';
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 400;
  const h = expanded ? 180 : 80;
  const pad = expanded ? 20 : 10;
  const fontSize = expanded ? 11 : 7;
  const labelSize = expanded ? 10 : 8;
  const dotR = expanded ? 5 : 4;
  const strokeW = expanded ? 3 : 2.5;
  const valueOffset = expanded ? 12 : 6;
  const points = data.map((v, i) => {
    const x = pad + (i / (data.length - 1)) * (w - pad * 2);
    const y = (pad + 10) + (1 - (v - min) / range) * (h - pad * 2 - 20);
    return { x, y, v };
  });
  const polyline = points.map(p => `${p.x},${p.y}`).join(' ');
  const gid = `lg${Math.random().toString(36).slice(2)}`;

  let labelsHtml = '';
  points.forEach((p, i) => {
    if (labels && labels[i]) {
      labelsHtml += `<text x="${p.x}" y="${h - 4}" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-size="${labelSize}" font-family="Outfit" font-weight="500">${labels[i]}</text>`;
    }
    const valText = p.v >= 1000 ? `$${(p.v/1000).toFixed(0)}k` : `$${p.v}`;
    labelsHtml += `<text x="${p.x}" y="${p.y - valueOffset}" text-anchor="middle" fill="#00e676" font-size="${fontSize}" font-family="Outfit" font-weight="600">${valText}</text>`;
  });

  // Grid lines for expanded view
  let gridHtml = '';
  if (expanded) {
    const gridSteps = 4;
    for (let i = 0; i <= gridSteps; i++) {
      const gy = (pad + 10) + (i / gridSteps) * (h - pad * 2 - 20);
      gridHtml += `<line x1="${pad}" y1="${gy}" x2="${w - pad}" y2="${gy}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>`;
    }
  }

  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <defs><linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#a855f7" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#a855f7" stop-opacity="0"/>
    </linearGradient></defs>
    ${gridHtml}
    <polygon points="${points[0].x},${h-pad-10} ${polyline} ${points[points.length-1].x},${h-pad-10}" fill="url(#${gid})"/>
    <polyline points="${polyline}" fill="none" stroke="#a855f7" stroke-width="${strokeW}" stroke-linecap="round" stroke-linejoin="round"/>
    ${points.map(p => `<circle cx="${p.x}" cy="${p.y}" r="${dotR}" fill="#a855f7" stroke="#1e1a4a" stroke-width="2"/>`).join('')}
    ${labelsHtml}
  </svg>`;
}

// ===== RENDER =====
function renderAvatar(rep, size = 'normal') {
  const fs = size === 'large' ? '2rem' : size === 'xl' ? '2.5rem' : '1.2rem';
  // Check if rep has a profile picture
  if (rep.photo) {
    return `<img src="${rep.photo}" alt="${rep.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
  }
  return `<span style="font-size:${fs}">${rep.avatar || getInitials(rep.name)}</span>`;
}

function renderPodium() {
  const ranked = getRankedReps();
  // For the podium, only non-managers can appear
  const podiumEligible = ranked.filter(r => !r.isManager);
  if (podiumEligible.length < 3) {
    document.querySelector('.podium-container').innerHTML = `<div class="empty-state"><div class="empty-state-icon">🏆</div><div class="empty-state-text">Add at least 3 non-manager reps to see the podium</div></div>`;
    return;
  }

  // Restore podium HTML structure if it was overwritten by empty state
  const podiumContainer = document.querySelector('.podium-container');
  if (!document.getElementById('avatar-1')) {
    location.reload(); // simplest reset
    return;
  }

  // Top 3 non-managers go on the podium
  const podiumReps = podiumEligible.slice(0, 3);
  const podiumIds = new Set(podiumReps.map(r => r.id));

  [1, 2, 3].forEach(pos => {
    const rep = podiumReps[pos - 1];
    const el = document.getElementById(`avatar-${pos}`);
    el.innerHTML = renderAvatar(rep, pos === 1 ? 'large' : 'normal');
    el.style.background = getAvatarColor(rep.id);
    el.setAttribute('data-rep-id', rep.id);
    document.getElementById(`name-${pos}`).textContent = getDisplayName(rep.name);
    document.getElementById(`name-${pos}`).setAttribute('data-rep-id', rep.id);
    const closePercent = rep.shows > 0 ? ((rep.salesCount / rep.shows) * 100).toFixed(1) + '%' : '\u2014';
    document.getElementById(`score-${pos}`).innerHTML = `${formatScore(rep.score)} <span class="podium-deals">${rep.salesCount} deals</span><span class="podium-close">Close: ${closePercent}</span>`;
  });

  // Everyone NOT on the podium (including managers) goes in the list below
  const rest = ranked.filter(r => !podiumIds.has(r.id));
  let playerRank = 4; // next rank for non-managers
  document.getElementById('podium-rankings-list').innerHTML = rest.map(rep => {
    if (rep.isManager) {
      return renderRankRow(rep, null); // null rank = no number
    } else {
      return renderRankRow(rep, playerRank++);
    }
  }).join('');
}

function renderRankRow(rep, rank) {
  const change = getRankChange(rep.id);
  const sparkData = getSparklineData(rep.id);
  const badges = getBadges(rep);
  let changeHtml = '';
  if (change > 0) changeHtml = `<span class="rank-change rank-up">▲${change}</span>`;
  else if (change < 0) changeHtml = `<span class="rank-change rank-down">▼${Math.abs(change)}</span>`;
  const badgeHtml = badges.length
    ? `<div class="rank-badges">${badges.slice(0, 2).map(b => `<span class="badge ${b.class}">${b.label}</span>`).join('')}</div>`
    : '';
  const closePercent = rep.shows > 0 ? ((rep.salesCount / rep.shows) * 100).toFixed(1) : '—';
  const closeHtml = `<span class="rank-close">Close: ${closePercent}${rep.shows > 0 ? '%' : ''}</span>`;
  const isManager = rep.isManager || false;
  const mgrRowClass = isManager ? ' manager-row' : '';
  const mgrBadge = isManager ? '<span class="rank-mgr-badge">MGR</span>' : '';
  const rankDisplay = (rank !== null && !isManager)
    ? `<div class="rank-number">${rank}<sup>${getOrdinal(rank)}</sup></div>`
    : `<div class="rank-number rank-number-mgr">—</div>`;
  return `
    <div class="rank-row${mgrRowClass}" data-rank="${rank || ''}" data-rep-id="${rep.id}" style="animation-delay:${((rank||1)-1)*0.04}s" onclick="openProfile(${rep.id})">
      <div class="rank-avatar" style="background:${getAvatarColor(rep.id)}">${renderAvatar(rep)}</div>
      <div class="rank-info">
        <div class="rank-name">${getDisplayName(rep.name)} ${mgrBadge}</div>
        <div class="rank-score-value"><span class="score-star">⭐</span> ${formatScore(rep.score)} <span class="rank-deals">${rep.salesCount} deals</span> ${closeHtml} ${changeHtml}</div>
        ${badgeHtml}
      </div>
      <div class="sparkline-container">${renderSparkline(sparkData)}</div>
      ${rankDisplay}
    </div>`;
}

function getRankedSalesrooms() {
  const monthData = state.salesrooms?.[state.currentMonth];
  if (!monthData) return [];

  const rooms = SALESROOM_ROOMS.map(room => {
    const data = monthData[room.id] || { shows: 0, netSales: 0, closePercent: 0, volume: 0 };
    return { ...room, ...data };
  });

  // Find max values for normalization
  const maxVolume = Math.max(...rooms.map(r => r.volume), 1);
  const maxClose = Math.max(...rooms.map(r => r.closePercent), 1);

  // Calculate 50/50 weighted score
  return rooms.map(room => {
    const volumeScore = (room.volume / maxVolume) * 50;
    const closeScore = (room.closePercent / maxClose) * 50;
    const weightedScore = volumeScore + closeScore;
    return { ...room, volumeScore, closeScore, weightedScore, maxVolume, maxClose };
  }).sort((a, b) => b.weightedScore - a.weightedScore);
}

function renderSalesrooms() {
  const listEl = document.getElementById('salesroom-list');
  if (!listEl) return;
  const ranked = getRankedSalesrooms();

  if (!ranked.length || ranked.every(r => r.weightedScore === 0)) {
    listEl.innerHTML = `<div class="empty-state"><div class="empty-state-icon">🏨</div><div class="empty-state-text">No salesroom data for this month yet.</div></div>`;
    return;
  }

  listEl.innerHTML = ranked.map((room, i) => {
    const rank = i + 1;
    const volumeBarWidth = room.maxVolume > 0 ? (room.volume / room.maxVolume) * 100 : 0;
    const closeBarWidth = room.maxClose > 0 ? (room.closePercent / room.maxClose) * 100 : 0;

    return `
      <div class="salesroom-card" data-rank="${rank}" style="animation-delay:${(rank-1)*0.05}s">
        <div class="salesroom-rank">${rank}<sup>${getOrdinal(rank)}</sup></div>
        <div class="salesroom-icon">${room.icon}</div>
        <div class="salesroom-info">
          <div class="salesroom-name">${room.name}</div>
          <div class="salesroom-stats">
            <div class="salesroom-stat-item">Shows: <strong>${room.shows}</strong></div>
            <div class="salesroom-stat-item">Net Sales: <strong>${room.netSales}</strong></div>
            <div class="salesroom-stat-item">Close: <strong>${room.closePercent.toFixed(2)}%</strong></div>
            <div class="salesroom-stat-item">Vol: <strong>${formatScore(room.volume)}</strong></div>
          </div>
          <div class="salesroom-bars">
            <div class="salesroom-bar-group">
              <div class="salesroom-bar-label">Volume (${room.volumeScore.toFixed(1)}pts)</div>
              <div class="salesroom-bar"><div class="salesroom-bar-fill bar-volume" style="width:${volumeBarWidth}%"></div></div>
            </div>
            <div class="salesroom-bar-group">
              <div class="salesroom-bar-label">Close % (${room.closeScore.toFixed(1)}pts)</div>
              <div class="salesroom-bar"><div class="salesroom-bar-fill bar-close" style="width:${closeBarWidth}%"></div></div>
            </div>
          </div>
        </div>
        <div class="salesroom-weighted-score">
          <div class="salesroom-weighted-value">${room.weightedScore.toFixed(1)}</div>
          <div class="salesroom-weighted-label">Score</div>
        </div>
      </div>`;
  }).join('');
}

function renderMonthSelector() {
  const select = document.getElementById('month-selector');
  const months = Object.keys(state.months);
  // Sort chronologically: Dec 2025 → Nov 2026
  const monthOrder = ['December','January','February','March','April','May','June','July','August','September','October','November'];
  months.sort((a, b) => {
    const [mA, yA] = [a.split(' ')[0], parseInt(a.split(' ')[1])];
    const [mB, yB] = [b.split(' ')[0], parseInt(b.split(' ')[1])];
    if (yA !== yB) return yA - yB;
    return monthOrder.indexOf(mA) - monthOrder.indexOf(mB);
  });
  select.innerHTML = months.map(m =>
    `<option value="${m}" ${m === state.currentMonth ? 'selected' : ''}>${m}</option>`
  ).join('');
}

function renderAdminRepList() {
  const listEl = document.getElementById('admin-rep-list');
  const monthData = state.months[state.currentMonth];
  listEl.innerHTML = state.reps.map(rep => {
    const avatarContent = rep.photo
      ? `<img src="${rep.photo}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`
      : (rep.avatar || getInitials(rep.name));
    const isManager = rep.isManager || false;
    const mgrClass = isManager ? ' admin-rep-row-manager' : '';
    const mgrBtnClass = isManager ? 'btn-manager active' : 'btn-manager';
    const mgrIcon = isManager ? '👑' : '👤';
    const mgrTitle = isManager ? 'Manager (excluded from rankings) — click to make player' : 'Player — click to make manager';
    return `
    <div class="admin-rep-row${mgrClass}" data-rep-name="${rep.name.toLowerCase()}">
      <button class="${mgrBtnClass}" onclick="toggleManager(${rep.id})" title="${mgrTitle}">${mgrIcon}</button>
      <div class="admin-avatar-wrap" style="width:32px;height:32px;border-radius:50%;background:${getAvatarColor(rep.id)};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:0.9rem;overflow:hidden;cursor:pointer;position:relative;" onclick="triggerPhotoUpload(${rep.id})" title="Click to upload photo">
        ${avatarContent}
        <div class="admin-avatar-overlay">📷</div>
      </div>
      <span class="admin-rep-name">${getShortName(rep.name)}${isManager ? ' <span class="mgr-tag">MGR</span>' : ''}</span>
      <input type="number" class="input-field" value="${monthData?.scores[rep.id] || 0}" id="score-input-${rep.id}" title="Revenue">
      <input type="number" class="input-field input-tiny" value="${monthData?.shows?.[rep.id] || 0}" id="shows-input-${rep.id}" title="Shows" placeholder="Shows">
      <input type="number" class="input-field input-tiny" value="${monthData?.salesCount?.[rep.id] || 0}" id="qty-input-${rep.id}" title="Deals" placeholder="Deals">
      <button class="btn-save-score" onclick="updateScore(${rep.id})">✓</button>
      <button class="btn-delete-rep" onclick="deleteRep(${rep.id})">✕</button>
    </div>`;
  }).join('');

  // Re-apply search filter if there's an active search
  const searchInput = document.getElementById('admin-search');
  if (searchInput && searchInput.value.trim()) {
    filterAdminReps(searchInput.value.trim());
  }
}

// ===== ADMIN SEARCH =====
function filterAdminReps(query) {
  const rows = document.querySelectorAll('.admin-rep-row');
  const lowerQuery = query.toLowerCase();
  let visibleCount = 0;

  rows.forEach(row => {
    const name = row.getAttribute('data-rep-name') || '';
    if (name.includes(lowerQuery)) {
      row.classList.remove('search-hidden');
      visibleCount++;
    } else {
      row.classList.add('search-hidden');
    }
  });

  // Show/hide no results message
  let noResults = document.getElementById('admin-search-no-results');
  if (visibleCount === 0 && query.length > 0) {
    if (!noResults) {
      noResults = document.createElement('div');
      noResults.id = 'admin-search-no-results';
      noResults.className = 'admin-search-no-results';
      document.getElementById('admin-rep-list').appendChild(noResults);
    }
    noResults.innerHTML = `<div class="no-results-icon">🔍</div>No players found for "${query}"`;
    noResults.style.display = 'block';
  } else if (noResults) {
    noResults.style.display = 'none';
  }
}

document.getElementById('admin-search').addEventListener('input', (e) => {
  filterAdminReps(e.target.value.trim());
});

// ===== ADMIN SALESROOM LIST =====
function renderAdminSalesroomList() {
  const listEl = document.getElementById('admin-salesroom-list');
  if (!listEl) return;

  // Ensure salesrooms data exists for current month
  if (!state.salesrooms) state.salesrooms = {};
  if (!state.salesrooms[state.currentMonth]) {
    state.salesrooms[state.currentMonth] = {};
    SALESROOM_ROOMS.forEach(r => {
      state.salesrooms[state.currentMonth][r.id] = { shows: 0, netSales: 0, closePercent: 0, volume: 0 };
    });
  }

  const monthData = state.salesrooms[state.currentMonth];

  listEl.innerHTML = SALESROOM_ROOMS.map(room => {
    const data = monthData[room.id] || { shows: 0, netSales: 0, closePercent: 0, volume: 0 };
    return `
    <div class="admin-salesroom-row">
      <div class="admin-salesroom-header">
        <span class="admin-salesroom-icon">${room.icon}</span>
        <span class="admin-salesroom-name">${room.name}</span>
      </div>
      <div class="admin-salesroom-fields">
        <div class="admin-salesroom-field">
          <label>Shows</label>
          <input type="number" class="input-field" value="${data.shows}" id="sr-shows-${room.id}">
        </div>
        <div class="admin-salesroom-field">
          <label>Net Sales</label>
          <input type="number" class="input-field" value="${data.netSales}" id="sr-netsales-${room.id}">
        </div>
        <div class="admin-salesroom-field">
          <label>Close %</label>
          <input type="number" step="0.01" class="input-field" value="${data.closePercent}" id="sr-close-${room.id}">
        </div>
        <div class="admin-salesroom-field">
          <label>Volume</label>
          <input type="number" class="input-field" value="${data.volume}" id="sr-volume-${room.id}">
        </div>
        <button class="btn-save-score" onclick="updateSalesroom(${room.id})">✓</button>
      </div>
    </div>`;
  }).join('');
}

function updateSalesroom(roomId) {
  const shows = parseInt(document.getElementById(`sr-shows-${roomId}`).value) || 0;
  const netSales = parseInt(document.getElementById(`sr-netsales-${roomId}`).value) || 0;
  const closePercent = parseFloat(document.getElementById(`sr-close-${roomId}`).value) || 0;
  const volume = parseInt(document.getElementById(`sr-volume-${roomId}`).value) || 0;

  if (!state.salesrooms) state.salesrooms = {};
  if (!state.salesrooms[state.currentMonth]) state.salesrooms[state.currentMonth] = {};

  state.salesrooms[state.currentMonth][roomId] = { shows, netSales, closePercent, volume };
  saveState();
  renderAll();

  // Flash the save button green
  const btn = event.target.closest('.btn-save-score');
  if (btn) {
    btn.textContent = '✅';
    setTimeout(() => btn.textContent = '✓', 1000);
  }
}

// ===== MANAGER TOGGLE =====
function toggleManager(repId) {
  const rep = state.reps.find(r => r.id === repId);
  if (rep) {
    rep.isManager = !rep.isManager;
    saveState();
    renderAll();
    renderAdminRepList();
  }
}

// ===== PHOTO UPLOAD =====
function triggerPhotoUpload(repId) {
  if (!adminAuthenticated) {
    alert('🔒 Only admins can upload photos.');
    return;
  }
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      // Resize image to save localStorage space
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxSize = 400; // higher resolution for sharp display
        let w = img.width, h = img.height;
        if (w > h) { h = (h / w) * maxSize; w = maxSize; }
        else { w = (w / h) * maxSize; h = maxSize; }
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
        // Save to state
        const rep = state.reps.find(r => r.id === repId);
        if (rep) {
          rep.photo = dataUrl;
          saveState();
          renderAll();
          renderAdminRepList();
          // Update profile if open
          if (!document.getElementById('profile-modal').classList.contains('hidden')) {
            openProfile(repId);
          }
        }
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

function renderAll() {
  renderPodium();
  renderSalesrooms();
  renderMonthSelector();
  if (typeof updateTrophyWinner === 'function') updateTrophyWinner();
}

// ===== PLAYER PROFILE =====
function openProfile(repId) {
  const rep = state.reps.find(r => r.id === repId);
  if (!rep) return;

  const ranked = getRankedReps();
  const rank = ranked.findIndex(r => r.id === repId) + 1;
  const monthData = state.months[state.currentMonth];
  const score = monthData?.scores[repId] || 0;
  const salesCount = monthData?.salesCount?.[repId] || 0;
  const change = getRankChange(repId);
  const badges = getBadges({ ...rep, score });

  // Avatar
  const avatarEl = document.getElementById('profile-avatar');
  if (rep.photo) {
    avatarEl.innerHTML = `<img src="${rep.photo}" alt="${rep.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
    avatarEl.style.background = 'transparent';
  } else {
    avatarEl.innerHTML = `<span style="font-size:2.5rem">${rep.avatar}</span>`;
    avatarEl.style.background = getAvatarColor(rep.id);
  }

  // Photo upload button in profile
  const profileUploadBtn = document.getElementById('profile-photo-upload');
  if (profileUploadBtn) {
    profileUploadBtn.style.display = adminAuthenticated ? 'flex' : 'none';
    profileUploadBtn.onclick = () => triggerPhotoUpload(rep.id);
  }

  // Ring color
  const wrap = document.getElementById('profile-avatar-wrap');
  wrap.className = 'profile-avatar-wrap';
  if (rank === 1) wrap.classList.add('gold-ring');
  else if (rank === 2) wrap.classList.add('silver-ring');
  else if (rank === 3) wrap.classList.add('bronze-ring');

  // Rank badge
  const rankBadge = document.getElementById('profile-rank-badge');
  rankBadge.innerHTML = `#${rank}${getOrdinal(rank)} Place`;
  rankBadge.className = 'profile-rank-badge';
  if (rank === 1) rankBadge.classList.add('gold');
  else if (rank === 2) rankBadge.classList.add('silver');
  else if (rank === 3) rankBadge.classList.add('bronze');

  // Name & title
  document.getElementById('profile-name').textContent = rep.name;
  document.getElementById('profile-title').textContent = getTitleForRank(rank);

  // Stats
  document.getElementById('profile-revenue').textContent = formatScore(score);
  document.getElementById('profile-sales-count').textContent = salesCount;
  document.getElementById('profile-current-rank').textContent = `#${rank}`;

  const changeEl = document.getElementById('profile-rank-change');
  if (change > 0) { changeEl.textContent = `▲ ${change}`; changeEl.style.color = '#00e676'; }
  else if (change < 0) { changeEl.textContent = `▼ ${Math.abs(change)}`; changeEl.style.color = '#ec4899'; }
  else { changeEl.textContent = '—'; changeEl.style.color = 'rgba(255,255,255,0.5)'; }

  // Badges
  const badgesEl = document.getElementById('profile-badges');
  if (badges.length) {
    badgesEl.innerHTML = badges.map(b => `<span class="badge ${b.class}">${b.label}</span>`).join('');
  } else {
    badgesEl.innerHTML = '<span style="color:rgba(255,255,255,0.3);font-size:0.85rem;">Keep pushing to earn badges! 💪</span>';
  }

  // Chart — show up to 6 months ending at the currently selected month
  const sortedMonths = getSortedMonthKeys();
  const curIdx = sortedMonths.indexOf(state.currentMonth);
  const chartEnd = curIdx >= 0 ? curIdx + 1 : sortedMonths.length;
  const chartStart = Math.max(0, chartEnd - 6);
  const chartMonths = sortedMonths.slice(chartStart, chartEnd);
  const chartData = chartMonths.map(k => state.months[k]?.scores[repId] || 0);
  const chartLabels = chartMonths.map(k => k.split(' ')[0].slice(0, 3));
  const chartEl = document.getElementById('profile-chart');
  chartEl.innerHTML = renderLargeChart(chartData, chartLabels, false);
  chartEl.classList.remove('expanded');
  chartEl.onclick = () => {
    const isExpanded = chartEl.classList.toggle('expanded');
    chartEl.innerHTML = renderLargeChart(chartData, chartLabels, isExpanded);
  };

  // History (sorted Dec → Nov, same as dropdown)
  const historyEl = document.getElementById('profile-history');
  const allMonths = getSortedMonthKeys();
  historyEl.innerHTML = allMonths.map(monthKey => {
    const mData = state.months[monthKey];
    const mScore = mData?.scores[repId] || 0;
    const mSalesCount = mData?.salesCount?.[repId] || 0;
    const mRanked = state.reps
      .map(r => ({ id: r.id, score: mData?.scores[r.id] || 0 }))
      .sort((a, b) => b.score - a.score);
    const mRank = mRanked.findIndex(r => r.id === repId) + 1;
    return `
      <div class="history-row">
        <span class="history-month">${monthKey}</span>
        <span class="history-score">${formatScore(mScore)}</span>
        <span style="color:rgba(255,255,255,0.4);font-size:0.8rem;">${mSalesCount} sales</span>
        <span class="history-rank ${mRank <= 3 ? 'top3' : ''}">#${mRank}</span>
      </div>`;
  }).join('');

  // Show modal
  document.getElementById('profile-modal').classList.remove('hidden');
}

function closeProfile() {
  document.getElementById('profile-modal').classList.add('hidden');
}

// ===== VIEW SWITCHING =====
function switchView(viewName) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  const viewEl = document.getElementById(`view-${viewName}`);
  if (viewEl) viewEl.classList.add('active');
  const tabEl = document.querySelector(`.nav-tab[data-view="${viewName}"]`);
  if (tabEl) tabEl.classList.add('active');

  // Lazy-init 3D trophy when salesroom view becomes visible
  if (viewName === 'salesroom' && typeof THREE !== 'undefined') {
    // Small delay to ensure the view is visible before initializing WebGL
    setTimeout(() => initTrophyMini(), 100);
  }
}

// ===== EVENT LISTENERS =====
document.querySelectorAll('.nav-tab').forEach(tab => {
  tab.addEventListener('click', () => switchView(tab.dataset.view));
});

document.getElementById('month-selector').addEventListener('change', (e) => {
  state.currentMonth = e.target.value;
  saveState();
  renderAll();
  renderAdminRepList();
  renderAdminSalesroomList();
});

// Podium name clicks
document.addEventListener('click', (e) => {
  const el = e.target.closest('.clickable-name');
  if (el) {
    const repId = el.getAttribute('data-rep-id');
    if (repId) openProfile(parseInt(repId));
  }
});

// Admin
document.getElementById('admin-toggle').addEventListener('click', openAdmin);
document.getElementById('modal-close').addEventListener('click', closeAdmin);
document.getElementById('modal-overlay').addEventListener('click', closeAdmin);

// Profile
document.getElementById('profile-close').addEventListener('click', closeProfile);
document.getElementById('profile-overlay').addEventListener('click', closeProfile);

const ADMIN_PASSWORD = 'ChoicesTeam2026';
let adminAuthenticated = false;

function openAdmin() {
  if (!adminAuthenticated) {
    const pw = prompt('🔒 Enter admin password:');
    if (pw !== ADMIN_PASSWORD) {
      alert('❌ Incorrect password.');
      return;
    }
    adminAuthenticated = true;
  }
  document.getElementById('admin-modal').classList.remove('hidden');
  renderAdminRepList();
  renderAdminSalesroomList();
}
function closeAdmin() {
  document.getElementById('admin-modal').classList.add('hidden');
  // Clear search when closing admin panel
  const searchInput = document.getElementById('admin-search');
  if (searchInput) {
    searchInput.value = '';
    filterAdminReps('');
  }
}

// Add rep
document.getElementById('btn-add-rep').addEventListener('click', () => {
  const nameInput = document.getElementById('new-rep-name');
  const scoreInput = document.getElementById('new-rep-score');
  const qtyInput = document.getElementById('new-rep-qty');
  const name = nameInput.value.trim();
  const score = parseInt(scoreInput.value) || 0;
  const qty = parseInt(qtyInput.value) || 0;
  const showsInput = document.getElementById('new-rep-shows');
  const shows = parseInt(showsInput?.value) || 0;

  if (!name) {
    nameInput.style.borderColor = '#f43f5e';
    setTimeout(() => nameInput.style.borderColor = '', 1500);
    return;
  }

  const newId = state.reps.length ? Math.max(...state.reps.map(r => r.id)) + 1 : 1;
  state.reps.push({
    id: newId,
    name,
    avatar: EMOJIS[Math.floor(Math.random() * EMOJIS.length)]
  });

  if (!state.months[state.currentMonth]) {
    state.months[state.currentMonth] = { scores: {}, salesCount: {}, shows: {} };
  }
  state.months[state.currentMonth].scores[newId] = score;
  if (!state.months[state.currentMonth].salesCount) state.months[state.currentMonth].salesCount = {};
  state.months[state.currentMonth].salesCount[newId] = qty;
  if (!state.months[state.currentMonth].shows) state.months[state.currentMonth].shows = {};
  state.months[state.currentMonth].shows[newId] = shows;

  saveState();
  renderAll();
  renderAdminRepList();
  nameInput.value = '';
  scoreInput.value = '';
  qtyInput.value = '';
  if (showsInput) showsInput.value = '';
});

function updateScore(repId) {
  const scoreInput = document.getElementById(`score-input-${repId}`);
  const qtyInput = document.getElementById(`qty-input-${repId}`);
  const showsInput = document.getElementById(`shows-input-${repId}`);
  const newScore = parseInt(scoreInput.value) || 0;
  const newQty = parseInt(qtyInput.value) || 0;
  const newShows = parseInt(showsInput?.value) || 0;

  if (!state.months[state.currentMonth]) {
    state.months[state.currentMonth] = { scores: {}, salesCount: {}, shows: {} };
  }
  if (!state.months[state.currentMonth].salesCount) state.months[state.currentMonth].salesCount = {};
  if (!state.months[state.currentMonth].shows) state.months[state.currentMonth].shows = {};

  const oldRanked = getRankedReps();
  const oldLeader = oldRanked.length ? oldRanked[0].id : null;

  state.months[state.currentMonth].scores[repId] = newScore;
  state.months[state.currentMonth].salesCount[repId] = newQty;
  state.months[state.currentMonth].shows[repId] = newShows;
  saveState();
  renderAll();
  renderAdminRepList();

  const newRanked = getRankedReps();
  const newLeader = newRanked.length ? newRanked[0].id : null;
  if (oldLeader !== newLeader && newLeader === repId) switchView('celebrate');
}

function deleteRep(repId) {
  if (!confirm('Remove this rep?')) return;
  state.reps = state.reps.filter(r => r.id !== repId);
  for (const key of Object.keys(state.months)) {
    delete state.months[key].scores[repId];
    if (state.months[key].salesCount) delete state.months[key].salesCount[repId];
    if (state.months[key].shows) delete state.months[key].shows[repId];
  }
  saveState();
  renderAll();
  renderAdminRepList();
}

document.getElementById('btn-reset-month').addEventListener('click', () => {
  if (confirm('Reset all scores for ' + state.currentMonth + '?')) {
    state.months[state.currentMonth] = { scores: {}, salesCount: {} };
    state.reps.forEach(r => {
      state.months[state.currentMonth].scores[r.id] = 0;
      state.months[state.currentMonth].salesCount[r.id] = 0;
    });
    saveState();
    renderAll();
    renderAdminRepList();
  }
});

document.getElementById('btn-load-sample').addEventListener('click', () => {
  if (confirm('This will replace all current data with team data. Continue?')) {
    loadSampleData();
    renderAdminRepList();
  }
});

// Share
document.getElementById('btn-share').addEventListener('click', () => {
  const ranked = getRankedReps();
  if (!ranked.length) return;
  const winner = ranked[0];
  const text = `🏆 ${state.currentMonth} Sales Champion!\n\n` +
    `👑 ${winner.name} — ${formatScore(winner.score)}\n\n` +
    ranked.slice(0, 10).map((r, i) => `${i + 1}. ${r.name}: ${formatScore(r.score)}`).join('\n') +
    `\n\n#SalesLeaderboard`;
  if (navigator.share) {
    navigator.share({ title: 'Sales Leaderboard', text });
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      const btn = document.getElementById('btn-share');
      btn.textContent = '✅ Copied!';
      setTimeout(() => btn.textContent = '📤 SHARE', 2000);
    });
  }
});

// ===== CONFETTI =====
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#ffd700','#a855f7','#ec4899','#3b82f6','#22d3ee','#00e676','#f43f5e'];
  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * 200,
      w: 6 + Math.random() * 6,
      h: 4 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 4,
      vy: 2 + Math.random() * 4,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      opacity: 1
    });
  }
  let frame = 0;
  const maxFrames = 180;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frame++;
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.04;
      p.rotation += p.rotSpeed;
      if (frame > maxFrames - 40) p.opacity -= 0.025;
      if (p.opacity <= 0) continue;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
    if (frame < maxFrames) requestAnimationFrame(animate);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  animate();
}

// ===== KEYBOARD =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeAdmin(); closeProfile(); closeTrophyModal(); }
  if (e.key === '1') switchView('podium');
  if (e.key === '2') switchView('list');
  if (e.key === '3') switchView('celebrate');
});

// ===== 3D TROPHY =====
// Trophy code moved to trophy.js (loaded as separate script)
// Exposes: initTrophyMini(), closeTrophyModal(), updateTrophyWinner()

// ===== INIT =====

