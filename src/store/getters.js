import _ from "lodash"
import moment from "moment"

moment.locale('zh-CN')

export const entities  = state => {
  return state.entities;
}

export const updated = state => entity => {
  return moment(entity.meta.updated).fromNow();
}

export const header = state => entity => {
  return _.truncate(entity.body,{length:30});
}

export const words = state => entity => {
  return entity.body.length;
  // return 30;
}
