<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Number of Stackoverflow</b></h1>
    <p>This shows how many stack overflow questions there have been overall.</p>
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