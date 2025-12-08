// plugins/axios.js
import axios from 'axios'

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()

  const api = axios.create({
    baseURL: config.public.apiBaseUrl,
  })

  // Optional: add interceptors here
  // api.interceptors.request.use(config => {
  //   // Example: attach token from pinia or cookie
  //   const userStore = useUserStore();
  //   const isLoggedIn = userStore.isAuthenticated;
  //   if(isLoggedIn) {
  //     const token = userStore.accessToken;
  //     if(token) {
  //       config.headers.Authorization = `Bearer ${token}`
  //     }
  //     return config  
  //   } else {
  //     return config  
  //   }
  // })

   // Response Interceptor: Handle token expiration via the API's response (401)
   api.interceptors.response.use(
    response => {
      // If the response is successful, just return it
      return response
    },
    (error) => {
      const userStore = useUserStore()

      // Check for 401 Unauthorized error (this happens when the API returns 401 for expired token)
      if (error.response && error.response.status === 401) {
        // The token is likely expired, handle this by clearing the token and redirecting to login
        userStore.clearToken() // Clear token in your store (Pinia or Vuex)
        
        // Redirect user to /admin (login page)
        nuxtApp.$router.replace({ name: 'admin-login' })
      }

      // Propagate the error after handling
      return Promise.reject(error)
    }
  )

  // Make Axios instance globally available via $api
  nuxtApp.provide('api', api)
})
