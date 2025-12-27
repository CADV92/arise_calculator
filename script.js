// --- 1. CONFIGURACIÓN Y TRADUCCIONES ---

const TRANSLATIONS = {
    es: {
        title_tower: "Calculadora de Ascensión",
        sub_tower: "Calculadora Héroe Mítico",
        title_maps: "Calculadora de Mapas",
        sub_maps: "Calculadora de Héroes",
        title_custom: "Calculadora Personalizada",
        
        btn_mode_tower: "Torre",
        btn_mode_maps: "Mapas",
        btn_mode_custom: "Custom",
        
        lbl_select_map: "Selecciona el Mapa",
        lbl_boss: "Monstruo / Jefe",
        lbl_hp: "Vida (HP)",
        lbl_hp_ref: "Vida (Referencia)",
        lbl_custom_hp: "Ingresa Vida Objetivo (Manual)",
        lbl_ref_source: "Fuente de Referencia:",
        lbl_ref_tower: "Torre ASC",
        lbl_ref_maps: "Jefes de Mapa",
        btn_ref_show: "▼ Mostrar Referencia (Tablas)",
        btn_ref_hide: "▲ Ocultar Referencia",
        
        lbl_dmg: "Tu Daño Estimado",
        lbl_time: "Tiempo por Ronda (s)",
        lbl_target: "Objetivo de Cálculo",
        
        btn_target_1: "1% (Recompensa)",
        btn_target_100: "100% (Matar)",
        btn_calc: "CALCULATE",
        
        res_goal: "Daño Objetivo:",
        res_rounds: "Rondas necesarias:",
        res_time: "Tiempo estimado:",
        btn_timer_link: "⏱ Usar en Alarma",
        
        btn_toggle_table: "Ver Tabla Detallada",
        btn_summary: "Ver Matriz (Resumen)",
        
        modalTitleDetails: "Detalles del Nivel",
        matrix_title_hp: "Matriz: Vida Total (HP)",
        matrix_title_reward: "Matriz: Recompensa 1%",
        btn_switch_to_reward: "Cambiar a 1%",
        btn_switch_to_hp: "Ver Vida Total",
        
        th_rank: "Rango",
        th_hp: "Vida",
        th_name: "Subtítulo",
        th_mob: "Monstruo",
        th_total: "HP Total",
        th_reward: "1% (Reward)",
        th_time: "Tiempo Est.",
        
        // Timer
        timer_start: "Iniciar",
        timer_pause: "Pausar",
        timer_reset: "Reset",
        timer_done: "¡TIEMPO TERMINADO!",
        timer_alert: "¡ALERTA DE FARMEO!",
        lbl_vol: "Volumen:",
        lbl_tone: "Tono:",
        
        err_data: "Sin datos.",
        err_dmg: "Daño inválido.",
        err_custom: "Ingresa un valor válido en Vida Manual.",
        time_y: "a", time_mo: "mes", time_d: "d", time_h: "h", time_m: "m", time_s: "s",
        placeholder_dmg: "Ej: 1.5 B, 100 Sx..."
    },
    en: {
        title_tower: "Ascension Calculator",
        sub_tower: "Mythic Hero Calculator",
        title_maps: "Arise Map Calculator",
        sub_maps: "Hero Calculator",
        title_custom: "Custom Calculator",
        
        btn_mode_tower: "Tower", btn_mode_maps: "Maps", btn_mode_custom: "Custom",
        lbl_select_map: "Select Map", lbl_boss: "Monster / Boss", lbl_hp: "Health (HP)",
        lbl_hp_ref: "Health (Reference)", lbl_custom_hp: "Enter Target HP (Manual)",
        lbl_ref_source: "Reference Source:", lbl_ref_tower: "Tower ASC", lbl_ref_maps: "Map Bosses",
        btn_ref_show: "▼ Show Reference (Tables)", btn_ref_hide: "▲ Hide Reference",
        lbl_dmg: "Estimated Damage", lbl_time: "Time per Round (s)", lbl_target: "Target Calculation",
        btn_target_1: "1% (Reward)", btn_target_100: "100% (Kill)", btn_calc: "CALCULATE",
        res_goal: "Target Dmg:", res_rounds: "Rounds needed:", res_time: "Est. Time:", btn_timer_link: "⏱ Use in Alarm",
        btn_toggle_table: "View Detailed Table", btn_summary: "View Matrix (Summary)",
        modalTitleDetails: "Level Details", matrix_title_hp: "Matrix: Total HP", matrix_title_reward: "Matrix: 1% Reward",
        btn_switch_to_reward: "Switch to 1%", btn_switch_to_hp: "Show Total HP",
        th_rank: "Rank", th_hp: "HP", th_name: "Subtitle", th_mob: "Monster", th_total: "Total HP", th_reward: "Reward (1%)", th_time: "Est. Time",
        timer_start: "Start", timer_pause: "Pause", timer_reset: "Reset", timer_done: "DONE!", timer_alert: "PRE-ALERT!",
        lbl_vol: "Volume:", lbl_tone: "Tone:",
        err_data: "No data.", err_dmg: "Invalid damage.", err_custom: "Enter a valid Custom HP.",
        time_y: "y", time_mo: "mo", time_d: "d", time_h: "h", time_m: "m", time_s: "s", placeholder_dmg: "Ex: 1.5 B, 100 Sx..."
    },
    it: {
        title_tower: "Calcolatrice Ascensione",
        sub_tower: "Calcolatrice Eroe Mitico",
        title_maps: "Arise Map Calculator",
        sub_maps: "Calcolatrice Eroe",
        title_custom: "Calcolatrice Personalizzata",
        
        btn_mode_tower: "Torre", btn_mode_maps: "Mappe", btn_mode_custom: "Personalizzato",
        lbl_select_map: "Seleziona Mappa", lbl_boss: "Mostro / Boss", lbl_hp: "Vita (HP)",
        lbl_hp_ref: "Vita (Riferimento)", lbl_custom_hp: "Inserisci Vita Obiettivo (Manuale)",
        lbl_ref_source: "Fonte di Riferimento:", lbl_ref_tower: "Torre", lbl_ref_maps: "Boss Mappe",
        btn_ref_show: "▼ Vedi Riferimento (Tabelle)", btn_ref_hide: "▲ Nascondi Riferimento",
        lbl_dmg: "Danno Stimato", lbl_time: "Tempo per Round (s)", lbl_target: "Obiettivo",
        btn_target_1: "1% (Ricompensa)", btn_target_100: "100% (Uccidere)", btn_calc: "CALCOLA",
        res_goal: "Danno Obiettivo:", res_rounds: "Round necessari:", res_time: "Tempo stimato:", btn_timer_link: "⏱ Usa in Allarme",
        btn_toggle_table: "Vedi Tabella Dettagliata", btn_summary: "Vedi Matrice (Riepilogo)",
        modalTitleDetails: "Dettagli Livello", matrix_title_hp: "Matrice: Vita Totale", matrix_title_reward: "Matrice: 1% Ricompensa",
        btn_switch_to_reward: "Cambia a 1%", btn_switch_to_hp: "Vedi Vita Totale",
        th_rank: "Rango", th_hp: "Vita", th_name: "Sottotitolo", th_mob: "Mostro", th_total: "HP Totale", th_reward: "1% (Ricompensa)", th_time: "Tempo Stim.",
        timer_start: "Avvia", timer_pause: "Pausa", timer_reset: "Reset", timer_done: "FINITO!", timer_alert: "PRE-ALLARME!",
        lbl_vol: "Volume:", lbl_tone: "Tono:",
        err_data: "Nessun dato.", err_dmg: "Danno non valido.", err_custom: "Inserisci una vita valida.",
        time_y: "a", time_mo: "mese", time_d: "g", time_h: "h", time_m: "m", time_s: "s", placeholder_dmg: "Es: 1.5 B, 100 Sx..."
    }
};

let currentLang = 'es';
let targetPercentage = 0.01;
let currentMode = 'tower'; 
let referenceMode = 'maps'; 
let isCalculated = false;
let calculatedSeconds = 0; 

const TIME_LIMIT_SECONDS = 14 * 60; 

const RANKS = ["E", "D", "C", "B", "A", "S", "SS", "G", "N"];
const RANK_NAMES = ["M+", "GM", "MM", "M++", "XM", "GOD", "ULT", "OMG", "ARC"];

const UNITS = [
    {s:"K",  p:3}, {s:"M",  p:6}, {s:"B",  p:9}, {s:"T",  p:12}, 
    {s:"Qa", p:15}, {s:"Qi", p:18}, {s:"Sx", p:21}, {s:"Sp", p:24}, 
    {s:"Oc", p:27}, {s:"No", p:30}, {s:"Dc", p:33}, {s:"Ud", p:36}, 
    {s:"Dd", p:39}, {s:"Td", p:42}, {s:"E45", p:45}, {s:"E48", p:48}, 
    {s:"E51", p:51}, {s:"E54", p:54}, {s:"E57", p:57}, {s:"E60", p:60}, 
    {s:"E63", p:63}, {s:"E66", p:66}, {s:"E69", p:69}, {s:"E72", p:72}, 
    {s:"E75", p:75}, {s:"E78", p:78}, {s:"E81", p:81}, {s:"E84", p:84}
];

const SOUNDS = {
    'digital': "https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg",
    'mech': "https://actions.google.com/sounds/v1/alarms/mechanical_clock_ring.ogg",
    'bugle': "https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg",
    'scifi': "https://actions.google.com/sounds/v1/alarms/spaceship_alarm.ogg"
};

let FULL_DB = {}; 
let CURRENT_MONSTER_LIST = {}; 

const selectMap = document.getElementById('mapSelect');
const selectMonster = document.getElementById('monsterSelect');
const slider = document.getElementById('rankSlider');
const displayHP = document.getElementById('bossHP');
const tableBody = document.getElementById('tableBody');

// --- 2. SISTEMA DE IDIOMAS Y MODOS ---

function changeLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;
    const t = TRANSLATIONS[lang];

    const ids = [
        'btn_mode_tower', 'btn_mode_maps', 'btn_mode_custom',
        'lbl_select_map', 'lbl_boss', 'lbl_hp', 'lbl_dmg', 'lbl_time', 'lbl_target',
        'lbl_custom_hp', 'lbl_ref_source', 'lbl_ref_tower', 'lbl_ref_maps',
        'btn_target_1', 'btn_target_100', 'btn_calc', 
        'res_lbl_goal', 'res_lbl_rounds', 'res_lbl_time',
        'btn_summary', 'btn_toggle_table', 'modalTitleDetails',
        'lbl_vol', 'lbl_tone'
    ];
    
    document.getElementById('res_lbl_goal').innerText = t.res_goal;
    document.getElementById('res_lbl_rounds').innerText = t.res_rounds;
    document.getElementById('res_lbl_time').innerText = t.res_time;
    
    const timerBtn = document.querySelector('.btn-timer-link');
    if(timerBtn) timerBtn.innerText = t.btn_timer_link;

    ids.forEach(id => {
        const el = document.getElementById(id);
        if(el && t[id]) el.innerText = t[id];
    });

    const labelHP = document.getElementById('lbl_hp');
    if (currentMode === 'custom') labelHP.innerText = t.lbl_hp_ref;
    else labelHP.innerText = t.lbl_hp;

    const btnRef = document.getElementById('btnRefToggle');
    const isRefVisible = document.getElementById('databaseSection').style.display !== 'none';
    if(btnRef) {
        btnRef.innerText = isRefVisible ? t.btn_ref_hide : t.btn_ref_show;
    }
    
    updateTimerButtonText();
    updateTitles();
    updateTableHeaders();
    
    document.getElementById('userDmg').placeholder = t.placeholder_dmg;
    
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');
    
    if(document.getElementById('summaryModal').style.display === "flex") {
        renderMatrixTable();
    }
}

function updateTitles() {
    const t = TRANSLATIONS[currentLang];
    const lblTitle = document.getElementById('lbl_title');
    const lblSubtitle = document.getElementById('lbl_subtitle');
    
    if (currentMode === 'tower') {
        lblTitle.innerText = t.title_tower;
        lblSubtitle.innerText = t.sub_tower;
    } else if (currentMode === 'maps') {
        lblTitle.innerText = t.title_maps;
        lblSubtitle.innerText = t.sub_maps;
    } else {
        lblTitle.innerText = t.title_custom;
        lblSubtitle.innerText = "Manual Input";
    }
}

function updateTableHeaders() {
    const t = TRANSLATIONS[currentLang];
    const col1 = document.getElementById('th_col1');
    const col2 = document.getElementById('th_col2');
    const col3 = document.getElementById('th_col3');
    const col4 = document.getElementById('th_col4');

    let effectiveMode = currentMode;
    if (currentMode === 'custom') {
        effectiveMode = referenceMode; 
    }

    if (effectiveMode === 'tower') {
        col1.innerText = t.th_rank;
        col2.innerText = t.th_hp;
        col3.innerText = t.th_name;
        col4.style.display = 'none'; 
    } else {
        col1.innerText = t.th_mob;
        col2.innerText = t.th_total;
        col3.innerText = t.th_reward;
        col4.innerText = t.th_time;
        col4.style.display = 'table-cell'; 
    }
}

function setMode(mode, btnElement) {
    currentMode = mode;
    isCalculated = false;
    document.getElementById('results').style.display = "none";
    
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');

    updateTitles();

    const databaseSection = document.getElementById('databaseSection');
    const customSection = document.getElementById('customSection');
    const groupMapSelect = document.getElementById('groupMapSelect');
    const groupBossHP = document.getElementById('groupBossHP');
    const refTypeSelector = document.getElementById('refTypeSelector');
    const btnRefToggle = document.getElementById('btnRefToggle');
    const t = TRANSLATIONS[currentLang];
    
    customSection.style.display = 'none';
    refTypeSelector.style.display = 'none';
    
    if (mode === 'tower') {
        databaseSection.style.display = 'block';
        groupMapSelect.style.display = 'none';
        groupBossHP.style.display = 'block'; 
        CURRENT_MONSTER_LIST = FULL_DB.tower;
        populateMonsterSelect();
        document.getElementById('lbl_hp').innerText = t.lbl_hp;
    
    } else if (mode === 'maps') {
        databaseSection.style.display = 'block';
        groupMapSelect.style.display = 'block';
        groupBossHP.style.display = 'block'; 
        populateMapSelect();
        onMapChange(); 
        document.getElementById('lbl_hp').innerText = t.lbl_hp;
    
    } else if (mode === 'custom') {
        customSection.style.display = 'block';
        databaseSection.style.display = 'none'; // Oculto por defecto
        groupBossHP.style.display = 'none'; 
        refTypeSelector.style.display = 'block'; 
        
        btnRefToggle.innerText = t.btn_ref_show;
        document.getElementById('lbl_hp').innerText = t.lbl_hp_ref;
        
        const selectedRef = document.querySelector('input[name="refSource"]:checked').value;
        updateCustomRef(selectedRef);
    }
    
    updateTableHeaders();
    updateUI();
}

function toggleReference() {
    const dbSection = document.getElementById('databaseSection');
    const btn = document.getElementById('btnRefToggle');
    const t = TRANSLATIONS[currentLang];

    if (dbSection.style.display === 'none') {
        dbSection.style.display = 'block';
        btn.innerText = t.btn_ref_hide;
    } else {
        dbSection.style.display = 'none';
        btn.innerText = t.btn_ref_show;
    }
}

function updateCustomRef(source) {
    referenceMode = source;
    const mapGroup = document.getElementById('groupMapSelect');
    
    if (source === 'tower') {
        mapGroup.style.display = 'none';
        CURRENT_MONSTER_LIST = FULL_DB.tower;
        populateMonsterSelect();
    } else {
        mapGroup.style.display = 'none'; 
        
        let aggregatedBosses = {};
        Object.keys(FULL_DB.maps).forEach(mapKey => {
            let mapNumMatch = mapKey.match(/Map\s+(\d+)/i);
            let mapNum = mapNumMatch ? mapNumMatch[1] : "?";
            let mapData = FULL_DB.maps[mapKey];
            Object.keys(mapData).forEach(mobName => {
                if (mobName.toUpperCase().includes("BOSS")) {
                    let parts = mobName.split("BOSS:");
                    let bossName = parts.length > 1 ? parts[1].trim() : mobName;
                    let newKey = `${mapNum}. ${bossName}`;
                    aggregatedBosses[newKey] = mapData[mobName];
                }
            });
        });
        
        CURRENT_MONSTER_LIST = aggregatedBosses;
        populateMonsterSelect();
    }
    updateTableHeaders();
    updateUI();
}

function setTarget(pct, btnElement) {
    targetPercentage = pct;
    document.querySelectorAll('.target-btn').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');
    if(isCalculated) calculate();
}

// --- 3. MODALES Y MATRIZ ---

function openDetails() {
    renderTableRows(selectMonster.value, parseInt(slider.value)); 
    document.getElementById('detailsModal').style.display = "flex";
}

function closeDetails() {
    document.getElementById('detailsModal').style.display = "none";
}

let showRewardMode = false;

function openSummary() {
    showRewardMode = false; 
    renderMatrixTable();
    document.getElementById('summaryModal').style.display = "flex";
}

function closeSummary() {
    document.getElementById('summaryModal').style.display = "none";
}

function toggleMatrixMode() {
    showRewardMode = !showRewardMode;
    renderMatrixTable();
}

function renderMatrixTable() {
    const matrixTable = document.getElementById('matrixTable');
    const modalTitle = document.getElementById('modalTitle');
    const btnSwitch = document.getElementById('btn_matrix_switch');
    const t = TRANSLATIONS[currentLang];
    
    if (!CURRENT_MONSTER_LIST) return;

    let userDmg = parseBig(document.getElementById('userDmg').value);
    let timeRound = parseFloat(document.getElementById('timeRound').value) || 25;

    if (showRewardMode) {
        modalTitle.innerText = t.matrix_title_reward;
        btnSwitch.innerText = t.btn_switch_to_hp;
        btnSwitch.style.borderColor = "var(--success)";
        btnSwitch.style.color = "var(--success)";
    } else {
        modalTitle.innerText = t.matrix_title_hp;
        btnSwitch.innerText = t.btn_switch_to_reward;
        btnSwitch.style.borderColor = "var(--gold)";
        btnSwitch.style.color = "var(--gold)";
    }

    let html = `<thead><tr><th style="background:#1e293b; color:#fff;">Monster</th>`;
    RANKS.forEach(r => html += `<th>${r}</th>`);
    html += `</tr></thead><tbody>`;

    Object.keys(CURRENT_MONSTER_LIST).forEach(mobName => {
        let hpList = CURRENT_MONSTER_LIST[mobName];
        html += `<tr><td>${mobName}</td>`;
        
        for (let i = 0; i < RANKS.length; i++) {
            let valRaw = hpList[i];
            
            if (!valRaw || valRaw.trim() === "") {
                html += `<td class="missing-cell">---</td>`;
            } else {
                let numHp = parseBig(valRaw);
                let targetHpForCalc = numHp;
                let displayVal = valRaw;

                if (showRewardMode) {
                    targetHpForCalc = numHp * 0.01;
                    displayVal = formatBig(targetHpForCalc);
                }

                let cellClass = "";
                if (userDmg > 0) {
                    let rounds = Math.ceil(targetHpForCalc / userDmg);
                    let seconds = rounds * timeRound;
                    if (seconds <= TIME_LIMIT_SECONDS) {
                        cellClass = "possible-cell";
                    } else {
                        cellClass = "impossible-cell";
                    }
                }

                html += `<td class="${cellClass}">${displayVal}</td>`;
            }
        }
        html += `</tr>`;
    });
    html += `</tbody>`;
    matrixTable.innerHTML = html;
}

// --- 4. CARGA DE DATOS ---

function init() {
    if (typeof MONSTERS_DATA !== 'undefined') {
        FULL_DB = MONSTERS_DATA;
        CURRENT_MONSTER_LIST = FULL_DB.tower;
        populateMonsterSelect();

        const userLang = navigator.language || navigator.userLanguage; 
        const langCode = userLang.split('-')[0]; 

        if (TRANSLATIONS[langCode]) {
            changeLanguage(langCode);
        } else {
            changeLanguage('en'); 
        }
        
        // VOLUMEN INICIAL
        const volSlider = document.getElementById('volumeControl');
        const audio = document.getElementById('alarmSound');
        if (volSlider && audio) {
            audio.volume = volSlider.value;
        }

    } else {
        alert("Error: MONSTERS_DATA no encontrada.");
    }
}

function populateMapSelect() {
    selectMap.innerHTML = "";
    Object.keys(FULL_DB.maps).forEach(mapName => {
        let opt = document.createElement('option');
        opt.value = mapName;
        opt.innerText = mapName;
        selectMap.appendChild(opt);
    });
}

function onMapChange() {
    const mapName = selectMap.value;
    CURRENT_MONSTER_LIST = FULL_DB.maps[mapName];
    populateMonsterSelect();
}

function populateMonsterSelect() {
    selectMonster.innerHTML = "";
    Object.keys(CURRENT_MONSTER_LIST).forEach(k => {
        let opt = document.createElement('option');
        opt.value = k;
        opt.innerText = k;
        selectMonster.appendChild(opt);
    });
    updateUI(false); 
}

// --- 5. LÓGICA MATEMÁTICA ---
function parseBig(str) {
    if(!str) return 0;
    str = str.toString().trim().toUpperCase();
    if(str.includes("E")) {
        let parts = str.split("E");
        let base = (parts[0] === "" || parts[0] === "1") ? 1 : parseFloat(parts[0]);
        let exp = parseFloat(parts[1]);
        return base * Math.pow(10, exp);
    }
    let sortedUnits = [...UNITS].sort((a,b) => b.s.length - a.s.length);
    for(let u of sortedUnits) {
        if(str.endsWith(u.s.toUpperCase())) {
            let val = parseFloat(str.replace(u.s.toUpperCase(), ""));
            return val * Math.pow(10, u.p);
        }
    }
    return parseFloat(str);
}

function formatBig(num) {
    if(num <= 0) return "0";
    let log = Math.log10(num);
    let exp = Math.floor(log / 3) * 3; 
    if (exp < 3) return num.toLocaleString('en-US', {maximumFractionDigits: 2});
    let mantissa = num / Math.pow(10, exp);
    if(exp >= 45) return `${mantissa.toFixed(2)} E${exp}`;
    let unit = UNITS.find(u => u.p === exp);
    if (unit) return `${mantissa.toFixed(2)} ${unit.s}`;
    return num.toExponential(2);
}

function formatTime(totalSeconds) {
    const t = TRANSLATIONS[currentLang];
    const SEC_MIN = 60, SEC_HOUR = 3600, SEC_DAY = 86400, SEC_MONTH = 2592000, SEC_YEAR = 31536000;
    
    let years = Math.floor(totalSeconds / SEC_YEAR);
    let rem = totalSeconds % SEC_YEAR;
    let months = Math.floor(rem / SEC_MONTH);
    rem = rem % SEC_MONTH;
    let days = Math.floor(rem / SEC_DAY);
    rem = rem % SEC_DAY;
    let h = Math.floor(rem / SEC_HOUR);
    let m = Math.floor((rem % SEC_HOUR) / SEC_MIN);
    let s = Math.ceil(rem % SEC_MIN);
    
    let timeString = "";
    if(years > 0) timeString += `${years}${t.time_y} `;
    if(months > 0 || years > 0) timeString += `${months}${t.time_mo} `;
    if(days > 0 || months > 0 || years > 0) timeString += `${days}${t.time_d} `;
    if(h > 0 || days > 0 || months > 0 || years > 0) timeString += `${h}${t.time_h} `;
    if(m > 0 || h > 0 || days > 0 || months > 0 || years > 0) timeString += `${m}${t.time_m} `;
    timeString += `${s}${t.time_s}`;
    return timeString;
}

// --- 6. UI UPDATES ---

function updateUI() {
    if (!CURRENT_MONSTER_LIST) return;
    let idx = parseInt(slider.value);
    let key = selectMonster.value;
    
    if (!CURRENT_MONSTER_LIST[key]) {
        key = Object.keys(CURRENT_MONSTER_LIST)[0];
        selectMonster.value = key;
    }

    let hpVal = CURRENT_MONSTER_LIST[key][idx];

    document.getElementById('rankBadge').innerText = RANKS[idx];
    const rankSub = document.getElementById('rankName');
    
    let effectiveMode = (currentMode === 'custom') ? referenceMode : currentMode;
    
    if (effectiveMode === 'tower') {
        rankSub.innerText = RANK_NAMES[idx];
        rankSub.style.display = 'block'; 
    } else {
        rankSub.innerText = "";
        rankSub.style.display = 'none'; 
    }

    displayHP.value = hpVal ? hpVal : "---";
    
    // FEATURE: COPIAR HP AL INPUT CUSTOM AUTOMÁTICAMENTE
    if (currentMode === 'custom' && hpVal) {
        document.getElementById('customHPInput').value = hpVal;
    }
    
    if(isCalculated && currentMode !== 'custom') {
        calculate();
    }
}

function calculate() {
    let t = TRANSLATIONS[currentLang];
    let totalHP = 0;

    if (currentMode === 'custom') {
        let customInput = document.getElementById('customHPInput').value;
        if (!customInput) {
            alert(t.err_custom);
            return;
        }
        totalHP = parseBig(customInput);
    } else {
        let key = selectMonster.value;
        let idx = parseInt(slider.value);
        let hpStr = CURRENT_MONSTER_LIST[key][idx];
        if(!hpStr) { 
            if(!isCalculated) alert(t.err_data); 
            return; 
        }
        totalHP = parseBig(hpStr);
    }

    let userDmg = parseBig(document.getElementById('userDmg').value);
    let time = parseFloat(document.getElementById('timeRound').value) || 25;

    if(userDmg <= 0) { 
        if(!isCalculated) alert(t.err_dmg); 
        return; 
    }

    isCalculated = true;

    let targetAmount = totalHP * targetPercentage;
    let rounds = Math.ceil(targetAmount / userDmg);
    let totalSeconds = rounds * time;
    calculatedSeconds = totalSeconds; // Guardar para el timer

    document.getElementById('results').style.display = "block";
    document.getElementById('out1Pct').innerText = formatBig(targetAmount);
    document.getElementById('outRounds').innerText = rounds.toLocaleString();
    document.getElementById('outTime').innerText = formatTime(totalSeconds);

    if(document.getElementById('detailsModal').style.display === "flex") {
        renderTableRows(selectMonster.value, parseInt(slider.value));
    }
    if(document.getElementById('summaryModal').style.display === "flex") {
        renderMatrixTable();
    }
}

function renderTableRows(selectedKey, activeIdx) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = "";
    
    let userDmg = parseBig(document.getElementById('userDmg').value);
    let timeRound = parseFloat(document.getElementById('timeRound').value) || 25;
    
    let effectiveMode = (currentMode === 'custom') ? referenceMode : currentMode;

    if (effectiveMode === 'tower') {
        if (!CURRENT_MONSTER_LIST[selectedKey]) return;
        let data = CURRENT_MONSTER_LIST[selectedKey];
        data.forEach((val, i) => {
            let row = document.createElement('tr');
            if(i === activeIdx) {
                row.style.background = "rgba(0, 242, 234, 0.15)";
                row.style.borderLeft = "4px solid var(--accent)";
            }
            row.innerHTML = `
                <td style="font-weight:bold; color: ${i===activeIdx?'var(--accent)':'#aaa'}">${RANKS[i]}</td>
                <td style="color: #fff; font-weight: 500;">${val ? val : '-'}</td>
                <td style="font-size:0.8em; color:#ffd700">${RANK_NAMES[i]}</td>
            `;
            tableBody.appendChild(row);
        });
    } else {
        Object.keys(CURRENT_MONSTER_LIST).forEach(mobName => {
            let hpAtRank = CURRENT_MONSTER_LIST[mobName][activeIdx];
            let row = document.createElement('tr');
            
            if(mobName === selectedKey) {
                row.style.background = "rgba(0, 242, 234, 0.15)";
                row.style.borderLeft = "4px solid var(--accent)";
            }

            let rawHp = parseBig(hpAtRank);
            let onePct = rawHp * 0.01;
            
            let colTotal = (rawHp > 0) ? formatBig(rawHp) : "-";
            let colReward = (rawHp > 0) ? formatBig(onePct) : "-";
            
            let colTime = "";
            let timeClass = "";

            if (isCalculated && rawHp > 0 && userDmg > 0) {
                let r = Math.ceil(onePct / userDmg);
                let sec = r * timeRound;
                colTime = formatTime(sec);
                
                if (sec <= TIME_LIMIT_SECONDS) {
                    timeClass = "time-ok";
                } else {
                    timeClass = "time-bad";
                }
            }
            let displayTime = (colTime) ? `<span class="${timeClass}" style="font-size:0.85em">${colTime}</span>` : `<span style="color:#555">--</span>`;

            row.innerHTML = `
                <td style="font-weight:bold; color: #fff; font-size:0.9em">${mobName}</td>
                <td style="color: #ccc; font-family:'Courier New'; font-size:0.9em">${colTotal}</td>
                <td style="color: var(--success); font-family:'Courier New'; font-size:0.9em">${colReward}</td>
                <td>${displayTime}</td>
            `;
            tableBody.appendChild(row);
        });
    }
}

// --- 7. ALARMA FLOTANTE MEJORADA Y CORREGIDA (TIEMPO REAL) ---

let timerInterval;
let targetEndTime = 0; 
let remainingTime = 0; 
let isTimerRunning = false;
let firedAlerts = new Set(); 

const preAlerts = {
    'chk_20m': 20 * 60,
    'chk_10m': 10 * 60,
    'chk_5m': 5 * 60,
    'chk_1m': 60
};

function toggleTimerSettings() {
    const panel = document.getElementById('timerSettingsPanel');
    panel.style.display = (panel.style.display === 'none') ? 'block' : 'none';
}

function updateVolume(val) {
    const audio = document.getElementById('alarmSound');
    audio.volume = val;
}

function changeSound(soundType) {
    const audio = document.getElementById('alarmSound');
    if(SOUNDS[soundType]) {
        audio.src = SOUNDS[soundType];
        if(!audio.paused && audio.loop) {
            audio.play();
        }
    }
}

function testSound() {
    const audio = document.getElementById('alarmSound');
    audio.currentTime = 0;
    audio.loop = false; 
    audio.play().catch(e => console.log("Error audio:", e));
}

function sendToTimer() {
    if (calculatedSeconds <= 0) return;
    remainingTime = calculatedSeconds; 
    updateTimerDisplay(remainingTime);
    document.getElementById('floatingTimer').style.display = "block";
    resetTimer(false); 
}

function closeTimer() {
    stopTimer();
    stopAlarmSound();
    document.getElementById('floatingTimer').style.display = "none";
}

function toggleTimerState() {
    if (isTimerRunning) {
        stopTimer();
    } else {
        startTimer();
    }
}

function startTimer() {
    if (remainingTime <= 0) return;
    isTimerRunning = true;
    updateTimerButtonText();
    
    targetEndTime = Date.now() + (remainingTime * 1000);
    
    document.getElementById('alarmSound').load();

    timerInterval = setInterval(() => {
        const now = Date.now();
        const diff = Math.ceil((targetEndTime - now) / 1000);
        
        remainingTime = diff; 
        updateTimerDisplay(diff);
        
        checkPreAlerts(diff);

        if (diff <= 0) {
            stopTimer();
            remainingTime = 0;
            updateTimerDisplay(0);
            triggerAlarm("DONE");
        }
    }, 1000);
}

function checkPreAlerts(currentSeconds) {
    for (let id in preAlerts) {
        let alertTime = preAlerts[id];
        // Revisamos el estado LIVE del checkbox
        if (document.getElementById(id).checked && 
            currentSeconds <= alertTime && 
            currentSeconds > alertTime - 5 && 
            !firedAlerts.has(alertTime)) {
            
            triggerAlarm("ALERT");
            firedAlerts.add(alertTime);
        }
    }
}

function triggerAlarm(type) {
    const audio = document.getElementById('alarmSound');
    audio.loop = true; 
    audio.play().catch(e => console.log("Audio block:", e));
    
    document.getElementById('btnStopAlarm').style.display = 'block';
    document.getElementById('timerDisplay').classList.add('timer-ringing');
    
    const t = TRANSLATIONS[currentLang];
    if (type === "DONE") {
        document.getElementById('timerDisplay').innerText = t.timer_done;
        document.getElementById('timerHpText').innerText = "0%";
        document.getElementById('timerHpBar').style.width = "0%";
    }
}

function stopAlarmSound() {
    const audio = document.getElementById('alarmSound');
    audio.pause();
    audio.currentTime = 0;
    document.getElementById('btnStopAlarm').style.display = 'none';
    document.getElementById('timerDisplay').classList.remove('timer-ringing');
}

function stopTimer() {
    isTimerRunning = false;
    clearInterval(timerInterval);
    updateTimerButtonText();
}

function resetTimer(hide = false) {
    stopTimer();
    stopAlarmSound();
    firedAlerts.clear(); 
    remainingTime = calculatedSeconds; 
    updateTimerDisplay(remainingTime);
    if(hide) closeTimer();
}

// --- ACTUALIZACIÓN VISUAL (RELOJ + BARRA HP) ---
function updateTimerDisplay(seconds) {
    if(seconds < 0) seconds = 0;
    
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = seconds % 60;
    
    let str = 
        (h < 10 ? "0" + h : h) + ":" + 
        (m < 10 ? "0" + m : m) + ":" + 
        (s < 10 ? "0" + s : s);
        
    if(document.getElementById('timerDisplay').innerText !== TRANSLATIONS[currentLang].timer_done) {
        document.getElementById('timerDisplay').innerText = str;
    }

    if (calculatedSeconds > 0) {
        let percentage = (seconds / calculatedSeconds) * 100;
        let hpBar = document.getElementById('timerHpBar');
        let hpText = document.getElementById('timerHpText');
        
        hpBar.style.width = percentage + "%";
        hpText.innerText = Math.floor(percentage) + "%";
        
        hpBar.className = "hp-bar-fill"; 
        if (percentage <= 20) {
            hpBar.classList.add("hp-critical");
        } else if (percentage <= 50) {
            hpBar.classList.add("hp-warning");
        }
    }
}

function updateTimerButtonText() {
    const t = TRANSLATIONS[currentLang];
    const btn = document.getElementById('btnTimerToggle');
    if (isTimerRunning) {
        btn.innerText = t.timer_pause;
        btn.classList.add('btn-pause');
    } else {
        btn.innerText = t.timer_start;
        btn.classList.remove('btn-pause');
    }
    document.getElementById('btnTimerReset').innerText = t.timer_reset;
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeDetails();
        closeSummary();
        closeTimer();
    }
});

document.addEventListener('DOMContentLoaded', init);