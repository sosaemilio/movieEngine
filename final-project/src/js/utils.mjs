// retrieve data from localstorage
export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function clearLocalStorage(key) {
    localStorage.removeItem(key);
}

export function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const movie = urlParams.get(param);
    return movie;
}

export function renderListWithTemplate(templateFn, parentElement, list) {
    list.forEach(element => {
        let htmlCard = templateFn(element);
        parentElement.insertAdjacentHTML("afterbegin", htmlCard)
    });
  }

  