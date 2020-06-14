document.addEventListener('DOMContentLoaded', () => {
  const newGameForm = document.querySelector('#new-game-form');
  newGameForm.addEventListener('submit', handleNewGameFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewGameFormSubmit = function(){
  event.preventDefault();
  const videoGameListItem = createVideoGameListItem(event.target)

  const videoGameList = document.querySelector('#video-game-list')
  videoGameList.appendChild(videoGameListItem)
}

const createVideoGameListItem = function(form){

  const videoGameListItem = document.createElement('li')
  videoGameListItem.classList.add('video-game-list-item')

  const game = document.createElement('h2');
  game.textContent = form.game.value;
  videoGameListItem.appendChild(game);

  const system = document.createElement('h3');
  system.textContent = form.system.value;
  videoGameListItem.appendChild(system);

  const progress = document.createElement('p');
  progress.textContent = form.progress.value;
  videoGameListItem.appendChild(progress);

  const recommend = document.createElement('p');
  recommend.textContent = form.recommend.value;
  videoGameListItem.appendChild(recommend);

  return videoGameListItem

}

const handleDeleteAllClick = function (event) {
const videoGameList = document.querySelector('#video-game-list');
videoGameList.innerHTML = '';

}
