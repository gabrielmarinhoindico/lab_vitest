# vitest
	- foco em performance ( threads running in parallel)
	- foco em teste unitário
	- suporta typescript e tsx
	- cypress comparation:
		- VITEST SUGGEST:
			- Cypress for all browser-based logic.
			- Vitest for all headless logic
    		- will catch issues that vitest cannot because they use real browser and real browser API's
    		- vitest simulate browser based on jsdom and jsdom don't support some API'S as window.navigation and layouts engines - as offset;
    		- don't have native support for requests, recommend install together the lib Mock Service Worker	
		
		> reference with nexTJS
			https://github.com/vitest-dev/vitest/blob/main/examples/nextjs/vitest.config.ts
			
		> docs:
			https://vitest.dev/guide/why.html
			

		> reference test:
			https://vitest.dev/guide/mocking.html#requests
			https://relatablecode.com/testing-a-react-application-integrating-msw-with-vitest
			https://github.com/mswjs/msw/discussions/1192
