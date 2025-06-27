import MongoCreate from "../components/mongo-create.vue";
import Overview from "../components/Overview.vue";
import pgCreate from "../components/pg-create.vue";

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
    component: pgCreate,
    meta: {
      product: YOUR_PRODUCT_NAME,
      cluster: BLANK_CLUSTER,
    },
  },
  {
    name: `${YOUR_PRODUCT_NAME}-c-cluster-mongodb`,
    path: `/${YOUR_PRODUCT_NAME}/c/:cluster/mongodb`,
    component: MongoCreate,
    meta: {
      product: YOUR_PRODUCT_NAME,
      cluster: BLANK_CLUSTER,
    },
  },
];

export default routes;
