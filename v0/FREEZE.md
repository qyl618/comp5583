# V0 freeze record

> Hashes below were computed on **2026-10-21 14:47 (UTC+8)** for the current build (files dated 14:43-14:44).
> If any file in this folder changes again, recompute and replace them — otherwise this record no longer
> describes what is being marked.

- **Frozen at:** 2026-10-21 __:__ (UTC+8)   <!-- fill the clock time when you finish -->
- **Prompt used:** templates/01_system_prompt_QuYaolin.md
- **Prompt SHA256:** bd45915728dd6780bd68e60f0f40fc9d...
- **Model:** DeepSeek-V4.1-Flash (DeepSeek web chat)
- **Deployed at:** <!-- https://.../v0/ -->

## Build history

| Build | Generated | Status | Note |
|---|---|---|---|
| 1 | 2026-10-21 13:38 | superseded | First build. Four sections and four nav links present, but the Contact section still showed "Contact details withheld by request." It was never frozen; it was replaced before any scores were taken. |
| 2 | 2026-10-21 14:43 | **V0 (frozen)** | Regenerated from the finalised prompt. Contact now carries a mailto link. This is the build that is scored throughout Tasks 2 and 3. |

## File hashes (SHA256)

| File | SHA256 |
|---|---|
| index.html | C7F1660D603F74330A62029E9458B12B08E9FAEA44CC873F5FD8989B1DDE98AA |
| styles.css | D526EB909BD00336A9CD4D071E472A9BB0D5C03528BB53B534A47AA416BCBA2E |
| script.js | CB79387F20626422A7FEAA58694BF5BE4FBB75CA12C12CEDCDBE49981D624529 |

Recompute with:

```powershell
Get-FileHash ./submission/website/v0/*.* -Algorithm SHA256
```

## Structural checks passed at freeze time

| Check | Result |
|---|---|
| Four sections with ids home / about / projects / contact | pass |
| Four navigation links, every anchor resolves to an existing id | pass |
| Theme toggle present (`aria-pressed`, state in `localStorage`) | pass |
| Two `<details>` project entries | pass |
| Contact shows a `mailto:` link | pass |
| Palette limited to #000000 / #FFFFFF / #111111 / #767676 | pass |
| `scroll-padding-top` present (no heading hidden under the sticky header) | pass |
| `prefers-reduced-motion` handled in CSS | pass |
| No student ID anywhere in the source | pass |

## Essential repairs applied before freezing

| # | Symptom | Prompt sent | Change made | Why it was essential |
|---|---|---|---|---|
| 1 | Build 1 displayed "Contact details withheld by request." after the contact option had been decided | Regenerated the site from the finalised prompt, which names the address explicitly | Contact section now shows a `mailto:835886046@qq.com` link with the address as visible text | The brief requires a usable contact option; a placeholder does not satisfy it |

## Evidence retained

Evidence for this version is source-based; no image or photo evidence is used.

| Artifact | Path |
|---|---|
| Page structure and content | submission/website/v0/index.html |
| Palette, type scale and spacing | submission/website/v0/styles.css |
| Interaction behaviour | submission/website/v0/script.js |
| File integrity | the SHA256 table above |

**This version must not change after this point.**
