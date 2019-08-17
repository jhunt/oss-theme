;(function () {
  let anchors = document.querySelector("h1[id], h2[id], h3[id], h4[id]")
  console.log(anchors);

  document.body.addEventListener('click', function (event) {
    if (event.target.matches('h1[id], h2[id], h3[id], h4[id]')) {
      document.location.hash = '#'+event.target.getAttribute('id');
    }
  });
})();
