const button = document.querySelector(".language-toggle");

function setLanguage(language) {
  document.documentElement.lang = language;
  document.title = document.body.dataset[`title${language === "vi" ? "Vi" : "En"}`];
  document.querySelectorAll("[data-en]").forEach(element => {
    element.textContent = element.dataset[language];
  });
  document.querySelectorAll("[data-alt-en]").forEach(element => {
    element.alt = element.dataset[language === "vi" ? "altVi" : "altEn"];
  });
  button.textContent = language === "vi" ? "EN" : "VI";
  button.setAttribute("aria-label", language === "vi" ? "Chuyển sang tiếng Anh" : "Switch to Vietnamese");
  localStorage.setItem("portfolio-language", language);
}

button.addEventListener("click", () => setLanguage(document.documentElement.lang === "en" ? "vi" : "en"));
window.addEventListener("storage", event => {
  if (event.key === "portfolio-language") setLanguage(event.newValue === "vi" ? "vi" : "en");
});
setLanguage(localStorage.getItem("portfolio-language") === "vi" ? "vi" : "en");
