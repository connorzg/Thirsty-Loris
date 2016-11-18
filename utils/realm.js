import Realm from 'realm';

let realm = new Realm({
  schema:[{
    name: 'Beer',
    properties: {
      id: 'string',
      name: {type: 'string', optional: true},
      breweries: {type: 'string', optional: true},
      labels: {type: 'string', optional: true},
      abv: {type: 'string', optional: true},
      ibu: {type: 'string', optional: true},
      style: {type: 'string', optional: true},
      description: {type: 'string', optional: true},
      list: {type: 'string', optional: true}
    }
  }]
})

export default realm;
