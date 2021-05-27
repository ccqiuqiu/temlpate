<!--Created by 熊超超 on 2020/6/5.-->
<template>
  <div>
    <el-button @click="onClick">刷新tab</el-button>
    <el-button @click="onClose">关闭tab</el-button>
  </div>
</template>

<script>
export default {
  name: 'NewTab',
  data() {
    return {}
  },
  computed: {
    params() {
      return this.$route.params
    },
    query() {
      return this.$route.query
    },
    id() {
      return this.$attrs.tab.query.id
    }
  },
  mounted() {
    // console.log(this.$route)
  },
  watch: {
    id: {
      handler(val) {
        console.log(val)
      },
      immediate: true,
    }
  },
  methods: {
    onClick() {
      this.$tab.refresh('/mainData/product')
    },
    onClose() {
      this.$tab.close('/mainData/product', true)
    }
  }
}
</script>

<style lang="less" scoped></style>
