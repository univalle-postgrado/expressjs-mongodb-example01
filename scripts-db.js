// colección authors
db.authors.insertMany([
  { _id: ObjectId('66d380eaa33f53358c2bc961'), name: "J.K. Rowling", nationality: "Británica" },
  { _id: ObjectId('66d380eaa33f53358c2bc962'), name: "Stephen King", nationality: "Estadounidense" },
  { _id: ObjectId('66d380eaa33f53358c2bc963'), name: "Gabriel García Márquez", nationality: "Colombiana" },
  { _id: ObjectId('66d380eaa33f53358c2bc964'), name: "Haruki Murakami", nationality: "Japonesa" },
  { _id: ObjectId('66d380eaa33f53358c2bc965'), name: "Isabel Allende", nationality: "Chilena" }
]);

// colección books
db.books.insertMany([
  {
    _id: ObjectId(),
    title: 'Harry Potter y la Piedra Filosofal',
    description: 'Un joven mago descubre su destino.',
    genre: 'Fantasía',
    publish_year: 1997,
    author_id: ObjectId('66d380eaa33f53358c2bc961')
  },
  {
    _id: ObjectId(),
    title: 'Harry Potter y la Cámara Secreta',
    description: 'Un misterio se cierne sobre Hogwarts.',
    genre: 'Fantasía',
    publish_year: 1998,
    author_id: ObjectId('66d380eaa33f53358c2bc961')
  },
  {
    _id: ObjectId(),
    title: 'Harry Potter y el Prisionero de Azkaban',
    description: 'Un peligro acecha en las calles de Hogsmeade.',
    genre: 'Fantasía',
    publish_year: 1999,
    author_id: ObjectId('66d380eaa33f53358c2bc961')
  }
]);

db.books.insertMany([
  {
    _id: ObjectId(),
    title: 'El resplandor',
    description: 'Una familia es acosada por fuerzas malignas en un hotel aislado.',
    genre: 'Terror',
    publish_year: 1977,
    author_id: ObjectId('66d380eaa33f53358c2bc962')
  },
  {
    _id: ObjectId(),
    title: 'IT',
    description: 'Un payaso malvado aterroriza a un grupo de niños.',
    genre: 'Terror',
    publish_year: 1986,
    author_id: ObjectId('66d380eaa33f53358c2bc962')
  },
  {
    _id: ObjectId(),
    title: 'Carrie',
    description: 'Una adolescente con poderes telequinéticos se venga de sus acosadores.',
    genre: 'Terror',
    publish_year: 1974,
    author_id: ObjectId('66d380eaa33f53358c2bc962')
  }
]);


db.books.insertMany([
  {
    _id: ObjectId(),
    title: 'Cien años de soledad',
    description: 'La épica historia de la familia Buendía en Macondo.',
    genre: 'Realismo mágico',
    publish_year: 1967,
    author_id: ObjectId('66d380eaa33f53358c2bc963')
  },
  {
    _id: ObjectId(),
    title: 'El amor en los tiempos del cólera',
    description: 'Una historia de amor que trasciende el tiempo.',
    genre: 'Romance',
    publish_year: 1985,
    author_id: ObjectId('66d380eaa33f53358c2bc963')
  },
  {
    _id: ObjectId(),
    title: 'El otoño del patriarca',
    description: 'El reinado de un dictador latinoamericano.',
    genre: 'Realismo mágico',
    publish_year: 1975,
    author_id: ObjectId('66d380eaa33f53358c2bc963')
  }
]);

db.books.insertMany([
  {
    _id: ObjectId(),
    title: 'Kafka en la orilla',
    description: 'Una historia surrealista de dos personajes perdidos.',
    genre: 'Ciencia ficción',
    publish_year: 2002,
    author_id: ObjectId('66d380eaa33f53358c2bc964')
  },
  {
    _id: ObjectId(),
    title: 'Norwegian Wood',
    description: 'Una historia de amor y pérdida en la década de 1960.',
    genre: 'Romance',
    publish_year: 1987,
    author_id: ObjectId('66d380eaa33f53358c2bc964')
  },
  {
    _id: ObjectId(),
    title: '1Q84',
    description: 'Una historia de ciencia ficción y realismo mágico.',
    genre: 'Ciencia ficción',
    publish_year: 2009,
    author_id: ObjectId('66d380eaa33f53358c2bc964')
  }
]);

db.books.insertMany([
  {
    _id: ObjectId(),
    title: 'La casa de los espíritus',
    description: 'Una saga familiar a través de generaciones.',
    genre: 'Realismo mágico',
    publish_year: 1982,
    author_id: ObjectId('66d380eaa33f53358c2bc965')
  },
  {
    _id: ObjectId(),
    title: 'Eva Luna',
    description: 'La vida de una mujer extraordinaria.',
    genre: 'Novela',
    publish_year: 1987,
    author_id: ObjectId('66d380eaa33f53358c2bc965')
  },
  {
    _id: ObjectId(),
    title: 'El cuaderno de Maya',
    description: 'Una historia de amor y pérdida.',
    genre: 'Romance',
    publish_year: 1984,
    author_id: ObjectId('66d380eaa33f53358c2bc965')
  }
]);