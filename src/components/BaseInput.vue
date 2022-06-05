<template>
  <div>
    <label v-if="label" :for="id" class="base-input-label">
      {{ label }}
    </label>
    <input
        :id="id"
        :type="type"
        :value="modelValue"
        @input="updateInput"
        class="base-input"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "text",
    }
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  }
};
</script>

<style>
@import "@/assets/base.css";

.base-input {
  border: 1px solid var(--vt-c-black-soft);
  padding: 5px;
  width: 45px;
}

.base-input-label {
  color: var(--vt-c-black);
  font-weight: 600;
  line-height: 1;
}
</style>