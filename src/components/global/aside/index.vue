<template>
  <div class='r-aside'>
    <el-menu
      :default-openeds='[asideOpenId]'
      :default-active='asideActiveIndex'
      class='r-aside-menu'
      :collapse='isCollapse'
      @open='open'
      @close="close"
      @select='select'
    >
      <div v-for='item in asideNavList' :key='item.key'>
        <template v-if='!item.children'>
          <el-menu-item :index='item.index'>
            <i :class='item.icon' />
            <span slot='title'>{{ item.title }}</span>
          </el-menu-item>
        </template>
        <template v-else>
          <el-submenu :index='item.index'>
            <template slot='title'>
              <i :class='item.icon'></i>
              <span class='submenu-title-text' slot='title'>{{ item.title }}</span>
            </template>
            <el-menu-item v-for='son in item.children' :index='son.index' :key='son.key'>
              <i :class='son.icon'></i>
              <span slot='title'>{{ son.title }}</span>
            </el-menu-item>
          </el-submenu>
        </template>
      </div>
    </el-menu>
    <i @click='collapseIconClick' :class='collapseIconClass' class='collapse-icon' />
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import * as localStorage from '@/utils/localStorage';

import {
  namespace
} from 'vuex-class';

const globelModule = namespace('global')

@Component

export default class RAside extends Vue {
  @globelModule.State('asideNavList') public asideNavList: any
  @globelModule.State('asideOpenId') public asideOpenId: any
  @globelModule.State('asideActiveIndex') public asideActiveIndex: any
  @globelModule.Mutation('setAsideNavList') public setAsideNavList: any
  @globelModule.Mutation('setAsideOpenId') public setAsideOpenId: any
  @globelModule.Mutation('setAsideActiveIndex') public setAsideActiveIndex: any

  public isCollapse: boolean = false

  get collapseIconClass() {
    return this.isCollapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'
  }

  public open(key: string) {
    localStorage.set('asideOpenId', key)
    this.setAsideOpenId(key)
  }

  public close(key: any) {
    localStorage.set('asideOpenId', '')
    this.setAsideOpenId('')
  }

  public select(key: string) {
    const asideActiveIndex = localStorage.get('asideActiveIndex')
    if (asideActiveIndex === key) {
      return
    }
    localStorage.set('asideActiveIndex', key)
    this.setAsideActiveIndex(key)
    this.$router.push({ name: key })
  }

  public collapseIconClick() {
    this.isCollapse = !this.isCollapse
  }

  public mounted() {
    const asideOpenId = localStorage.get('asideOpenId')
    const asideActiveIndex = localStorage.get('asideActiveIndex')
    this.setAsideNavList()
    this.setAsideOpenId(asideOpenId)
    this.setAsideActiveIndex(asideActiveIndex)
  }
}
</script>

<style lang='less' scoped>
.r-aside {
  position: relative;
  height: 100%;
  &-menu:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
    max-height: 100%;
  }
  .el-menu {
    border-right: none;
  }
  .el-menu--collapse {
    height: 100%;
    .submenu-title-text {
      display: none;
    }
    /deep/.el-icon-arrow-right:before {
      display: none;
    }
  }
  .collapse-icon {
    position: absolute;
    right: -20px;
    top: 50%;
    margin-top: -10px;
    width: 20px;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0 5px 5px 0;
    color: #ffffff;
    cursor: pointer;
  }
}
</style>

