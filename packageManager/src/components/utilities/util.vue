<template>
  <div class="sticky">
    <b-nav tabs>
      <b-nav-item to="/testing">Testing</b-nav-item>
      <b-nav-item to="/logging">Logging</b-nav-item>
      <b-nav-item to="/utilities" active>Utilities</b-nav-item>
      <b-nav-item to="/mocking">Mocking</b-nav-item>
      <b-nav-item to="/cryptography">Cryptography</b-nav-item>
      <b-nav-item to="/json">JSON</b-nav-item>
      <b-nav-item to="/databases">Databases</b-nav-item>
      <b-nav-item to="/security">Security</b-nav-item>
      <b-nav-item to="/object-relational-mapping">Object Relational Mapping</b-nav-item>
      <b-nav-item to="/xml">XML</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'utilmain'
}
</script>
