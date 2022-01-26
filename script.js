function count() {
    let st = window.document.getElementById('txts')
    let en = window.document.getElementById('txte')
    let ra = window.document.getElementById('txtr')

    if (st.value.length == 0 ||
        en.value.length == 0 ||
        ra.value.length == 0) {
        res.innerHTML = 'Impossible to count'
        //window.alert('[ERROR] Please, enter valid values')
    } else {
        let s = Number(st.value)
        let e = Number(en.value)
        let r = Number(ra.value)
        res.innerHTML = 'Counting:<br>'
        if (r <= 0) {
            window.alert(`[ERROR] Ratio can't be ${r}. Considering Ratio = 1`)
            r = 1
        }
        if (s < e) {
            //crescent
            for (let c = s; c <= e; c += r) {
                res.innerHTML += `${c} \u{1F449}`
            }

        } else {
            //decrescent
            for (let c = s; c >= e; c -= r) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
    } res.innerHTML += `\u{1F3C1}`

}
function refresh() {
    res.innerHTML = ''
}
function rock() {
    document.body.style.background = "black";  //background
    tit.innerHTML = "ROCK!👽"                 //title
    sec.style.textAlign = "center";          //to align letters in center
    sec.innerHTML = "now you're rock B)";   //rock B)
}
