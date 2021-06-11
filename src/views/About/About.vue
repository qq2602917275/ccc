<template>
  <div>
    <div style="margin-bottom: 20px;">
      <el-button size="small" @click="addTab(editableTabsValue)">添加</el-button>
    </div>
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      :editable="true"
      @edit="handleTabsEdit"
    >
      <el-tab-pane
        :key="item.name"
        v-for="(item, index) in editableTabs"
        :label="item.title"
        :name="item.name"
      >{{item.content}}</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Indexmodel from '../../axios/axios'
export default {
  components: {},
  data () {
    return {
      editableTabsValue: '小白瓶',
      editableTabs: [
      ],
      tabIndex: 2
    }
  },
  methods: {
    addTab (targetName) {
      const newTabName = ++this.tabIndex + ''
      this.editableTabs.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content'
      })
      this.editableTabsValue = newTabName
    },
    handleTabsEdit (targetName, action) {
      if (action === 'remove') {
        const tabs = this.editableTabs
        let activeName = this.editableTabsValue
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              const nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                activeName = nextTab.name
              }
            }
          })
        }
        this.editableTabsValue = activeName
        this.editableTabs = tabs.filter(tab => tab.name !== targetName)
      }
    }

  },
  mounted () {
    Indexmodel.getBB().then((data) => {
      this.editableTabs = data.data
    })
  }
}
</script>
<style lang="scss">
</style>
