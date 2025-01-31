import { defineStore } from 'pinia'

export const useMetaStore = defineStore('metaStore', {
  state: () => {
    return {
      title: 'Gouy2的个人博客'
    }
  }
})
