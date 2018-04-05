<template>
  <div>
    <div class="sticky">
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
    </div>
    
    <!-- <b-button to="/testing/test1">To Test1</b-button>
    <b-button to="/testing/test2">To Test2</b-button> -->

    <!-- <transition name="fade">
      <router-view></router-view>
    </transition> -->


    
    <b-container fluid>
      <b-row>
        <b-col cols="8">
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </b-col>
        
        <b-col cols="2">
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <b-row>
            <b-button to="/testing/test1" block="true" variant="outline-success" id="Performance" class="testingBtn">Performance</b-button>
          </b-row>
          <br>
          <b-row>
            <b-button to="/testing/test2" block="true" variant="outline-warning" id="IssueResolve" class="testingBtn">Issue Resolve Time</b-button>
          </b-row>
          <br>
          <b-row>
            <b-button to="/testing/test3" block="true" variant="outline-danger" id="Differences" class="testingBtn"># of differences</b-button>
          </b-row>
          <br>
           <b-row>
            <b-button to="/testing/test4" block="true" variant="outline-primary" id="Stackoverflow" class="testingBtn"># of stackoverflow</b-button>
          </b-row>
          <br>
          <b-row>
            <b-button to="/testing/test5" block="true" variant="outline-secondary" id="Date" class="testingBtn">Date</b-button>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'testingmain',
  data () {
    return {
      // buttons: [
      //   { variant="outline-success", caption: "Performance", state: false  }
      //   { variant="outline-warning", caption: "Issue Resolve Time", state: false  }
      //   { variant="outline-danger", caption: "# of differences", state: false  }
      //   { variant="outline-primary", caption: "StackOverflow", state: false  }
        // { variant="outline-success", caption: "Performance", state: false  }
      // ]
    }
  }
}
</script>

<style>

</style>
