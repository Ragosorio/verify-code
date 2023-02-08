const codes = document.querySelectorAll('.code')
const form = document.getElementById("form")
const btn = document.getElementById("btn")

codes[0].focus()

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <=9) {
            codes[idx].value = ''
            setTimeout(() => codes[idx + 1].focus(), 10)
        } else if(e.key === 'Backspace') {
            setTimeout(() => codes[idx - 1].focus(), 10)
        }
    })
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const c1 = document.getElementById("c1").value
    const c2 = document.getElementById("c2").value
    const c3 = document.getElementById("c3").value
    const c4 = document.getElementById("c4").value
    const c5 = document.getElementById("c5").value
    const c6 = document.getElementById("c6").value
    if (c1 === "7" && c2 === "6" && c3 === "5" && c4 === "4" && c5 === "3" && c6 === "2") {
        window.location.href = "./pages/TCP.html";
    } else{
        location.reload();
    }
})
