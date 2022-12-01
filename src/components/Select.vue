<dd template>
  <a-select
    v-model:value="value"
    label-in-value
    style="width: 120px"
    :options="options"
    @change="handleChange"
    data-test="select"
  ></a-select>
</dd>
<script lang="ts" setup>
import { getBasesByCurrentPage } from '@/api/request'
import type { SelectProps } from 'ant-design-vue'
import { onMounted, reactive, ref } from 'vue'

const value = ref<Record<string, any>>({ value: 'lucy1' })
const totalPage = ref<number | undefined>()
const loading = ref<boolean>(false)

const options = reactive<any[]>([])
onMounted(async () => {
  const res = await getBasesByCurrentPage(
    options as any,
    1,
    10,
    totalPage,
    loading
  )
  console.log(res)
})

const handleChange: SelectProps['onChange'] = value => {
  console.log(value) // { key: "lucy", label: "Lucy (101)" }
}
</script>
