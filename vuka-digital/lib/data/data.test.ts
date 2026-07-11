import { describe, expect, it } from 'vitest'
import { SERVICES } from './services'
import { PORTFOLIO } from './portfolio'
import { TESTIMONIALS } from './testimonials'

describe('SERVICES data', () => {
  it('contains exactly 10 services', () => {
    expect(SERVICES).toHaveLength(10)
  })

  it('has unique slugs', () => {
    const slugs = SERVICES.map((s) => s.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('every service has a non-empty title, description, and icon', () => {
    SERVICES.forEach((service) => {
      expect(service.title.length).toBeGreaterThan(0)
      expect(service.description.length).toBeGreaterThan(0)
      expect(service.icon).toBeDefined()
    })
  })
})

describe('PORTFOLIO data', () => {
  it('contains between 6 and 8 items', () => {
    expect(PORTFOLIO.length).toBeGreaterThanOrEqual(6)
    expect(PORTFOLIO.length).toBeLessThanOrEqual(8)
  })

  it('has unique slugs', () => {
    const slugs = PORTFOLIO.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })
})

describe('TESTIMONIALS data', () => {
  it('contains between 4 and 6 items', () => {
    expect(TESTIMONIALS.length).toBeGreaterThanOrEqual(4)
    expect(TESTIMONIALS.length).toBeLessThanOrEqual(6)
  })

  it('every testimonial has a name, company, and quote', () => {
    TESTIMONIALS.forEach((t) => {
      expect(t.name.length).toBeGreaterThan(0)
      expect(t.company.length).toBeGreaterThan(0)
      expect(t.quote.length).toBeGreaterThan(0)
    })
  })
})
