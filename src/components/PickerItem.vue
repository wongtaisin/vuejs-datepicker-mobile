<template>
  <div class="m-picker-item">
    <div class="m-scroller-indicator" />
    <div @touchend="end" @touchmove="move" @touchstart="start" class="m-scroller-mask" />
    <div :style="domStyle" class="m-scroller-item-box">
      <!-- 使用 v-for 的标准语法，明确 item 为值，index 为索引 -->
      <div :key="index" class="m-scroller-item" v-for="(item, index) in d" ref="itemRefs">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { add, div, mul, rem, sub } from '../modules/util'

// 定义props
const props = defineProps({
  change: { type: Function },
  val: { type: [String, Number] },
  selType: { type: String },
  d: { type: Array, default: () => [] }
})

// 响应式变量
const startY = ref(0) // 初始化为数字类型
const endY = ref(0) // 初始化为数字类型
const dY = ref(0)
const itemKey = ref(0)
const domStyle = ref({ transform: 'translate3d(0, 0, 0)' })
const itemRefs = ref([])

// 计算属性
const itemHeight = computed(() => {
  if (itemRefs.value[0]) {
    return Number(window.getComputedStyle(itemRefs.value[0]).height.replace('px', '')).toFixed(2)
  }
  return 44 // 默认高度改为数字类型
})

const itemLen = computed(() => props.d.length)

// 封装获取匹配索引的方法，提高代码复用性
const getMatchIndex = val => {
  let index = 0
  props.d.forEach((v, k) => {
    if (Number(v.match(/\d+/)[0]) === Number(val)) {
      index = k
    }
  })
  return index
}

// 挂载时初始化
onMounted(() => {
  if (props.val) {
    moveTo(props.val)
  } else {
    dY.value = mul(itemHeight.value, 4)
    domStyle.value = { transform: `translate3d(0px, ${dY.value}px, 0px)` }
  }
})

// 方法定义 - 将scroll函数移到watch之前
const scroll = (y, t, suppressChange = false) => {
  const height = Number(itemHeight.value)
  let cTop = rem(y, height) > div(height, 2) ? height : 0
  y = add(sub(y, rem(y, height)), cTop)

  const maxY = mul(height, 4)
  if (y > maxY) y = maxY

  const minY = mul(5 - itemLen.value, height)
  if (y < minY) y = minY

  dY.value = y
  itemKey.value = Math.floor(div(sub(mul(height, 4), y), height))

  // 确保itemKey在有效范围内
  if (itemKey.value < 0) itemKey.value = 0
  if (itemKey.value >= itemLen.value) itemKey.value = itemLen.value - 1

  domStyle.value = {
    transform: `translate3d(0px, ${y}px, 0px)`,
    transition: `transform ${t}s cubic-bezier(0.1, 0.85, 0.25, 1)`
  }

  // 确保props.d[itemKey.value]存在再调用change
  if (!suppressChange) {
    if (props.d[itemKey.value] !== undefined && props.change) {
      props.change(props.d[itemKey.value], itemKey.value, props.selType)
    }
  }
}

// 监听d变化
watch(
  () => props.d,
  () => {
    if (props.val) {
      itemKey.value = getMatchIndex(props.val)
      dY.value = mul(4 - itemKey.value, itemHeight.value)
      // 更新 UI 定位但不回调 change，避免递归更新
      scroll(dY.value, 0.4, true)
    }
  },
  { immediate: true }
)

const start = e => {
  startY.value = e.touches[0].pageY
  domStyle.value = {
    transform: `translate3d(0px, ${dY.value}px, 0px)`,
    transition: 'none'
  }
}

const end = e => {
  endY.value = e.changedTouches[0].pageY
  const t = Math.sqrt(Math.abs(endY.value - startY.value)) / 10 // 去掉 parseInt，保留小数
  scroll(dY.value + endY.value - startY.value, t)
}

const move = e => {
  e.preventDefault()
  const currentDY = e.touches[0].pageY - startY.value
  domStyle.value = { transform: `translate3d(0px, ${dY.value + currentDY}px, 0px)` }
}

const moveTo = val => {
  itemKey.value = getMatchIndex(val)

  // 如果找不到匹配的值，默认选择第一个
  if (
    itemKey.value === 0 &&
    props.d.length > 0 &&
    Number(props.d[0].match(/\d+/)[0]) !== Number(val)
  ) {
    const foundIndex = props.d.findIndex(item => {
      const match = item.match(/\d+/)
      return match && Number(match[0]) === Number(val)
    })
    if (foundIndex !== -1) {
      itemKey.value = foundIndex
    }
  }

  dY.value = mul(4 - itemKey.value, itemHeight.value)
  scroll(dY.value, 0)
}
</script>
