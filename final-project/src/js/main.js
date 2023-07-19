// this is how it would look if we listen for the submit on the form
document.forms["search-bar"].addEventListener("submit", (e) => {
  e.preventDefault();
  const search = document.getElementById("search").value;

  window.location.href = "/movie_results/index.html" + "?search=" + search;
});
