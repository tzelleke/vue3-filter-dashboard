import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TheGrid from '../TheGrid.vue'

describe('TheGrid', () => {
  it('renders properly', () => {
    const wrapper = mount(TheGrid)
    expect(wrapper.text()).toContain('Laureate')
  })
})
