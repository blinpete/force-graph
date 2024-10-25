import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
  },
  {
    rules: {
      'vue/no-v-text-v-html-on-component': 'off',
      'jsonc/sort-keys': 'off',
      'unocss/order-attributify': 'off',
      'no-console': 'off',
      'vue/no-undef-components': 'error',
    },
  },
)
