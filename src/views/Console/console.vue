<template>
  <div class="console-main">
    <header class="console-header">
      <div class="console-header" v-if="showOther">
        <div style="flex: 2">LOGO</div>
        <div style="flex: 6">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item
              index="1"
              @click="
                () => {
                  this.$router.push({ name: 'ConsoleChild1' });
                }
              "
              >处理中心</el-menu-item
            >
            <el-submenu index="2">
              <template #title>我的工作台</template>
              <el-menu-item
                index="2-1"
                @click="
                  () => {
                    this.$router.push({ name: 'Console2' });
                  }
                "
                >选项1</el-menu-item
              >
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-submenu index="2-4">
                <template #title>选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>监控信息</el-menu-item>
            <el-menu-item
              index="4"
              @click="
                () => {
                  this.$router.push({ name: 'Console3' });
                }
              "
              >订单管理</el-menu-item
            >
          </el-menu>
        </div>
        <div style="flex: 1">
          <span
            @click="
              () => {
                this.showOther = !this.showOther;
              }
            "
            >Admin</span
          >
        </div>
      </div>

      <div class="header-right" v-else>
        <div>
          <i class="el-icon-s-home"></i>
          <br />
          <span>HOME</span>
        </div>
        <div>
          <i class="el-icon-pie-chart"></i>
          <br />
          <span>图标</span>
        </div>
        <div>
          <i class="el-icon-s-platform"></i>
          <br />

          <span>监控</span>
        </div>
        <div>
          <i class="el-icon-s-tools"></i>
          <br />

          <span>设置</span>
        </div>
        <div
          @click="
            () => {
              this.showOther = !this.showOther;
            }
          "
        >
          <i class="el-icon-user"></i>
          <br />

          <span>Admin</span>
        </div>
      </div>
    </header>
    <div
      id="eagleMapContainer"
      class="console-content"
      :style="{ height: contentHeight }"
    >
      <router-view />
    </div>
    <footer
      class="console-footer"
      @mousedown="dragEagle"
      :style="{ height: footerHeight }"
    >
      <i class="el-icon-arrow-up"></i>
    </footer>
  </div>
</template>

<script >
import { computed, defineComponent, reactive, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";
export default {
  data() {
    return {
      contentHeight: "calc(100vh - 80px)",
      footerHeight: "20px",
      showOther: true,
    };
  },
  methods: {
    dragEagle: function (e) {
      let _this = this;
      //得到点击时该地图容器的宽高：
      let targetDivHeight = parseInt(_this.footerHeight);
      let startY = e.clientY;
      document.onmousemove = function (e) {
        e.preventDefault();
        //得到鼠标拖动的宽高距离：取绝对值
        let distY = Math.abs(e.clientY - startY);
        //往右上方拖动：
        if (e.clientY + 5 < startY) {
          _this.footerHeight = targetDivHeight + distY + "px";
          _this.contentHeight = `calc(100vh - ${_this.footerHeight} - 60px)`;
        }
        //往左下方拖动：
        if (e.clientY - 5 > startY) {
          _this.footerHeight = targetDivHeight - distY + "px";
          _this.contentHeight = `calc(100vh - ${_this.footerHeight} - 60px)`;
        }

        if (parseInt(_this.footerHeight) >= 600) {
          _this.footerHeight = 600 + "px";
          _this.contentHeight = `calc(100vh - ${_this.footerHeight} - 60px)`;
        }
        if (parseInt(_this.footerHeight) <= 20) {
          _this.footerHeight = 20 + "px";
          _this.contentHeight = `calc(100vh - ${_this.footerHeight} - 60px)`;
        }
      };

      document.onmouseup = function () {
        document.onmousemove = null;
      };
    },
  },
  setup() {},
};
</script>

<style>
.console-main {
  width: 100%;
  overflow: hidden;
}
.console-header {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #545c64;
  flex-direction: row;
  color: white;
}
.header-right {
  position: absolute;
  right: 40px;
  color: white;
  display: flex;
}
.header-right span {
  color: white;
  font-size: 14px;
}
.header-right div {
  width: 40px;
  margin-right: 5px;
  cursor: pointer;
  padding: 8px 10px 0px;
  height: 52px;
}
.header-right div i {
  font-size: 24px;
}

.header-right div:hover {
  background-color: #000;
}
.header-right a:visited {
  color: rgb(255, 208, 75);
}
.console-content {
  width: 100%;
}
.console-footer {
  width: 100%;
  cursor: pointer;
  background-color: blue;
  position: relative;
}
</style>    