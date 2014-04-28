## First entry

This is a test of a blog post.

### What will it do?

This is a **Markdown** file. We will go through these steps:

* This file will be converted into `html`.
* The resulting HTML will be displayed in the layout, using the site's css rules.
* This conversion will happen in-memory: no actual `.html` file will be created. This means that we don't need to look at the ugly html.
* Possibly, we won't store these files as files, but just mongodb documents. There are pluses and minuses to this.

## Can we see some code?

Yeah!

```
// This is some code.

trait Functor f = map : (a -> b) -> f a -> f b;

impl Functor for Maybe = 
  map f = Nothing => Nothing
        | (Just a) => Just (f a);

foo = Just 1
bar = Nothing
println map (x => x + 1) foo
println map (x => x + 1) bar
```
