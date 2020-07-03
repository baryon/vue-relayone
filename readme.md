# vue-relayone

> An unofficial Vue.js component for the RelayOne Button.

Inspire from libitx's vue-money-button.

A Vue.js component that lets you integrate [RelayOne](https://one.relayx.io/)'s payment system into your app or web page.

## Installation

```sh
npm install vue-relayone --save-dev
# or
yarn add vue-relayone
```

## Usage

```Vue
<template>
  <div>
    <RelayOne
      to="YOUR BITCOIN ADDRESS"
      amount="0.5"
      currency="USD"
      label="Send some loot"
      @payment="handlePayment"
    />
  </div>
</template>

<script>
import RelayOne from 'vue-relayone'

export default {
  components: {
    RelayOne
  },

  methods: {
    handlePayment(payment) {
      // handle payment
    }
  }
}
</script>
```

## Properties

The following properties can be set on the component:

| Prop          | Type                      | Default |
|---------------|---------------------------|---------|
| `to`          | `String`                  | `null`  |
| `amount`      | `String` or `Number`      | `null`  |
| `editable`    | `Boolean`                 | `false` |
| `currency`    | `String`                  | `'USD'` |
| `label`       | `String`                  | `null`  |
| `successMessage` | `String`               | `null`  |
| `opReturn`    | `String`                  | `null`  |
| `outputs`     | `Array`                   | `[]`    |
| `clientIdentifier` | `String`             | `null`  |
| `buttonId`    | `String` or `Number`      | `null`  |
| `buttonData`  | `String` or `Number`      | `null`  |
| `type`        | `String` - `buy` or `tip` | `'buy'` |
| `devMode`     | `Boolean`                 | `false` |
| `disabled`    | `Boolean`                 | `false` |

An array of `outputs` can be set **instead of the `to`, `amount` and `currency` properties**. Each output output object has the following parameters:

| Name         | Type                      | Required           |
|--------------|---------------------------|--------------------|
| `address`    | `String`                  |                    |
| `userId`     | `String` or `Number`      |                    |
| `script`     | `String`                  |                    |
| `amount`     | `String`                  | :heavy_check_mark: |
| `currency`   | `String`                  | :heavy_check_mark: |


## Events

The component emits the following events:

| Event     |                                   |
|-----------|-----------------------------------|
| `load`    | Triggered on load                 |
| `payment` | Triggered on a successful payment |
| `error`   | Triggered on a payment error      |
| `cryptoOperations` | Callback returning the cryptoOperations object |

## License

vue-relayone is open source and released under the [MIT License](license.md).

Copyright (c) 2020 ChainBow, inspire from libitx's vue money button.
