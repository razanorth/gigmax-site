# GigMax Claude Pack README

This folder gives you a clean handoff pack for Claude Code.

## Files
1. `gigmax-master-prompt.md`  
   The main instruction set for Claude.

2. `gigmax-prd-clean.md`  
   Clean markdown version of the PRD.

3. `gigmax-website-copy-template.md`  
   Fill this with final approved website copy before the build.

4. `gigmax-assets-and-references.md`  
   Fill this with screenshots, assets, logos, and visual references.

## Best way to use this in Claude Code
Paste the files in this order:

1. `gigmax-master-prompt.md`
2. `gigmax-prd-clean.md`
3. `gigmax-website-copy-template.md`
4. `gigmax-assets-and-references.md`

Then add this message underneath:

---

Build the GigMax website now.
Start with strategy extraction and a wireframe plan.
Then implement the site in React + Tailwind.
Do not invent proof.
Keep the site premium, restrained, and mobile-first.
Review the result against the acceptance criteria before finalizing.

---

## Recommended workflow
1. Fill in the copy template first.
2. Add every proof screenshot and asset you already have.
3. Give Claude the master prompt + PRD + copy + assets together in one shot.
4. Let Claude build V1.
5. Review only these 5 things first:
   - hero clarity
   - proof trustworthiness
   - case study readability
   - mobile feel
   - whether it feels like a real service brand instead of a deck

## Important note
The current pack is intentionally strict.
That is on purpose.
It should keep Claude from drifting into generic startup design or making things up.
