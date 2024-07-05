Pour élaborer un cahier de tests pour votre projet "Gastronet", nous allons décrire les différentes fonctionnalités de l'application et les tests associés pour s'assurer que chaque fonctionnalité fonctionne comme prévu. Voici une proposition de cahier de tests structuré pour votre application.

### 1. Introduction

**Objectif :**  
Ce cahier de tests a pour but de définir et de documenter les tests nécessaires pour valider les fonctionnalités de l'application "Gastronet", un annuaire d'entreprises avec des sections dédiées aux salariés et aux administrateurs.

### 2. Description des Fonctionnalités

#### Partie Salarié

1. **Consultation des Employés :**
   - Affichage de la liste des employés.
   - Détails de chaque employé.

2. **Modification du Profil Personnel :**
   - Mise à jour des informations personnelles (nom, prénom, adresse, etc.).
   - Modification des informations de contact.
   - Changement de mot de passe.

#### Partie Administrateur

1. **Gestion des Sites :**
   - Création de nouveaux sites.
   - Consultation des sites existants.
   - Modification des informations des sites.
   - Suppression des sites.

2. **Gestion des Services :**
   - Création de nouveaux services.
   - Consultation des services existants.
   - Modification des informations des services.
   - Suppression des services.

3. **Gestion des Employés :**
   - Ajout de nouveaux employés.
   - Consultation des informations des employés.
   - Modification des informations des employés.
   - Suppression des employés.

### 3. Cahier de Tests

#### Partie Salarié

##### 3.1. Consultation des Employés

**Test 3.1.1 : Affichage de la Liste des Employés**
- **Objectif :** Vérifier que la liste des employés est correctement affichée.
- **Étapes :**
  1. Accéder à la section des employés.
  2. Vérifier que la liste des employés est chargée.
- **Résultat Attendu :** La liste des employés s'affiche correctement avec tous les champs requis (nom, prénom, service, site, etc.).

**Test 3.1.2 : Détails d'un Employé**
- **Objectif :** Vérifier que les détails de chaque employé sont affichés correctement.
- **Étapes :**
  1. Cliquer sur un employé dans la liste.
  2. Vérifier que les informations détaillées de l'employé sont affichées.
- **Résultat Attendu :** Les détails de l'employé s'affichent correctement avec toutes les informations disponibles.

##### 3.2. Modification du Profil Personnel

**Test 3.2.1 : Mise à Jour des Informations Personnelles**
- **Objectif :** Vérifier que les informations personnelles peuvent être mises à jour.
- **Étapes :**
  1. Accéder à la section de modification du profil.
  2. Modifier les informations personnelles.
  3. Sauvegarder les modifications.
  4. Vérifier que les modifications sont prises en compte.
- **Résultat Attendu :** Les informations personnelles sont mises à jour avec succès.

**Test 3.2.2 : Modification des Informations de Contact**
- **Objectif :** Vérifier que les informations de contact peuvent être mises à jour.
- **Étapes :**
  1. Accéder à la section de modification des informations de contact.
  2. Modifier les informations de contact.
  3. Sauvegarder les modifications.
  4. Vérifier que les modifications sont prises en compte.
- **Résultat Attendu :** Les informations de contact sont mises à jour avec succès.

**Test 3.2.3 : Changement de Mot de Passe**
- **Objectif :** Vérifier que le mot de passe peut être changé.
- **Étapes :**
  1. Accéder à la section de changement de mot de passe.
  2. Entrer l'ancien mot de passe et le nouveau mot de passe.
  3. Sauvegarder les modifications.
  4. Vérifier que le mot de passe a été changé.
- **Résultat Attendu :** Le mot de passe est changé avec succès et l'utilisateur peut se reconnecter avec le nouveau mot de passe.

#### Partie Administrateur

##### 3.3. Gestion des Sites

**Test 3.3.1 : Création d'un Nouveau Site**
- **Objectif :** Vérifier que de nouveaux sites peuvent être créés.
- **Étapes :**
  1. Accéder à la section de gestion des sites.
  2. Cliquer sur "Ajouter un site".
  3. Remplir les informations du site.
  4. Sauvegarder les modifications.
  5. Vérifier que le nouveau site est ajouté à la liste.
- **Résultat Attendu :** Le nouveau site est créé et apparaît dans la liste des sites.

**Test 3.3.2 : Consultation des Sites Existants**
- **Objectif :** Vérifier que les sites existants peuvent être consultés.
- **Étapes :**
  1. Accéder à la section de gestion des sites.
  2. Vérifier que la liste des sites est chargée correctement.
- **Résultat Attendu :** La liste des sites s'affiche avec toutes les informations nécessaires.

**Test 3.3.3 : Modification d'un Site**
- **Objectif :** Vérifier que les informations d'un site peuvent être modifiées.
- **Étapes :**
  1. Accéder à la section de gestion des sites.
  2. Sélectionner un site à modifier.
  3. Modifier les informations du site.
  4. Sauvegarder les modifications.
  5. Vérifier que les modifications sont prises en compte.
- **Résultat Attendu :** Les informations du site sont modifiées avec succès.

**Test 3.3.4 : Suppression d'un Site**
- **Objectif :** Vérifier que les sites peuvent être supprimés.
- **Étapes :**
  1. Accéder à la section de gestion des sites.
  2. Sélectionner un site à supprimer.
  3. Confirmer la suppression.
  4. Vérifier que le site est supprimé de la liste.
- **Résultat Attendu :** Le site est supprimé avec succès.

##### 3.4. Gestion des Services

**Test 3.4.1 : Création d'un Nouveau Service**
- **Objectif :** Vérifier que de nouveaux services peuvent être créés.
- **Étapes :**
  1. Accéder à la section de gestion des services.
  2. Cliquer sur "Ajouter un service".
  3. Remplir les informations du service.
  4. Sauvegarder les modifications.
  5. Vérifier que le nouveau service est ajouté à la liste.
- **Résultat Attendu :** Le nouveau service est créé et apparaît dans la liste des services.

**Test 3.4.2 : Consultation des Services Existants**
- **Objectif :** Vérifier que les services existants peuvent être consultés.
- **Étapes :**
  1. Accéder à la section de gestion des services.
  2. Vérifier que la liste des services est chargée correctement.
- **Résultat Attendu :** La liste des services s'affiche avec toutes les informations nécessaires.

**Test 3.4.3 : Modification d'un Service**
- **Objectif :** Vérifier que les informations d'un service peuvent être modifiées.
- **Étapes :**
  1. Accéder à la section de gestion des services.
  2. Sélectionner un service à modifier.
  3. Modifier les informations du service.
  4. Sauvegarder les modifications.
  5. Vérifier que les modifications sont prises en compte.
- **Résultat Attendu :** Les informations du service sont modifiées avec succès.

**Test 3.4.4 : Suppression d'un Service**
- **Objectif :** Vérifier que les services peuvent être supprimés.
- **Étapes :**
  1. Accéder à la section de gestion des services.
  2. Sélectionner un service à supprimer.
  3. Confirmer la suppression.
  4. Vérifier que le service est supprimé de la liste.
- **Résultat Attendu :** Le service est supprimé avec succès.

##### 3.5. Gestion des Employés

**Test 3.5.1 : Ajout d'un Nouvel Employé**
- **Objectif :** Vérifier que de nouveaux employés peuvent être ajoutés.
- **Étapes :**
  1. Accéder à la section de gestion des employés.
  2. Cliquer sur "Ajouter un employé".
  3. Remplir les informations de l'employé.
  4. Sauvegarder les modifications.
  5. Vérifier que le nouvel employé est ajouté à la liste.
- **Résultat Attendu :** Le nouvel employé est créé et apparaît dans la liste des employés.

**Test 3.5.2 : Consultation des Employés Existants**
- **Objectif :** Vérifier que les employés existants peuvent être consultés.
- **Étapes :**
  1. Accéder à la section de gestion des employés.
  2. Vérifier que la liste des employés est chargée correctement.
- **Résultat Attendu :** La liste des employés s'affiche avec toutes les informations nécessaires.

**Test 3.5.3 :

 Modification d'un Employé**
- **Objectif :** Vérifier que les informations d'un employé peuvent être modifiées.
- **Étapes :**
  1. Accéder à la section de gestion des employés.
  2. Sélectionner un employé à modifier.
  3. Modifier les informations de l'employé.
  4. Sauvegarder les modifications.
  5. Vérifier que les modifications sont prises en compte.
- **Résultat Attendu :** Les informations de l'employé sont modifiées avec succès.

**Test 3.5.4 : Suppression d'un Employé**
- **Objectif :** Vérifier que les employés peuvent être supprimés.
- **Étapes :**
  1. Accéder à la section de gestion des employés.
  2. Sélectionner un employé à supprimer.
  3. Confirmer la suppression.
  4. Vérifier que l'employé est supprimé de la liste.
- **Résultat Attendu :** L'employé est supprimé avec succès.

### 4. Conclusion

Ce cahier de tests couvre les principales fonctionnalités de l'application "Gastronet" en s'assurant que chaque aspect du côté salarié et administrateur fonctionne correctement. Chaque test doit être exécuté avec soin pour garantir la qualité et la fiabilité de l'application avant son déploiement.
