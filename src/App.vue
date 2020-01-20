<template>
  <div class="container">
    <app-header></app-header>
    <hr />
    <div class="row">
      <app-server-list></app-server-list>
      <app-server-detail></app-server-detail>
    </div>
    <hr />
    <app-footer></app-footer>
  </div>
</template>

<script>
    import Header from './Header.vue';
    import ServerList from './ServerList.vue';
    import ServerDetail from './ServerDetail.vue';
    import Footer from './Footer.vue'

    export default {
        components: {
            'app-header': Header,
            'app-server-list': ServerList,
            'app-server-detail': ServerDetail,
            'app-footer': Footer,
        }
    }
</script>

<style>
</style>
