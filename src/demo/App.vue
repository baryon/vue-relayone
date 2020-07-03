<template>
  <div class="mw7 center pv4 min-h-100 bg-white">
    <div class="ph4">
      <h1 class="mt0 mb3 f2 lh-title">Vue.js RelayOne Component Demo</h1>

      <p class="mv3 f5 lh-copy">An unofficial Vue.js component that lets you integrate <a href="https://one.relayx.io/" class="link blue hover-red">RelayOne</a>'s payment system into your app or web page. </p>

      <h3 class="mt4 mb2 f4 lh-title">Demo</h3>

      <form class="dt mb4">
        <div class="dt-row">
          <label class="dtc pv1 pr3 f6 lh-copy mid-gray">Amount(BSV): </label>
          <div class="dtc pv1">
            <input type="text"
              class="input-reset w-100 pv1 ph2 f6 lh-copy fw6 silver bg-light-gray ba bw2 b--light-gray br1"
              :value="amount"
              @change="amount = $event.target.value"
            />
          </div>
        </div>
        <div class="dt-row">
          <label class="dtc pv1 pr3 f6 lh-copy mid-gray">Label: </label>
          <div class="dtc pv1">
            <input type="text"
              class="input-reset w-100 pv1 ph2 f6 lh-copy fw6 silver bg-light-gray ba bw2 b--light-gray br1"
              :value="label"
              @change="label = $event.target.value"
            />
          </div>
        </div>
      </form>

      <RelayOne
        to="1Pwmd4RCoTbYP6tLWVoDcys1GW5chsve8C"
        :amount="amount"
        :label="label"
        currency='BSV'
        success-message="Yehah!"
        @payment="onPayment"
        @error="onError"
      />

      <pre class="ph4 pv3 code f6 fw7 lh-copy bg-light-gray dark-pink" v-show="payment">{{ payment }}</pre>

      <p class="mv3 f6 lh-copy mid-gray"><em>Disclaimer: This is a real RelayOne. Sliding it will send me your money.</em> <span class="f3 v-mid">🤑</span></p>
    </div>

    <h3 class="mt4 mb2 ph4 f4 lh-title">Installation</h3>

    <pre class="ph4 pv3 code f6 lh-copy bg-dark-gray washed-yellow ws-normal"><code>
      npm install vue-relayone --save
    </code></pre>

    <h3 class="mt4 mb2 ph4 f4 lh-title">Usage</h3>

    <pre class="ph4 pv3 code f6 lh-copy bg-dark-gray washed-yellow"><code>{{ usageExample }}</code></pre>

    <div class="ph4">
      <h3 class="mt4 mb2 f4 lh-title">Find out more</h3>

      <ul class="pl3 f5 lh-copy">
        <li><a href="https://github.com/baryon/vue-relayone" class="link blue hover-red">Github page</a></li>
        <li><a href="https://one.relayx.io/" class="link blue hover-red">RelayOne website</a></li>
        <li><a href="https://docs.relayx.io/" class="link blue hover-red">RelayOne docs</a></li>
      </ul>

      <h3 class="mt4 mb2 f4 lh-title">License</h3>

      <p class="mv0 f5 lh-copy">vue-relayone is open source and released under the <a href="https://github.com/baryon/vue-relayone/blob/master/license.md" class="link blue hover-red">MIT License</a>.</p>
      <p class="mv0 f5 lh-copy">Copyright &copy; 2020 ChainBow. Inspire from libitx's vue-money-button. </p>
    </div>
  </div>
</template>

<script>
import RelayOne from 'components/RelayOne.vue'
import usage from 'demo/usage.txt'

export default {
  data() {
    return {
      amount: '0.001',
      label: 'Send some loot',
      payment: null
    }
  },

  computed: {
    tipLabel() {
      return `$${ this.amount } ${ this.label }`;
    },
    usageExample() {
      return usage;
    }
  },

  methods: {
    onPayment(payment) {
      console.log('onPayment event:', payment)
      this.payment = payment;
    },
    onError(error) {
      console.log('onError event:', error)
    }
  },

  components: {
    RelayOne
  }
}
</script>

<style scoped>
input:focus {
  color: #E7040F;
  border-color: #96CCFF;
  outline: none;
}
</style>