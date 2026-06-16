function openFolder(){
    const input = document.createElement('input')
    input.type = 'file'
    input.webkitdirectory = true
    // Fallback to multiple files input for iOS Safari
    input.multiple = true
    // See https://stackoverflow.com/questions/47664777/javascript-file-input-onchange-not-working-ios-safari-only
    input.style.position = 'fixed'
    input.style.top = '-100000px'
    input.style.left = '-100000px'
    document.body.appendChild(input)

    input.click()
    input.addEventListener('change', (evt)=>{
        alert(evt.toString())
        input.remove()
    })
}
