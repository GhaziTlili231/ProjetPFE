const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const { WebhookClient } = require('dialogflow-fulfillment');

const app = express();

app.use(bodyParser.json());
app.use(cors()); 

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'W7301@jqir#',
    database: 'pfe'
});

connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
        return;
    }
    console.log('Connecté à MySQL');
});

app.get('/', (req, res) => {
    res.send('Bonjour, le serveur est en cours d\'exécution');
});

app.get('/utilisateur', (req, res) => {
    connection.query('SELECT * FROM client', (error, results) => {
        if (error) {
            console.error('Erreur lors de la récupération des clients:', error);
            res.status(500).send('Erreur lors de la récupération des clients');
            return;
        }
        res.send(results);
    });
});

app.post('/utilisateur', (req, res) => {
    const utilisateur = req.body;
    connection.query('INSERT INTO client SET ?', utilisateur, (error, result) => {
        if (error) {
            console.error('Erreur lors de l\'insertion de l\'utilisateur:', error);
            res.status(500).send('Erreur lors de l\'insertion de l\'utilisateur');
            return;
        }
        console.log('Utilisateur inséré avec succès');
        res.send('Utilisateur inséré avec succès');
    });
});
app.delete('/utilisateur/:id', (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM client WHERE id = ?', id, (error, result) => {
        if (error) {
            console.error('Erreur lors de la suppression de l\'utilisateur:', error);
            res.status(500).send('Erreur lors de la suppression de l\'utilisateur');
            return;
        }
        console.log('Utilisateur supprimé avec succès');
        res.send('Utilisateur supprimé avec succès');
    });
});


app.get('/utilisateur/comptes-crees-aujourdhui', (req, res) => {
    connection.query('SELECT COUNT(*) AS comptesCreesAujourdhui FROM client WHERE DATE(date_creation) = CURDATE()', (error, results) => {
        if (error) {
            console.error('Erreur lors du calcul du nombre de comptes créés aujourd\'hui:', error);
            res.status(500).send('Erreur lors du calcul du nombre de comptes créés aujourd\'hui');
            return;
        }
        res.status(200).json({ comptesCreesAujourdhui: results[0].comptesCreesAujourdhui });
    });
});

app.get('/utilisateur/percentage-genre', (req, res) => {
    connection.query('SELECT COUNT(*) AS total, SUM(CASE WHEN genre = \'Masculin\' THEN 1 ELSE 0 END) AS hommes, SUM(CASE WHEN genre = \'Féminin\' THEN 1 ELSE 0 END) AS femmes FROM client', (error, results) => {
        if (error) {
            console.error('Erreur lors du calcul du pourcentage d\'hommes et de femmes:', error);
            res.status(500).send('Erreur lors du calcul du pourcentage d\'hommes et de femmes');
            return;
        }
        const total = results[0].total;
        const hommes = results[0].hommes;
        const femmes = results[0].femmes;
        const pourcentageHommes = (hommes / total) * 100;
        const pourcentageFemmes = (femmes / total) * 100;
        res.status(200).json({ hommes: hommes, femmes: femmes, pourcentageHommes: pourcentageHommes, pourcentageFemmes: pourcentageFemmes });
    });
});
app.get('/utilisateur/tranches-ages', (req, res) => {
    connection.query('SELECT ' +
        'SUM(CASE WHEN age BETWEEN 18 AND 25 THEN 1 ELSE 0 END) AS age_18_25, ' +
        'SUM(CASE WHEN age BETWEEN 26 AND 45 THEN 1 ELSE 0 END) AS age_26_45, ' +
        'SUM(CASE WHEN age BETWEEN 46 AND 60 THEN 1 ELSE 0 END) AS age_46_60, ' +
        'SUM(CASE WHEN age > 60 THEN 1 ELSE 0 END) AS age_over_60 ' +
        'FROM (SELECT YEAR(CURDATE()) - YEAR(date_de_naissance) - (RIGHT(CURDATE(), 5) < RIGHT(date_de_naissance, 5)) AS age FROM client) AS age_table',
        (error, results) => {
            if (error) {
                console.error('Erreur lors du calcul des tranches d\'âges:', error);
                res.status(500).send('Erreur lors du calcul des tranches d\'âges');
                return;
            }
            res.status(200).json(results[0]);
        });
});
app.put('/utilisateur/:id', (req, res) => {
    const id = req.params.id;
    const updatedClient = req.body;

    connection.query('UPDATE client SET ? WHERE id = ?', [updatedClient, id], (error, results) => {
        if (error) {
            console.error('Erreur lors de la mise à jour du client:', error);
            res.status(500).send('Une erreur s\'est produite lors de la mise à jour du client.');
        } else {
            console.log('Client mis à jour avec succès');
            res.status(200).send('Client mis à jour avec succès');
        }
    });
});



app.get('/admin', (req, res) => {
    connection.query('SELECT * FROM admin', (error, results) => {
        if (error) {
            console.error('Erreur lors de la récupération des admin:', error);
            res.status(500).send('Erreur lors de la récupération des admin');
            return;
        }
        res.send(results);
    });
});
app.get('/pieces', (req, res) => {
    const query = 'SELECT * FROM pieces'; // Requête SQL pour récupérer toutes les pièces
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération des données des pièces : ', err);
        res.status(500).json({ error: 'Erreur lors de la récupération des données des pièces' });
        return;
      }
      res.json(results); // Envoie les données des pièces au format JSON
    });
  });

  app.delete('/pieces/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM pieces WHERE id = ?';
    connection.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erreur lors de la suppression de la pièce : ', err);
        res.status(500).json({ error: 'Erreur lors de la suppression de la pièce' });
        return;
      }
      res.sendStatus(200);
    });
  });

  app.put('/pieces/:id', (req, res) => {
    const { nom, marque, modele, stock, prix } = req.body;
    const id = req.params.id;

    const query = 'UPDATE pieces SET nom = ?, marque = ?, modele = ?, stock = ?, prix = ? WHERE id = ?';
    connection.query(query, [nom, marque, modele, stock, prix, id], (err, results) => {
        if (err) {
            console.error('Erreur lors de la modification de la pièce : ', err);
            res.status(500).json({ error: 'Erreur lors de la modification de la pièce' });
            return;
        }
        res.json({ message: 'Pièce modifiée avec succès' });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
app.put('/clients/:id', (req, res) => {
    const { prenom, nom, adresse_mail, mot_de_passe, ville, adresse, zip, date_de_naissance, genre } = req.body;
    const id = req.params.id;

    const query = 'UPDATE client SET prenom = ?, nom = ?, adresse_mail = ?, mot_de_passe = ?, ville = ?, adresse = ?, zip = ?, date_de_naissance = ?, genre = ? WHERE id = ?';
    connection.query(query, [prenom, nom, adresse_mail, mot_de_passe, ville, adresse, zip, date_de_naissance, genre, id], (err, results) => {
        if (err) {
            console.error('Erreur lors de la modification du client : ', err);
            res.status(500).json({ error: 'Erreur lors de la modification du client' });
            return;
        }
        res.json({ message: 'Client modifié avec succès' });
    });
});

app.post('/pieces', (req, res) => {
    const newPiece = req.body;
    connection.query('INSERT INTO pieces (nom, marque, modele, stock, prix) VALUES (?, ?, ?, ?, ?)',
      [newPiece.nom, newPiece.marque, newPiece.modele, newPiece.stock, newPiece.prix],
      (error, results) => {
        if (error) {
          console.error('Erreur lors de l\'ajout à la base de données :', error);
          res.status(500).send('Erreur lors de l\'ajout à la base de données');
          return;
        }
        newPiece.id = results.insertId;
        res.status(201).json(newPiece);
      });
  });
  
  // Route pour mettre à jour une pièce existante
  app.put('/pieces/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedPiece = req.body;
    connection.query('UPDATE pieces SET nom = ?, marque = ?, modele = ?, stock = ?, prix = ? WHERE id = ?',
      [updatedPiece.nom, updatedPiece.marque, updatedPiece.modele, updatedPiece.stock, updatedPiece.prix, id],
      (error, results) => {
        if (error) {
          console.error('Erreur lors de la mise à jour dans la base de données :', error);
          res.status(500).send('Erreur lors de la mise à jour dans la base de données');
          return;
        }
        res.status(200).json(updatedPiece);
      });
  });
  app.put('/pieces/:id', (req, res) => {
    const id = req.params.id;
    const updatedPiece = req.body;
  
    // Mettez à jour la pièce dans votre base de données en utilisant l'ID et les données mises à jour
  
    res.send('Piece mise à jour avec succès');
  });
  

  
  app.delete('/pieces/:id', (req, res) => {
    const id = parseInt(req.params.id);
    connection.query('DELETE FROM pieces WHERE id = ?', [id], (error, results) => {
      if (error) {
        console.error('Erreur lors de la suppression dans la base de données :', error);
        res.status(500).send('Erreur lors de la suppression dans la base de données');
        return;
      }
      res.status(204).send();
    });
  });


  let clients = [];

app.post('/clients', (req, res) => {
    const newClient = req.body;
    connection.query('INSERT INTO client (prenom, nom, adresse_mail, ville, date_de_naissance, genre) VALUES (?, ?, ?, ?, ?, ?)',
      [newClient.prenom, newClient.nom, newClient.adresse_mail, newClient.ville, newClient.date_de_naissance, newClient.genre],
      (error, results) => {
        if (error) {
          console.error('Erreur lors de l\'ajout à la base de données :', error);
          res.status(500).send('Erreur lors de l\'ajout à la base de données');
          return;
        }
        newClient.id = results.insertId;
        res.status(201).json(newClient);
      });
  });
  
  app.put('/clients/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedClient = req.body;
    connection.query('UPDATE client SET prenom = ?, nom = ?, adresse_mail = ?, ville = ?, date_de_naissance = ?, genre = ? WHERE id = ?',
      [updatedClient.prenom, updatedClient.nom, updatedClient.adresse_mail, updatedClient.ville, updatedClient.date_de_naissance, updatedClient.genre, id],
      (error, results) => {
        if (error) {
          console.error('Erreur lors de la mise à jour dans la base de données :', error);
          res.status(500).send('Erreur lors de la mise à jour dans la base de données');
          return;
        }
        res.status(200).json(updatedClient);
      });
  });
  
  app.delete('/clients/:id', (req, res) => {
    const id = parseInt(req.params.id);
    connection.query('DELETE FROM client WHERE id = ?', [id], (error, results) => {
        if (error) {
            console.error('Erreur lors de la suppression dans la base de données :', error);
            return res.status(500).send('Erreur lors de la suppression dans la base de données');
        }
        if (results.affectedRows === 0) {
            console.warn('Aucun client avec cet ID n\'a été trouvé.');
            return res.status(404).send('Aucun client avec cet ID n\'a été trouvé.');
        }
        console.log('Client supprimé avec succès.');
        res.status(204).send();
    });
});



  app.post('/admin', (req, res) => {
    const { adresse_mail, mot_de_passe } = req.body;
    const sql = 'INSERT INTO admin (adresse_mail, mot_de_passe) VALUES (?, ?)';
    connection.query(sql, [adresse_mail, mot_de_passe], (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'ajout de l\'admin : ', err);
        res.status(500).send('Erreur lors de l\'ajout de l\'admin');
        return;
      }
      res.send('Admin ajouté avec succès');
    });
  });
  
  // Modifier un admin
  // Modifier un admin
app.put('/admin/:id', (req, res) => {
  const { id } = req.params;
  const { adresse_mail, mot_de_passe } = req.body;
  const sql = 'UPDATE admin SET adresse_mail = ?, mot_de_passe = ? WHERE id = ?';
  connection.query(sql, [adresse_mail, mot_de_passe, id], (err, result) => {
    if (err) {
      console.error('Erreur lors de la modification de l\'admin : ', err);
      res.status(500).send('Erreur lors de la modification de l\'admin');
      return;
    }
    res.json({ message: 'Admin modifié avec succès' }); // Envoyer une réponse JSON
  });
});

  
app.delete('/admin/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM admin WHERE id = ?';
  connection.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Erreur lors de la suppression de l\'admin : ', err);
      res.status(500).send('Erreur lors de la suppression de l\'admin');
      return;
    }
    res.send('Admin supprimé avec succès');
  });
});
  
// Définir une route POST pour la vérification des identifiants

app.post('/admin/verifier', (req, res) => {
  const { adresse_mail, mot_de_passe } = req.body;

  // Requête SQL pour vérifier les identifiants dans la table admin
  const sql = 'SELECT * FROM admin WHERE adresse_mail = ? AND mot_de_passe = ?';
  connection.query(sql, [adresse_mail, mot_de_passe], (error, results) => {
    if (error) {
      console.error('Erreur lors de la vérification des identifiants : ', error);
      res.status(500).json({ success: false, message: 'Erreur lors de la vérification des identifiants' });
      return;
    }

    if (results.length > 0) {
      // Les identifiants sont valides
      res.status(200).json({ success: true, message: 'Identifiants valides' });
    } else {
      // Les identifiants ne sont pas valides
      res.status(401).json({ success: false, message: 'Adresse e-mail ou mot de passe incorrect' });
    }
  });
});
  
app.post('/utilisateur/login', (req, res) => {
  const { email, motDePasse } = req.body;

  // Requête SQL pour vérifier les identifiants dans la table client
  const sql = 'SELECT * FROM client WHERE adresse_mail = ? AND mot_de_passe = ?';
  connection.query(sql, [email, motDePasse], (error, results) => {
    if (error) {
      console.error('Erreur lors de la vérification des identifiants : ', error);
      res.status(500).json({ success: false, message: 'Erreur lors de la vérification des identifiants' });
      return;
    }

    if (results.length > 0) {
      // Les identifiants sont valides
      // Ajouter l'adresse e-mail et le mot de passe à la table session
      const insertSql = 'INSERT INTO session (adresse_mail, mot_de_passe) VALUES (?, ?)';
      connection.query(insertSql, [email, motDePasse], (insertError, insertResults) => {
        if (insertError) {
          console.error('Erreur lors de l\'ajout à la table session : ', insertError);
          res.status(500).json({ success: false, message: 'Erreur lors de l\'ajout à la table session' });
          return;
        }

        console.log('Adresse e-mail et mot de passe ajoutés à la table session');
        res.status(200).json({ success: true, message: 'Identifiants valides' });
      });
    } else {
      // Les identifiants ne sont pas valides
      res.status(401).json({ success: false, message: 'Adresse e-mail ou mot de passe incorrect' });
    }
  });
});




// Route pour mettre à jour le profil du client
app.put('/profil', (req, res) => {
  const { id, prenom, nom, adresse, mot_de_passe, ville, adresse_mail, date_de_naissance } = req.body;

  console.log('Mise à jour du profil du client avec les données suivantes : ', { id, prenom, nom, adresse, mot_de_passe, ville, adresse_mail, date_de_naissance });

  const sql = 'UPDATE client SET prenom = ?, nom = ?, adresse = ?, mot_de_passe = ?, ville = ?, adresse_mail = ?, date_de_naissance = ? WHERE id = ?';
  connection.query(sql, [prenom, nom, adresse, mot_de_passe, ville, adresse_mail, date_de_naissance, id], (error, results) => {
    if (error) {
      console.error('Erreur lors de la mise à jour du profil du client : ', error);
      res.status(500).json({ success: false, message: 'Erreur lors de la mise à jour du profil du client' });
      return;
    }

    console.log('Profil du client mis à jour avec succès');
    res.status(200).json({ success: true, message: 'Profil du client mis à jour avec succès' });
  });
});




// Route pour récupérer les informations du client
app.get('/profil', (req, res) => {
  // Requête SQL pour récupérer les informations du client à partir de la session
  const sql = 'SELECT * FROM session ORDER BY id DESC LIMIT 1';
  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération du dernier enregistrement de la table session : ', error);
      res.status(500).json({ success: false, message: 'Erreur lors de la récupération du dernier enregistrement de la table session' });
      return;
    }

    if (results.length > 0) {
      const { adresse_mail, mot_de_passe } = results[0];

      // Requête SQL pour récupérer les informations du client à partir de son adresse e-mail et de son mot de passe
      const sqlClient = 'SELECT * FROM client WHERE adresse_mail = ? AND mot_de_passe = ?';
      connection.query(sqlClient, [adresse_mail, mot_de_passe], (err, clientResults) => {
        if (err) {
          console.error('Erreur lors de la récupération des données du client : ', err);
          res.status(500).json({ success: false, message: 'Erreur lors de la récupération des données du client' });
          return;
        }

        // Envoyer les informations du client au frontend
        res.status(200).json({ success: true, message: 'Informations du client récupérées avec succès', client: clientResults[0] });
      });
    } else {
      res.status(401).json({ success: false, message: 'Aucun enregistrement trouvé dans la table session' });
    }
  });
});



/// Route pour ajouter un produit au panier
app.put('/add-to-cart', (req, res) => {
  // Vérifier si les champs requis sont manquants dans le corps de la requête
  if (!req.body || !req.body.name || !req.body.marque || !req.body.stock || !req.body.prix || !req.body.image) {
    res.status(400).send('Champs requis manquants dans le corps de la requête');
    return;
  }

  // Requête SQL pour récupérer les informations de la session
  const sqlSession = 'SELECT adresse_mail, mot_de_passe FROM session ORDER BY id DESC LIMIT 1';
  connection.query(sqlSession, (err, sessionResult) => {
    if (err) {
      console.error('Erreur lors de la récupération des informations de session : ', err);
      res.status(500).send('Erreur lors de la récupération des informations de session');
      return;
    }

    const { adresse_mail, mot_de_passe } = sessionResult[0];
    const { name, marque, stock, prix, image } = req.body;

    // Requête SQL pour insérer les détails du produit dans la table panier
    const sqlInsert = 'INSERT INTO panier (adresse_mail, mot_de_passe, marque, piece, nombre, prix, image) VALUES (?, ?, ?, ?, ?, ?, ?)';
    connection.query(sqlInsert, [adresse_mail, mot_de_passe, marque, name, stock, prix, image], (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'ajout du produit au panier : ', err);
        res.status(500).send('Erreur lors de l\'ajout du produit au panier');
        return;
      }
      console.log('Ajouté au panier');
      res.status(200).json({ message: 'Ajouté au panier' });

    });
  });
});

// Supprimer un élément du panier par son ID
app.delete('/panier/:id', (req, res) => {
  const id = req.params.id;
  
  // Requête SQL pour supprimer l'élément du panier
  const sqlDelete = 'DELETE FROM panier WHERE id = ?';
  connection.query(sqlDelete, [id], (err, result) => {
    if (err) {
      console.error('Erreur lors de la suppression de l\'élément du panier : ', err);
      res.status(500).send('Erreur lors de la suppression de l\'élément du panier');
      return;
    }
    console.log('Élément du panier supprimé');
    res.status(200).json({ message: 'Élément du panier supprimé' });
  });
});




app.get('/panier', (req, res) => {
  // Requête SQL pour récupérer les informations du dernier enregistrement de la table session
  const sqlSession = 'SELECT adresse_mail, mot_de_passe FROM session ORDER BY id DESC LIMIT 1';
  connection.query(sqlSession, (err, sessionResult) => {
    if (err) {
      console.error('Erreur lors de la récupération des informations de session : ', err);
      res.status(500).send('Erreur lors de la récupération des informations de session');
      return;
    }

    const { adresse_mail, mot_de_passe } = sessionResult[0];

    // Requête SQL pour récupérer les éléments de la table panier correspondant à l'adresse e-mail et au mot de passe
    const sqlPanier = 'SELECT * FROM panier WHERE adresse_mail = ? AND mot_de_passe = ?';
    connection.query(sqlPanier, [adresse_mail, mot_de_passe], (err, panierResult) => {
      if (err) {
        console.error('Erreur lors de la récupération du panier : ', err);
        res.status(500).send('Erreur lors de la récupération du panier');
        return;
      }
      const panier = [
        { nom: 'Produit 1', marque: 'Marque 1', nombre: 2, prix: 10, piece:'piece1',iamge:'image1' },
        { nom: 'Produit 2', marque: 'Marque 2', nombre: 1, prix: 20, piece:'piece2',iamge:'image2' },
        { nom: 'Produit 3', marque: 'Marque 3', nombre: 3, prix: 30, piece:'piece3',iamge:'image3' }
      ];
    
      // Envoyer les éléments du panier au frontend
      res.status(200).json(panierResult);
    });
  });
});

app.get('/achat', (req, res) => {
  // Requête SQL pour récupérer les informations du dernier enregistrement de la table session
  const sqlSession = 'SELECT adresse_mail, mot_de_passe FROM session ORDER BY id DESC LIMIT 1';
  connection.query(sqlSession, (err, sessionResult) => {
    if (err) {
      console.error('Erreur lors de la récupération des informations de session : ', err);
      res.status(500).send('Erreur lors de la récupération des informations de session');
      return;
    }

    const { adresse_mail, mot_de_passe } = sessionResult[0];

    // Requête SQL pour récupérer les éléments de la table achat correspondant à l'adresse e-mail et au mot de passe
    const sqlAchat = 'SELECT * FROM achat WHERE adresse_mail = ? AND mot_de_passe = ?';
    connection.query(sqlAchat, [adresse_mail, mot_de_passe], (err, achatResult) => {
      if (err) {
        console.error('Erreur lors de la récupération du panier : ', err);
        res.status(500).send('Erreur lors de la récupération du panier');
        return;
      }
    
      // Envoyer les éléments du panier au frontend
      res.status(200).json(achatResult);
    });
  });
});






// Endpoint pour traiter le formulaire
// Endpoint pour traiter le formulaire
// Endpoint pour traiter le formulaire
// Endpoint pour traiter le formulaire
app.post('/passer-commande', (req, res) => {
  const { adresse_mail, mot_de_passe, ville, adresse, telephone, paiement } = req.body;

  // Vérification de l'email et du mot de passe dans la table 'session'
  connection.query('SELECT * FROM session ORDER BY id DESC LIMIT 1', (error, results, fields) => {
    if (error) throw error;

    if (results.length > 0 && results[0].adresse_mail === adresse_mail && results[0].mot_de_passe === mot_de_passe) {
      // Récupération des données de la table 'panier'
      connection.query('SELECT * FROM panier', (error, results, fields) => {
        if (error) throw error;

        // Insertion des données de la table 'panier' et du formulaire dans la table 'achat'
        const items = results.map(item => [item.adresse_mail, item.mot_de_passe, item.marque, item.nombre, item.prix, item.piece, item.image, ville, adresse, telephone, paiement || 'à domicile']);

        // Ajouter adresse_mail et mot_de_passe avant marque dans la liste des colonnes
        connection.query('INSERT INTO achat (adresse_mail, mot_de_passe, marque, nombre, prix, piece, image, ville, adresse, telephone, paiement) VALUES ?', [items], (error, results, fields) => {
          if (error) throw error;

          // Supprimer les données de la table 'panier' si l'adresse_mail, le mot_de_passe et la marque sont trouvés dans 'achat'
          connection.query('DELETE panier FROM panier INNER JOIN achat ON panier.adresse_mail = achat.adresse_mail AND panier.mot_de_passe = achat.mot_de_passe AND panier.marque = achat.marque', (error, results, fields) => {
            if (error) throw error;
            res.json({ message: 'Commande passée avec succès !' });
          });
        });
      });
    } else {
      res.status(403).send('Email ou mot de passe incorrect.');
    }
  });
});






app.post('/api/client', (req, res) => {
  const { prenom, nom, adresse_mail, mot_de_passe, ville, adresse, zip, genre, date_de_naissance } = req.body;
  const sql = 'INSERT INTO client (prenom, nom, adresse_mail, mot_de_passe, ville, adresse, zip, genre, date_de_naissance) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  connection.query(sql, [prenom, nom, adresse_mail, mot_de_passe, ville, adresse, zip, genre, date_de_naissance], (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'insertion des données dans la table client : ', err);
      res.status(500).send('Erreur lors de l\'insertion des données dans la table client');
      return;
    }
    res.status(200).send('Utilisateur inséré avec succès');
  });
});

app.post('/utilisateur/register', (req, res) => {
  const { prenom, nom, adresse_mail, mot_de_passe, ville, adresse, zip, motDePasse, genre, date_de_naissance } = req.body;
  const sql = 'INSERT INTO client (prenom, nom, adresse_mail, mot_de_passe, ville, adresse, zip, motDePasse, genre, date_de_naissance) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  connection.query(sql, [prenom, nom, adresse_mail, mot_de_passe, ville, adresse, zip, motDePasse, genre, date_de_naissance], (err, result) => {
      if (err) {
          console.error('Erreur lors de l\'enregistrement du client :', err);
          res.status(500).json({ error: 'Erreur lors de l\'enregistrement du client' });
          return;
      }
      console.log('Client enregistré avec succès');
      res.status(200).json({ message: 'Client enregistré avec succès' });
  });
});


app.get('/sommesPrix', (req, res) => {
  const today = new Date().toISOString().split('T')[0]; // Obtenir la date actuelle au format 'YYYY-MM-DD'

  const sql = `SELECT 
                 SUM(CASE WHEN DATE(date_achat) = '${today}' THEN prix * nombre ELSE 0 END) AS somme_aujourd_hui,
                 SUM(CASE WHEN DATE(date_achat) < '${today}' THEN prix * nombre ELSE 0 END) AS somme_moins
               FROM achat`;

  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error executing query: ' + err.stack);
      res.status(500).send('Error executing query');
      return;
    }

    const data = {
      somme_aujourd_hui: results[0].somme_aujourd_hui,
      somme_moins: results[0].somme_moins
    };

    res.json(data);
  });
});








// Route pour supprimer une ligne de la table 'achat'
app.delete('/achat/:id', (req, res) => {
  const sql = 'DELETE FROM achat WHERE id = ?';
  connection.query(sql, [req.params.id], (error, results, fields) => {
    if (error) {
      console.error('Erreur lors de l\'exécution de la requête : ' + error.stack);
      return res.status(500).send('Erreur lors de la suppression de la ligne.');
    }
    res.send('La ligne a été supprimée avec succès.');
  });
});

// Route pour mettre à jour une ligne de la table 'achat'
app.put('/achat/:id', (req, res) => {
  const sql = 'UPDATE achat SET adresse_mail = ?, mot_de_passe = ?, marque = ?, nombre = ?, prix = ?, piece = ?, image = ?, ville = ?, adresse = ?, telephone = ?, date_achat = ? WHERE id = ?';
  const { adresse_mail, mot_de_passe, marque, nombre, prix, piece, image, ville, adresse, telephone, date_achat } = req.body;
  connection.query(sql, [adresse_mail, mot_de_passe, marque, nombre, prix, piece, image, ville, adresse, telephone, date_achat, req.params.id], (error, results, fields) => {
    if (error) {
      console.error('Erreur lors de l\'exécution de la requête : ' + error.stack);
      return res.status(500).send('Erreur lors de la mise à jour de la ligne.');
    }
    res.json({ message: 'La ligne a été mise à jour avec succès.' });

  });
});

// Route pour ajouter une ligne à la table 'achat'
app.post('/achat', (req, res) => {
  const sql = 'INSERT INTO achat (adresse_mail, mot_de_passe, marque, nombre, prix, piece, image, ville, adresse, telephone, date_achat) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const { adresse_mail, mot_de_passe, marque, nombre, prix, piece, image, ville, adresse, telephone, date_achat } = req.body;
  connection.query(sql, [adresse_mail, mot_de_passe, marque, nombre, prix, piece, image, ville, adresse, telephone, date_achat], (error, results, fields) => {
    if (error) {
      console.error('Erreur lors de l\'exécution de la requête : ' + error.stack);
      return res.status(500).send('Erreur lors de l\'ajout de la ligne.');
    }
    res.json('La ligne a été ajoutée avec succès.');
  });
});


  