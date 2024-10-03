function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}
let saerchFormElement = document.querySelector("#search-form");
saerchFormElement.addEventListener("submit", handleSearchSubmit);
