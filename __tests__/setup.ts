import { afterAll, afterEach, beforeAll, describe, expect, test } from 'vitest'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { titleMock } from './mocks/mocks'


export const handlers = [
  rest.get('example.json', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(titleMock))
  }),
]


const server = setupServer(...handlers)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())