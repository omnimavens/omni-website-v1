export default defineNuxtPlugin(() => {
  const router = useRouter()

  router.afterEach((to) => {
    window.dataLayer?.push({
      event: 'pageview',
      page: to.fullPath
    })
  })
})
