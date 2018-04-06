<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Number of Differences</b></h1>
    <p>The number of breaking changes between each git update. Lower is better.</p>
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