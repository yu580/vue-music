export function hasClass(el, className) {
  let reg = new RegExp("(^|\\s)" + className + "(\\s|$)")
  return reg.test(el.className)
}
/**
 * 给元素添加className
 * @param {需要添加class的dom对象} el
 * @param {需要添加的className} className
 */
export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }

  let newClass = el.className.split(" ")
  newClass.push(className)
  el.className = newClass.join(" ")
}
export function getData(el, name, val) {
  if (val) {
    return el.setAttribute(name, val)
  }
  return el.getAttribute(name)
}

let elementStyle = document.createElement("div").style

let vendor = (() => {
  let transformNames = {
    webkit: "webkitTransform",
    Moz: "MozTransform",
    O: "OTransform",
    ms: "msTransform",
    standard: "transform"
  }

  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }

  return false
})()

export function prefixStyle(style) {
  if (vendor === false) {
    return false
  }

  if (vendor === "standard") {
    return style
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}
