# Progress

## In progress
(nothing yet)

## Open / needs a human
(nothing yet)

## Done
- 2026-08-29: Re-fixed `multiply()` off-by-one bug (`a * b + 1` -> `a * b`) in
  `src/math.js`. This is the same bug fixed by PR #1, but PR #1 was closed
  without merging, so CI was still red on `main`. Verified locally
  (`node --test`, 4/4 pass), reviewer subagent verdict: PASS. Opened PR #2
  (branch `claude/fix-multiply-off-by-one-2`).
- 2026-08-29: Checked for other candidates — no open issues labelled `bug` or
  `maintenance`; no `npm audit` surface (project has no dependencies/lockfile).
