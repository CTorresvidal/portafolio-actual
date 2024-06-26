document.addEventListener('DOMContentLoaded', function () {
  // AQUÍ PONDRE TODO EL CODIGO
  const elementsToTransalate = document.querySelectorAll('[data-translate-es]')

  const btnChangeLanguage = document.getElementById('btn-translate')

  let language = 'es'

  btnChangeLanguage.addEventListener('click', function () {

    if (language === 'es') {

      for (const phrase of elementsToTransalate) {
        const translation = phrase.getAttribute('data-translate-en');
        phrase.textContent = translation
      }
      document.getElementById('downloadCV').href = '../../assets/cv/CV Carlos Torres ENG.pdf' 
      language = 'en'
    } else {
      for (const phrase of elementsToTransalate) {
        const translation = phrase.getAttribute('data-translate-es');
        phrase.textContent = translation
      }
      document.getElementById('downloadCV').href = '../../assets/cv/CV Carlos Torres ESP.pdf' 
      language = 'es'

    }

  })

})