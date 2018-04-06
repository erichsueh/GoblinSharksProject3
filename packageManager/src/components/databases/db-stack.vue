<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Number of Stackoverflow</b></h1>
    <p>This shows how many stack overflow questions there have been overall.</p>
    <htwo/>
    <derby/>
  </div>
</template>

<script>
import htwo from '@/components/databases/h2.vue'
import derby from '@/components/databases/derby.vue'

export default {
  components: {
    htwo,
    derby
  }
}
</script>
