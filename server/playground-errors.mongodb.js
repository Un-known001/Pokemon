// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('test');
db.getCollection('errors').deleteMany({});

// Create a new document in the collection.
db.getCollection('errors').insertMany([
{
    "username": "Roshan",
    "name": "PokemonDuplicateError",
    "endpoint": "/pokemon[POST]",
    "code": 400,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "PokemonDuplicateError",
    "endpoint": "/pokemon[POST]",
    "code": 400,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "PokemonDuplicateError",
    "endpoint": "/pokemon[POST]",
    "code": 400,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "PokemonDuplicateError",
    "endpoint": "/pokemon[POST]",
    "code": 400,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "PokemonDuplicateError",
    "endpoint": "/pokemon[POST]",
    "code": 400,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "PokemonBadRequest",
    "endpoint": "/pokemon[POST]",
    "code": 400,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "PokemonBadRequest",
    "endpoint": "/pokemon[POST]",
    "code": 400,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "PokemonBadRequest",
    "endpoint": "/pokemon[POST]",
    "code": 400,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "PokemonMissingIDError",
    "endpoint": "/pokemon[GET]",
    "code": 400,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "PokemonMissingIDError",
    "endpoint": "/pokemon[GET]",
    "code": 400,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "PokemonMissingIDError",
    "endpoint": "/pokemon[GET]",
    "code": 400,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "PokemonMissingIDError",
    "endpoint": "/pokemon[GET]",
    "code": 400,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "PokemonMissingIDError",
    "endpoint": "/pokemon[GET]",
    "code": 400,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "PokemonMissingIDError",
    "endpoint": "/pokemon[GET]",
    "code": 400,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "PokemonNotFoundError",
    "endpoint": "/pokemon[GET]",
    "code": 400,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "PokemonNotFoundError",
    "endpoint": "/pokemon[GET]",
    "code": 404,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "PokemonNotFoundError",
    "endpoint": "/pokemon[GET]",
    "code": 404,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "PokemonNotFoundError",
    "endpoint": "/pokemon[GET]",
    "code": 404,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "PokemonNotFoundError",
    "endpoint": "/pokemon[GET]",
    "code": 404,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "PokemonNotFoundError",
    "endpoint": "/pokemon[GET]",
    "code": 404,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "PokemonNotFoundError",
    "endpoint": "/pokemon[GET]",
    "code": 404,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "PokemonNotFoundError",
    "endpoint": "/pokemon[GET]",
    "code": 404,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "DatabaseError",
    "endpoint": "/pokemon[PATCH]",
    "code": 500,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "DatabaseError",
    "endpoint": "/pokemon[PATCH]",
    "code": 500,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "DatabaseError",
    "endpoint": "/pokemon[PATCH]",
    "code": 500,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "PokemonMissingIDError",
    "endpoint": "/pokemon[DELETE]",
    "code": 400,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "PokemonMissingIDError",
    "endpoint": "/pokemon[DELETE]",
    "code": 400,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "PokemonMissingIDError",
    "endpoint": "/pokemon[DELETE]",
    "code": 400,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "PokemonMissingIDError",
    "endpoint": "/pokemon[DELETE]",
    "code": 400,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "PokemonMissingIDError",
    "endpoint": "/pokemon[DELETE]",
    "code": 400,
    "createdAt": new Date()
},
{
    "username": "Roshan",
    "name": "PokemonMissingIDError",
    "endpoint": "/pokemon[DELETE]",
    "code": 400,
    "createdAt": new Date()
},
]);