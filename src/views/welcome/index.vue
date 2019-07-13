<template>
  <h2 class="welcome">
    欢迎来到 {{ headerActiveTitle }}
  </h2>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import {
  namespace
} from 'vuex-class';

const globelModule = namespace('global')

@Component

export default class Welcome extends Vue {
  @globelModule.State('headerActiveTitle') public headerActiveTitle: any
  @globelModule.Mutation('setHeaderActiveTitle') public setHeaderActiveTitle: any
  public mounted() {
    this.setHeaderActiveTitle()
  }
}
</script>

<style lang="less" scoped>
.welcome {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>


