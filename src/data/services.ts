import type { Feature, Service } from '../types'

const lorem = 'Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem'

export const services: Service[] = [
  { title: 'Business Research', icon: 'fa fa-user-tie', description: lorem },
  { title: 'Stretagic Planning', icon: 'fa fa-chart-pie', description: lorem },
  { title: 'Market Analysis', icon: 'fa fa-chart-line', description: lorem },
  { title: 'Financial Analaysis', icon: 'fa fa-chart-area', description: lorem },
  { title: 'legal Advisory', icon: 'fa fa-balance-scale', description: lorem },
  { title: 'Tax & Insurance', icon: 'fa fa-house-damage', description: lorem },
]

const featureLorem = `${lorem} sit clita duo`

export const aboutFeatures: Feature[] = [
  { title: 'Business Planning', icon: 'fa fa-user-tie', description: featureLorem },
  { title: 'Financial Analaysis', icon: 'fa fa-chart-line', description: featureLorem },
  { title: 'legal Advisory', icon: 'fa fa-balance-scale', description: featureLorem },
]
