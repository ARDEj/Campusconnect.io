// Tehty Ai:n avulla
let points = 250;

const pointsElement = document.getElementById("points");
const notification = document.getElementById("ilmoitus");

function lunasta(hinta, palkinto) {
  if (points < hinta) {
    notification.textContent = "Sinulla ei ole tarpeeksi pisteitä.";
    notification.classList.add("näkyvä");

    setTimeout(() => {
      notification.classList.remove("näkyvä");
    }, 2500);

    return;
  }

  points -= hinta;
  pointsElement.textContent = points;

  notification.textContent = "Lunastit palkinnon: " + palkinto;
  notification.classList.add("näkyvä");

  setTimeout(() => {
    notification.classList.remove("näkyvä");
  }, 2500);
}
