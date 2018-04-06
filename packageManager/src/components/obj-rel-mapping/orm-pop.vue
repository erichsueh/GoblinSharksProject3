<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Popularity</b></h1>
    <p>Popularity is how many people use the program. The higher the number the better.</p>
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

