<template>
  <!-- 展示外部图表 -->
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-icon svg-external-icon"
    :class="[className, '222']"
  ></div>
  <!-- 展示内部图表 -->
  <svg v-else class="svg-icon" :class="[className, '333']" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script lang="ts" setup>
import { defineProps, computed } from 'vue';
import { isExternal as external } from '../../utils/validate';
const props = defineProps({
  // icon图标
  icon: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: '',
  },
});
const { icon } = props;

/**
 * 判断当前图标是否为外部图标资源
 */
const isExternal = computed((): Boolean => external(icon));
/**
 * 处理外部图标的样式
 */
const styleExternalIcon = computed(() => ({
  mask: `url(${icon}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${icon}) no-repeat 50% 50%`,
}));
/**
 * 处理内部图标
 */
const iconName = computed(() => `#icon-${icon}`);
</script>
<style lang="less">
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
