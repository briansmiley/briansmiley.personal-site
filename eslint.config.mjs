import nextVitals from "eslint-config-next/core-web-vitals"

const config = [
  ...nextVitals,
  {
    rules: {
      "react-hooks/exhaustive-deps": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      // Site images are static assets in /public; next/image optimization isn't worth the config here.
      "@next/next/no-img-element": "off",
    },
  },
  {
    ignores: [".next/**", "build/**", "node_modules/**"],
  },
]

export default config
