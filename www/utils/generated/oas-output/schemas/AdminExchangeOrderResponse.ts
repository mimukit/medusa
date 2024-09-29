/**
 * @schema AdminExchangeOrderResponse
 * type: object
 * description: The exchange's details.
 * x-schemaName: AdminExchangeOrderResponse
 * required:
 *   - order
 *   - exchange
 * properties:
 *   order:
 *     type: string
 *     title: order
 *     description: The order change's order.
 *   exchange:
 *     $ref: "#/components/schemas/AdminExchange"
 * 
*/
