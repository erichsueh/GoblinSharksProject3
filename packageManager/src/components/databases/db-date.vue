<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Date</b></h1>
    <p>The Date is based off of when the last update was.</p>
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
