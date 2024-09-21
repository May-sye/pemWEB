function proses(){
    let nama = document.getElementById('nama')
    const tulis=document.getElementById('tulis')

    tulis.innerHTML= "tulis apa baeee " + nama.value

}

function ganti(){
    const tulis = document.getElementById('tulis')
    tulis.style.color = "pink"

    tulis.innerHTML = "damn!"

}