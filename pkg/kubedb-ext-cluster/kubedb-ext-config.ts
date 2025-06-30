import { IPlugin } from "@shell/core/types";

export function init($plugin: IPlugin, store: any) {
  const YOUR_PRODUCT_NAME = "kubedb-ext-cluster";
  const CUSTOM_PAGE_NAME1 = "postgresSQL";
  const CUSTOM_PAGE_NAME2 = "mongDB";
  const { product, virtualType, basicType } = $plugin.DSL(
    store,
    YOUR_PRODUCT_NAME
  );

  product({
    icon: "gear",
    inStore: "cluster",
    weight: 100,
    to: {
      name: `c-cluster-${YOUR_PRODUCT_NAME}-${CUSTOM_PAGE_NAME1}`,
      params: { product: YOUR_PRODUCT_NAME },
    },
  });

  virtualType({
    label: CUSTOM_PAGE_NAME1,
    name: CUSTOM_PAGE_NAME1,
    route: {
      name: `c-cluster-${YOUR_PRODUCT_NAME}-${CUSTOM_PAGE_NAME1}`,
      params: { product: YOUR_PRODUCT_NAME },
    },
  });

  virtualType({
    label: CUSTOM_PAGE_NAME2,
    name: CUSTOM_PAGE_NAME2,
    route: {
      name: `c-cluster-${YOUR_PRODUCT_NAME}-${CUSTOM_PAGE_NAME2}`,
      params: { product: YOUR_PRODUCT_NAME },
    },
  });

  basicType([CUSTOM_PAGE_NAME1, CUSTOM_PAGE_NAME2]);
  // weightType("PostgreSQL", 2, true);
  // weightType("MongoDB", 1, true);
}
