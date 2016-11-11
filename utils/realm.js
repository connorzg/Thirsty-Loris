import Realm from 'realm';

let realm = new Realm({
  schema:[{
    name: 'Beer',
    properties: {
      name: 'string',
      origin: 'string',
      brewery: 'string',
      image: 'string',
      abv: 'float',
      type: 'string',
      ingredients: 'string',
      description: 'string'
    },
    name: 'Brewery',
    properties: {
      name: 'string',
      location: 'string',
      founded: 'int',
      image: 'string',
      locationTypeDisplay: 'string',
      description: 'string'
    }
  }]
})

export default realm;
