document.addEventListener('DOMContentLoaded', () => {
  // Gestionnaire pour le formulaire de contact
  const contactForm = document.getElementById('formContact');
  contactForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Empêche l'envoi du formulaire

      // Récupération des données du formulaire
      const nom = document.getElementById('nom').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Affichage d'une alerte avec les informations
      alert(`Bonjour ${nom},\n\nNous avons bien reçu votre message !\n\n📝 Détails de votre message :\n- Nom : ${nom}\n- Email : ${email}\n- Message : ${message}\n\nMerci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.\n\nCordialement,\nL'équipe Support`);

      // Réinitialisation du formulaire
      contactForm.reset();
  });


 // Défilement fluide pour les liens de navigation
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Empêche le comportement par défaut (ancre directe)

        // Récupère l'identifiant cible à partir du href
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Ajuste le défilement pour tenir compte de l'en-tête fixe
            const headerHeight = document.querySelector('header').offsetHeight; // Hauteur de l'en-tête fixe
            const targetPosition = targetElement.offsetTop - headerHeight; // Soustrait la hauteur de l'en-tête à la position cible

            // Défilement fluide vers l'élément ciblé
            window.scrollTo({
                top: targetPosition, // Position ajustée pour l'élément
                behavior: 'smooth' // Animation fluide
            });
        }
    });
});


  // Menu burger (responsive)
  document.getElementById('menu-toggle').addEventListener('click', () => {
      const navbar = document.getElementById('navbar');
      navbar.classList.toggle('active');
  });


  // Mode sombre
  const toggleDarkMode = () => {
      document.body.classList.toggle('dark-mode');
  };

  document.getElementById('toggle-theme').addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDarkMode = document.body.classList.contains('dark-mode');
      document.getElementById('toggle-theme').textContent = isDarkMode ? '☀️' : '🌙';
  });


  // Accordéon interactif : section d'accordéon pouvant être ouverte ou fermée
  const accordionButtons = document.querySelectorAll('.accordion-button');
accordionButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        const content = document.getElementById(button.getAttribute('aria-controls'));

        // Ferme tous les autres accordéons
        document.querySelectorAll('.accordion-content').forEach((item) => {
            if (item !== content) item.hidden = true;
        });

        document.querySelectorAll('.accordion-button').forEach((btn) => {
            if (btn !== button) {
                btn.setAttribute('aria-expanded', 'false');
                btn.querySelector('.accordion-arrow').style.transform = 'rotate(0deg)'; // Réinitialiser la flèche des autres boutons
            }
        });

        // Bascule l'accordéon actuel
        button.setAttribute('aria-expanded', !isExpanded);
        content.hidden = isExpanded;

        // Bascule la flèche
        const arrow = button.querySelector('.accordion-arrow');
        if (isExpanded) {
            arrow.style.transform = 'rotate(0deg)'; // Flèche vers le bas
        } else {
            arrow.style.transform = 'rotate(180deg)'; // Flèche vers le haut
        }
    });
});

  // Clic sur les projets pour ouvrir un lien
  document.querySelectorAll('.project').forEach(project => {
      project.addEventListener('click', () => {
          const link = project.getAttribute('data-link');
          if (link) {
              window.open(link, '_blank'); // Ouvre dans un nouvel onglet
          }
      });
  });
});
