<template>
<div class="card-padding">
  <b-card>
    <b-row>
      <b-col>

        <a class="card-link" target="_blank" href="https://github.com/junit-team/junit4" id="logo"> 
          <h1 class="card-header">JUnit</h1> 
        </a>

        <b-card-body>
          <p>
            JUnit is a simple framework to write repeatable tests. It is an instance of the xUnit architecture for unit testing frameworks.
          </p>
        </b-card-body>

        <b-button target="_blank" href="https://github.com/junit-team/junit4"> GitHub Link</b-button>
      </b-col>

      <b-col>
        <img src="../../assets/JUnit.jpg"/>
      </b-col>

    </b-row>
  
  </b-card>
  </div>
</template>

<script>
export default {
  name: 'test4'
}
</script>

<style>
#title {
  font-size: 50px;
  font-weight: bold;
}

img {
  width: 500px;
}

.gitBtn {
  width: 100px;
  height: 100px;
}


</style>