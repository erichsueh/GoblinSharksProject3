<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Date</b></h1>
    <p>The Date is based off of when the last update was.</p>
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
