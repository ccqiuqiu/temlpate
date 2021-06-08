<template>
  <div>
    <qx-table border stripe
              :selected.sync="selected" :data="data" :columns="columns" :btn="btn" :form="form"
              autoHeight size="small">
      <span slot="aaa">dfsdfsd</span>
    </qx-table>

    <qx-v-grid
      ref="qxGrid"
      border
      show-overflow
      highlight-hover-row
      keep-source
      size="small"
      max-height="300"
      :tApi.sync="tApi"
      :edit-config="{trigger: 'click', mode: 'row', showStatus: true}"
      :columns="mColumns"
      :page="{layout: 'total, prev, pager, next, jumper'}"
      action="system/testPage"
    />
    <el-input-number v-model="aaa" :precision="1"/>
  </div>
</template>

<script>
export default {
  name: 'TableDemo',
  props: {
    msg: String
  },
  data() {
    return {
      tApi: null,
      aaa: 1,
      data: [],
      tableData: [{
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 2,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: 3,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        children: [{
          id: 31,
          date: '2016-05-01',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          id: 32,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }]
      }, {
        id: 4,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      tableData1: [{
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 2,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: 3,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        hasChildren: true
      }, {
        id: 4,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      columns: [
        // {type: 'selection', label: '序号'},
        {
          label: 'ID',
          prop: 'id',
          sortable: 'custom',
          children: [
            {label: '二级表头1', prop: 'p21'},
            {label: '二级表头2', prop: 'p22'},
          ]
        },
        {label: '权限字段', prop: 'p1'},
        {label: '默认隐藏', prop: 'p2'},
        {
          label: '名称',
          prop: 'name',
          filters: true,
          renderCell: (data) => {
            return <div>name: {data.cellValue}</div>
          },
        },
      ],
      selected: [],
      form: {
        rule: [
          {
            type: 'Input',
            title: '名称',
            field: 'abcCode',
          },
          {type: 'el-button', field: 'search', props: {type: 'primary'}, children: ['查询'], emit: ['click']},
          {type: 'el-button', field: 'clear', props: {type: 'primary'}, children: ['清空'], emit: ['click']},
        ],
      },
      form2: {
        rule: [
          {
            type: 'Input',
            title: '名称2',
            field: 'abcCode',
          },
          {type: 'el-button', field: 'search', props: {type: 'primary'}, children: ['查询'], emit: ['click']},
          {type: 'el-button', field: 'clear', props: {type: 'primary'}, children: ['清空'], emit: ['click']},
        ],
      },
      btn: [
        {slot: 'aaa'},
        {text: '弹窗', cb: this.dialog},
        {
          text: '新增',
          // loading: true,
          cb: (data) => {
            this.data.push({id: Math.random(), name: Math.random()})
          }
        },
      ],
      data1: [{name: 'name', age: 12, sex: '1'}],
      mColumns: [
        // { type: 'seq', title: '序号', width: 80 },
        {type: 'selection', label: '序号'},
        { field: 'name', title: 'ElInput', minWidth: 140, editRender: { name: 'ElInput' } },
        { field: 'age', title: 'ElInputNumber', width: 160, editRender: { name: 'ElInputNumber', props: { max: 35, min: 0, precision: 4 } } },
        {
          field: 'sex',
          title: 'ElSelect',
          width: 140,
          editRender: {
            name: 'ElSelect',
            options: [] // async () => await this.$store.dispatch('system/getDict', this.$c.dictCode.性别),
          }
        },
        {
          label: '操作',
          prop: 'action',
          fixed: 'right',
          width: 80,
          headerAlign: 'center',
          align: 'center',
          renderCell: ({row, updateData}) => <el-button size="mini" type="primary" plain vOn:click={() => updateData(row)}>更新</el-button>,
        },
      ],
    }
  },
  created() {
  },
  mounted() {
    setTimeout(() => {
      const data = Array.from({length: 38}, (v, k) => ({id: k, name: 'name' + k}))
      data[0].children = [{id: 676333, name: 'children'}]
      this.data = data
    }, 500)
  },
  methods: {
    dialog() {
      const dialog = this.$utils.dialog('标题', <qx-table columns={this.columns} form={this.form2} border stripe size="small"/>, {
        btn: [{
          text: '确定',
          cb: () => {
            dialog.disabled(true)
          }
        }],
      })
    },
  },
}
</script>

<style scoped lang="scss">
</style>
