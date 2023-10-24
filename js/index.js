(function () {
  function $(id) {
    return document.getElementById(id);
  }

  var audio = new Audio("lagu.mp3");

  var card = $("card"),
    openB = $("open"),
    closeB = $("close"),
    timer = null;
  console.log("wat", card);
  openB.addEventListener("click", function () {
    card.setAttribute("class", "open-half");
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute("class", "open-fully");
      timer = null;
      audio.play();
    }, 1000);
  });

  closeB.addEventListener("click", function () {
    card.setAttribute("class", "close-half");
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute("class", "");
      timer = null;
      audio.stop();
    }, 1000);
  });
})();
