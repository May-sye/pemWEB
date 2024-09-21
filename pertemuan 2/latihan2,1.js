const form2 = document.createElement("form")
document.body.append(form2)

const input = document.createElement("input")
input.setAttribute('type', 'text')
input.setAttribute('placeholder', 'masukkan nama anda')

const tombol  = document.createElement("input")
tombol.setAttribute('type', 'submit')
tombol.setAttribute('value','simpan')

form2.append(input)
form2.append(tombol)
