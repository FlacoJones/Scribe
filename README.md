# Scribe

Bringing the annotated Pali Tipitaka to life with English translation, morphology, annotations from Thanissaro Bhikku, and historical conext.

Loosely based on the structure of https://tipitaka.sutta.org/

## Design Considerations

The goal is to implement this in a pre-rendered fashion so that it can be hosted on a static file server.

Wherever possible, only bare HTML and CSS is used. JS is resorted to only as a last resort.

This includes heavy use of CSS attribute selectors like this:

```css
.word[data-pali]:before {
	content: "English: " attr(data-english) " Case: " attr(data-case);
	...
}
```

### Prompts

Powered by ChatGPT

Here is an example of the output HTML I want to pre-render from the JSON I will provide you next.

```html
  <body>
    <span
      class="word"
      data-pali="verena"
      data-case="Inst. Sg."
      data-english="enimty"
    >
      verena
      <div class="tooltip"></div>
    </span>
  </body>
```

## Information Structure

```
nikaya
- book
- - chapter
- - - verse
- - - - line
- - - - - - word
```

All of the above are Pali words as expressed in the `data-paliword` HTML attribute.

Each word should be a span.

## `data-`

`data-paliword`
`data-root`
`data-gender`
`data-case`
`data-conjugation`
`data-englishword`

## Translation

The translation below each line is that of Thanissaro Bhikkhu.