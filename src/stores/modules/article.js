import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useArticle = defineStore('useArticle', () => {
  const articleContent = ref('<p>请开始您的创作</p>')
  const updateArticleVisible = ref(false)
  const currentArticleId = ref()

  return { articleContent, updateArticleVisible, currentArticleId }
})
