import Realm from 'realm';

let realm = new Realm({
  schema:[{
    name: 'Beer',
    properties: {
      id: 'string',
      name: {type: 'string', optional: true},
      brewery: {type: 'string', optional: true},
      image: {type: 'string', optional: true},
      abv: {type: 'string', optional: true},
      ibu: {type: 'string', optional: true},
      type: {type: 'string', optional: true},
      description: {type: 'string', optional: true},
      list: {type: 'string', optional: true}
    }
  }]
})

export default realm;
