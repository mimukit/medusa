/**
 * @schema BaseOrderLineItemAdjustment
 * type: object
 * description: The adjustment's details.
 * x-schemaName: BaseOrderLineItemAdjustment
 * properties:
 *   item:
 *     $ref: "#/components/schemas/BaseOrderLineItem"
 *   item_id:
 *     type: string
 *     title: item_id
 *     description: The ID of the item this adjustment applies to.
 *   id:
 *     type: string
 *     title: id
 *     description: The adjustment's ID.
 *   code:
 *     type: string
 *     title: code
 *     description: The adjustment's code.
 *   amount:
 *     type: number
 *     title: amount
 *     description: The adjustment's amount.
 *   order_id:
 *     type: string
 *     title: order_id
 *     description: The ID of the associated order.
 *   description:
 *     type: string
 *     title: description
 *     description: The adjustment's description.
 *   promotion_id:
 *     type: string
 *     title: promotion_id
 *     description: The ID of the promotion that this applies on the order's item.
 *   provider_id:
 *     type: string
 *     title: provider_id
 *     description: The adjustment's provider ID.
 *   created_at:
 *     type: string
 *     format: date-time
 *     title: created_at
 *     description: The date the adjustment was created.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     title: updated_at
 *     description: The date the adjustment was updated.
 * required:
 *   - item
 *   - item_id
 *   - id
 *   - amount
 *   - order_id
 *   - created_at
 *   - updated_at
 * 
*/
