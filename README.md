# Say What Actually Broke

[![Say What Actually Broke](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![Rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/elpablo61/say-what-actually-broke-v2/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![Entries](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/elpablo61/say-what-actually-broke-v2/entries.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![Reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/elpablo61/say-what-actually-broke-v2/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)

One line of software error copy that tells the user the brutal truth about
what broke — and makes them laugh on the way. Entry for the
[Say What Actually Broke](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
bounty on make.fun.

## The line

> A typo in the config pointed the whole site at a server that does not exist. We are fixing the typo, not the person who made it.

## How it works

`main.ts` (Node 22) writes that single line to `/output/entry.txt`
(`$MAKEFUN_OUTPUT_DIR` when set). It guards the gate itself: the line must
be 1–200 characters and a single line, or the program refuses to run.

The line was picked by a real quality pass, not a first draft: five fresh
variants were written, judged pairwise against the house brief (names the
real failure, funny on one read, punchline last, shippable in a real
dialog), and only the winner was submitted.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
