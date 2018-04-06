<template>
  <div>
    <div class="sticky">    
      <b-nav tabs>
        <b-nav-item to="/testing">Testing</b-nav-item>
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
    </div>

    <center>
	    <div>
        <br>
        <h1>Utilities</h1>
        <br>
        <b-row>
          <b-col cols="2">
          </b-col>
          <b-col cols="">
            <p class="homeTxt"> Utility libraries provides additional methods and functionalities when standard libraries fail to provide enough methods for handling core objects. Its main goal is to improve developer life and	enhance projects. Additional helper utilities can include: String manipulation methods, concurrency, or caching. </p>
          </b-col>
          <b-col cols="2">
          </b-col>
        </b-row>
	    </div>
	 </center>
   
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style>
/*p {
  padding-top: 100px;
}*/
</style>
