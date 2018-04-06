<template>
<div class="card-padding">
  <b-card>
    <b-row>
      <b-col>

        <a class="card-link" target="_blank" href="https://github.com/cbeust/testng" id="logo"> 
          <h1 class="card-header">TestNG</h1> 
        </a>

        <b-card-body>
          <p>
            TestNG is a testing framework inspired from JUnit and NUnit but introducing some new functionalities that make it more powerful and easier to use
          </p>
        </b-card-body>
        
        <p>Last Modified Date: 2018-02-20</p>

        <!-- <b-button block target="_blank" href="https://github.com/cbeust/testng">
         GitHub Link
        </b-button> -->
        <button>
          Button
        </button>
      </b-col>

      <b-col>
        <br>
        <br>
        <img src="../../assets/TestNG.png"/>
      </b-col>

    </b-row>
  
  </b-card>
</div>
</template>

<script>
export default {
  name: 'testng'
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

.card-text {
  padding-left: 50px;
  padding-right: 50px;
}

a:hover {
  text-decoration: none;
}

.card-header {
  background-color: white;
}

.butsize {
  height: 40;
  width: 40;
}
</style>