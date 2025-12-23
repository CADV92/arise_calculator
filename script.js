// --- 1. CONFIGURACIÓN Y TRADUCCIONES ---

const TRANSLATIONS = {
    es: {
        title: "Calculadora de Ascensión",
        subtitle: "Calculadora de Héroe Mítico",
        lbl_boss: "Jefe / Héroe Mítico (1-15)",
        lbl_hp: "Vida del Jefe (HP)",
        lbl_dmg: "Tu Daño Estimado",
        lbl_time: "Tiempo por Ronda (Segundos)",
        lbl_target: "Objetivo de Cálculo",
        btn_target_1: "1% (Recompensa)",
        btn_target_100: "100% (Matar)",
        btn_calc: "CALCULAR PROGRESO",
        res_goal: "Daño Objetivo:",
        res_rounds: "Rondas necesarias:",
        res_time: "Tiempo estimado:",
        btn_show: "Mostrar Tabla de Datos ▼",
        btn_hide: "Ocultar Tabla ▲",
        th_rank: "Rango",
        th_hp: "Vida (HP)",
        th_name: "Nombre",
        err_data: "Error: No hay datos de vida para este nivel.",
        err_dmg: "Error: Ingresa un daño válido mayor a 0.",
        // Unidades de tiempo
        time_y: "a",   // Año
        time_mo: "mes",// Mes
        time_d: "d",   // Día
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
        lbl_dmg: "Estimated Damage",
        lbl_time: "Time per Round (Seconds)",
        lbl_target: "Calculation Target",
        btn_target_1: "1% (Reward)",
        btn_target_100: "100% (Kill)",
        btn_calc: "CALCULATE PROGRESS",
        res_goal: "Target Damage:",
        res_rounds: "Rounds needed:",
        res_time: "Estimated Time:",
        btn_show: "Show Data Table ▼",
        btn_hide: "Hide Table ▲",
        th_rank: "Rank",
        th_hp: "Health (HP)",
        th_name: "Name",
        err_data: "Error: No HP data available for this level.",
        err_dmg: "Error: Please enter a valid damage > 0.",
        time_y: "y",
        time_mo: "mo",
        time_d: "d",
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
        lbl_dmg: "Danno Stimato",
        lbl_time: "Tempo per Round (Secondi)",
        lbl_target: "Obiettivo di Calcolo",
        btn_target_1: "1% (Ricompensa)",
        btn_target_100: "100% (Uccidere)",
        btn_calc: "CALCOLA PROGRESSO",
        res_goal: "Danno Obiettivo:",
        res_rounds: "Round necessari:",
        res_time: "Tempo stimato:",
        btn_show: "Mostra Tabella Dati ▼",
        btn_hide: "Nascondi Tabella ▲",
        th_rank: "Rango",
        th_hp: "Vita (HP)",
        th_name: "Nome",
        err_data: "Errore: Nessun dato HP disponibile.",
        err_dmg: "Errore: Inserisci un danno valido > 0.",
        time_y: "a",   // Anno
        time_mo: "mese",
        time_d: "g",   // Giorno
        time_h: "h",
        time_m: "m",
        time_s: "s",
        placeholder_dmg: "Inserisci danno..."
    }
};

let currentLang = 'es';
let targetPercentage = 0.01; // Por defecto 1%

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

// --- 2. SISTEMA DE IDIOMAS Y OBJETIVO ---

function changeLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;
    const t = TRANSLATIONS[lang];

    document.getElementById('lbl_title').innerText = t.title;
    document.getElementById('lbl_subtitle').innerText = t.subtitle;
    document.getElementById('lbl_boss').innerText = t.lbl_boss;
    document.getElementById('lbl_hp').innerText = t.lbl_hp;
    document.getElementById('lbl_dmg').innerText = t.lbl_dmg;
    document.getElementById('lbl_time').innerText = t.lbl_time;
    document.getElementById('lbl_target').innerText = t.lbl_target;
    document.getElementById('btn_target_1').innerText = t.btn_target_1;
    document.getElementById('btn_target_100').innerText = t.btn_target_100;
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

// Función para cambiar el objetivo (1% o 100%)
function setTarget(pct, btnElement) {
    targetPercentage = pct;
    
    // Actualizar visual de botones
    document.querySelectorAll('.target-btn').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');
    
    // Si ya hay resultados, recalcular automáticamente
    if(document.getElementById('results').style.display === "block") {
        calculate();
    }
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
        alert("Error loading monsters.json.");
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

    // AQUI USAMOS LA VARIABLE DE PORCENTAJE (0.01 o 1.0)
    let targetAmount = totalHP * targetPercentage;
    let rounds = Math.ceil(targetAmount / userDmg);
    let totalSeconds = rounds * time;

    document.getElementById('results').style.display = "block";
    document.getElementById('out1Pct').innerText = formatBig(targetAmount);
    document.getElementById('outRounds').innerText = rounds.toLocaleString();
    
    // --- LÓGICA DE TIEMPO EXTENDIDA (Años, Meses, Días...) ---
    // Aproximaciones estándar: 1 Año = 365 días, 1 Mes = 30 días
    const SEC_MIN = 60;
    const SEC_HOUR = 3600;
    const SEC_DAY = 86400;
    const SEC_MONTH = 2592000; // 30 días
    const SEC_YEAR = 31536000; // 365 días

    let years = Math.floor(totalSeconds / SEC_YEAR);
    let remainder = totalSeconds % SEC_YEAR;

    let months = Math.floor(remainder / SEC_MONTH);
    remainder = remainder % SEC_MONTH;

    let days = Math.floor(remainder / SEC_DAY);
    remainder = remainder % SEC_DAY;
    
    let h = Math.floor(remainder / SEC_HOUR);
    let m = Math.floor((remainder % SEC_HOUR) / SEC_MIN);
    let s = Math.ceil(remainder % SEC_MIN);
    
    let timeString = "";
    
    // Construcción inteligente del string
    if(years > 0) timeString += `${years}${t.time_y} `;
    if(months > 0 || years > 0) timeString += `${months}${t.time_mo} `;
    if(days > 0 || months > 0 || years > 0) timeString += `${days}${t.time_d} `;
    
    // Si hay días/meses/años, mostrar horas aunque sean 0
    if(h > 0 || days > 0 || months > 0 || years > 0) timeString += `${h}${t.time_h} `;
    if(m > 0 || h > 0 || days > 0 || months > 0 || years > 0) timeString += `${m}${t.time_m} `;
    
    // Segundos siempre al final (o solos si todo lo demás es 0)
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