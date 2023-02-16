
db.createCollection( 'Supplier', {validator: {$jsonSchema: {bsonType: 'object',description:'En primer lloc, l\'òptica vol saber quin és el proveïdor de cadascuna de les ulleres. En concret vol saber de cada proveïdor:

    El nom
    L\'adreça (carrer, número, pis, porta, ciutat, codi postal i país)
    Telèfon
    Fax
    NIF.
',title:'Supplier',required: [         'Nom_Sup',          'NIF',          'Glasses'],properties: {Nom_Sup: {bsonType: 'string'},Adress: {bsonType: 'array',items: {
title:'object',properties: {NameStreet: {bsonType: 'string'},Floor: {bsonType: 'string'},Door: {bsonType: 'string'},City: {bsonType: 'string'},CP: {bsonType: 'string'}}}},Phone_Number: {bsonType: 'int'},Fax_Sup: {bsonType: 'int'},NIF: {bsonType: 'string'},Glasses: {bsonType: 'objectId'}}         }      }});  