<script setup>

</script>

<template>
  <div class="panel">
    <slot name="header"></slot>

    <div class="panel-content">
      <slot></slot>
    </div>

    <slot name="footer"></slot>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/variables' as *;

.panel {
  background-color: $neutral-200;
  border-radius: 8px;
  border: 1px solid $neutral-300;
  display: flex;
  flex-direction: column;
  padding: $detail-panel-padding;
  width: 100%;
  box-sizing: border-box;
  min-height: 100%;

    .panel-content {
      flex: 1;
      overflow-y: scroll;
      scroll-behavior: smooth;

      &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
