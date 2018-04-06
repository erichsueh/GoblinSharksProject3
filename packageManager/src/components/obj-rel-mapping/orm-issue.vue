<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Issue Resolve Time</b></h1>
    <p>The issues is how quickly someone response to an issue. Lower is better.</p>
  	<mybatis3/>
  	<hibernateorm/>
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
