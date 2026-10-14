import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  use: { headless: true, baseURL: 'http://localhost:5173' },
}
export default config
