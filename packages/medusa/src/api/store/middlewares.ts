import { MiddlewareRoute } from "@medusajs/framework/http"
import { ensurePublishableApiKey } from "../../utils/middlewares/ensure-publishable-api-key"

export const storeRoutesMiddlewares: MiddlewareRoute[] = [
  {
    method: "ALL",
    matcher: "/store*",
    middlewares: [ensurePublishableApiKey()],
  },
]