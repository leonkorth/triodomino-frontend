import {mount} from "@vue/test-utils"
import Navbar from '@/components/Navbar'
import App from '@/App'


describe('Testing HomeView.vue',() => {
    it('text', () => {
      // when
      const wrapper = mount(App)

      // then
      const navbar = wrapper.findComponent(Navbar)
      expect(navbar.exists()).toBeTruthy()
    })
})
