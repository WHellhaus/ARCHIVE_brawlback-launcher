/// <reference types="react-scripts" />

import { ContextBridgeApi } from "../electron/preload";

declare global {
  interface Window {
    api: ContextBridgeApi
  }
}