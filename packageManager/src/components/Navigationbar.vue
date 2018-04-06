<template>
  <div class="hello">
    <b-navbar toggleable="md" type="dark" variant="info"  fixed="top">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#/">Package Manager</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <!-- <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav> -->

      </b-collapse>
    </b-navbar>

    <!-- <b-nav fill tabs>
      <b-nav-item active>Active</b-nav-item>
      <b-nav-item href="#/tab">Link</b-nav-item>
      <b-nav-item>Link with a long name </b-nav-item>
      <b-nav-item disabled>Disabled</b-nav-item>
    </b-nav>

    <b-card>
      <b-media no-body>
        <b-media-aside vertical-align="center">
          <b-img width="256" height="256" src="http://juliandance.org/wp-content/uploads/2016/01/RedApple.jpg"/>
        </b-media-aside>
        <b-media-body class="ml-3">
          <h5 class="mt-0">Media Title</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
            sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
            Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
            in faucibus.
          </p>
          <p class="mb-0">
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <b-media>
            <h5 class="mt-0">Nested Media</h5>
            Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
            felis in faucibus.
          </b-media>
        </b-media-body>
      </b-media>
    </b-card> -->
    
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
    //   msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
} */
</style>
