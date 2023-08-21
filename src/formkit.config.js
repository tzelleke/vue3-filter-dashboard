import { generateClasses } from '@formkit/themes'
import formkitTheme from '@/assets/formkitTheme'
import { caretDown, search } from '@formkit/icons'
import { createAutoAnimatePlugin } from '@formkit/addons'

const config = {
  config: {
    classes: generateClasses(formkitTheme),
  },
  icons: {
    caretDown,
    search,
  },
  plugins: [createAutoAnimatePlugin()],
}

export default config
