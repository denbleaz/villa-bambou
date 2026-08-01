document.addEventListener("DOMContentLoaded", function(){
  // Menu mobile
  const btn = document.querySelector(".menu-mobile-btn");
  const nav = document.querySelector("nav.principale");
  if(btn && nav){
    btn.addEventListener("click", function(){
      nav.classList.toggle("ouvert");
      const ouvert = nav.classList.contains("ouvert");
      btn.setAttribute("aria-expanded", ouvert ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function(a){
      a.addEventListener("click", function(){ nav.classList.remove("ouvert"); });
    });
  }

  // Formulaire de contact -> ouvre le client mail avec les infos pré-remplies
  const formulaire = document.querySelector("#formulaire-contact");
  if(formulaire){
    formulaire.addEventListener("submit", function(e){
      e.preventDefault();
      const nom = formulaire.querySelector("#nom").value;
      const email = formulaire.querySelector("#email").value;
      const arrivee = formulaire.querySelector("#arrivee").value;
      const depart = formulaire.querySelector("#depart").value;
      const voyageurs = formulaire.querySelector("#voyageurs").value;
      const message = formulaire.querySelector("#message").value;

      const sujet = encodeURIComponent("Demande de séjour — Villa Bambou");
      const corps = encodeURIComponent(
        "Nom : " + nom + "\n" +
        "Email : " + email + "\n" +
        "Arrivée souhaitée : " + arrivee + "\n" +
        "Départ souhaité : " + depart + "\n" +
        "Nombre de voyageurs : " + voyageurs + "\n\n" +
        "Message :\n" + message
      );
      // ⚠️ Remplacer l'adresse ci-dessous par la véritable adresse email de contact
      window.location.href = "mailto:contact@villabambou.com?subject=" + sujet + "&body=" + corps;
    });
  }
});
