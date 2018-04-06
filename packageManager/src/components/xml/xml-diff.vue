<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Number of Differences</b></h1>
    <p>The number of breaking changes between each git update. Lower is better.</p>
    <jdom></jdom>
    <dom4j></dom4j>
  	<xerces2j></xerces2j>>
  </div>
</template>

<script>
import xerces2j from '@/components/xml/xerces2-j'
import jdom from '@/components/xml/jdom'
import dom4j from '@/components/xml/dom4j'
export default {
  components: {
    xerces2j,
    jdom,
    dom4j
  }
}
</script>