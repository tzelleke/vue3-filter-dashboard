import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { _ } from 'lodash'

export const useNobelPrizesStore = defineStore('nobelPrizesStore', () => {
  const nobelPrizes = ref([])

  const totalPrizes = computed(() => nobelPrizes.value.length)

  const categories = computed(() =>
    _.reduce(
      nobelPrizes.value,
      (categories, award) => _.set(categories, award.category_slug, award.category),
      {}
    )
  )

  const awardYears = computed(() =>
    _.chain(nobelPrizes.value).map('award_year').uniq().sort().map(String).value()
  )

  const ageAtAwardRange = computed(() => {
    const min = _.chain(nobelPrizes.value).map('age_at_award').compact().min().value()
    const max = _.chain(nobelPrizes.value).map('age_at_award').compact().max().value()
    return { min, max }
  })

  async function loadData() {
    const data = (await import('@/data/flat-prizes-records.json')).default
    nobelPrizes.value = data
  }

  return { nobelPrizes, totalPrizes, categories, awardYears, ageAtAwardRange, loadData }
})
