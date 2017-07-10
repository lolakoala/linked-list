var enterButton = document.querySelector('.enter-button');
var bookmarkTitle = document.querySelector('h2');
var bookmarkLink = document.querySelector('.bookmark-link');
var titleInput;
var urlInput;

// function createCard() {
//   var title = titleInput.value;
//   var url = urlInput.value;
//   bookmarkTitle.innerText = title;
//   bookmarkLink.innerHTML = '<a href="' + url + ' class="bookmark-url">' + url + ' </a>';
// } ;

function makeCard() {
  var titleInput = document.querySelector('#title-input');
  var urlInput = document.querySelector('#url-input');
  var title = titleInput.value;
  var url = urlInput.value;
  bookmarkTitle.innerText = title;
  bookmarkLink.innerHTML = '<a href="' + url + ' class="bookmark-url">' + url + ' </a>';
    // This entire function will transfer information from input fields and produce a card on the right section of the page
// Combo of two functions?
// function to transfer info from input fields to card - object method?
  // createCard();
// function to create chunk of html -card- with correct information from input fields
}






enterButton.addEventListener('click', makeCard);
