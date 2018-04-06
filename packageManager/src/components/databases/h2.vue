<template>
<div class="card-padding">
  <b-card>
    <b-row>
      <b-col>

        <a class="card-link" target="_blank" href="https://github.com/h2database/h2database" id="logo"> 
          <h2 class="card-header">H2</h2> 
        </a>

        <b-card-body>
          <p>
            Welcome to H2, the Java SQL database

            The main features of H2 are:
            Very fast, open source, JDBC API
            Embedded and server modes; in-memory databases
            Browser based Console application
            Small footprint: around 2 MB jar file size
          </p>
        </b-card-body>

        <p class="date">Last Modified Date: 2018-02-20</p>
        <a target="_blank" href="https://github.com/h2database/h2database">
          <img src="../../assets/github1.png" class="gitImage">
        </a>
        
      </b-col>

      <b-col align-self="center">
        <img src="../../assets/H2.png"/>
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