import Realm from 'realm';

let realm = new Realm({
  schema:[{
    name: 'Beer',
    properties: {
      task: 'string',
      completed: {type: 'bool', default: false}
    }
  }]
})

export default realm;
