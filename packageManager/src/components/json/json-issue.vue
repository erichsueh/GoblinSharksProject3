<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Issue Resolve Time</b></h1>
    <p>The issues is how quickly someone response to an issue. Lower is better.</p>
    <jsonsimple/>
    <gson/>
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
