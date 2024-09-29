/**
 * @schema StoreReturnReason
 * type: object
 * description: The return reason's details.
 * x-schemaName: StoreReturnReason
 * required:
 *   - id
 *   - value
 *   - label
 *   - created_at
 *   - updated_at
 * properties:
 *   id:
 *     type: string
 *     title: id
 *     description: The return reason's ID.
 *   value:
 *     type: string
 *     title: value
 *     description: The return reason's value.
 *   label:
 *     type: string
 *     title: label
 *     description: The return reason's label.
 *   description:
 *     type: string
 *     title: description
 *     description: The return reason's description.
 *   metadata:
 *     type: object
 *     description: The return reason's metadata, can hold custom key-value pairs.
 *   created_at:
 *     type: string
 *     format: date-time
 *     title: created_at
 *     description: The date the return reason was created.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     title: updated_at
 *     description: The date the return reason was updated.
 * 
*/
