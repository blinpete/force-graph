import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

// @unocss-include
export default defineConfig({
  shortcuts: {
    'border-main': 'border-gray-400 border-opacity-30',
    'border-subtle': 'border-gray-400 border-opacity-10',
    'bg-main': 'bg-white dark:bg-[#121212]',
    'bg-active': 'bg-gray-400/10',
    'bg-subtle': 'bg-gray-400/3',
    'text-main': 'text-[#121212] dark:text-[#ddd]',
    'text-subtle': 'text-[#656565] dark:text-[#909090]',

    'link': [
      'underline-dashed underline-1.5 underline underline-offset-3',
      'underline-[#959595] dark:underline-[#555]',
      'text-subtle font-400 hover:text-main hover:underline-current',
    ].join(' '),
  },
  presets: [
    presetUno(),
    presetAttributify(),

    // https://unocss.dev/presets/icons
    presetIcons({
      scale: 1.2,
      extraProperties: {
        display: 'block',
      },
    }),

    presetWebFonts({
      fonts: {
        sans: 'Averia Sans Libre:300,700',
      },
      processors: createLocalFontProcessor(),
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
