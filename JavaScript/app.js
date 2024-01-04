document.addEventListener('DOMContentLoaded', function () {
    
    function getFieldValue(id) {
        return document.getElementById(id).value.trim();
    }

    // Fonction pour ajouter un nouveau commentaire
    function addComment() {
        
        let firstName = getFieldValue('first-name');
        let lastName = getFieldValue('last-name');
        let message = getFieldValue('message');

        // Vérifier que tous les champs sont remplis
        if (!firstName || !lastName || !message) {
            // Afficher le message d'erreur si un champ est vide
            document.getElementById('error-message').style.display = 'block';
            return;
        }

        // Créer un nouvel élément de commentaire
        let commentList = document.getElementById('comment-list');
        let newComment = document.createElement('div');
        newComment.className = 'flex space-x-4 text-sm text-gray-500';
        newComment.innerHTML = `
            <div class="flex-1 py-10 border-t border-gray-200">
                <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
                <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                    <p>${message}</p>
                </div>
            </div>
        `;

        // Ajouter le nouveau commentaire à la liste
        commentList.appendChild(newComment);

        // Masquer le message d'erreur
        document.getElementById('error-message').style.display = 'none';

        // Effacer le contenu des champs du formulaire
        ['first-name', 'last-name', 'message'].forEach(id => {
            document.getElementById(id).value = '';
        });
    }

    // Ajouter un gestionnaire d'événement au formulaire pour intercepter la soumission
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Empêcher le rechargement de la page lors de la soumission du formulaire
        addComment(); // Appeler la fonction pour ajouter le commentaire
    });
});
