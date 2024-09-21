const h1 = document.createElement("h1")
h1.innerHTML = "saya sedang belajar DOM"

document.body.append(h1)

const img = document.createElement("img")
img.src = "gambarp2/nai.jpg"
img.width = 150
document.body.append(img)

const form = document.createElement ("form")
form.innerHTML = "<input type 'text' placeholder = 'masukan nama'>"
form.innerHTML += "<input type 'submit' value = 'kirim'>"
document.body.append(form)

const form = document.createElement ("form")
form.innerHTML = "<input type 'text' placeholder = 'masukan NIM'>"
form.innerHTML += "<input type 'submit' value = 'kirim'>"
document.body.append(form)

const form = document.createElement ("form")
form.innerHTML = "<input type 'text' placeholder = 'masukan kelas'>"
form.innerHTML += "<input type 'submit' value = 'kirim'>"
document.body.append(form)

const form = document.createElement ("form")
form.innerHTML = "<input type 'text' placeholder = 'masukan alamat'>"
form.innerHTML += "<input type 'submit' value = 'kirim'>"
document.body.append(form)

const table = document.createElement("table")
table.id = "table"
table.style.border = "ipx"
document.body.append(table)

const tr1 = document.createElement(("tr"))
const tr2 = document.createElement(("tr"))
table.append(tr1)
table.append(tr2)


