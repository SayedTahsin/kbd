import Overview from "../pages/Overview.vue";
import Postgres from "../pages/Postgres.vue";
const BLANK_CLUSTER = "_";
const YOUR_PRODUCT_NAME = "kubedb-ext";

const routes = [
  {
    name: `${YOUR_PRODUCT_NAME}-c-cluster`,
    path: `/${YOUR_PRODUCT_NAME}/c/:cluster`,
    component: Overview,
    meta: {
      product: YOUR_PRODUCT_NAME,
      cluster: BLANK_CLUSTER,
      pkg: YOUR_PRODUCT_NAME,
    },
  },
  {
    name: `${YOUR_PRODUCT_NAME}-c-cluster-PostgreSQL`,
    path: `/${YOUR_PRODUCT_NAME}/c/:cluster/PostgreSQL`,
    component: Postgres,
    meta: {
      product: YOUR_PRODUCT_NAME,
      cluster: BLANK_CLUSTER,
    },
  },
  {
    name: `${YOUR_PRODUCT_NAME}-c-cluster-overview`,
    path: `/${YOUR_PRODUCT_NAME}/c/:cluster/overview`,
    component: Overview,
    meta: {
      product: YOUR_PRODUCT_NAME,
      cluster: BLANK_CLUSTER,
    },
  },
];

export default routes;
