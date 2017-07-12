var enterButton = document.querySelector('.enter-button');
var titleInput = document.querySelector('#title-input');
var urlInput = document.querySelector('#url-input');

titleInput.addEventListener('input', enableEnter);
urlInput.addEventListener('input', enableEnter);

function enableEnter() {
  if ((titleInput.value !== "") && (urlInput.value !== "")) {
    enterButton.removeAttribute("disabled");
  } else {
    enterButton.setAttribute("disabled");
  };
};

function makeCard(event) {
  event.preventDefault();

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

    deleteButton = newDiv.querySelector('.bookmark-delete-button');


  deleteButton.addEventListener('click', function() {
    this.closest('.bookmark-card').remove();
  });



  return newDiv;
};

$('.gray-box').on('click', '.bookmark-read-button', function () {
      $(this).closest('.bookmark-card').toggleClass('read');
      $(this).parents('.bookmark-card').find('.bookmark-url').toggleClass('read');
      $(this).parents('.bookmark-card').find('.bookmark-read-button').toggleClass('read');
      // console.log('readButton')
    });


enterButton.addEventListener('click', makeCard)
