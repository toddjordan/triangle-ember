import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  normalizeArrayResponse(store, modelClass, payload, id, reqType) {
    let type = modelClass.modelName;
    let data = {
      [type]: payload
    };
    return this._super(store, modelClass, data, id, reqType);
  }

});
