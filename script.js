//1º - selecionar os elementos que vão ser manipulados
let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

//2º - método de atualização do relógio
function updateClock() {
    //pegar a hora atual
    let now = new Date(); //classe p/ manipulação de data
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    //inserir a hora no relógio digital
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    //posicionado o ponteiro dos segundos
    let sDeg = ((360 / 60) * second) - 90;
    //insere um estilo transform rotate
    sElement.style.transform = `rotate(${sDeg}deg)`;

    //posicionado o ponteiro dos minutos
    let mDeg = ((360 / 60) * minute) - 90;
    mElement.style.transform = `rotate(${mDeg}deg)`;

    //posicionado o ponteiro das horas
    let hDeg = ((360 / 12) * hour) - 90;
    hElement.style.transform = `rotate(${hDeg}deg)`;

}

//função para corrigir o zero a esquerda que estava faltando
function fixZero(time) {

    return time < 10 ? `0${time}` : time;

    // if (time < 10) {
    //     return '0' + time;
    // } else {
    //     return time;
    // }
}

//cria um intervalo infinito setando o tempo em milissegundos
setInterval(updateClock, 1000); //1s
updateClock();

const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) =>
    window
    .getComputedStyle(element)
    .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
}

const darkMode = {
    bg: "#333333",
    bgPanel: "#434343",
    colorHeadings: "#3664FF",
    colorText: "#fff"
}

const transformKey = key =>
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key]))
}


checkbox.addEventListener("change", ({ target }) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})