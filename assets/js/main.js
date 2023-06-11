let informatique = document.getElementById('informatique');
let rubriExp1 = document.getElementById('rubriExp11')

informatique.addEventListener('click', () => {
    rubriExp1.style.display = 'block';
    rubriExp2.style.display = 'none';
});

let autre = document.getElementById('autre');
let rubriExp2 = document.getElementById('rubriExp22');


autre.addEventListener('click', () => {
    rubriExp1.style.display = 'none';
    rubriExp2.style.display = 'block';
});

/**
 * MODAL Travel Finder :
*/
// On récupère le bouton qui ouvre la fenêtre modale
const openModalBtn = document.getElementsByClassName("open-modal-btn");

// On récupère la fenêtre modale et le bouton pour la fermer
const modal = document.getElementById("modal");
const closeBtn = document.getElementsByClassName("close-btn")[0];

for (let om of openModalBtn) {

    // On ajoute un écouteur d'événement sur le clic du bouton pour ouvrir la fenêtre modale
    om.addEventListener("click", function (e) {
        modal.style.display = "block";
        deleteArticle.value = e.target.getAttribute('idarticle');
    });
}

// On ajoute un écouteur d'événement sur le clic du bouton pour fermer la fenêtre modale
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

// On ajoute un écouteur d'événement pour fermer la fenêtre modale si l'utilisateur clique en dehors de la fenêtre
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

/**
 * Accordéon :
*/

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "rem";
    }
  });
}

/**
 * MODAL Ultra Festival :
*/
// On récupère le bouton qui ouvre la fenêtre modale
const openModalBtnOne = document.getElementsByClassName("open-modal-btn-one");

// On récupère la fenêtre modale et le bouton pour la fermer
const modalO = document.getElementById("modalOne");
const closeBtnOne = document.getElementsByClassName("close-btn-one")[0];

for (let omb of openModalBtnOne) {

    // On ajoute un écouteur d'événement sur le clic du bouton pour ouvrir la fenêtre modale
    omb.addEventListener("click", function (e) {
        modalO.style.display = "block";
        deleteArticle.value = e.target.getAttribute('idarticle');
    });
}

// On ajoute un écouteur d'événement sur le clic du bouton pour fermer la fenêtre modale
closeBtnOne.addEventListener("click", function () {
    modalO.style.display = "none";
});

// On ajoute un écouteur d'événement pour fermer la fenêtre modale si l'utilisateur clique en dehors de la fenêtre
window.addEventListener("click", function (event) {
    if (event.target == modalO) {
        modalO.style.display = "none";
    }
});

/**
 * MODAL Voyage Airways :
*/
// On récupère le bouton qui ouvre la fenêtre modale
const openModalBtnTwo = document.getElementsByClassName("open-modal-btn-two");

// On récupère la fenêtre modale et le bouton pour la fermer
const modalT = document.getElementById("modalTwo");
const closeBtnTwo = document.getElementsByClassName("close-btn-two")[0];

for (let ome of openModalBtnTwo) {

    // On ajoute un écouteur d'événement sur le clic du bouton pour ouvrir la fenêtre modale
    ome.addEventListener("click", function (e) {
        modalT.style.display = "block";
        deleteArticle.value = e.target.getAttribute('idarticle');
    });
}

// On ajoute un écouteur d'événement sur le clic du bouton pour fermer la fenêtre modale
closeBtnTwo.addEventListener("click", function () {
    modalT.style.display = "none";
});

// On ajoute un écouteur d'événement pour fermer la fenêtre modale si l'utilisateur clique en dehors de la fenêtre
window.addEventListener("click", function (event) {
    if (event.target == modalT) {
        modalT.style.display = "none";
    }
});