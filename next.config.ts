import createMDX from "@next/mdx";
/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	compress: true,
	experimental: {
		authInterrupts: true,
		reactCompiler: true,
		optimizeCss: true,
		optimizeServerReact: true,
		optimizePackageImports: ["lucide-react", "date-fns"],
	},
	eslint: {
		ignoreDuringBuilds: false,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "seo-heist.s3.amazonaws.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "dwdwn8b5ye.ufs.sh",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "ansubkhan.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "utfs.io",
				port: "",
				pathname: "/**",
			},
		],
	},
	pageExtensions: ["ts", "tsx", "mdx"],
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
