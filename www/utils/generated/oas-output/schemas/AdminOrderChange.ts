/**
 * @schema AdminOrderChange
 * type: object
 * description: The order change's details.
 * x-schemaName: AdminOrderChange
 * required:
 *   - order
 *   - claim
 *   - return_order
 *   - exchange
 *   - actions
 *   - status
 *   - order_id
 *   - metadata
 *   - id
 *   - created_at
 *   - updated_at
 *   - version
 *   - canceled_at
 *   - return_id
 *   - exchange_id
 *   - claim_id
 *   - requested_by
 *   - requested_at
 *   - confirmed_by
 *   - confirmed_at
 *   - declined_by
 *   - declined_reason
 *   - declined_at
 *   - canceled_by
 * properties:
 *   id:
 *     type: string
 *     title: id
 *     description: The order change's ID.
 *   version:
 *     type: number
 *     title: version
 *     description: The order change's version. This will be the order's version when the change is applied.
 *   change_type:
 *     oneOf:
 *       - type: string
 *         title: change_type
 *         description: The order change's change type.
 *       - type: string
 *         title: change_type
 *         description: The order change's change type.
 *       - type: string
 *         title: change_type
 *         description: The order change's change type.
 *       - type: string
 *         title: change_type
 *         description: The order change's change type.
 *       - type: string
 *         title: change_type
 *         description: The order change's change type.
 *     description: The order change's type.
 *   order_id:
 *     type: string
 *     title: order_id
 *     description: The ID of the order this change applies on.
 *   return_id:
 *     type: string
 *     title: return_id
 *     description: The ID of the associated return.
 *   exchange_id:
 *     type: string
 *     title: exchange_id
 *     description: The ID of the associated exchange.
 *   claim_id:
 *     type: string
 *     title: claim_id
 *     description: The ID of the associated claim.
 *   order:
 *     type: string
 *     title: order
 *     description: The order change's order.
 *   return_order:
 *     $ref: "#/components/schemas/AdminReturn"
 *   exchange:
 *     $ref: "#/components/schemas/AdminExchange"
 *   claim:
 *     $ref: "#/components/schemas/AdminClaim"
 *   actions:
 *     type: array
 *     description: The order change's actions.
 *     items:
 *       $ref: "#/components/schemas/AdminOrderChangeAction"
 *   status:
 *     type: string
 *     description: The order change's status.
 *     enum:
 *       - canceled
 *       - requested
 *       - pending
 *       - confirmed
 *       - declined
 *   requested_by:
 *     type: string
 *     title: requested_by
 *     description: The ID of the user that requested the change.
 *   requested_at:
 *     type: string
 *     title: requested_at
 *     description: The date the order change was requested.
 *     format: date-time
 *   confirmed_by:
 *     type: string
 *     title: confirmed_by
 *     description: The ID of the user that confirmed the order change.
 *   confirmed_at:
 *     type: string
 *     title: confirmed_at
 *     description: The date the order change was confirmed.
 *     format: date-time
 *   declined_by:
 *     type: string
 *     title: declined_by
 *     description: The ID of the user that declined the order change.
 *   declined_reason:
 *     type: string
 *     title: declined_reason
 *     description: The reason the order change was declined.
 *   metadata:
 *     type: object
 *     description: The order change's metadata, can hold custom key-value pairs.
 *   declined_at:
 *     type: string
 *     title: declined_at
 *     description: The date the order change was declined.
 *     format: date-time
 *   canceled_by:
 *     type: string
 *     title: canceled_by
 *     description: The ID of the user that canceled the order change.
 *   canceled_at:
 *     type: string
 *     title: canceled_at
 *     description: The date the order change was canceled.
 *     format: date-time
 *   created_at:
 *     type: string
 *     format: date-time
 *     title: created_at
 *     description: The date the order change was created.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     title: updated_at
 *     description: The date the order change was updated.
 * 
*/
