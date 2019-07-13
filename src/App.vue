<template>
  <div style="width: 100vw; height: 100vh; background: rgba(0,0,0,.3);" v-loading="loading" v-if="loading"></div>
  <router-view v-else></router-view>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

import {
  namespace
} from 'vuex-class';

const globelModule = namespace('global')

@Component({
  name: 'App'
})

export default class App extends Vue {
  public loading: boolean = true

  @globelModule.Action('getNavDataList') public getNavDataList: any

  public created() {
    this.getNavDataList()
      .then(() => {
        setTimeout(() => {
          this.loading = false
        }, 1000)
      })
  }
}
</script>


<style lang='less' scoped></style>
