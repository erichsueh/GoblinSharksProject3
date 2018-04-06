<template>
<div class="card-padding">
  <b-card>
    <b-row>
      <b-col>

        <a class="card-link" target="_blank" href="https://github.com/intel-hadoop/chimera" id="logo"> 
          <h1 class="card-header">Chimera</h1> 
        </a>

        <b-card-body>
          <p>
            Chimera is a cryptographic library optimized with AES-NI (Advanced Encryption Standard New Instructions). It provides Java API for both cipher level and Java stream level. Developers can use it to implement high performance AES encryption/decryption with the minimum code and effort. Please note that Chimera doesn't implement the cryptographic algorithm such as AES directly. It wraps to Openssl or JCE which implement the algorithms.
          </p>
        </b-card-body>

        <p class="date">Last Modified Date: 2016-04-15</p>
        <a target="_blank" href="https://github.com/intel-hadoop/chimera">
          <img src="../../assets/github1.png" class="gitImage">
        </a>
        
      </b-col>

      <b-col align-self="center">
        <img src="../../assets/Chimera.png"/>
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