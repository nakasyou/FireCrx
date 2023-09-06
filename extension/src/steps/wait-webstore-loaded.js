/**
 * Wait webstore load
 * @returns Promise
 */
export const waitWebstoreLoaded = () => new Promise((resolve) => {
  const intervalId = setInterval(() => {
    if (document.getElementsByClassName("e-f-w-Va").length !== 0) {
      clearInterval(intervalId)
      resolve()
    }
  }, 100)
})
