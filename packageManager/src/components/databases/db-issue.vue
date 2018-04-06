<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Issue Resolve Time</b></h1>
    <p>The issues is how quickly someone response to an issue. Lower is better.</p>
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
