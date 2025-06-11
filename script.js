

let weight = document.getElementById("containerBlock_choice")

containerBlockButton.addEventListener("click", click1)
function click1() {

    let weightValue = weight.options[weight.selectedIndex].value
    /////////////////////////////////////////////////////////////////////////////////////////////////
    if (weightValue == 25.5) {
        let getBase = Math.random() * (5.9 - 4.5) + 4.5
        let base = getBase.toFixed(2)
        let getBody = Math.random() * (13.6 - 12.2) + 12.2
        let body = getBody.toFixed(2)
        let getTop = weightValue - base - body
        let top = getTop.toFixed(2)
        let res = +base + +body + +top
        document.getElementById("containerBlockDisplay").innerHTML = `
        <div id="containerBlockDisplay_data">BASE = ${base}</div>
         <div id="containerBlockDisplay_data">BODY = ${body}</div>
          <div id="containerBlockDisplay_data">TOP = ${top}</div>
           <div id="containerBlockDisplay_data">WEIGHT = ${res.toFixed(1)}</div>
        `}
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    if (weightValue == 43.5) {
        let getBase = Math.random() * (11 - 10.8) + 10.8
        let base = getBase.toFixed(2)
        let getBody = Math.random() * (12.4 - 12.2) + 12.2
        let body = getBody.toFixed(2)

        let getBody2 = Math.random() * (13.8 - 13.6) + 13.6
        let body2 = getBody2.toFixed(2)

        let getTop = weightValue - base - body - body2
        let top = getTop.toFixed(2)
        let res = +base + +body + +body2 + +top
        document.getElementById("containerBlockDisplay").innerHTML = `
        <div id="containerBlockDisplay_data">BASE = ${base}</div>
         <div id="containerBlockDisplay_data">BODY = ${body}</div>
          <div id="containerBlockDisplay_data">BODY = ${body2}</div>
          <div id="containerBlockDisplay_data">TOP = ${top}</div>
           <div id="containerBlockDisplay_data">WEIGHT = ${res.toFixed(1)}</div>`
    }

}