<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Popularity</b></h1>
    <p>Popularity is how many people use the program. The higher the number the better.</p>
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
