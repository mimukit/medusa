/**
 * @schema StoreProductVariant
 * type: object
 * description: The variant's variants.
 * x-schemaName: StoreProductVariant
 * properties:
 *   options:
 *     type: array
 *     description: The variant's options.
 *     items:
 *       $ref: "#/components/schemas/StoreProductOptionValue"
 *   product:
 *     $ref: "#/components/schemas/StoreProduct"
 *   length:
 *     type: number
 *     title: length
 *     description: The variant's length.
 *   title:
 *     type: string
 *     title: title
 *     description: The variant's title.
 *   metadata:
 *     type: object
 *     description: The variant's metadata.
 *   id:
 *     type: string
 *     title: id
 *     description: The variant's ID.
 *   width:
 *     type: number
 *     title: width
 *     description: The variant's width.
 *   weight:
 *     type: number
 *     title: weight
 *     description: The variant's weight.
 *   height:
 *     type: number
 *     title: height
 *     description: The variant's height.
 *   origin_country:
 *     type: string
 *     title: origin_country
 *     description: The variant's origin country.
 *   hs_code:
 *     type: string
 *     title: hs_code
 *     description: The variant's hs code.
 *   mid_code:
 *     type: string
 *     title: mid_code
 *     description: The variant's mid code.
 *   material:
 *     type: string
 *     title: material
 *     description: The variant's material.
 *   created_at:
 *     type: string
 *     format: date-time
 *     title: created_at
 *     description: The variant's created at.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     title: updated_at
 *     description: The variant's updated at.
 *   deleted_at:
 *     type: string
 *     format: date-time
 *     title: deleted_at
 *     description: The variant's deleted at.
 *   product_id:
 *     type: string
 *     title: product_id
 *     description: The variant's product id.
 *   sku:
 *     type: string
 *     title: sku
 *     description: The variant's sku.
 *   barcode:
 *     type: string
 *     title: barcode
 *     description: The variant's barcode.
 *   ean:
 *     type: string
 *     title: ean
 *     description: The variant's ean.
 *   upc:
 *     type: string
 *     title: upc
 *     description: The variant's upc.
 *   allow_backorder:
 *     type: boolean
 *     title: allow_backorder
 *     description: The variant's allow backorder.
 *   manage_inventory:
 *     type: boolean
 *     title: manage_inventory
 *     description: The variant's manage inventory.
 *   inventory_quantity:
 *     type: number
 *     title: inventory_quantity
 *     description: The variant's inventory quantity.
 *   variant_rank:
 *     type: number
 *     title: variant_rank
 *     description: The variant's variant rank.
 *   calculated_price:
 *     $ref: "#/components/schemas/BaseCalculatedPriceSet"
 * required:
 *   - options
 *   - length
 *   - title
 *   - id
 *   - width
 *   - weight
 *   - height
 *   - origin_country
 *   - hs_code
 *   - mid_code
 *   - material
 *   - created_at
 *   - updated_at
 *   - deleted_at
 *   - sku
 *   - barcode
 *   - ean
 *   - upc
 *   - allow_backorder
 *   - manage_inventory
 * 
*/
