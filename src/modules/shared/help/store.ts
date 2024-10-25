import { computed } from 'vue'
import { useRoute } from 'vue-router'

export const makeRefIsHelp = function () {
  const route = useRoute()

  return computed(() => {
    return !!route?.query?.help
  })
}
