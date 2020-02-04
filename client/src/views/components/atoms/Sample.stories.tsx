import React from 'react'
import { Sample } from './Sample'

export default {
  title: 'Atoms',
  component: Sample
}

export const ToStorybook = () => <Sample />

ToStorybook.story = {
  name: 'サンプル'
}
