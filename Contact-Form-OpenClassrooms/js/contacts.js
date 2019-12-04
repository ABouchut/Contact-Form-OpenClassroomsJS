                            /* Programme Gestionnaire de Contacts - Test final OpenClassroom */

console.log("Bienvenue dans le gestionnaire de contacts! \nVoici vos options : \n1 : Liste de contacts \n2 : Ajouter un contact \n0 : Quitter");
var saisie = prompt("Choisissez une option");
var choix = Number(saisie);

// Ces deux variables sont celles qui contiennent les noms imposés dans l'exercice.

var contact1 = {
    prenom : "Carole" ,
    nom : "Lévisse" ,
}

var contact2 = {
    prenom : "Mélodie" ,
    nom : "Nelsonne" ,
    
}

// Cette variable est le tableau qui contient tous les noms et prénoms.

var contacts = [contact1, contact2];

// Cette fonction permet de décrire chacun des objets que contient un tableau.

function decrire(personne) {
    return console.log(`Nom : ${personne.nom} \nPrenom : ${personne.prenom}`)
};

// Cette fonction est celle qui permet à l'utilisateur d'afficher les contacts existants.

function AfficherContacts(tableaux) {

    console.log("Voici la liste de tous vos contacts : ");
    for (const tableau of tableaux) {
        decrire(tableau);
    };
};

// Cette fonction est celle qui permet à l'utilisateur d'ajouter un contact.

function AjouterContact(tableaux) {

    const contact = {
        prenom : prompt("Entrez le prénom du nouveau contact"),
        nom : prompt("Entrez le nom du nouveau contact"),
    }

tableaux.push(contact);
console.log("Le contact a bien été ajouté");
};

// Et le programme final qui va executer les différentes fonctions sur demande de l'utilisateur.

while (choix !== 0) {


    if (choix === 1) {

        AfficherContacts(contacts);
        var saisie = prompt("Choisissez une option");
        var choix = Number(saisie);

    }   else if (choix === 2) {

        AjouterContact(contacts);
        var saisie = prompt("Choisissez une option");
        var choix = Number(saisie);

    }    else  {

        console.log("Entrée incorrecte. Veuillez réessayer");
        var saisie = prompt("Choisissez une option");
        var choix = Number(saisie); 
    }  ;

};

if (choix === 0) {
    console.log("Au revoir");
};