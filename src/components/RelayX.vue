<template>
  <div class="v-relayone-outer" :style="size">
    <div ref="button" class="v-relayone-inner" />
    <Loader v-show="loading" />
  </div>
</template>

<script>
import config from '../config'
import scriptLoader from '../script-loader'
import Loader from './Loader.vue'

export default {
  props: {
    to:               [String, Number],
    amount:           [String, Number],
    editable:         { type: Boolean, default: undefined },
    currency:         { type: String, default: 'USD' },
    label:            { type: String, required: true },
    successMessage:   String,
    opReturn:         String,
    outputs:          { type: Array, default: () => [] },
    //cryptoOperations: Array,
    clientIdentifier: String,
    buttonId:         true,
    buttonData:       true,
    type:             { type: String, default: 'buy' },
    devMode:          { type: Boolean, default: undefined },
    disabled:         { type: Boolean, default: undefined }
  },

  data() {
    return {
      loading: true,
      size: {
        width: '280px',
        height: '50px'
      }
    }
  },

  computed: {
    params() {
      return {
        to:                 this.to,
        amount:             this.amount,
        editable:           this.editable,
        currency:           this.outputs.length || (this.cryptoOperations && this.cryptoOperations.length) ? undefined : this.currency,
        label:              this.label,
        successMessage:     this.successMessage,
        opReturn:           this.opReturn,
        outputs:            this.outputs.length ? this.outputs : undefined,
        //cryptoOperations:   this.cryptoOperations,
        clientIdentifier:   this.clientIdentifier,
        buttonId:           this.buttonId,
        buttonData:         this.buttonData,
        type:               this.type,
        devMode:            this.devMode,
        disabled:           this.disabled,
        onLoad:             (...args) => {
          setTimeout(_ => this.loading = false, 1000)
          this.$emit('load', ...args)
        },
        onPayment:          (...args) => { this.$emit('payment', ...args) },
        onError:            (...args) => { this.$emit('error', ...args) },
        //onCryptoOperations: (...args) => { this.$emit('cryptoOperations', ...args) }
      }
    }
  },

  mounted() {
    this.refreshRelayOne()
    window.addEventListener('message', this.handleMessage, false)
  },

  watch: {
    params: {
      deep: true,
      handler(val) {
        this.refreshRelayOne()
      }
    }
  },

  methods: {
    refreshRelayOne() {
      scriptLoader.load().then(mb => {
        mb.render(this.$refs.button, this.params)
      })
    },

    handleMessage(e) {
      if (e.origin === config.iframeOrigin) {
        // if ( e.data.v1.topic === 'ready' ) {
        //   if (this.$refs.button) {
        //     this.size = {
        //       width:  this.$refs.button.offsetWidth + 'px',
        //       height: this.$refs.button.offsetHeight + 'px'
        //     }
        //   }
        // }
      }
    }
  },

  components: {
    Loader
  }
}
</script>

<style>
.v-relayone-outer {
  position: relative;
  display: inline-block;
}

.v-relayone-inner {
  z-index: 1;
}
</style>