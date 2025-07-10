import { IPlugin } from "@shell/core/types";

export function init($plugin: IPlugin, store: any) {
  const YOUR_PRODUCT_NAME = "kubedb-ext";
  const BLANK_CLUSTER = "_";

  const { product, virtualType, basicType, weightType } = $plugin.DSL(
    store,
    YOUR_PRODUCT_NAME
  );

  product({
    icon: "gear",
    inStore: "management",
    weight: 100,
    to: {
      name: `${YOUR_PRODUCT_NAME}-c-cluster`,
      path: `/${YOUR_PRODUCT_NAME}/c/:cluster/dashboard`,
      params: {
        product: YOUR_PRODUCT_NAME,
        cluster: BLANK_CLUSTER,
        pkg: YOUR_PRODUCT_NAME,
      },
    },
  });

  virtualType({
    label: "PostgreSQL",
    namespaced: false,
    name: "PostgreSQL",
    route: {
      name: `${YOUR_PRODUCT_NAME}-c-cluster-PostgreSQL`,
      params: {
        product: YOUR_PRODUCT_NAME,
        cluster: BLANK_CLUSTER,
      },
    },
  });
  virtualType({
    label: "Overview",
    namespaced: false,
    name: "Overview",
    route: {
      name: `${YOUR_PRODUCT_NAME}-c-cluster-overview`,
      params: {
        product: YOUR_PRODUCT_NAME,
        cluster: BLANK_CLUSTER,
      },
    },
  });

  basicType(["PostgreSQL", "Overview"], "Databases");
  weightType("PostgreSQL", 1, true);
  weightType("Overview", 2, true);
}
