import React from 'react'
import { Sample } from './Sample'

export default {
  title: 'Templates',
  component: Sample
}

export const ToStorybook = () => <Sample />

ToStorybook.story = {
  name: 'サンプル'
}
