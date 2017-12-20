import {db,loadCollection} from "../database"

export default {
  setInitialData(state){
    loadCollection("notes")
      .then(collection=>{
        // collection.insert({'body':'hello llpei'})
        // collection.insert({'body':'hello caolt'})
        // db.saveDatabase();
        const _entities =
          collection.chain()
            .find()
            .simplesort('$loki','isdesc')
            .data();
        state.entities = _entities;
      })
  },
  createEntity(state){
    loadCollection("notes")
      .then(collection=>{
        const _entity = collection.insert({'body':''});
        db.saveDatabase();
        state.entities.unshift(_entity);
      })
  },
  updateEntity(state,entity){
    loadCollection("notes")
      .then(collection=>{
        collection.update(entity);
        db.saveDatabase();
      })
  },
  removeEntity(state,entity){
    loadCollection("notes")
      .then(collection=>{
        const _entities = state.entities.filter(_entity=>{
          return entity.$loki !=_entity.$loki
        })
        state.entities = _entities;
        collection.remove({'$loki':entity.id});
        db.saveDatabase();
      })
  }
}
