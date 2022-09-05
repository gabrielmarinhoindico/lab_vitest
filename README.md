## vitest
	- foco em performance ( threads running in parallel)
	- foco em teste unitário
	- suporta typescript e tsx
	- cypress comparation:
    	- Cypress for all browser-based logic.
    	- we suggest using Vitest for all headless logic
    	- will catch issues that vitest cannot because they use real browser and real browser API's
    	- (vitest fala com simula o browser baseado em jsdom e ele não tem algumas api's inclusas, como window.navigation e layouts engines, como offset)
    	- não tem suporte nativo para requests, recomendam instalar em conjunto uma lib chamada mock Service Worker	
		
		reference with nexTJS
			https://github.com/vitest-dev/vitest/blob/main/examples/nextjs/vitest.config.ts
			
		docs:
			https://vitest.dev/guide/why.html
			

		reference test:
			https://vitest.dev/guide/mocking.html#requests
			https://relatablecode.com/testing-a-react-application-integrating-msw-with-vitest
			https://github.com/mswjs/msw/discussions/1192
