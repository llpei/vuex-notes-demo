<template>
  <div id="app">
    <notes></notes>
  </div>
</template>

<script>
import Notes from './components/Notes'
import "semantic-ui-css/semantic.min.css"

export default {
  name: 'app',
  components: {
    Notes
  }
}
</script>

<style>
.notes{
  margin-top: 32px;
}
.ui.items > .item > .content > .header{
  display: block;
  cursor:pointer;
}
.ui .form .textarea{
  border: none;
  padding: 0px;
  font-size: 16px;
  margin: 32px 0px;
}

.ui.items > .item .meta{
  width:88px;
  margin-top: 0px;
  margin-bottom: 32px;
  color:rgba(0, 0, 0, 0.4);
}
.ui .trash{
  cursor:pointer;
}
</style>
