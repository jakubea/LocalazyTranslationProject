$(document).ready(function () {
  // Function to load and apply translations
  function applyTranslations(language) {
    $.getJSON(`/translations/${language}.json`, function (translations) {
      $('[data-localazy-key]').each(function () {
        var key = $(this).data('localazy-key');
        if (translations[key]) {
          $(this).text(translations[key]);
        }
      });
    });
  }

  // Initialize with default language
  applyTranslations('en');

  // Handle language changes
  $('#language-selector').change(function () {
    var selectedLang = $(this).val();
    console.log(selectedLang);
    applyTranslations(selectedLang);
  });
});
