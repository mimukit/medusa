import { Modules } from "@medusajs/framework/utils"
import { createStep } from "@medusajs/framework/workflows-sdk"

export const releaseEventsStepId = "release-events-step"
export const releaseEventsStep = createStep(
  releaseEventsStepId,
  async (input: void, { container, eventGroupId }) => {
    const eventBusService = container.resolve(Modules.EVENT_BUS, {
      allowUnregistered: true,
    })
    if (!eventBusService || !eventGroupId) {
      return
    }

    await eventBusService.releaseGroupedEvents(eventGroupId)
  },
  async (data: void) => {}
)
