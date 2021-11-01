function verificar() {
  var data = new Date()
  var ano = data.getFullYear() // Vai pegar 2 digitos
  var fAno = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fAno.value.length == 0 || fAno.value > ano || fAno.value == 0) {
    window.alert(`[ERRO]Verifique os dados e tente novamente!`)
  } else {
    var fsex = document.getElementsByName(`radsex`)
    var idade = ano - Number(fAno.value)
    var genero = ``
    var img = document.createElement(`img`)
    img.setAttribute(`id`, `foto`)
    if (fsex[0].checked) {
      genero = `Homem`
      if (idade >= 0 && idade <= 12) {
        // Crianca
        img.setAttribute('src', 'foto-criança-m.jpg')
      } else if (idade < 20) {
        // Jovem
        img.setAttribute('src', 'foto-jovem-m.jpeg')
      } else if (idade < 50) {
        // Adulto
        img.setAttribute('src', 'foto-adulto-m.jpeg')
      } else {
        // Idoso
        img.setAttribute('src', 'foto-idoso-m.jpeg')
      }
    } else if (fsex[1].checked) {
      genero = `Mulher`
      if (idade >= 0 && idade <= 12) {
        // Crianca
        img.setAttribute('src', 'foto-criança-f.jpg')
      } else if (idade < 20) {
        // Jovem
        img.setAttribute('src', 'foto-jovem-f.jpeg')
      } else if (idade < 50) {
        // Adulto
        img.setAttribute('src', 'foto-adulto-f.jpeg')
      } else {
        // Idoso
        img.setAttribute('src', 'foto-idoso-f.jpeg')
      }
    }
    res.style.textAlign = `center`
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  }
}
