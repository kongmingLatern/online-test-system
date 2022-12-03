<template>
  <a-select
    v-model:value="value"
    label-in-value
    style="width: 120px"
    :options="options"
    @change="handleChange"
    data-test="select"
  ></a-select>
</template>
<script lang="ts" setup>
import { getBasesByCurrentPage } from "@/api/request";
import { setReactiveValue } from "@/utils";
import { onMounted, reactive, ref, watchEffect } from "vue";

const value = ref<Record<string, any>>({
  value: "",
  baseId: "",
});
const totalPage = ref<number | undefined>();
const loading = ref<boolean>(false);

const selectBaseId = ref<string>("");

const emits = defineEmits<{
  (event: "change", value: string): void;
}>();
const options = reactive<any[]>([]);
onMounted(async () => {
  const res = await getBasesByCurrentPage(
    options as any,
    1,
    10,
    totalPage,
    loading
  );
  if (Array.isArray(res)) {
    value.value = setReactiveValue(res);

    selectBaseId.value = value.value[0].baseId;
  }
});

watchEffect(() => {
  emits("change", selectBaseId.value);
});

const handleChange = (value) => {
  const { baseId } = value.option;
  selectBaseId.value = baseId;
};
</script>
