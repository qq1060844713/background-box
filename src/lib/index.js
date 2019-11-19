/* ========================================
 *  company : Dilusense
 *   author : Suxx
 *     date : 2019/11/19
 * ======================================== */

import BackgroundFrame from './BackgroundFrame.vue'

BackgroundFrame.install = function (Vue) {
    Vue.component(BackgroundFrame.name, BackgroundFrame)
}

// if (typeof window !== 'undefined' && window.Vue) {
//     window.Vue.use(ConvenienceImage);
// }
export default BackgroundFrame
