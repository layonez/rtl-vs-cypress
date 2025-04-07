import '@testing-library/jest-dom'
import { configMocks } from 'jsdom-testing-mocks'
import { act } from '@testing-library/react'


import {
  mockIntersectionObserver,
  mockResizeObserver,
} from 'jsdom-testing-mocks'
import { beforeAll, afterAll, beforeEach, afterEach } from '@jest/globals'
import { cleanup } from '@testing-library/react'

mockIntersectionObserver()
mockResizeObserver()

configMocks({ act, beforeAll, afterAll, beforeEach, afterEach })

afterEach(cleanup)
