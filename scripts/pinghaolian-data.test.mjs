import assert from 'node:assert/strict'
import test from 'node:test'
import { readFileSync } from 'node:fs'
import { loadConfig } from './lib/load-config.mjs'
import { validateReviewEvidence } from './lib/airport-data-validation.mjs'

test('拼好连 preserves owner-provided free trial, source limits and free APP nodes without universal subscription', () => {
  const { airportData } = loadConfig('airports.ts')
  const { airportCollections } = loadConfig('airport-collections.ts')
  const brand = airportData.find((airport) => airport.name === '拼好连')
  assert.ok(brand)
  assert.equal(brand.price, 0)
  assert.equal(brand.priceText, '0元起/免费试用')
  assert.equal(brand.traffic, '免费/按量')
  assert.equal(brand.trial, true)
  assert.equal(brand.dedicatedClient, true)
  assert.equal(brand.universalSubscription, false)
  assert.ok(brand.informationSources.every((source) => source.checkedAt === '2026-11-07'))
  assert.match(brand.risk, /隐私风险/)
  assert.match(brand.risk, /严重超售/)
  assert.equal(brand.informationSources[2].name, '拼好连官网入口')
  for (const key of ['all', 'cheap']) {
    assert.ok(airportCollections[key].items.some((airport) => airport.path === brand.path), key)
  }
  for (const key of ['mainRecommendation', 'chatgpt', 'streaming', 'clash']) {
    assert.ok(!airportCollections[key].items.some((airport) => airport.path === brand.path), key)
  }
  assert.ok(!('performance' in brand))
  const page = readFileSync('docs/机场评测/拼好连.md', 'utf8')
  assert.match(page, /中间人/)
  assert.match(page, /极端超售/)
  assert.match(page, /pinghaolian/)
})

