import MongoCreate from "../components/mongo-create.vue";
import Overview from "../components/Overview.vue";
import pgCreate from "../components/pg-create.vue";

const YOUR_PRODUCT_NAME = "kubedb-ext-cluster";
const CUSTOM_PAGE_NAME1 = "postgresSQL";
const CUSTOM_PAGE_NAME2 = "mongDB";

const routes = [
  // {
  //   name: `c-cluster-${YOUR_PRODUCT_NAME}`,
  //   path: `/c/:cluster/${YOUR_PRODUCT_NAME}`,
  //   component: Overview,
  //   meta: {
  //     product: YOUR_PRODUCT_NAME,
  //   },
  // },
  {
    name: `c-cluster-${YOUR_PRODUCT_NAME}-${CUSTOM_PAGE_NAME1}`,
    path: `/c/:cluster/${YOUR_PRODUCT_NAME}/${CUSTOM_PAGE_NAME1}`,
    component: pgCreate,
    meta: { product: YOUR_PRODUCT_NAME },
  },
  {
    name: `c-cluster-${YOUR_PRODUCT_NAME}-${CUSTOM_PAGE_NAME2}`,
    path: `/c/:cluster/${YOUR_PRODUCT_NAME}/${CUSTOM_PAGE_NAME2}`,
    component: MongoCreate,
    meta: { product: YOUR_PRODUCT_NAME },
  },
  // {
  //   name: `${YOUR_PRODUCT_NAME}-c-cluster-PostgreSQL`,
  //   path: `/${YOUR_PRODUCT_NAME}/c/:cluster/PostgreSQL`,
  //   component: pgCreate,
  //   meta: {
  //     product: YOUR_PRODUCT_NAME,
  //     cluster: BLANK_CLUSTER,
  //   },
  // },
  // {
  //   name: `${YOUR_PRODUCT_NAME}-c-cluster-mongodb`,
  //   path: `/${YOUR_PRODUCT_NAME}/c/:cluster/mongodb`,
  //   component: MongoCreate,
  //   meta: {
  //     product: YOUR_PRODUCT_NAME,
  //     cluster: BLANK_CLUSTER,
  //   },
  // },
];

export default routes;
