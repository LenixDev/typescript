declare global {
  function RegisterNuiCallback(
    event: string,
    callback: (data: any[], cb: (response: unknown) => void) => void
  ): void
}

RegisterNuiCallback('exampleCallback', async (data, callback) => {
  console.log('Received from UI:', data)
  callback({ success: true })
})

export {}
