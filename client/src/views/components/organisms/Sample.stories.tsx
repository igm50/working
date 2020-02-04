import React from 'react'
import { Sample } from './Sample'

export default {
  title: 'Organisms',
  component: Sample
}

export const ToStorybook = () => <Sample />

ToStorybook.story = {
  name: 'サンプル'
}
