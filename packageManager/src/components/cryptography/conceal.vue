<template>
<div class="card-padding">
  <b-card>
    <b-row>
      <b-col>

        <a class="card-link" target="_blank" href="https://github.com/facebook/conceal" id="logo"> 
          <h1 class="card-header">Conceal</h1> 
        </a>

        <b-card-body>
          <p>
            Conceal provides a set of Java APIs to perform cryptography on Android. It was designed to be able to encrypt large files on disk in a fast and memory efficient manner.

            The major target for this project is typical Android devices which run old Android versions, have low memory and slower processors.

            Unlike other libraries, which provide a Smorgasbord of encryption algorithms and options, Conceal prefers to abstract this choice and use sane defaults. Thus Conceal is not a general purpose crypto library, however it aims to provide useful functionality.
          </p>
        </b-card-body>

        <p class="date">Last Modified Date: 2018-01-16</p>
        <a target="_blank" href="https://github.com/facebook/conceal">
          <img src="../../assets/github1.png" class="gitImage">
        </a>
        
      </b-col>

      <b-col align-self="center">
        <img src="../../assets/Conceal.png"/>
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