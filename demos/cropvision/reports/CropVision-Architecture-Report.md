# Phase 3 Architecture Checkpoint Report

## Purpose

This document is the Phase 3 architecture checkpoint and stabilization report.
It consolidates the accepted migration evidence, current runtime boundaries,
remaining compatibility debt, and the gates that were re-run on the checkpoint
baseline. It does not implement a new migration.

## Baseline

| Item | Value |
| --- | --- |
| Branch | `chore/phase-3-architecture-checkpoint` |
| Base branch | `main` |
| Base commit | `d83ca7d` |
| Date | 2026-06-30 |
| Working tree before | Clean |
| Phase 3 status | Functionally complete; ready to close after this checkpoint is reviewed and merged |

Latest relevant commits:

- `6b62bde` — Phase 3B legacy registry isolation.
- `18e3cb3` — Phase 3D.1 GridShell renderer boundary coverage.
- `f75440a` — Phase 3D.2 GridShell renderer migration.
- `884f94a` — Phase 3D.2 review and stabilization.
- `f19f702` — Phase 3E style-boundary plan.
- `d0653fd` — Phase 3F MapShell/StationShell lifecycle plan.
- `5205823` — Phase 3F.1 reachability guard.
- `315ac78` — Phase 3F.2 deprecation documentation.

The full Phase 3D.2 implementation commit
`f75440a7293cbdbc8a237869ae091cf669b0e645` is present in the
checkpoint history.

## Executive summary

Phase 3 achieved legacy GridShell isolation without breaking canonical Station.
The coherent GridShell renderer implementation now lives under
`App/src/modules/legacy/GridShell/`, while the old GridShell entry, config, hook,
compat, and widget paths remain explicit compatibility adapters.

`GridShell/styles.js` intentionally remains at its old `@core` path. It is a
temporary compatibility style contract, not a validated shared UI primitive.
Moving it now would create or hide an undesirable Agrivision-owner-to-legacy
dependency.

StationShell and MapShell, together with MapShell's private children, are frozen
compatibility artifacts. Tracked-source reachability and canonical Station
runtime checks pass, but hidden or external consumers remain unproven. No
deletion, movement, or deep-adapter retirement is approved.

Phase 4 should begin only after this checkpoint is reviewed and merged. Its
first slice should stabilize known runtime/test failures rather than continue
physical architecture movement.

## Phase 3 timeline

| Phase | Goal | Result | Source changed? | Gate result | Notes |
| --- | --- | --- | --- | --- | --- |
| 3B | Move legacy GridShell registries out of `@core` | Registry implementations moved to `legacy/GridShell/compat`; old paths became named-export adapters | Yes | Passed | Preserved registry exports and consumers |
| 3C | Decide whether wrappers should move independently | Standalone wrapper movement rejected | No | Planning accepted | Kept the renderer unit coherent |
| 3D.1 | Establish renderer boundary and behavior guards | Architecture and focused runtime coverage added | Tests only | Passed | Created the migration gate before source movement |
| 3D.2 | Move the coherent GridShell renderer unit | Renderer, config, hook, four owned widgets, and eleven owner wrappers moved under `legacy/GridShell` | Yes | Passed | All 18 old paths retained as explicit ESM adapters |
| 3D.2 review | Independently review and stabilize the migration | Exact file budget, adapter shape, implementation equivalence, and untouched scope verified | No | Passed | No source fix was required |
| 3E | Decide the style boundary | Keep `GridShell/styles.js` at the stable `@core` path for now | No | Planning accepted | Avoided speculative extraction and owner-to-legacy coupling |
| 3F | Decide the MapShell/StationShell lifecycle | Freeze the compatibility chain and require evidence before deletion | No | Planning accepted | Movement and deletion remained unapproved |
| 3F.1 | Prove tracked reachability and canonical Station absence | Static reachability guards and runtime absence assertion added | Tests only | Passed | Hidden/external consumers remain outside the proof |
| 3F.2 | Record the deprecation contract | StationShell, MapShell, and MapShell-only children documented as frozen | No | Documentation accepted | Deep NavWidget/MapWidget adapters remain required |

## Current architecture map

Canonical Station:

```text
/station/...
  -> App/app/(station)/_layout.web.js
  -> SoilzeProShell
  -> <Slot />
  -> Station owner pages
```

Active GridShell compatibility:

```text
(main) web/Electron
  -> old @core GridShell entry adapter
  -> legacy/GridShell renderer

Agrivision desktop
  -> AgrivisionShell
  -> old @core GridShell entry adapter
  -> legacy/GridShell renderer
```

Frozen MapShell compatibility:

```text
StationShell barrel
  -> StationShell
      -> MapShell
          -> old GridShell NavWidget adapter
          -> old GridShell MapWidget adapter
          -> MapSidebar
          -> MapDetailDrawer
          -> TimelineScrubber
```

Tracked source contains no canonical Station route edge into StationShell,
MapShell, or GridShell. StationShell is the only tracked importer of MapShell,
and MapShell is the only tracked importer of MapSidebar, MapDetailDrawer, and
TimelineScrubber.

## What moved

| Area | Old location | New location | Old path status | Verification |
| --- | --- | --- | --- | --- |
| GridShell registries | `@core/components/GridShell/compat/{contentRegistry,menuRoutes}.js` | `legacy/GridShell/compat/{contentRegistry,menuRoutes}.js` | Explicit named-export adapters | Export, key, route-literal, and boundary tests |
| GridShell renderer | `@core/components/GridShell/index.jsx` | `legacy/GridShell/index.jsx` | Named/default ESM adapter | Implementation-equivalence and adapter-shape tests |
| Layout config | `@core/components/GridShell/layoutConfig.js` | `legacy/GridShell/layoutConfig.js` | Five-name ESM adapter | Export and local-resolution tests |
| Layout hook | `@core/components/GridShell/hooks/useLayoutConfig.js` | `legacy/GridShell/hooks/useLayoutConfig.js` | Named ESM adapter | Export and local-import tests |
| Four renderer-owned widgets | `@core/components/GridShell/widgets/{Nav,Menu,Content,User}Widget.jsx` | `legacy/GridShell/widgets/` | Exact old-path adapters | Deep-path and implementation-equivalence tests |
| Eleven owner-widget wrappers | `@core/components/GridShell/widgets/*.jsx` | `legacy/GridShell/widgets/` | Exact old-path adapters | Allowed-exception and export-shape tests |

## What stayed intentionally

| Area/File | Current location | Why it stayed | Future condition |
| --- | --- | --- | --- |
| `GridShell/styles.js` | `App/src/modules/@core/components/GridShell/styles.js` | Five consumers share the stable contract; movement would couple Agrivision owner widgets to legacy | Reconsider only after owner UI cleanup proves reusable semantic tokens or localizes owner styles |
| Old GridShell entry/config/hook/widget paths | `App/src/modules/@core/components/GridShell/` | Preserve active `(main)`, Agrivision desktop, and possible hidden consumers | Retire only after a separate usage audit and accepted adapter-retirement plan |
| Old NavWidget/MapWidget deep adapters | Old GridShell widget paths | MapShell still imports them and hidden consumers are unproven | Keep until MapShell is removed and external-consumer risk is cleared |
| StationShell | `App/src/modules/station/shell/StationShell.jsx` plus barrel | Frozen compatibility entry with no tracked canonical route | Delete only through a separately accepted, tests-first micro-plan |
| MapShell | `App/src/modules/@core/components/MapShell/index.jsx` | Reachable from StationShell and owns the frozen map compatibility family | Delete only after runtime stabilization and explicit approval |
| MapSidebar | MapShell component family | Only imported by MapShell | Remove atomically with an approved MapShell deletion |
| MapDetailDrawer | MapShell component family | Only imported by MapShell | Remove atomically with an approved MapShell deletion |
| TimelineScrubber | MapShell component family | Only imported by MapShell | Remove atomically with an approved MapShell deletion |
| `useMapStore` | Active core store location | Still supports active owner/map behavior and was not proven compatibility-only | Keep unless a separate ownership study identifies a safe destination |
| Agrivision owner MapWidget | Agrivision owner module | Active owner implementation, distinct from the legacy deep adapter | Keep under Agrivision ownership |

## Current compatibility debt

| Debt item | Status | Risk | Guard | Recommended handling |
| --- | --- | --- | --- | --- |
| Old GridShell adapters | Active compatibility surface | Hidden consumers and indefinite retention | Exact adapter/export/deep-path architecture tests | Audit only after runtime stabilization; remove in a dedicated Phase 4C slice |
| GridShell styles at core path | Intentionally deferred semantic debt | Misleading ownership and visual regression if split prematurely | Named `ws`, token, and five-consumer contracts | Leave unchanged until owner UI cleanup proves a better boundary |
| StationShell/MapShell frozen family | Frozen; deletion unapproved | Unknown external entry points and atomic-chain deletion risk | Reachability guards plus canonical Station absence assertion | Maintain freeze; consider Phase 4B only after Phase 4A |
| Old NavWidget/MapWidget deep adapters | Required while MapShell exists | Breaking MapShell or hidden consumers | Presence and import-contract checks | Do not retire before MapShell deletion |
| Known unrelated full-Playwright failures | Unresolved; full suite not run for this checkpoint | Can hide new runtime regressions in broad output | Focused suites remain green | Triage first in Phase 4A |
| Hidden/external consumers | Unproven | Tracked-source scans can produce false deletion confidence | Stable old paths and conservative no-delete policy | Gather runtime/package evidence before approving deletion |

## Boundary and ownership status

- `@core -> owner` leakage for the migrated GridShell wrappers is zero.
- `legacy -> owner` is limited to the compatibility content registry and the
  eleven owner-widget wrappers required by the legacy layout registry.
- Canonical Station is owned by route files, `SoilzeProShell`, `<Slot />`, and
  Station owner pages. It does not render the frozen compatibility chain.
- Active GridShell compatibility implementation is owned by
  `legacy/GridShell`; public compatibility remains at the old `@core` paths.
- StationShell and MapShell are compatibility-owned, frozen, and not approved
  for new features.
- Agrivision owner widgets remain owner code even when selected by the legacy
  GridShell layout.

## Verification results

| Check | Result | Notes |
| --- | --- | --- |
| `npm.cmd test -- architectureBoundary --runInBand` | Pass | 1 suite, 16/16 tests |
| `npm.cmd test -- --runInBand` | Pass | 5 suites, 29/29 tests |
| Web export | Pass | `npm.cmd run export:web`; 84 static routes |
| Electron smoke | Pass | `npm.cmd run electron:smoke` |
| `npx.cmd playwright test --list` | Pass | 45 tests in 9 files |
| `e2e/test_nav.spec.ts` | Pass | 20/20 with one worker |
| `e2e/station-routing.spec.ts` | Pass | 3/3 with one worker |
| `e2e/station.spec.ts` | Pass | 5/5 with one worker |
| CodeGraph | Pass | Index current: 355 files, 2,409 nodes, 3,849 edges |
| `git diff --check` | Pass | No whitespace errors |

The repository's safe non-interactive scripts were used for the two runtime
gates: `export:web` is the defined web export command, and `electron:smoke`
provides a terminating Electron verification instead of launching an
interactive application. Playwright emitted existing `shadow*` style
deprecation warnings; they did not affect any focused result.

The full Playwright suite was intentionally not run. Previously documented
unrelated failures—three stale Agrivision FAB selectors and one stale epidemic
GridShell/Station expectation—remain unresolved until Phase 4A confirms or
updates that baseline.

## Scope control

- Runtime source changed by this checkpoint: no.
- Tests changed by this checkpoint: no.
- New migration, adapter, movement, or deletion: no.
- GridShell renderer, adapters, and styles changed: no.
- StationShell or MapShell changed or moved: no.
- Station, Agrivision, and `(main)` routes changed: no.
- Shell behavior or owner widgets changed: no.
- Backend, AI Core, Docker/environment, package, lock, dependency, and CI/CD
  files changed: no.
- The only checkpoint change is this report.

## Risks remaining

| Risk | Impact | Mitigation | Next owner |
| --- | --- | --- | --- |
| Known unrelated full-Playwright failures | Broad suite cannot yet serve as a clean release gate | Reproduce, classify, and fix or intentionally update each failure before migration work resumes | Phase 4A runtime stabilization |
| Hidden consumers of old paths | Premature deletion can break external or untracked integrations | Preserve adapters; gather package/runtime evidence and search downstream repositories where available | Phase 4A evidence audit |
| Old GridShell adapter retention | Compatibility surface may become permanent or accumulate logic | Keep adapters logic-free and contract-tested; perform a dedicated retirement audit | Phase 4C |
| Styles semantic debt | `@core` location suggests shared ownership that evidence does not support | Keep stable; extract only proven reusable tokens during owner UI cleanup | Future Agrivision/UI owner |
| Frozen StationShell/MapShell family | Dead-looking code may be modified or deleted without complete evidence | Keep the deprecation contract and reachability guards; prohibit new feature work | Phase 4B architecture owner |
| Future deletion risk | A broad deletion could combine shell, children, stores, adapters, and routes | Require a narrow changed-file budget, rollback commit, focused gates, and explicit approval | Phase 4B reviewer |
| Documentation drift | Later source changes may invalidate this checkpoint map | Update architecture docs and boundary tests in the same accepted slice | Architecture owner/reviewer |

## Recommended Phase 4 path

Preferred sequence:

1. **Phase 4A — runtime stabilization and known failure triage.** Reproduce the
   known broad-suite failures, distinguish stale expectations from product
   regressions, and establish a clean or explicitly baselined runtime gate.
2. **Phase 4B — StationShell/MapShell deletion micro-plan, only if still
   desired after stabilization.** Revalidate hidden-consumer assumptions,
   define the atomic family, and obtain separate source approval.
3. **Phase 4C — old adapter retirement audit after MapShell deletion, not
   before.** Re-inventory active `(main)`, Agrivision, deep-path, and external
   consumers before proposing any removal.
4. Keep style source migration deferred until owner UI cleanup demonstrates
   real shared-token value.

Do not start direct deletion after this checkpoint. Do not move styles next.
Do not retire NavWidget/MapWidget adapters next. Do not open another broad
architecture migration before runtime stabilization.

## Acceptance criteria for closing Phase 3

- All Phase 3 plans, implementation reports, review reports, tests, and
  deprecation documentation are merged to `main`.
- This checkpoint is reviewed and merged.
- Architecture boundary, full Jest, export, Electron smoke, focused
  Playwright, and CodeGraph gates pass on the resulting `main`.
- Remaining compatibility and runtime debt is documented with an owner and
  future handling path.
- No unreviewed source, test, package, or runtime drift exists.
- Phase 4 begins from an updated, clean branch.

At this checkpoint, the pre-merge evidence satisfies every criterion except
the review and merge of this report itself and the resulting post-merge
confirmation on `main`.

## Recommended next prompt

After this checkpoint is reviewed and merged, start Phase 4A runtime
stabilization / known failure triage.

Do not delete StationShell or MapShell directly.
