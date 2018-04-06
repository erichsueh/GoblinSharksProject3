<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Number of Stackoverflow</b></h1>
    <p>This shows how many stack overflow questions there have been overall.</p>
  	<hibernateorm/>
		<mybatis3/>
  	<ormlite/>
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
