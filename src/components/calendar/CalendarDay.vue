<script setup>
import { computed } from 'vue'

const props = defineProps({
  date: {
    type: Date,
    required: true
  },
  isCurrentMonth: {
    type: Boolean,
    default: true
  },
  isSelected: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const isToday = computed(() => {
  const today = new Date()
  return today.toDateString() === props.date.toDateString()
})

const dayClasses = computed(() => {
  return {
    'current-month': props.isCurrentMonth,
    'other-month': !props.isCurrentMonth,
    'selected': props.isSelected,
    'today': isToday.value
  }
})

const dayNumber = computed(() => props.date.getDate())
</script>

<template>
  <div
    class="calendar-day"
    :class="dayClasses"
    @click="emit('click')"
  >
    <div class="day-header">
      <div class="day-number">{{ dayNumber }}</div>
      <slot name="counter"></slot>
    </div>
    <div class="day-content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/variables' as *;

.calendar-day {
  aspect-ratio: 1 / 1;
  background-color: $neutral-200;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: $transition-base;
  border: 1px solid $neutral-250;

  &.other-month {
    background-color: $neutral-250;

    .day-number {
      color: $neutral-500;
    }
  }

  &.selected {
    border: 1px solid $secondary-500;

    .day-number {
      color: $neutral-900;
      font-weight: $body-2-font-weight-semibold;
    }
  }

  &.today {
    .day-number {
      color: $neutral-100;
      font-weight: $body-2-font-weight-semibold;
      background-color: $secondary-500;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.day-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: $spacing-small;
  height: $spacing-large;
  min-height: $spacing-large;
}

.day-number {
  font-size: $body-2-font-size;
  font-weight: $body-2-font-weight-regular;
  color: $neutral-800;
  text-align: left;
  min-width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
}

.day-content {
  padding: 0 $spacing-small $spacing-small;
  height: calc(100% - #{$spacing-large});
  max-height: calc(100% - #{$spacing-large});
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: $spacing-xs;
}
</style>
