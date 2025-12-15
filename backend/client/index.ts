const lib = exports.tr_lib.init()

exports('start', async () => {
  exports.tr_spawn.startCharacterProcess([298.5893, -581.2991, 43.260, 111.2940], [298.5893, -581.2991, 43.260, 111.2940])
})

lib.keybind.onPress('lalt', () => {
  console.log('lalt pressed')
})

on('onResourceStop', (resourceName: string) => {
  if (resourceName === GetCurrentResourceName()) {
    emitNet('tr_spawn/server/logout')
  }
})