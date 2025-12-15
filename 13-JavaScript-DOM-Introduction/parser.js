function parseHTML(html) {
  let i = 0

  function isAlpha(char) {
    return /[a-zA-Z]/.test(char)
  }

  function skipWhitespace() {
    while (html[i] === " " || html[i] === "\n") i++
  }

  function parseAttributes() {
    const attrs = {}

    while (i < html.length && html[i] !== ">") {
      skipWhitespace()

      let name = ""
      while (isAlpha(html[i])) {
        name += html[i++]
      }

      skipWhitespace()

      if (html[i] === "=") {
        i++ // skip =
        skipWhitespace()

        let quote = html[i++] // " or '
        let value = ""
        while (html[i] !== quote) {
          value += html[i++]
        }
        i++ // skip closing quote
        attrs[name] = value
      }
    }

    return attrs
  }

  function parseElement() {
    // skip <
    i++

    // tag name
    let tagName = ""
    while (isAlpha(html[i])) {
      tagName += html[i++]
    }

    // attributes
    const attributes = parseAttributes()

    // skip >
    i++

    const children = []

    while (!html.startsWith(`</${tagName}`, i)) {
      if (html[i] === "<") {
        children.push(parseElement())
      } else {
        let text = ""
        while (html[i] !== "<") {
          text += html[i++]
        }
        if (text.trim()) {
          children.push({
            type: "text",
            content: text
          })
        }
      }
    }

    // skip </tag>
    i += tagName.length + 3

    return {
      type: "element",
      tagName,
      attributes,
      children
    }
  }

  skipWhitespace()
  return parseElement()
}

/* =========================
   INPUT HTML STRING
   ========================= */

const html = `
<div class="box">
  Hello <span>World</span>
</div>
`

/* =========================
   PARSE + OUTPUT
   ========================= */

const dom = parseHTML(html)
console.log(JSON.stringify(dom, null, 2))
