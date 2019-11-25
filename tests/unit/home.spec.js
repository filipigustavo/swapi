import { shallowMount } from '@vue/test-utils'
import Home from '@/pages/Home'

describe('Home', () => {
  it('renders Home page', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
