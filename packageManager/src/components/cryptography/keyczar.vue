<template>
<div class="card-padding">
  <b-card>
    <b-row>
      <b-col>

        <a class="card-link" target="_blank" href="https://github.com/google/keyczar" id="logo"> 
          <h1 class="card-header">Keyczar</h1> 
        </a>

        <b-card-body>
          <p>
            Keyczar is an open source cryptographic toolkit designed to make it easier and safer for developers to use cryptography in their applications. Keyczar supports authentication and encryption with both symmetric and asymmetric keys. Some features of Keyczar include:

            A simple API
            Key rotation and versioning
            Safe default algorithms, modes, and key lengths
            Automated generation of initialization vectors and ciphertext signatures
            Java, Python, and C++ implementations
            International support in Java
          </p>
        </b-card-body>

        <p class="date">Last Modified Date: 2017-02-14</p>
        <a target="_blank" href="https://github.com/google/keyczar">
          <img src="../../assets/github1.png" class="gitImage">
        </a>
        
      </b-col>

      <b-col align-self="center">
        <img src="../../assets/Keyczar.png"/>
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