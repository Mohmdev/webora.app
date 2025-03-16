import { Polar } from "@polar-sh/sdk";

// Check if we're in a browser environment
const isBrowser = typeof window !== "undefined";
// Check if we're in a build/SSR environment
const isSSR = !isBrowser;

// Use a default token for development if the environment variable is missing
const accessToken = process.env.POLAR_ACCESS_TOKEN;

// Create a mock Polar client for SSR/build time
const createMockPolar = () => {
	return {
		products: {
			list: async () => ({
				items: [],
				pagination: { totalCount: 0, maxPage: 0 },
			}),
		},
		// Add other required methods as needed
	} as unknown as Polar;
};

// Only throw an error in browser environment, not during build
if (!accessToken && isBrowser) {
	console.warn("POLAR_ACCESS_TOKEN is not configured");
}

// Use a real client in browser, mock client during build/SSR
export const polar =
	!accessToken || isSSR
		? createMockPolar()
		: new Polar({
				server: "sandbox",
				accessToken: accessToken,
			});
