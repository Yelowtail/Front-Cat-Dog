
window.addEventListener("load", () => {
    let inputs = document.querySelectorAll(".effect-input")

    inputs.forEach((inp) => {
        inp.addEventListener('input', () => {
            if (!inp.value.trim()) {
                inp.classList.remove('has-content')
            } else {
                inp.classList.add('has-content')
            }
        })
    })
})
