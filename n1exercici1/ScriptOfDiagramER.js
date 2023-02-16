db.createCollection('Supplier', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        description: 'En primer lloc, l\'òptica vol saber quin és el proveïdor de cadascuna de les ulleres. En concret vol saber de cada proveïdor:
  
        El nom
        L\ 'adreça (carrer, número, pis, porta, ciutat, codi postal i país)
        Telèfon
        Fax
        NIF.
        ',title:'
        Supplier ',required: [         '
        Nom_Sup ',          '
        NIF ',          '
        Glasses '],properties: {Nom_Sup: {bsonType: '
        string '},Adress: {bsonType: '
        array ',items: {
        title: 'object',
        properties: {
          NameStreet: {
            bsonType: 'string'
          },
          Floor: {
            bsonType: 'string'
          },
          Door: {
            bsonType: 'string'
          },
          City: {
            bsonType: 'string'
          },
          CP: {
            bsonType: 'string'
          }
        }
      }
    },
    Phone_Number: {
      bsonType: 'int'
    },
    Fax_Sup: {
      bsonType: 'int'
    },
    NIF: {
      bsonType: 'string'
    },
    Glasses: {
      bsonType: 'objectId'
    }
  }
  }
  }
  });
  db.createCollection('Glasses', {
        validator: {
          $jsonSchema: {
            bsonType: 'object',
            description: 'La política de compres de l\'òptica es basa que les ulleres d\'una marca es compraran a un únic proveïdor (així en podrà treure més bons preus), però poden comprar ulleres de diverses marques a un proveïdor. De les ulleres vol saber:
  
            La marca.
            La graduació de cadascun dels vidres.
            El tipus de muntura(flotant, pasta o metàl· lica).
            El color de la muntura.
            El color de cada vidre.
            El preu.
            ',title:'
            Glasses ',required: [         '
            Brands ',          '
            GlassesGraduation '],properties: {Brands: {bsonType: '
            string '},GlassesGraduation: {bsonType: '
            string '},FrameType: {enum: '
            Floating ','
            Paste ','
            Metalic '},Colour_Frame: {bsonType: '
            string '},Colour_Glasses: {bsonType: '
            string '},Price: {bsonType: '
            int '}}         }      }});  
  db.createCollection('Clients', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Clients',
        required: ['Clients', 'Glasses'],
        properties: {
          Name: {
            bsonType: 'string'
          },
          AdressStreet: {
            bsonType: 'string'
          },
          PhoneNomber: {
            bsonType: 'int'
          },
          Email: {
            bsonType: 'string'
          },
          DataRegistration: {
            bsonType: 'date'
          },
          Clients: {
            bsonType: 'objectId'
          },
          Glasses: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });
  db.createCollection('Employee', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Employee',
        required: ['Clients'],
        properties: {
          Name: {
            bsonType: 'string'
          },
          Surname: {
            bsonType: 'string'
          },
          Clients: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });
  