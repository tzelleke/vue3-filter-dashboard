import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAtom,
  faBook,
  faDove,
  faFlaskVial,
  faHeartPulse,
  faMoneyCheckDollar,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faAtom,
  faBook,
  faDove,
  faFlaskVial,
  faGithub,
  faHeartPulse,
  faMoneyCheckDollar,
  faMoon,
  faSun
)

export default (app) => {
  app.component('FontAwesomeIcon', FontAwesomeIcon)
}
