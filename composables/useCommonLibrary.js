export function useCommonLibrary() {
  const { $api } = useNuxtApp()

  return {
    $api,
  }
}