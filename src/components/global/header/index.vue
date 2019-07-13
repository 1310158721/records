<template>
  <el-menu
    :default-active="headerActiveIndex"
    class="r-header"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item v-for="item in headerNavList" :index="item.index" :key="item.key">
      {{ item.title }}
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import * as localStorage from '@/utils/localStorage';
import {
  namespace
} from 'vuex-class';

const globelModule = namespace('global')

@Component

export default class RHeader extends Vue {
  @globelModule.State('headerNavList') public headerNavList: any
  @globelModule.State('headerActiveIndex') public headerActiveIndex: any
  @globelModule.Mutation('setAsideNavList') public setAsideNavList: any
  @globelModule.Mutation('setAsideOpenId') public setAsideOpenId: any
  @globelModule.Mutation('setAsideActiveIndex') public setAsideActiveIndex: any
  @globelModule.Mutation('setHeaderActiveIndex') public setHeaderActiveIndex: any
  @globelModule.Mutation('setHeaderActiveTitle') public setHeaderActiveTitle: any

  public handleSelect(key: any, keyPath: any) {
    localStorage.set('headerActiveIndex', key)
    localStorage.set('asideOpenId', '')
    localStorage.set('asideActiveIndex', '')
    this.setAsideNavList()
    this.setAsideOpenId('')
    this.setAsideActiveIndex('')
    this.setHeaderActiveTitle()
    this.$router.push({ name: 'welcome' })
  }

  public mounted() {
    const headerActiveIndex = localStorage.get('headerActiveIndex')
    this.setHeaderActiveIndex(headerActiveIndex)
  }
}
</script>

<style lang="less" scoped>
.r-header {
  &.el-menu.el-menu--horizontal {
    border-bottom: none;
  }
}
</style>


