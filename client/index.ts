import './nui'
import './exports'

console.log('[CLIENT] Resource started')

on('onResourceStop', (resourceName: string) => {
  if (resourceName === GetCurrentResourceName()) {
    console.log('[CLIENT] Resource stopped')
  }
})