export const setDynamicUrl = (path: string, opt: { [x: string]: string }) => {
  const pathNames = path.split('/')
  const names = pathNames.map((name) => {
    if (name.includes(':')) {
      const id = name.substring(name.indexOf(':') + 1)
      if (id in opt) return name.substring(0, name.indexOf(':')) + opt[id]
    }
    return name
  })
  return names.join('/')
}
