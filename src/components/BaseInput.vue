<template>
  <div class="form-group">
    <label v-if="label" :for="id" class="base-input-label">
      {{ label }}
    </label>
    <input
        required
        :id="id"
        :type="type"
        :value="modelValue"
        @input="updateInput"
        class="base-input"
        :placeholder="placeholder"
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
    },
    placeholder: {
      type: String,
      default: 'Enter Value here...'
    }
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  }
};
</script>

<style scoped>
@import "@/assets/base.css";

.base-input-label {
  color: var(--vt-c-black);
  font-weight: 600;
  line-height: 1;
  font-size: 12px;
}

.base-input {
  padding: 7px;
  width: 327px;
  min-width:250px;
}

.form-group {
  display: grid;
  place-items: center;
  margin-top: 40px;
}
</style>