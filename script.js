// --- 1. CONFIGURACIÓN Y TRADUCCIONES ---

// Diccionario de Idiomas
const TRANSLATIONS = {
    es: {
        title: "Calculadora de Ascensión",
        subtitle: "Calculadora de Héroe Mítico",
        lbl_boss: "Jefe / Héroe Mítico (1-15)",
        lbl_hp: "Vida del Jefe (HP)",
        lbl_dmg: "Tu Daño Estimado (Ej: 100 E51)",
        lbl_time: "Tiempo por Ronda (Segundos)",
        btn_calc: "CALCULAR PROGRESO",
        res_goal: "Objetivo 1% HP:",
        res_rounds: "Rondas necesarias:",
        res_time: "Tiempo estimado:",
        btn_show: "Mostrar Tabla de Datos ▼",
        btn_hide: "Ocultar Tabla ▲",
        th_rank: "Rango",
        th_hp: "Vida (HP)",
        th_name: "Nombre",
        err_data: "Error: No hay datos de vida para este nivel.",
        err_dmg: "Error: Ingresa un daño válido mayor a 0.",
        time_d: "d", // Día
        time_h: "h",
        time_m: "m",
        time_s: "s",
        placeholder_dmg: "Ingresa tu daño..."
    },
    en: {
        title: "Ascension Calculator",
        subtitle: "Mythic Hero Calculator",
        lbl_boss: "Boss / Mythic Hero (1-15)",
        lbl_hp: "Boss Health (HP)",
        lbl_dmg: "Estimated Damage (Ex: 100 E51)",
        lbl_time: "Time per Round (Seconds)",
        btn_calc: "CALCULATE PROGRESS",
        res_goal: "Goal 1% HP:",
        res_rounds: "Rounds needed:",
        res_time: "Estimated Time:",
        btn_show: "Show Data Table ▼",
        btn_hide: "Hide Table ▲",
        th_rank: "Rank",
        th_hp: "Health (HP)",
        th_name: "Name",
        err_data: "Error: No HP data available for this level.",
        err_dmg: "Error: Please enter a valid damage > 0.",
        time_d: "d", // Day
        time_h: "h",
        time_m: "m",
        time_s: "s",
        placeholder_dmg: "Enter damage..."
    },
    it: {
        title: "Calcolatrice Ascensione",
        subtitle: "Calcolatrice Eroe Mitico",
        lbl_boss: "Boss / Eroe Mitico (1-15)",
        lbl_hp: "Vita del Boss (HP)",
        lbl_dmg: "Danno Stimato (Es: 100 E51)",
        lbl_time: "Tempo per Round (Secondi)",
        btn_calc: "CALCOLA PROGRESSO",
        res_goal: "Obiettivo 1% HP:",
        res_rounds: "Round necessari:",
        res_time: "Tempo stimato:",
        btn_show: "Mostra Tabella Dati ▼",
        btn_hide: "Nascondi Tabella ▲",
        th_rank: "Rango",
        th_hp: "Vita (HP)",
        th_name: "Nome",
        err_data: "Errore: Nessun dato HP disponibile.",
        err_dmg: "Errore: Inserisci un danno valido > 0.",
        time_d: "g", // Giorno
        time_h: "h",
        time_m: "m",
        time_s: "s",
        placeholder_dmg: "Inserisci danno..."
    }
};

let currentLang = 'es'; // Idioma por defecto

const RANKS = ["E", "D", "C", "B", "A", "S", "SS", "G", "N"];
const RANK_NAMES = ["M+", "GM", "MM", "M++", "XM", "GOD", "ULT", "OMG", "ARC"];

const UNITS = [
    {s:"Sx", p:21}, {s:"Sp", p:24}, {s:"Oc", p:27}, {s:"No", p:30},
    {s:"Dc", p:33}, {s:"Ud", p:36}, {s:"Dd", p:39}, {s:"Td", p:42},
    {s:"E45", p:45}, {s:"E48", p:48}, {s:"E51", p:51}, {s:"E54", p:54},
    {s:"E57", p:57}, {s:"E60", p:60}, {s:"E63", p:63}, {s:"E66", p:66},
    {s:"E69", p:69}, {s:"E72", p:72}, {s:"E75", p:75}, {s:"E78", p:78},
    {s:"E81", p:81}, {s:"E84", p:84}
];

let DB = {};

// Elementos DOM
const select = document.getElementById('monsterSelect');
const slider = document.getElementById('rankSlider');
const displayHP = document.getElementById('bossHP');
const tableBody = document.getElementById('tableBody');

// --- 2. SISTEMA DE IDIOMAS ---

function changeLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;
    const t = TRANSLATIONS[lang];

    // Actualizar Textos Estáticos por ID
    document.getElementById('lbl_title').innerText = t.title;
    document.getElementById('lbl_subtitle').innerText = t.subtitle;
    document.getElementById('lbl_boss').innerText = t.lbl_boss;
    document.getElementById('lbl_hp').innerText = t.lbl_hp;
    document.getElementById('lbl_dmg').innerText = t.lbl_dmg;
    document.getElementById('lbl_time').innerText = t.lbl_time;
    document.getElementById('btn_calc').innerText = t.btn_calc;
    document.getElementById('res_lbl_goal').innerText = t.res_goal;
    document.getElementById('res_lbl_rounds').innerText = t.res_rounds;
    document.getElementById('res_lbl_time').innerText = t.res_time;
    document.getElementById('th_rank').innerText = t.th_rank;
    document.getElementById('th_hp').innerText = t.th_hp;
    document.getElementById('th_name').innerText = t.th_name;
    
    document.getElementById('userDmg').placeholder = t.placeholder_dmg;

    const tableDisplay = document.getElementById('dataTable').style.display;
    const btnTable = document.getElementById('btn_toggle_table');
    btnTable.innerText = (tableDisplay === 'table') ? t.btn_hide : t.btn_show;

    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');
}

// --- 3. CARGA DE DATOS ---

async function loadData() {
    try {
        const response = await fetch('monsters.json');
        const data = await response.json();
        DB = data.monsters;
        initUI();
    } catch (error) {
        console.error("Error loading JSON:", error);
        alert("Error loading monsters.json. Use a local server.");
    }
}

function initUI() {
    Object.keys(DB).forEach(k => {
        let opt = document.createElement('option');
        opt.value = k;
        opt.innerText = k;
        select.appendChild(opt);
    });
    updateUI();
    changeLanguage('es'); 
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
        let suffix = u.s.toUpperCase();
        if(str.endsWith(suffix)) {
            let valStr = str.replace(suffix, "").trim();
            let val = valStr === "" ? 1 : parseFloat(valStr);
            return val * Math.pow(10, u.p);
        }
    }
    return parseFloat(str);
}

function formatBig(num) {
    if(num <= 0) return "0";
    let log = Math.log10(num);
    let exp = Math.floor(log / 3) * 3; 
    
    if (exp < 21) return num.toLocaleString('en-US', {maximumFractionDigits: 2});

    let mantissa = num / Math.pow(10, exp);

    if(exp >= 45) return `${mantissa.toFixed(2)} E${exp}`;

    let unit = UNITS.find(u => u.p === exp);
    if (unit) return `${mantissa.toFixed(2)} ${unit.s}`;

    return num.toExponential(2);
}

// --- 5. FUNCIONES UI ---

function updateUI() {
    if (Object.keys(DB).length === 0) return;
    let idx = parseInt(slider.value);
    let key = select.value;
    
    if (!DB[key]) return;
    let hpVal = DB[key][idx];

    document.getElementById('rankBadge').innerText = RANKS[idx];
    document.getElementById('rankName').innerText = RANK_NAMES[idx];
    displayHP.value = hpVal ? hpVal : "---";
    
    document.getElementById('results').style.display = "none";
    renderTableRows(key, idx);
}

function calculate() {
    let t = TRANSLATIONS[currentLang];
    let key = select.value;
    let idx = parseInt(slider.value);
    let hpStr = DB[key][idx];

    if(!hpStr) {
        alert(t.err_data);
        return;
    }

    let totalHP = parseBig(hpStr);
    let userDmg = parseBig(document.getElementById('userDmg').value);
    let time = parseFloat(document.getElementById('timeRound').value) || 25;

    if(userDmg <= 0) {
        alert(t.err_dmg);
        return;
    }

    let onePct = totalHP * 0.01;
    let rounds = Math.ceil(onePct / userDmg);
    let totalSeconds = rounds * time; // Total de segundos

    document.getElementById('results').style.display = "block";
    document.getElementById('out1Pct').innerText = formatBig(onePct);
    document.getElementById('outRounds').innerText = rounds.toLocaleString();
    
    // --- LÓGICA DE TIEMPO (Días, Horas, Minutos, Segundos) ---
    // 1 día = 86400 segundos
    let d = Math.floor(totalSeconds / 86400);
    // El resto se usa para calcular horas
    let remainder = totalSeconds % 86400;
    
    let h = Math.floor(remainder / 3600);
    let m = Math.floor((remainder % 3600) / 60);
    let s = Math.ceil(remainder % 60);
    
    let timeString = "";
    
    // Construcción del string (Solo muestra si es mayor a 0)
    if(d > 0) timeString += `${d}${t.time_d} `;
    
    // Si hay días, mostrar horas aunque sean 0 (ej: 1d 0h 15m)
    if(h > 0 || d > 0) timeString += `${h}${t.time_h} `;
    
    if(m > 0 || h > 0 || d > 0) timeString += `${m}${t.time_m} `;
    
    timeString += `${s}${t.time_s}`;
    
    document.getElementById('outTime').innerText = timeString;
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

function renderTableRows(key, activeIdx) {
    if (!DB[key]) return;
    tableBody.innerHTML = "";
    let data = DB[key];
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
}

document.addEventListener('DOMContentLoaded', loadData);