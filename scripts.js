var enterButton = document.querySelector('.enter-button');
var titleInput = document.querySelector('#title-input');
var urlInput = document.querySelector('#url-input');

titleInput.addEventListener('input', enableEnter);
urlInput.addEventListener('input', enableEnter);

function enableEnter() {
  enterButton.removeAttribute("disabled");
};

function makeCard() {


  var title = titleInput.value;
  var url = urlInput.value;

   var newBookmark = createBookmark(title,url);
   var bookmarkSection = document.querySelector('.gray-box');
   if ((title === "") || (url === "")){
     alert("You must have both a title and a url to create a bookmark!");
   } else {bookmarkSection.appendChild(newBookmark);
   };




};

function createBookmark(title,url) {


  var newDiv = document.createElement('div');
  newDiv.classList.add('bookmark-card');
  newDiv.innerHTML = `<h2>${title}</h2>
  <span class="bookmark-link">
      <a href="${url}" class="bookmark-url" target="_blank">${url}</a>
  </span>
  <div class="button-flex-box">
    <button class="bookmark-read-button">Read</button>
    <button class="bookmark-delete-button">Delete</button>`;





    readButton = newDiv.querySelector('.bookmark-read-button');
    deleteButton = newDiv.querySelector('.bookmark-delete-button');
    readButton.addEventListener('click', function() {
    // toggle a class of .read on <a href>/span- the below code targets the span
    // bookmarkLink.classList.toggle('.read');
    // toggle a class of .read-div on div
    newDiv.classList.toggle('.read-div');
    // toggle a class of .read-button on button
    readButton.classList.toggle('.read-button');
    console.log("toggle check");
  });





    // read/delete button event listeners




  return newDiv;
};

enterButton.addEventListener('click', makeCard);


// // When read button is clicked on each card (which functions indepedently),
// readButton.addEventListener('click', toggleRead);
// function toggleRead() {
// // toggle a class of .read on <a href>/span- the below code targets the span
// // bookmarkLink.classList.toggle('.read');
// // toggle a class of .read-div on div
// newDiv.classList.toggle('.read-div');
// // toggle a class of .read-button on button
// readButton.classList.toggle('.read-button');
// console.log("toggle check");
// };
//
// // When remove button is clicked, delete entire card from html
// deleteButton.addEventListener('click', removeCard);
//
// function removeCard() {
//
// };
