/// <reference types="next" />
/// <reference types="next/types/global" />

import { Store } from "redux";
import { CuexStore } from "@/store/models";

declare module "next" {
  export interface NextPageContext {
    store: CuexStore;
  }
}
