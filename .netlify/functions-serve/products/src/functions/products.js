var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// functions/products.ts
__export(exports, {
  handler: () => handler
});
var SANITY_PROJECT_ID = "j3gfzmh0";
var SANITY_DATASET = "production";
var SANITY_API_VERSION = "2024-01-01";
var PRODUCTS_QUERY = encodeURIComponent(`*[_type == "product"]{
  "id": _id,
  name,
  "slug": slug.current,
  brand,
  categories,
  clothingCategories,
  price,
  stock,
  forWhom,
  itemDescription,
  featured,
  "images": imageUrls
}`);
var handler = async () => {
  try {
    const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${PRODUCTS_QUERY}`;
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data.result),
      headers: { "Content-Type": "application/json" }
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: "Failed to load products", error: err == null ? void 0 : err.message })
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=products.js.map
