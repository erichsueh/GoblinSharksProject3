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
        <b-nav-item to="/databases" active>Databases</b-nav-item>
        <b-nav-item to="/security">Security</b-nav-item>
        <b-nav-item to="/object-relational-mapping">Object Relational Mapping</b-nav-item>
        <b-nav-item to="/xml">XML</b-nav-item>
      </b-nav>
    </div>

      
    <b-container fluid>
      <b-row>
        <b-col cols="8">
          <center>
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </center> 
        </b-col>
        
        <b-col cols="2">
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <div class="filter">
          <b-row>
            <b-button to="/databases/popularity" block="true" variant="outline-success" id="Performance" class="testingBtn">Popularity</b-button> 
          </b-row>
          <br>
          <b-row>
            <b-button to="/databases/issue" block="true" variant="outline-warning" id="IssueResolve" class="testingBtn">Issue Resolve Time</b-button>
          </b-row>
          <br>
          <b-row>
            <b-button to="/databases/differences" block="true" variant="outline-danger" id="Differences" class="testingBtn">Number of Differences</b-button>
          </b-row>
          <br>
           <b-row>
            <b-button to="/databases/stackoverflow" block="true" variant="outline-primary" id="Stackoverflow" class="testingBtn">Number of Stackoverflow</b-button>
          </b-row>
          <br>
          <b-row>
            <b-button to="/databases/date" block="true" variant="outline-secondary" id="Date" class="testingBtn">Date</b-button>
          </b-row>
          </div>
        </b-col>
        
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'dbmain'
}
</script>
