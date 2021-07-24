<template>
  <el-row class="tac" style="height: 100%" id="fullscreen">
    <el-col :span="3">
      <el-menu
        default-active="1"
        style="height: 100%"
        class="el-menu-vertical-demo"
      >
        <el-menu-item index="1" @click="fullScreen">
          <template #title>
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
        </el-menu-item>
        <el-menu-item
          index="2"
          @click="
            () => {
              this.$router.push({ name: 'ConsoleChild2' });
            }
          "
        >
          <i class="el-icon-menu"></i>
          <template #title>导航二</template>
        </el-menu-item>
        <el-menu-item
          index="3"
          @click="
            () => {
              this.$router.push({ name: 'ConsoleChild3' });
            }
          "
        >
          <i class="el-icon-document"></i>
          <template #title>导航三</template>
        </el-menu-item>
        <el-menu-item
          index="4"
          @click="
            () => {
              this.$router.push({ name: 'ConsoleChild4' });
            }
          "
        >
          <i class="el-icon-setting"></i>
          <template #title>导航四</template>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="21">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>
<script>
import { computed, defineComponent, reactive, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";
export default {
  methods: {
    fullScreen() {
      let element = document.getElementById("fullscreen");
      element.webkitRequestFullScreen();
    },
  },
};
</script>
<style>
#fullscreen {
  background-color: white;
}
</style>