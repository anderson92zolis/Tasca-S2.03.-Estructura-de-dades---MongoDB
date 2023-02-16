
db.createCollection( 'Glasses', {validator: {$jsonSchema: {bsonType: 'object',description:'La política de compres de l\'òptica es basa que les ulleres d\'una marca es compraran a un únic proveïdor (així en podrà treure més bons preus), però poden comprar ulleres de diverses marques a un proveïdor. De les ulleres vol saber:

    La marca.
    La graduació de cadascun dels vidres.
    El tipus de muntura (flotant, pasta o metàl·lica).
    El color de la muntura.
    El color de cada vidre.
    El preu.
',title:'Glasses',required: [         'Brands',          'GlassesGraduation'],properties: {Brands: {bsonType: 'string'},GlassesGraduation: {bsonType: 'string'},FrameType: {enum: 'Floating','Paste','Metalic'},Colour_Frame: {bsonType: 'string'},Colour_Glasses: {bsonType: 'string'},Price: {bsonType: 'int'}}         }      }});  