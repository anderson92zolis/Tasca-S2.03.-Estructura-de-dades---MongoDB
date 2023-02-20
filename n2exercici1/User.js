
db.createCollection( 'User', {validator: {$jsonSchema: {bsonType: 'object',title:'User',required: [         'Video',          'Email',          'Password',          'NameUser',          'BirthDate',          'Sex',          'Channel',          'Comment'],properties: {Video: {bsonType: 'objectId'},Email: {bsonType: 'string'},Password: {bsonType: 'string'},NameUser: {bsonType: 'string'},BirthDate: {bsonType: 'date'},Sex: {bsonType: 'string'},Country: {bsonType: 'string'},PostCode: {bsonType: 'string'},Channel: {bsonType: 'array',items: {
title:'object',required: [         'Name',          'Description',          'CreationDate'],properties: {Name: {bsonType: 'string'},Description: {bsonType: 'string'},CreationDate: {bsonType: 'date'}}}},Subscription: {bsonType: 'array',items: {
title:'object',required: [         'LikeDislike',          'Date'],properties: {LikeDislike: {enum: },Date: {bsonType: 'date'}}}},Comment: {bsonType: 'array',items: {
title:'object',required: [         'Commen_id',          'CommentText',          'Date',          'Reaction'],properties: {Commen_id: {bsonType: 'objectId'},CommentText: {bsonType: 'string'},Date: {bsonType: 'date'},Reaction: {bsonType: 'object',
title:'object',required: [         'ReacionLike',          'ReacionDisike'],properties: {ReacionLike: {bsonType: 'array',items: {
title:'object',required: [         'User_id',          'date'],properties: {User_id: {bsonType: 'objectId'},date: {bsonType: 'date'}}}},ReacionDisike: {bsonType: 'array',items: {
title:'object',required: [         'User_id',          'date'],properties: {User_id: {bsonType: 'objectId'},date: {bsonType: 'date'}}}}}}}}}}         }      },
autoIndexId:true
});  