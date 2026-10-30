import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
export function validateScope(registry) {
  const errors = [];
  if (!registry || typeof registry !== 'object') return ['registry must be an object'];
  if (!/^\d+\.\d+\.\d+$/.test(registry.version || '')) errors.push('version must be semantic');
  if (registry.identity !== 'Trillsverse = The Reality Update') errors.push('identity narrowed or changed');
  if (registry.mandate !== 'Sovereignty in Every Dimension') errors.push('mandate narrowed or changed');
  if (!Array.isArray(registry.branches) || !registry.branches.length) return [...errors, 'branches required'];
  const ids = new Set();
  for (const branch of registry.branches) {
    if (!branch || typeof branch !== 'object') { errors.push('invalid branch'); continue; }
    if (!branch.id || ids.has(branch.id)) errors.push(`duplicate or missing branch id: ${branch.id}`);
    ids.add(branch.id);
    if (!['operational','in-development','future-possibility'].includes(branch.status)) errors.push(`${branch.id}: invalid status`);
    if (!branch.statusScope?.trim()) errors.push(`${branch.id}: status scope required`);
    const evidence = Array.isArray(branch.evidence) ? branch.evidence : [];
    if (!evidence.length) errors.push(`${branch.id}: evidence required`);
    for (const e of evidence) {
      if (!['code','docs','observed'].includes(e?.kind)) errors.push(`${branch.id}: invalid evidence kind`);
      try { if (new URL(e.url).protocol !== 'https:') throw new Error(); }
      catch { errors.push(`${branch.id}: evidence must use https`); }
    }
    if (branch.status === 'operational' && !evidence.some(e => e?.kind === 'observed' && /^\d{4}-\d{2}-\d{2}$/.test(e.observedAt || '') && e.finding?.trim())) errors.push(`${branch.id}: operational requires dated observed evidence and finding`);
  }
  return errors;
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const registry = JSON.parse(readFileSync(process.argv[2] || 'public/scope/v0.1.0.json','utf8'));
  const errors = validateScope(registry);
  if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
  else console.log(`Scope ${registry.version}: ${registry.branches.length} branches validated`);
}
