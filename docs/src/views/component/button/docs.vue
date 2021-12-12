<template>
  <q-button type="primary" icon="q-icon-arrow-down">主要</q-button>&nbsp;&nbsp;
  <q-button type="primary" icon="q-icon-loading">主要</q-button>&nbsp;&nbsp;
  <q-button type="primary" disabled>主要禁用</q-button>&nbsp;&nbsp;
  <q-button type="primary" state="success">主要成功</q-button>&nbsp;&nbsp;
  <q-button type="primary" state="success" disabled>主要成功</q-button
  >&nbsp;&nbsp;
  <q-button type="primary" state="warning">主要警告</q-button>&nbsp;&nbsp;
  <q-button type="primary" state="warning" disabled>主要警告</q-button
  >&nbsp;&nbsp;
  <q-button type="primary" state="danger">主要危险</q-button>&nbsp;&nbsp;
  <q-button type="primary" state="danger" disabled>主要危险</q-button
  >&nbsp;&nbsp;
  <br />
  <br />

  <q-button>次要</q-button>&nbsp;&nbsp;
  <q-button disabled>次要禁用</q-button>&nbsp;&nbsp;
  <q-button state="success">次要成功</q-button>&nbsp;&nbsp;
  <q-button state="success" disabled>次要成功</q-button>&nbsp;&nbsp;
  <q-button state="warning">次要警告</q-button>&nbsp;&nbsp;
  <q-button state="warning" disabled>次要警告</q-button>&nbsp;&nbsp;
  <q-button state="danger">次要危险</q-button>&nbsp;&nbsp;
  <q-button state="danger" disabled>次要危险</q-button>&nbsp;&nbsp;
  <br />
  <br />

  <q-button type="outline">线形</q-button>&nbsp;&nbsp;
  <q-button type="outline" disabled>线形禁用</q-button>&nbsp;&nbsp;
  <q-button type="outline" state="success">线形成功</q-button>&nbsp;&nbsp;
  <q-button type="outline" state="success" disabled>线形成功</q-button
  >&nbsp;&nbsp;
  <q-button type="outline" state="warning">线形警告</q-button>&nbsp;&nbsp;
  <q-button type="outline" state="warning" disabled>线形警告</q-button
  >&nbsp;&nbsp;
  <q-button type="outline" state="danger">线形危险</q-button>&nbsp;&nbsp;
  <q-button type="outline" state="danger" disabled>线形危险</q-button
  >&nbsp;&nbsp;
  <br />
  <br />

  <q-button type="text">文本</q-button>&nbsp;&nbsp;
  <q-button type="text" disabled>文本禁用</q-button>&nbsp;&nbsp;
  <q-button type="text" state="success">文本成功</q-button>&nbsp;&nbsp;
  <q-button type="text" state="success" disabled>文本成功</q-button>&nbsp;&nbsp;
  <q-button type="text" state="warning">文本警告</q-button>&nbsp;&nbsp;
  <q-button type="text" state="warning" disabled>文本警告</q-button>&nbsp;&nbsp;
  <q-button type="text" state="danger">文本危险</q-button>&nbsp;&nbsp;
  <q-button type="text" state="danger" disabled>文本危险</q-button>

  <br />
  <br />
  <q-button type="primary" :loading="loading" @click="showLoading"
    >加载中</q-button
  >&nbsp;&nbsp;
  <q-button :loading="loading" @click="showLoading">加载中</q-button
  >&nbsp;&nbsp;
  <q-button type="outline" :loading="loading" @click="showLoading"
    >加载中</q-button
  >&nbsp;&nbsp;
  <q-button type="text" :loading="loading" @click="showLoading">加载中</q-button
  >&nbsp;&nbsp;
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const loading = ref(false);
    return {
      loading,
      showLoading() {
        loading.value = true;

        setTimeout(() => {
          loading.value = false;
        }, 1000);
      },
    };
  },
});
</script>
