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
    <form-create
      v-model="fApi"
      :rule="rule"
      :option="option"></form-create>
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
      fApi: null,
      rule: [
        {type: 'input', field: 'd7k1m82b0rx97', title: '输入框', info: '23', col: {span: 12}},
        {type: 'input', field: 'u1g1m82bklq4k', title: '输入框', info: {info: '243321', style: 'color: red'}, col: {span: 12}},
        {
          type: 'checkbox',
          field: 'qx41m82b0wspy',
          title: '多选框',
          info: '',
          options: [
            {value: '1', label: '选项1'},
            {value: '2', label: '选项2'}
          ],
        },
      ],
      option: {
      }
    }
  },
  created() {
    console.log('created1')
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
      this.$tab.replace('/mainData/aaa', '新标签页')
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
