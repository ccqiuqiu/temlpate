<!--Created by 熊超超 on 2021/3/30.-->
<template>
  <BasicTable @register="registerTable">
    <template #form-custom> custom-slot </template>

    <template #toolbar>
      <a-button type="primary" @click="getFormValues">获取表单数据</a-button>
      <a-button type="primary" @click="getTableSelected">获取表格选中</a-button>
    </template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent, onMounted } from 'vue';
  import { useTestStore } from '/@@/store/test';
  import { BasicColumn, BasicTable, FormSchema, useTable } from '/@/components/Table';

  export default defineComponent({
    name: 'TestPage',
    components: { BasicTable },
    setup() {
      const testStore = useTestStore();
      const schemas: FormSchema[] = [
        { field: 'field1', component: 'Input', label: '字段1' },
        { field: 'field2', component: 'Input', label: '字段2' },
        { field: 'field3', component: 'DatePicker', label: '字段3' },
        {
          field: 'field4',
          component: 'Select',
          label: '字段4',
          componentProps: {
            options: [
              { label: '选项1', value: '1' },
              { label: '选项2', value: '2' },
            ],
          },
        },
        { field: 'field5', component: 'Select', label: '字段5' },
      ];
      const columns: BasicColumn[] = [
        { title: 'ID', dataIndex: 'id', fixed: 'left', width: 60 },
        {
          title: '姓名',
          dataIndex: 'name',
          width: 150,
          filters: [
            { text: 'Male', value: 'male' },
            { text: 'Female', value: 'female' },
          ],
          onFilter: (value: string, record: any) => record.name.indexOf(value) === 0,
        },
        { title: '地址', dataIndex: 'address' },
        { title: '编号', dataIndex: 'no', width: 150, sorter: true, defaultHidden: true },
        { title: '开始时间', width: 120, sorter: true, dataIndex: 'beginTime' },
        { title: '结束时间', width: 120, sorter: true, dataIndex: 'endTime' },
      ];
      const [registerTable, { getForm, getSelectRows }] = useTable({
        title: '列表',
        api: testStore.testPageAction,
        columns,
        showIndexColumn: false,
        useSearchForm: true,
        formConfig: {
          labelWidth: 100,
          baseColProps: {
            span: 8,
          },
          schemas,
        },
        showTableSetting: true,
        rowSelection: { type: 'checkbox' },
      });
      onMounted(async () => {
        const form = await getForm();
        form.setFieldsValue({ field1: '1234' });
        form.updateSchema({
          field: 'field5',
          componentProps: {
            options: [
              { label: '异步选项1', value: '1' },
              { label: '异步选项2', value: '2' },
            ],
          },
        });
        const data = await testStore.testDelAction('');
        console.log(data);
      });
      function getFormValues() {
        console.log(getForm().getFieldsValue());
      }
      function getTableSelected() {
        console.log(getSelectRows());
      }

      return {
        registerTable,
        getFormValues,
        getTableSelected,
      };
    },
  });
</script>

<style scoped></style>
