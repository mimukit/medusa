/**
 * @schema AdminPostExchangesRequestItemsReturnActionReqSchema
 * type: object
 * description: The details to update in an inbound (returned) item.
 * x-schemaName: AdminPostExchangesRequestItemsReturnActionReqSchema
 * properties:
 *   quantity:
 *     type: number
 *     title: quantity
 *     description: The item's quantity.
 *   internal_note:
 *     type: string
 *     title: internal_note
 *     description: A note viewed only by admin users.
 *   reason_id:
 *     type: string
 *     title: reason_id
 *     description: The ID of the associated return reason.
 *   metadata:
 *     type: object
 *     description: The exchange's metadata, can hold custom key-value pairs.
 * 
*/
