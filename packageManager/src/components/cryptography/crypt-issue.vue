<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Issues Resolve Time</b></h1>
    <p>The issues is how quickly someone response to an issue. Lower is better.</p>
    <chimera/>
    <commonscrypto/>
    <conscrypt/>
    <keyczar/>
    <bouncycastle/>
    <spongycastle/>
    <conceal/>
  </div>
</template>

<script>
import bouncycastle from '@/components/cryptography/bouncycastle.vue'
import chimera from '@/components/cryptography/chimera.vue'
import commonscrypto from '@/components/cryptography/commonscrypto.vue'
import conceal from '@/components/cryptography/conceal.vue'
import conscrypt from '@/components/cryptography/conscrypt.vue'
import keyczar from '@/components/cryptography/keyczar.vue'
import spongycastle from '@/components/cryptography/spongycastle.vue'

export default {
  components: {
    bouncycastle,
    chimera,
    commonscrypto,
    conceal,
    conscrypt,
    keyczar,
    spongycastle
  }
}
</script>