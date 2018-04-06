<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Date</b></h1>
    <p>The Date is based off of when the last update was.</p>
  	<gson/>
    <jsonsimple/>
  </div>
</template>

<script>
import gson from '@/components/json/gson'
import jsonsimple from '@/components/json/jsonsimple'

export default {
  components: {
    gson,
    jsonsimple
  }
}
</script>
