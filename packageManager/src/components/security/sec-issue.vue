<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Issue Resolve Time</b></h1>
    <p>The issues is how quickly someone response to an issue. Lower is better.</p>
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