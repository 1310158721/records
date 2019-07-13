<template>
  <el-container class='wrapper'>
    <el-header class='wrapper-header'>
      <r-header />
    </el-header>
    <el-container class='wrapper-section'>
      <r-aside />
      <div class='wrapper-content'>
        <div class='wrapper-content-tab'></div>
        <div class='wrapper-content-shadow'>
          <router-view></router-view>
        </div>
      </div>
    </el-container>
  </el-container>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import RHeader from '@/components/global/header/index.vue';
import RAside from '@/components/global/aside/index.vue';
import * as globalApi from '@/http/apis/global';

@Component({
  name: 'App',
  components: {
    RHeader,
    RAside
  }
})
export default class App extends Vue {}
</script>

<style lang='less' scoped>
.wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  &-header {
    max-height: 64px;
    padding: 0;
  }
  &-content {
    flex: 1;
    overflow-y: hidden;
    height: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
    &-tab {
      height: 32px;
      background: red;
      margin-bottom: 10px;
    }
    &-shadow {
      border-radius: 5px;
      overflow-y: scroll;
      overflow-x: hidden;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
      min-height: calc(100% - 32px - 10px);
      max-height: calc(100% - 32px - 10px);
      position: relative;
    }
  }
  &-section {
    padding: 0;
    height: calc(100vh - 64px);
    display: flex;
    flex-direction: row;
  }
}
</style>
