<template>
  <div>
    <b-nav tabs>
        <b-nav-item to="/testing" active>Testing</b-nav-item>
        <b-nav-item to="/logging">Logging</b-nav-item>
        <b-nav-item to="/utilities">Utilities</b-nav-item>
        <b-nav-item to="/mocking">Mocking</b-nav-item>
        <b-nav-item to="/cryptography">Cryptography</b-nav-item>
        <b-nav-item to="/json">JSON</b-nav-item>
        <b-nav-item to="/databases">Databases</b-nav-item>
        <b-nav-item to="/security">Security</b-nav-item>
        <b-nav-item to="/object-relational-mapping">Object Relational Mapping</b-nav-item>
        <b-nav-item to="/xml">XML</b-nav-item>
    </b-nav>
    
    <b-button to="/testing/test1">To Test1</b-button>
    <b-button to="/testing/test2">To Test2</b-button>

    <transition name="fade">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'testingmain'
}
</script>
