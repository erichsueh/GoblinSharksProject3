<template>
  <div>
    <!-- <b-nav fill tabs>
      <b-nav-item href="#/">Active</b-nav-item>
      <b-nav-item active href="#">Link</b-nav-item>
      <b-nav-item>Link with a long name </b-nav-item>
      <b-nav-item disabled>Disabled</b-nav-item>
    </b-nav> -->

    <!-- <b-card no-body>
      <b-tabs card v-model="tabIndex">
        <b-tab title="Testing" :title-link-class="linkClass(0)">
          Testing Contents
        </b-tab>
        <b-tab title="Logging" :title-link-class="linkClass(1)">
          Logging Contents
        </b-tab>
        <b-tab title="Utilities" :title-link-class="linkClass(2)">
          Utilities Contents
        </b-tab>
        <b-tab title="Mocking" :title-link-class="linkClass(3)">
          Mocking Contents 
        </b-tab>
        <b-tab title="Cryptography" :title-link-class="linkClass(4)">
          Cryptography Contents 
        </b-tab>
        <b-tab title="JSON" :title-link-class="linkClass(5)">
          JSON Contents 
        </b-tab>
        <b-tab title="Databases" :title-link-class="linkClass(6)">
          Databases Contents 
        </b-tab>
        <b-tab title="Security" :title-link-class="linkClass(7)">
          Security Contents 
        </b-tab>
        <b-tab title="Object Relational Mapping" :title-link-class="linkClass(8)">
          Object Relational Mapping Contents 
        </b-tab>
        <b-tab title="XML" :title-link-class="linkClass(9)">
          XML Contents 
        </b-tab>
      </b-tabs>
    </b-card> -->

    <b-nav tabs>
      <b-nav-item>Testing</b-nav-item>
      <b-nav-item>Logging</b-nav-item>
      <b-nav-item>Utilities</b-nav-item>
      <b-nav-item>Mocking</b-nav-item>
      <b-nav-item>Cryptography</b-nav-item>
      <b-nav-item>JSON</b-nav-item>
      <b-nav-item>Databases</b-nav-item>
      <b-nav-item>Security</b-nav-item>
      <b-nav-item>Object Relational Mapping</b-nav-item>
      <b-nav-item>XML</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabIndex: 0
    }
  },
  methods: {
    linkClass (idx) {
      if (this.tabIndex === idx) {
        return ['bg-primary', 'text-light']
      } else {
        return ['bg-light', 'text-info']
      }
    }
  }
}
</script>

<style scoped>
.tabs.tab1 .nav-tabs .nav-link.active {
  background-color: red;
}
</style>