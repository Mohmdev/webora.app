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
	if (context === null) {
		throw new Error("usePolarData must be used within a PolarDataProvider");
	}
	return context;
}
