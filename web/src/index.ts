console.log('[WEB] UI initialized')

window.addEventListener('message', (event: MessageEvent) => {
  const { action, data } = event.data
  
  switch (action) {
    case 'show':
      document.getElementById('root')?.classList.remove('hidden')
      break
    case 'hide':
      document.getElementById('root')?.classList.add('hidden')
      break
  }
})
