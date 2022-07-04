import { mount } from '@vue/test-utils'
import Navbar from '@/components/Navbar'
import App from '@/App'

describe('Testing App.vue', () => {
  it('should have navbar component', () => {
    const wrapper = mount(App)

    const navbar = wrapper.findComponent(Navbar)
    expect(navbar.exists()).toBeTruthy()
  })
})
