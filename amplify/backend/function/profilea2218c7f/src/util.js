module.exports.findComponent = (baselines, domain, item, type) => {
  const component = baselines.find(
    (bl) => bl.domain === domain && bl.item === item && bl.type === type
  )
  return component
}

module.exports.toEstimation = (component) => {
  return {
    domain: component.domain,
    item: component.item,
    type: component.type,
    value: component.value,
    unit: component.unit
  }
}

module.exports.toComponent = (rec) => {
  const dirAndDomain = rec.dirAndDomain.split('_')
  const itemAndType = rec.itemAndType.split('_')
  return {
    domain: dirAndDomain[1],
    item: itemAndType[0],
    type: itemAndType[1],
    value: rec.value,
    unit: rec.unit,
    citation: rec.citation
  }
}
