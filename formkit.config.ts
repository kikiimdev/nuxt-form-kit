import { defineFormKitConfig } from '@formkit/vue'
import { rootClasses } from './formkit.theme.ts'
import { genesisIcons } from '@formkit/icons'
import { createAutoAnimatePlugin } from '@formkit/addons'

export default defineFormKitConfig(() => {
  const config = useRuntimeConfig()

  const autoAnimate = createAutoAnimatePlugin(
    { 
      /* optional AutoAnimate config */
      // default:
      duration: 250,
      easing: 'ease-in-out',
    //   delay: 0,
    },
    { 
      /* optional animation targets object */
      // default:
      global: ['outer', 'inner'],
      form: ['form'],
      repeater: ['items'],
    }
  )

  return {
    plugins: [
        autoAnimate
    ],
    config: {
        rootClasses
    },
    icons: {
        ...genesisIcons
    }
  }
})