document.addEventListener("DOMContentLoaded", () => {
   console.log("Сайт загружен и готов к работе!");

   // Пример обработчика событий
   const btn = document.querySelector(".btn");
   btn.addEventListener("click", () => {
      alert("Вы нажали на кнопку!");
   });
});
