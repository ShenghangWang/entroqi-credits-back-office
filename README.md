# Original Credits back office — private reuse workspace

The owner explicitly requested reuse of this interface on29October2026. This workspace extracts the original full Vue/Naive UI/ECharts Credits console from the owner's local source. Original file hashes, paths and selected API exports are recorded in `reuse-manifest.json`; `scripts/extract-reference.cjs` documents extraction. Do not rerun extraction over adaptations. No old database, credential file or provider/vehicle workflow is included. Keep this workspace private.

Original layout, chart/table implementations, role navigation and forms are retained. Adaptations register the three Entroqi apps, bundle original MDI icons locally, patch compatible dependencies and exchange staff credentials for short-lived HttpOnly sessions. Ordinary product signup remains independent of the optional agent mechanism. Original mutations require owning-service integrations; the local bridge refuses unconfigured writes rather than storing another password or issuing payments.

Run `npm ci`, then `npm run build`. Configure the Credits backend's `CREDITS_CONSOLE_DIRECTORY` with this workspace's absolute `dist` directory. Open `/back-office`. Frontend source contains no operator credentials. No remote deployment is configured.

Validated Vue types/production build; audited dependency tree reports zero vulnerabilities. The retained full chart/UI bundle has a Vite size warning (~2MB before compression); no UI redesign was introduced to suppress it. Backend tests verify real MySQL reporting, session/origin/role boundaries and existing financial/agent behavior. See sibling `credits/docs/full-back-office-reuse.md` and `credits/docs/company-console.md`.


30October finance integration: **定价与收费方案** is a child page of the original layout using the original HttpOnly session. It reuses the server's exact calculator, selects one of three products, edits monthly/manual-renewal or exact-version lifetime offers and optional trial days, and saves/reviews/publishes immutable revisions. Old standalone panels and the second local pricing credential are retired. Original dashboard/role/agent components are preserved. Irrelevant former-application HTTP error mappings were removed.

Private full UI regression: from the sibling Credits workspace run `npm run verify:pricing-ui -- --console-directory /absolute/path/to/back-office/dist`, with a migrated disposable test database. This exercises the actual Vue controls, server calculations and real MySQL history, including a model/price/trial change and reload/logout. Keep this source private; no source upload or separate cloud frontend repository is needed for the local release bundle.
