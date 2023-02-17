
db.createCollection( 'Supplier', {validator: {$jsonSchema: {bsonType: 'object',description:'
',title:'Supplier',required: [         'Nom_Sup',          'NIF'],properties: {Nom_Sup: {bsonType: 'string'},Phone_Number: {bsonType: 'int'},Fax_Sup: {bsonType: 'int'},NIF: {bsonType: 'string'},Brands: {bsonType: 'array',items: {
title:'object',properties: {BrandName: {bsonType: 'string'},Glasses: {bsonType: 'array',items: {
title:'object',properties: {GlassesGraduation: {bsonType: 'object',
title:'object',properties: {Left: {bsonType: 'string'},Right: {bsonType: 'string'}}},Mount: {bsonType: 'object',
title:'object',properties: {Frame: {enum: 'Floating','Paste','Metalic'},Colour: {bsonType: 'string'}}},ColourGlasses: {bsonType: 'string'},Price: {bsonType: 'int'}}}}}}}},
patternProperties: {"Adress": {bsonType: 'object',
title:'object',properties: {NameStreet: {bsonType: 'string'},Floor: {bsonType: 'string'},Door: {bsonType: 'string'},City: {bsonType: 'string'},CP: {bsonType: 'string'}}}}         }      }});  