import Ember from 'ember';

const { htmlSafe } = Ember.String;

export function safeString(params/*, hash*/) {
  return htmlSafe(params[0]);
}

export default Ember.Helper.helper(safeString);
