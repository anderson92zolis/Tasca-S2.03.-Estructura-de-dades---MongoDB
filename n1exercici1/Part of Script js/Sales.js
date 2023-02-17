
db.createCollection( 'Sales', {validator: {$jsonSchema: {bsonType: 'object',title:'Sales',required: [         'Supplier'],properties: {Supplier: {bsonType: 'objectId'},Clients: {bsonType: 'array',items: {
title:'object',properties: {Name: {bsonType: 'string'},Adress: {bsonType: 'object',
title:'object',properties: {NameStreet: {bsonType: 'string'},Floor: {bsonType: 'string'},Door: {bsonType: 'string'},City: {bsonType: 'string'},CP: {bsonType: 'string'}}},PhoneNumber: {bsonType: 'int'},Email: {bsonType: 'string'},DataRegistration: {bsonType: 'date'},RecomendClient: {bsonType: 'objectId'},Employee: {bsonType: 'array',items: {
title:'object',properties: {Name: {bsonType: 'string'},Surname: {bsonType: 'string'}}}}}}}}         }      }});  
 db.Sales.createIndex(
)

