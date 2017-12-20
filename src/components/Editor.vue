<template lang="html">
  <div class="ui form">
    <div class="field">
      <textarea
        class="textarea"
        placeholder="写点什么..."
        rows="5"
        v-model="entity.body"
        v-on:input="update(entity)"
        >
      </textarea>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  methods:{
    ...mapActions(['update'])
  },
  props:['entity']
}
</script>

<style lang="css">
</style>
