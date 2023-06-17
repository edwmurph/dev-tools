# dev-tools

My dev tools CLI

## Getting Started

Add the following to your .zshrc (tweaks path to repo + node version manager command depending on your setup):

```
function dt() {
  (cd ~/code/personal/dev-tools && fnm use && node index.mjs "$@")
}
```
