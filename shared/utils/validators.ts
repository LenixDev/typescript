export const isValidName = (name: string): boolean => {
  return name.length >= 3 && name.length <= 20
}
