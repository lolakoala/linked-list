var enterButton = document.querySelector('.enter-button');
var titleInput = document.querySelector('#title-input');
var urlInput = document.querySelector('#url-input');

function enableEnter() {
  var userTitle = titleInput.value;
  var userUrl = urlInput.value;
  if ((userTitle !== "") && (userUrl !== "")) {
    enterButton.removeAttribute("disabled");
  } else {
    enterButton.setAttribute("disabled");
  };
};

function makeCard(event) {
  event.preventDefault();
  var title = titleInput.value;
  var url = urlInput.value;
  var newBookmark = createBookmark(title, url);
  var bookmarkSection = document.querySelector('.gray-box');
  if (title === "") {
   titleInput.placeholder = "Please enter a title";
  } else if (url === "") {
   urlInput.placeholder = "Please enter a url";
  }
  else {bookmarkSection.appendChild(newBookmark);
  };
  cardCounter();
  inputReset();
 };

function createBookmark(title, url) {
  var newDiv = document.createElement('div');
  newDiv.classList.add('bookmark-card');
  newDiv.innerHTML = `
    <h2>${title}</h2>
    <span class="bookmark-link">
      <a href="${url}" class="bookmark-url" target="_blank">${url}</a>
    </span>
    <div class="button-flex-box">
      <button class="bookmark-read-button">Read</button>
      <button class="bookmark-delete-button">Delete</button>
    </div>`;
  deleteButton = newDiv.querySelector('.bookmark-delete-button');
  deleteButton.addEventListener('click', function() {
  this.closest('.bookmark-card').remove();
  cardCounter();
  readCardCount();
  });
  return newDiv;
};

function cardCounter() {
  var cardCount = document.querySelectorAll('.bookmark-card').length;
  var readCount = document.querySelectorAll('button.read').length;
  var unreadCount = cardCount - (readCount/2);
  var totalBookmarks = document.getElementById('total-bookmarks');
  var unreadBookmarks = document.getElementById('unread-bookmarks');
  totalBookmarks.innerText = cardCount;
  unreadBookmarks.innerText = unreadCount;
};

function readCardCount() {
  var cardCount = document.querySelectorAll('.bookmark-card').length;
  var readCount = document.querySelectorAll('button.read').length;
  var unreadCount = cardCount - (readCount/2);
  var readBookmarks = document.getElementById('read-bookmarks');
  var unreadBookmarks = document.getElementById('unread-bookmarks');
  readBookmarks.innerText = (readCount/2);
  unreadBookmarks.innerText = unreadCount;
  };

  $('.gray-box').on('click', '.bookmark-read-button', function () {
        $(this).closest('.bookmark-card').toggleClass('read');
        $(this).parents('.bookmark-card').find('.bookmark-url').toggleClass('read');
        $(this).parents('.bookmark-card').find('.bookmark-read-button').toggleClass('read');
        $(this).parents('.bookmark-card').find('.bookmark-delete-button').toggleClass('read');
        readCardCount();
      });

function inputReset() {
  enterButton.disabled = true;
  titleInput.value = "";
  urlInput.value = "";
};

enterButton.addEventListener('click', makeCard);
titleInput.addEventListener('input', enableEnter);
urlInput.addEventListener('input', enableEnter);
