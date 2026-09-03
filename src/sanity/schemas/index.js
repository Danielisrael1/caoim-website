// Copy this folder into your Sanity Studio project and register it, e.g.:
//   import { schemaTypes } from './schemas'
//   export default defineConfig({ /* ... */ schema: { types: schemaTypes } })
// See SANITY.md for full setup steps.

import siteSettings from './siteSettings.js'
import leader from './leader.js'
import ministry from './ministry.js'
import event from './event.js'

export const schemaTypes = [siteSettings, leader, ministry, event]
