<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Date</b></h1>
    <p>The Date is based off of when the last update was.</p>
    <ormlite/>
  	<mybatis3/>
  	<hibernateorm/>
  </div>
</template>

<script>
import hibernateorm from '@/components/obj-rel-mapping/hibernateorm.vue'
import mybatis3 from '@/components/obj-rel-mapping/mybatis3.vue'
import ormlite from '@/components/obj-rel-mapping/ormlite.vue'

export default {
  components: {
    hibernateorm,
    mybatis3,
    ormlite
  }
}
</script>
