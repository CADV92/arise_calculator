// --- 1. CONFIGURACIÓN Y TRADUCCIONES ---

const TRANSLATIONS = {
    es: {
        title_tower: "Calculadora de Ascensión",
        sub_tower: "Calculadora Héroe Mítico",
        title_maps: "Calculadora de Mapas",
        sub_maps: "Calculadora de Héroes",
        btn_mode_tower: "Torre Ascensión",
        btn_mode_maps: "Mapas Campaña",
        lbl_select_map: "Selecciona el Mapa",
        lbl_boss: "Monstruo / Jefe",
        lbl_hp: "Vida (HP)",
        lbl_dmg: "Tu Daño Estimado",
        lbl_time: "Tiempo por Ronda (s)",
        lbl_target: "Objetivo",
        btn_target_1: "1% (Recompensa)",
        btn_target_100: "100% (Matar)",
        btn_calc: "CALCULAR",
        res_goal: "Daño Objetivo:",
        res_rounds: "Rondas:",
        res_time: "Tiempo:",
        btn_show: "Ver Tabla ▼",
        btn_hide: "Ocultar Tabla ▲",
        
        // Headers Genéricos
        th_rank: "Rango",
        th_hp: "Vida",
        th_name: "Subtítulo",
        th_mob: "Monstruo",
        th_total: "HP Total",
        th_reward: "1% (Reward)",
        th_time: "Tiempo Est.",
        
        err_data: "Sin datos.",
        err_dmg: "Daño inválido.",
        time_y: "a", time_mo: "mes", time_d: "d", time_h: "h", time_m: "m", time_s: "s",
        placeholder_dmg: "Ej: 1.5 B, 100 Sx..."
    },
    en: {
        title_tower: "Ascension Calculator",
        sub_tower: "Mythic Hero Calculator",
        title_maps: "Arise Map Calculator",
        sub_maps: "Hero Calculator",
        btn_mode_tower: "Ascension Tower",
        btn_mode_maps: "Campaign Maps",
        lbl_select_map: "Select Map",
        lbl_boss: "Monster / Boss",
        lbl_hp: "Health (HP)",
        lbl_dmg: "Estimated Damage",
        lbl_time: "Time per Round (s)",
        lbl_target: "Target",
        btn_target_1: "1% (Reward)",
        btn_target_100: "100% (Kill)",
        btn_calc: "CALCULATE",
        res_goal: "Target Dmg:",
        res_rounds: "Rounds:",
        res_time: "Time:",
        btn_show: "Show Table ▼",
        btn_hide: "Hide Table ▲",
        th_rank: "Rank",
        th_hp: "HP",
        th_name: "Subtitle",
        th_mob: "Monster",
        th_total: "Total HP",
        th_reward: "Reward (1%)",
        th_time: "Est. Time",
        err_data: "No data.",
        err_dmg: "Invalid damage.",
        time_y: "y", time_mo: "mo", time_d: "d", time_h: "h", time_m: "m", time_s: "s",
        placeholder_dmg: "Ex: 1.5 B, 100 Sx..."
    },
    it: {
        title_tower: "Calcolatrice Ascensione",
        sub_tower: "Calcolatrice Eroe Mitico",
        title_maps: "Arise Map Calculator",
        sub_maps: "Calcolatrice Eroe",
        btn_mode_tower: "Torre Ascensione",
        btn_mode_maps: "Mappe Campagna",
        lbl_select_map: "Seleziona Mappa",
        lbl_boss: "Mostro / Boss",
        lbl_hp: "Vita (HP)",
        lbl_dmg: "Danno Stimato",
        lbl_time: "Tempo per Round (s)",
        lbl_target: "Obiettivo",
        btn_target_1: "1% (Ricompensa)",
        btn_target_100: "100% (Uccidere)",
        btn_calc: "CALCOLA",
        res_goal: "Danno Obiettivo:",
        res_rounds: "Round:",
        res_time: "Tempo:",
        btn_show: "Mostra Tabella ▼",
        btn_hide: "Nascondi Tabella ▲",
        th_rank: "Rango",
        th_hp: "Vita",
        th_name: "Sottotitolo",
        th_mob: "Mostro",
        th_total: "HP Totale",
        th_reward: "1% (Ricompensa)",
        th_time: "Tempo Stim.",
        err_data: "Nessun dato.",
        err_dmg: "Danno non valido.",
        time_y: "a", time_mo: "mese", time_d: "g", time_h: "h", time_m: "m", time_s: "s",
        placeholder_dmg: "Es: 1.5 B, 100 Sx..."
    }
};

let currentLang = 'es';
let targetPercentage = 0.01;
let currentMode = 'tower'; 
let isCalculated = false;

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

let FULL_DB = {}; 
let CURRENT_MONSTER_LIST = {}; 

// Elementos DOM
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

    const ids = ['btn_mode_tower','btn_mode_maps','lbl_select_map',
                 'lbl_boss','lbl_hp','lbl_dmg','lbl_time','lbl_target',
                 'btn_target_1','btn_target_100','btn_calc','res_goal',
                 'res_rounds','res_time'];
                 
    ids.forEach(id => {
        const el = document.getElementById(id);
        if(el) el.innerText = t[id];
    });

    updateTitles();
    updateTableHeaders();
    
    document.getElementById('userDmg').placeholder = t.placeholder_dmg;
    
    const tableDisplay = document.getElementById('dataTable').style.display;
    document.getElementById('btn_toggle_table').innerText = (tableDisplay === 'table') ? t.btn_hide : t.btn_show;

    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');
}

function updateTitles() {
    const t = TRANSLATIONS[currentLang];
    const lblTitle = document.getElementById('lbl_title');
    const lblSubtitle = document.getElementById('lbl_subtitle');
    
    if (currentMode === 'tower') {
        lblTitle.innerText = t.title_tower;
        lblSubtitle.innerText = t.sub_tower;
    } else {
        lblTitle.innerText = t.title_maps;
        lblSubtitle.innerText = t.sub_maps;
    }
}

// Actualiza las columnas usando los IDs genéricos
function updateTableHeaders() {
    const t = TRANSLATIONS[currentLang];
    const col1 = document.getElementById('th_col1');
    const col2 = document.getElementById('th_col2');
    const col3 = document.getElementById('th_col3');
    const col4 = document.getElementById('th_col4');

    if (currentMode === 'tower') {
        // Modo Torre: 3 Columnas
        col1.innerText = t.th_rank;
        col2.innerText = t.th_hp;
        col3.innerText = t.th_name;
        col4.style.display = 'none'; // Ocultar 4ta columna
    } else {
        // Modo Mapas: 4 Columnas
        col1.innerText = t.th_mob;
        col2.innerText = t.th_total;
        col3.innerText = t.th_reward;
        col4.innerText = t.th_time;
        col4.style.display = 'table-cell'; // Mostrar 4ta columna
    }
}

function setMode(mode, btnElement) {
    currentMode = mode;
    isCalculated = false;
    document.getElementById('results').style.display = "none";
    
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');

    updateTitles();

    const mapGroup = document.getElementById('groupMapSelect');
    
    if (mode === 'tower') {
        mapGroup.style.display = 'none';
        CURRENT_MONSTER_LIST = FULL_DB.tower;
        populateMonsterSelect();
    } else {
        mapGroup.style.display = 'block';
        populateMapSelect();
        onMapChange();
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

// --- 3. CARGA DE DATOS (VARIABLE EXTERNA) ---

function init() {
    // 1. Buscamos la variable MONSTERS_DATA que está en el archivo monsters.js
    if (typeof MONSTERS_DATA !== 'undefined') {
        FULL_DB = MONSTERS_DATA;
        
        // Inicializar lógica
        CURRENT_MONSTER_LIST = FULL_DB.tower;
        populateMonsterSelect();

        // 2. Detección automática de idioma
        const userLang = navigator.language || navigator.userLanguage; 
        const langCode = userLang.split('-')[0]; 

        if (TRANSLATIONS[langCode]) {
            changeLanguage(langCode);
        } else {
            changeLanguage('en'); // Idioma por defecto
        }
    } else {
        alert("Error: No se encontró la variable MONSTERS_DATA. Asegúrate de que 'monsters.js' se carga ANTES que 'script.js' en el HTML.");
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

// --- 4. LÓGICA MATEMÁTICA ---
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

// --- 5. UI UPDATES ---

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
    
    if (currentMode === 'tower') {
        rankSub.innerText = RANK_NAMES[idx];
        rankSub.style.display = 'block'; 
    } else {
        rankSub.innerText = "";
        rankSub.style.display = 'none'; 
    }

    displayHP.value = hpVal ? hpVal : "---";
    
    if(isCalculated) {
        calculate();
    } else {
        renderTableRows(key, idx);
    }
}

function calculate() {
    let t = TRANSLATIONS[currentLang];
    let key = selectMonster.value;
    let idx = parseInt(slider.value);
    let hpStr = CURRENT_MONSTER_LIST[key][idx];

    if(!hpStr) { 
        if(!isCalculated) alert(t.err_data); 
        return; 
    }

    let totalHP = parseBig(hpStr);
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

    document.getElementById('results').style.display = "block";
    document.getElementById('out1Pct').innerText = formatBig(targetAmount);
    document.getElementById('outRounds').innerText = rounds.toLocaleString();
    document.getElementById('outTime').innerText = formatTime(totalSeconds);

    renderTableRows(key, idx);
}

function toggleTable() {
    let t = TRANSLATIONS[currentLang];
    let tbl = document.getElementById('dataTable');
    let btn = document.getElementById('btn_toggle_table');
    if (tbl.style.display === "table") {
        tbl.style.display = "none";
        btn.innerText = t.btn_show;
    } else {
        tbl.style.display = "table";
        btn.innerText = t.btn_hide;
    }
}

function renderTableRows(selectedKey, activeIdx) {
    tableBody.innerHTML = "";
    
    if (currentMode === 'tower') {
        // MODO TORRE (3 Columnas)
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
        // MODO MAPAS (4 Columnas)
        Object.keys(CURRENT_MONSTER_LIST).forEach(mobName => {
            let hpAtRank = CURRENT_MONSTER_LIST[mobName][activeIdx];
            let row = document.createElement('tr');
            
            if(mobName === selectedKey) {
                row.style.background = "rgba(0, 242, 234, 0.15)";
                row.style.borderLeft = "4px solid var(--accent)";
            }

            let rawHp = parseBig(hpAtRank);
            let onePct = rawHp * 0.01;
            
            // Columna 2: Total HP
            let colTotal = (rawHp > 0) ? formatBig(rawHp) : "-";
            // Columna 3: 1% Reward
            let colReward = (rawHp > 0) ? formatBig(onePct) : "-";

            // Columna 4: Tiempo
            let colTime = "";
            if (isCalculated && rawHp > 0) {
                let userDmg = parseBig(document.getElementById('userDmg').value);
                let timeRound = parseFloat(document.getElementById('timeRound').value) || 25;
                if (userDmg > 0) {
                    let r = Math.ceil(onePct / userDmg);
                    let sec = r * timeRound;
                    colTime = formatTime(sec);
                }
            }
            let displayTime = (isCalculated && colTime) ? `<span style="color:var(--danger); font-size:0.85em">${colTime}</span>` : `<span style="color:#555">--</span>`;

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

document.addEventListener('DOMContentLoaded', init);