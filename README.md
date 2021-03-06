# [jomsh.cc][1]—web root

## Link page, all the rage

These are everywhere now, and they make a lot of sense. They’re like a return to
the [90’s homepage](https://www.cameronsworld.net/), but no blinking marquees.

Makes for a nice, bite-sized project to practice web development, but with
enough visibility to follow all the way through with fit and finish.

[1]: https://jomsh.cc

## GitHub Pages DNS setup

  - `jomsh.cc`—`ALIAS` record results in generated `A` records for
    `jomshcc.github.io` (`CNAME` flattening)
  - `www.jomsh.cc`—`CNAME` to `jomshcc.github.io` (and then
    automatically redirects to `jomsh.cc`)

Any Pages-enabled repositories without their own custom domain config (`CNAME`
file) will appear as subdirectories (`jomsh.cc/REPO/`).

## Render

<img src="https://user-images.githubusercontent.com/107401967/177189188-700361d6-3b3c-46d8-93f3-0a146855bf22.png"
     alt="Screenshot of rendered page"
     height=500>
