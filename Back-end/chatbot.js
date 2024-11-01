const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const models = {
    'golf1': {
        'fa': { 'available': true, 'price': 25 },
        'fh': { 'available': true, 'price': 25 },
        'pf': { 'available': true, 'price': 100 },
        'bougie': { 'available': true, 'price': 25 },
        'batterie': { 'available': true, 'price': 110 },
        'pneu': { 'available': true, 'price': 150 }
        },
    'golf2': {
        'fa': { 'available': true, 'price': 25 },
        'fh': { 'available': true, 'price': 25 },
        'pf': { 'available': true, 'price': 100 },
        'bougie': { 'available': true, 'price': 25 },
        'batterie': { 'available': true, 'price': 110 },
        'pneu': { 'available': true, 'price': 150 }
    },
    'golf3': {
        'fa': { 'available': true, 'price': 25 },
        'fh': { 'available': true, 'price': 25 },
        'pf': { 'available': true, 'price': 120 },
        'bougie': { 'available': true, 'price': 25 },
        'batterie': { 'available': true, 'price': 120 },
        'pneu': { 'available': true, 'price': 150 }
    },
    'golf4': {
        'fa': { 'available': true, 'price': 25 },
        'fh': { 'available': true, 'price': 25 },
        'pf': { 'available': true, 'price': 120 },
        'bougie': { 'available': true, 'price': 25 },
        'batterie': { 'available': true, 'price': 120 },
        'pneu': { 'available': true, 'price': 150 }
    },
    'golf5': {
        'fa': { 'available': true, 'price': 25 },
        'fh': { 'available': true, 'price': 25 },
        'pf': { 'available': true, 'price': 120 },
        'bougie': { 'available': true, 'price': 25 },
        'batterie': { 'available': true, 'price': 120 },
        'pneu': { 'available': true, 'price': 150 }
    },
    'golf6': {
        'fa': { 'available': true, 'price': 40 },
        'fh': { 'available': true, 'price': 45 },
        'pf': { 'available': true, 'price': 230 },
        'bougie': { 'available': true, 'price': 25 },
        'batterie': { 'available': true, 'price': 150 },
        'pneu': { 'available': true, 'price': 200 }
    },
    'golf7': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'golf8': {
        'fa': { 'available': true, 'price': 45 },
        'fh': { 'available': true, 'price': 40 },
        'pf': { 'available': true, 'price': 350 },
        'bougie': { 'available': true, 'price': 35 },
        'batterie': { 'available': true, 'price': 250 },
        'pneu': { 'available': true, 'price': 300 }
    },
    'amarok': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'tiguan': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'touareg': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'passat': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'jeta': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'x1': {
        'fa': { 'available': true, 'price': 50 },
        'fh': { 'available': true, 'price': 50 },
        'pf': { 'available': true, 'price': 170 },
        'bougie': { 'available': true, 'price': 40 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 200 }
    },
    'x2': {
        'fa': { 'available': true, 'price': 50 },
        'fh': { 'available': true, 'price': 60 },
        'pf': { 'available': true, 'price': 170 },
        'bougie': { 'available': true, 'price': 60 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 180 }
    },
    'x3': {
        'fa': { 'available': true, 'price': 45 },
        'fh': { 'available': true, 'price': 50 },
        'pf': { 'available': true, 'price': 200 },
        'bougie': { 'available': true, 'price': 70 },
        'batterie': { 'available': true, 'price': 210 },
        'pneu': { 'available': true, 'price': 200 }
    },
    'x4': {
        'fa': { 'available': true, 'price': 60 },
        'fh': { 'available': true, 'price': 60 },
        'pf': { 'available': true, 'price': 210 },
        'bougie': { 'available': true, 'price': 70 },
        'batterie': { 'available': true, 'price': 230 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'x5': {
        'fa': { 'available': true, 'price': 70 },
        'fh': { 'available': true, 'price': 70 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 70 },
        'batterie': { 'available': true, 'price': 270 },
        'pneu': { 'available': true, 'price': 300 }
    },
    'serie6': {
        'fa': { 'available': true, 'price': 70 },
        'fh': { 'available': true, 'price': 80 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 75 },
        'batterie': { 'available': true, 'price': 250 },
        'pneu': { 'available': true, 'price': 350 }
    },
    'classe-g': {
        'fa': { 'available': true, 'price': 75 },
        'fh': { 'available': true, 'price': 80 },
        'pf': { 'available': true, 'price': 350 },
        'bougie': { 'available': true, 'price': 60 },
        'batterie': { 'available': true, 'price': 300 },
        'pneu': { 'available': true, 'price': 450 }
    },
    'classe-s': {
        'fa': { 'available': true, 'price': 75 },
        'fh': { 'available': true, 'price': 80 },
        'pf': { 'available': true, 'price': 350 },
        'bougie': { 'available': true, 'price': 60 },
        'batterie': { 'available': true, 'price': 300 },
        'pneu': { 'available': true, 'price': 450 }
    },
    'classe-a': {
        'fa': { 'available': true, 'price': 75 },
        'fh': { 'available': true, 'price': 80 },
        'pf': { 'available': true, 'price': 350 },
        'bougie': { 'available': true, 'price': 60 },
        'batterie': { 'available': true, 'price': 300 },
        'pneu': { 'available': true, 'price': 450 }
    },
    'gla': {
        'fa': { 'available': true, 'price': 75 },
        'fh': { 'available': true, 'price': 80 },
        'pf': { 'available': true, 'price': 350 },
        'bougie': { 'available': true, 'price': 60 },
        'batterie': { 'available': true, 'price': 300 },
        'pneu': { 'available': true, 'price': 450 }
    },
    'glc': {
        'fa': { 'available': true, 'price': 75 },
        'fh': { 'available': true, 'price': 80 },
        'pf': { 'available': true, 'price': 350 },
        'bougie': { 'available': true, 'price': 60 },
        'batterie': { 'available': true, 'price': 300 },
        'pneu': { 'available': true, 'price': 450 }
    },
    'ibiza': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'leon': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'arona': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'ateca': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'fabia': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'kodiaq': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'kushaq': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'superb': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'symbole': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'clio-dynamique': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'clio3': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'clio-campus': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'megane': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    '206': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    '308': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    '408': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    '3008': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'tipo': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'panda': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    '500': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'punto': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'fiorino': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'rio': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'sportage': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'xceed': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'sorento': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'rav4': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'chr': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'hilux': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'yaris': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'aygo': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'a3': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'a4': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'a6': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'q5': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'c3': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'c5': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'celysee': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'berlingo': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'i10': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'i20': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'city': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'crv': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'korando': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'rexton': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'musso': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'trivoli': {
        'fa': { 'available': true, 'price': 30 },
        'fh': { 'available': true, 'price': 35 },
        'pf': { 'available': true, 'price': 250 },
        'bougie': { 'available': true, 'price': 45 },
        'batterie': { 'available': true, 'price': 200 },
        'pneu': { 'available': true, 'price': 250 }
    },
    'tmax': {
        'fa': { 'available': true, 'price': 50 },
        'fh': { 'available': true, 'price': 50 },
        'pf': { 'available': true, 'price': 150 },
        'bougie': { 'available': true, 'price': 50 },
        'batterie': { 'available': true, 'price': 100 },
        'pneu': { 'available': true, 'price': 150 }
    },
    'mt03': {
        'fa': { 'available': true, 'price': 50 },
        'fh': { 'available': true, 'price': 50 },
        'pf': { 'available': true, 'price': 150 },
        'bougie': { 'available': true, 'price': 50 },
        'batterie': { 'available': true, 'price': 100 },
        'pneu': { 'available': true, 'price': 150 }
    },
    'z1000': {
        'fa': { 'available': true, 'price': 50 },
        'fh': { 'available': true, 'price': 50 },
        'pf': { 'available': true, 'price': 150 },
        'bougie': { 'available': true, 'price': 50 },
        'batterie': { 'available': true, 'price': 100 },
        'pneu': { 'available': true, 'price': 150 }
    },
    'z750': {
        'fa': { 'available': true, 'price': 50 },
        'fh': { 'available': true, 'price': 50 },
        'pf': { 'available': true, 'price': 150 },
        'bougie': { 'available': true, 'price': 50 },
        'batterie': { 'available': true, 'price': 100 },
        'pneu': { 'available': true, 'price': 150 }
    },
};

app.post('/api/chatbot', (req, res) => {
    const { question } = req.body;
    let response = "";

    const disponibiliteKeywords = ['disponible', 'disponibilité', 'en stock'];
    const prixKeywords = ['prix', 'coûte', 'vaut'];

    if (disponibiliteKeywords.some(keyword => question.toLowerCase().includes(keyword))) {
        let foundModel = '';
        let foundPart = '';

        for (const modelKey in models) {
            if (question.toLowerCase().includes(modelKey)) {
                foundModel = modelKey;
                break;
            }
        }

        if (foundModel) {
            for (const partKey in models[foundModel]) {
                if (question.toLowerCase().includes(partKey)) {
                    foundPart = partKey;
                    break;
                }
            }

            if (foundPart && models[foundModel][foundPart].available) {
                response = `Oui, ${foundModel} ${foundPart} est disponible`;
            } else {
                response = "Non disponible";
            }
        } else {
            response = "Non disponible";
        }
    } else if (prixKeywords.some(keyword => question.toLowerCase().includes(keyword))) {
        let foundModel = '';
        let foundPart = '';

        for (const modelKey in models) {
            if (question.toLowerCase().includes(modelKey)) {
                foundModel = modelKey;
                break;
            }
        }

        if (foundModel) {
            for (const partKey in models[foundModel]) {
                if (question.toLowerCase().includes(partKey)) {
                    foundPart = partKey;
                    break;
                }
            }

            if (foundPart) {
                response = `Le prix de ${foundPart} pour ${foundModel} est ${models[foundModel][foundPart].price} DT`;
            } else {
                response = "Non disponible";
            }
        } else {
            response = "Non disponible";
        }
    } else {
        response = "Je ne comprends pas. Pouvez-vous reformuler?";
    }

    res.json({ response });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
