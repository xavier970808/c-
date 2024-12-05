<template>
  <a-radio-group type="button" v-model="size">
    <a-radio value="mini">mini</a-radio>
    <a-radio value="small">small</a-radio>
    <a-radio value="medium">medium</a-radio>
    <a-radio value="large">large</a-radio>
  </a-radio-group>
  <a-space size="large">
    <a-avatar :size="64">
      <img
        alt="avatar"
        src="https://images.1111.com.tw/oad/69392802.jpg"
      />
    </a-avatar>
  </a-space>
  <a-descriptions style="margin-top: 20px" :data="data" :size="size" title="Creator Information" :column="1"/>
  <a-descriptions style="margin-top: 20px" :data="data_1" :size="size" title="Creator Information" :column="1"/>
  <a-descriptions style="margin-top: 20px" :data="data_2" :size="size" title="Creator Information" :column="1"/>
</template>

<script>
import { IconUser } from '@arco-design/web-vue/es/icon';  // 引入 Arco Design 的 IconUser 圖標元件

import { ref } from 'vue';  // 引入 Vue 3 的 ref，讓我們可以創建響應式變數

export default {
  components: { IconUser },  // 註冊 IconUser 元件，使其可以在模板中使用


  setup() {
    // 使用 Vue 3 的 Composition API，這是 setup 函數內部邏輯

    // 創建一個名為 size 的響應式變數，並設置初始值為 'medium'
    const size = ref('medium');

    // 設置一個名為 data 的數據陣列，包含多個對象，每個對象代表用戶資訊的標籤和值
    const data = [{
      label: 'Name',  // 用戶的名字
      value: '黃子恒',  // 名字為 Socrates
    }, {
      label: 'Mobile',  // 用戶的手機號
      value: '0989-190-635',  // 手機號為 123-1234-1234
    }, {
      label: 'School',  // 用戶的家鄉
      value: 'Wego',  // 家鄉為北京
    }, {
      label: 'Class',  // 班級
      value: '二辛' 
    }];

    const data_1 = [{
      label: 'Name',  // 用戶的名字
      value: '鄒佳祐',  // 名字為 Socrates
    }, {
      label: 'Mobile',  // 用戶的手機號
      value: '',  // 手機號為 123-1234-1234
    }, {
      label: 'School',  // 用戶的家鄉
      value: 'Wego',  // 家鄉為北京
    }, {
      label: 'Class',  // 班級
      value: '二辛' 
    }];

    const data_2 = [{
      label: 'Name',  // 用戶的名字
      value: '陳禹睿',  // 名字為 Socrates
    }, {
      label: 'Mobile',  // 用戶的手機號
      value: '',  // 手機號為 123-1234-1234
    }, {
      label: 'School',  // 用戶的家鄉
      value: 'Wego',  // 家鄉為北京
    }, {
      label: 'Class',  // 班級
      value: '二辛' 
    }];

    // 返回 data 和 size，使其能夠在模板中使用
    return {
      data,data_1,data_2,
      size
    }
  },
}
</script>
