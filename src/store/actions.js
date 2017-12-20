export const initialData = ({commit})=>{
  commit("setInitialData");
}

export const create = ({commit}) => {
  commit("createEntity");
}

export const update = ({commit},entity) => {
  commit("updateEntity",entity);
}

export const remove = ({commit},entity) => {
  commit("removeEntity",entity);
}
