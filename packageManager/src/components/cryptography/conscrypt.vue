<template>
<div class="card-padding">
  <b-card>
    <b-row>
      <b-col>

        <a class="card-link" target="_blank" href="https://github.com/google/conscrypt" id="logo"> 
          <h1 class="card-header">Conscrypt</h1> 
        </a>

        <b-card-body>
          <p>
            Conscrypt is a Java Security Provider (JSP) that implements parts of the Java Cryptography Extension (JCE) and Java Secure Socket Extension (JSSE). It uses BoringSSL to provide cryptographical primitives and Transport Layer Security (TLS) for Java applications on Android and OpenJDK.
          </p>
        </b-card-body>

        <p class="date">Last Modified Date: 2018-02-20</p>
        <a target="_blank" href="https://github.com/google/conscrypt">
          <img src="../../assets/github1.png" class="gitImage">
        </a>
        
      </b-col>

      <b-col align-self="center">
        <img src="../../assets/Conscrypt.png"/>
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