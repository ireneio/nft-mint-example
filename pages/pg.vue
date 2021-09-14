<template>
<v-container>
  <v-row>
    <v-col>playground</v-col>
  </v-row>
  <v-row>
    <v-col cols="12" sm="4">
      <v-btn @click="handleConnectWallet" :disabled="wallet.connected">{{ wallet.btnText }}</v-btn>
    </v-col>
    <v-col cols="12">
      <div>wallet address: {{ wallet.address }}</div>
      <div>contract address: {{ contract.address }}</div>
    </v-col>
    <v-col cols="12" sm="4">
      <v-btn @click="handleMint" :disabled="!wallet.connected">mint</v-btn>
    </v-col>
    <v-col cols="12">
      <div>result etherscan: {{ contract.mintResultUrl }}</div>
    </v-col>
  </v-row>
</v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { dataStore } from '~/store/index'
import wallet from '~/utils/wallet'
import alchemy from '~/utils/alchemy'

@Component({
  layout: 'default'
})
export default class Pg extends Vue {
  private contract = {
    address: process.env.CT_ADDRESS,
    mintResultUrl: ''
  }

  private wallet = {
    address: '',
    connected: false,
    btnText: 'connect wallet'
  }

  private async handleMint() {
    const request = await alchemy.mint({ image: 'https://imgur.com/a/X4lrstW', name: 'QAQ_2', description: 'cryface_emoji' })
    console.log(request)
    if (request.success) {
      this.contract.mintResultUrl = request.status
    }
  }

  private async handleConnectWallet() {
    const request = await wallet.connect()
    console.log(request)
    if (request.address !== '') {
      this.wallet.connected = true
      this.wallet.address = request.address
      this.wallet.btnText = 'wallet connected'
    }
  }

  private async checkWalletConnection() {
    const request = await wallet.isConnected()
    console.log(request)
    if (request.address !== '') {
      this.wallet.connected = true
      this.wallet.address = request.address
      this.wallet.btnText = 'wallet connected'
    }
  }

  private async created() {
    await this.checkWalletConnection()
    wallet.addWalletListener(this)
    await alchemy.createWeb3()
  }
}
</script>
