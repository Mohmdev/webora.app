"use client";

import { createContext, useContext } from "react";

// Define a proper type for the Polar data based on the actual API response
export interface PolarProduct {
	id: string;
	name: string;
	description: string | null;
	prices: Record<string, any>[];
	// Add other properties as needed
}

export interface PolarData {
	items: PolarProduct[];
	pagination: {
		totalCount: number;
		maxPage: number;
	};
}

// Create context with proper typing
const PolarDataContext = createContext<PolarData | null>(null);

export function PolarDataProvider({
	children,
	value,
}: {
	children: React.ReactNode;
	value: PolarData;
}) {
	return (
		<PolarDataContext.Provider value={value}>
			{children}
		</PolarDataContext.Provider>
	);
}

export function usePolarData() {
	const context = useContext(PolarDataContext);

	// Provide a fallback when context is not available
	if (context === null) {
		// During build or when the provider is not available, return empty data
		return {
			items: [],
			pagination: {
				totalCount: 0,
				maxPage: 0,
			},
		};
	}

	return context;
}
