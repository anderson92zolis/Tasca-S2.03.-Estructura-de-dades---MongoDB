db.createCollection('Supplier', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      description: '
      ',title:'
      Supplier ',required: [         '
      Nom_Sup ',          '
      NIF '],properties: {Nom_Sup: {bsonType: '
      string '},Phone_Number: {bsonType: '
      int '},Fax_Sup: {bsonType: '
      int '},NIF: {bsonType: '
      string '},Brands: {bsonType: '
      array ',items: {
      title: 'object',
      properties: {
        BrandName: {
          bsonType: 'string'
        },
        Glasses: {
          bsonType: 'array',
          items: {
            title: 'object',
            properties: {
              GlassesGraduation: {
                bsonType: 'object',
                title: 'object',
                properties: {
                  Left: {
                    bsonType: 'string'
                  },
                  Right: {
                    bsonType: 'string'
                  }
                }
              },
              Mount: {
                bsonType: 'object',
                title: 'object',
                properties: {
                  Frame: {
                    enum: 'Floating',
                    'Paste',
                    'Metalic'
                  },
                  Colour: {
                    bsonType: 'string'
                  }
                }
              },
              ColourGlasses: {
                bsonType: 'string'
              },
              Price: {
                bsonType: 'int'
              }
            }
          }
        }
      }
    }
  }
},
patternProperties: {
  "Adress": {
    bsonType: 'object',
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
}
}
}
});
db.createCollection('Sales', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Sales',
      required: ['Supplier'],
      properties: {
        Supplier: {
          bsonType: 'objectId'
        },
        Clients: {
          bsonType: 'array',
          items: {
            title: 'object',
            properties: {
              Name: {
                bsonType: 'string'
              },
              Adress: {
                bsonType: 'object',
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
              },
              PhoneNumber: {
                bsonType: 'int'
              },
              Email: {
                bsonType: 'string'
              },
              DataRegistration: {
                bsonType: 'date'
              },
              RecomendClient: {
                bsonType: 'objectId'
              },
              Employee: {
                bsonType: 'array',
                items: {
                  title: 'object',
                  properties: {
                    Name: {
                      bsonType: 'string'
                    },
                    Surname: {
                      bsonType: 'string'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});
db.Sales.createIndex()
