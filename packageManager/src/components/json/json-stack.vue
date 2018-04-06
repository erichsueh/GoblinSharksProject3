<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Number of Stackoverflow</b></h1>
    <p>This shows how many stack overflow questions there have been overall.</p>
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
