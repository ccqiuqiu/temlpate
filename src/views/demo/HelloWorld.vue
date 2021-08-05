<template>
  <div class="hello">
    <el-button @click="onClick">Dialog示例</el-button>
    <el-button @click="onOpenTab">打开tab页</el-button>
    <el-button @click="onOpenTab2">打开tab页</el-button>
    <el-button @click="onReplaceTab">替换当前tab页</el-button>
    <p class="m-v-10">
      图标示例：
      <qx-icon name="demo"></qx-icon>
      <qx-icon name="arrow"></qx-icon>
    </p>

  </div>
</template>

<script>
import Logo from '../Logo'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
    }
  },
  created() {
    console.log('created')
  },
  methods: {
    async onClick() {
      this.$utils.dialog('标题', <Logo/>, {
        btn: [{text: '关闭'}],
        onClose: () => {
          console.log('关闭了')
        }
      })
    },
    onOpenTab() {
      this.$tab.add('/mainData/sss?newTab=false&id=' + Math.random(), '新标签页')
    },
    onOpenTab2() {
      this.$tab.add('/mainData/aaa?id=' + Math.random(), '新标签页')
    },
    onReplaceTab() {
      this.$tab.replace('/mainData/product', '新标签页')
    },
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
