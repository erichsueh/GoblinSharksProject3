<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Popularity</b></h1>
    <p>Popularity is how many people use the program. The higher the number the better.</p>
    <springsecurity/>
  	<shiro/>
  </div>
</template>

<script>
import shiro from '@/components/security/shiro.vue'
import springsecurity from '@/components/security/springsecurity.vue'

export default {
  components: {
    shiro,
    springsecurity
  }
}
</script>
