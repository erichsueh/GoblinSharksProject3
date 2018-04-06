<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Number of Differences</b></h1>
    <p>The number of breaking changes between each git update. Lower is better.</p>
    <derby/>
		<htwo/>
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
