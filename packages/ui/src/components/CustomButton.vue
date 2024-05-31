<template>
  <div>
    <CvButton
    class="!flex !items-center !gap-2 !button !justify-center"
    :class="[iconPadding, contentCentered]"
    :kind="kind"
    :size="size"
    :disabled="disabled"
    @click="emit('click')"
  >
    <slot>{{ text }}</slot>
    <span v-if="loading" aria-label="Loading..." role="status">
      <svg class="h-4 w-4 animate-spin" viewBox="3 3 18 18">
        <path
          class="fill-gray-200"
          d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
        />
        <path
          class="fill-gray-800"
          d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
        />
      </svg>
    </span>
  </CvButton>
  </div>
</template>

<script setup lang="ts">
import 'carbon-components/css/carbon-components.css';
import CvButton from '@carbon/vue/src/components/CvButton';
import {computed, onMounted, ref} from 'vue';

type ButtonKinds = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger' | 'danger-ghost' | 'danger-tertiary'
type ButtonSizes = 'default' | 'field' | 'sm' |'lg' | 'xl'

interface CustomButtonProps {
  icon?: string;
  kind?: ButtonKinds;
  text?: string;
  size?: ButtonSizes;
  disabled?: boolean;
  centered?: boolean;
  loading?: boolean;
}

interface CustomButtonEvents {
  (e: 'click'): void;
}

const props = withDefaults(defineProps<CustomButtonProps>(), {
  icon: '',
  kind: 'primary',
  text: 'Button',
  size: 'default',
  disabled: false,
  centered: false,
  loading: false
});

const emit = defineEmits<CustomButtonEvents>();

const test = ref('primary')

onMounted(() => {
  setInterval(() => {
    const kinds: ButtonKinds[] = ['primary', 'secondary', 'tertiary', 'ghost', 'danger', 'danger-ghost', 'danger-tertiary'];
    const randomIndex = Math.floor(Math.random() * kinds.length);
    test.value = kinds[randomIndex];
  }, 1000);
});


const iconPadding = computed(() => props.icon ? '!px-4' : '');
const contentCentered = computed(() => props.centered ? '!justify-center' : '!justify-between');
</script>