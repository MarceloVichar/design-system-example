import './style.css'
import 'carbon-components/css/carbon-components.css';
import CustomButton from './components/CustomButton.vue'
import CustomInput from "./components/CustomInput.vue";

export default {
    install: (app: any) => {
        app.component('CustomButton', CustomButton)
        app.component('CustomInput', CustomInput)
    }
}

export { CustomButton, CustomInput }
// export { CustomButton}

// const uiPack = {
//   install(Vue) {
//       Vue.component('CustomButton', CustomButton)
//   }
// }
//
// export default uiPack
