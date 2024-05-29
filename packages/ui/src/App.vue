<script setup>
  import { ref } from 'vue';
  import CustomButton from "./components/CustomButton.vue";

  const yourName = ref('');
  const visible = ref(false);
  function onClick() {
    visible.value = true;
  }
  function modalClosed() {
    visible.value = false;
  }
</script>

<template>
  <div class="sample" id="me">
    <h1>Example use of @carbon/vue</h1>
    <CvTextInput
      label="Who are you?"
      v-model="yourName"
      placeholder="your name"
    />
    <CustomButton :text="`Hello ${yourName}`" @click="onClick"></CustomButton>
    <cv-modal :visible="visible" @modal-hidden="modalClosed">
      <template #title>Welcome to @carbon/vue {{yourName}}</template>
      <template #content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, seed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </template>
    </cv-modal>
  </div>
</template>

<style scoped lang="css">
  .sample {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    margin: 5% auto;
  }
  .sample > div {
    margin: 30px 0;
  }
</style>