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
        <h1><b>What is packageManager?</b></h1>
        <br>
        <b-row>
          <b-col cols="2">
          </b-col>
          <b-col cols="">
            <p class="homeTxt"> 
              PackageManager is a web application dedicated to compliment and enhance any level of developer experience.
              packageManager visualizes data that is available through GitHub representing various popular libraries.
              Visualizations represents many domains which are further categorized into 5 categories: Popularity,
              Number of Stackoverflow, Issue Resolve Time, Number of Differences, and Date. 
            </p>
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
