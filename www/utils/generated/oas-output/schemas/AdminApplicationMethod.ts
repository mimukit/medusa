/**
 * @schema AdminApplicationMethod
 * type: object
 * description: The promotion's application method.
 * x-schemaName: AdminApplicationMethod
 * required:
 *   - id
 * properties:
 *   promotion:
 *     type: object
 *     description: The application method's promotion.
 *     x-schemaName: AdminPromotion
 *     required:
 *       - id
 *     properties:
 *       application_method:
 *         type: object
 *         description: The promotion's application method.
 *         x-schemaName: AdminApplicationMethod
 *       rules:
 *         type: array
 *         description: The promotion's rules.
 *         items:
 *           type: object
 *           description: The rule's rules.
 *           x-schemaName: AdminPromotionRule
 *       id:
 *         type: string
 *         title: id
 *         description: The promotion's ID.
 *       code:
 *         type: string
 *         title: code
 *         description: The promotion's code.
 *       type:
 *         oneOf:
 *           - type: string
 *             title: type
 *             description: The promotion's type.
 *           - type: string
 *             title: type
 *             description: The promotion's type.
 *       is_automatic:
 *         type: boolean
 *         title: is_automatic
 *         description: The promotion's is automatic.
 *       campaign_id:
 *         type: string
 *         title: campaign_id
 *         description: The promotion's campaign id.
 *       campaign:
 *         type: object
 *         description: The promotion's campaign.
 *         x-schemaName: AdminCampaign
 *   target_rules:
 *     type: array
 *     description: The application method's target rules.
 *     items:
 *       $ref: "#/components/schemas/AdminPromotionRule"
 *   buy_rules:
 *     type: array
 *     description: The application method's buy rules.
 *     items:
 *       $ref: "#/components/schemas/AdminPromotionRule"
 *   id:
 *     type: string
 *     title: id
 *     description: The application method's ID.
 *   type:
 *     oneOf:
 *       - type: string
 *         title: type
 *         description: The application method's type.
 *       - type: string
 *         title: type
 *         description: The application method's type.
 *   target_type:
 *     oneOf:
 *       - type: string
 *         title: target_type
 *         description: The application method's target type.
 *       - type: string
 *         title: target_type
 *         description: The application method's target type.
 *       - type: string
 *         title: target_type
 *         description: The application method's target type.
 *   allocation:
 *     oneOf:
 *       - type: string
 *         title: allocation
 *         description: The application method's allocation.
 *       - type: string
 *         title: allocation
 *         description: The application method's allocation.
 *   value:
 *     type: number
 *     title: value
 *     description: The application method's value.
 *   currency_code:
 *     type: string
 *     title: currency_code
 *     description: The application method's currency code.
 *   max_quantity:
 *     type: number
 *     title: max_quantity
 *     description: The application method's max quantity.
 *   buy_rules_min_quantity:
 *     type: number
 *     title: buy_rules_min_quantity
 *     description: The application method's buy rules min quantity.
 *   apply_to_quantity:
 *     type: number
 *     title: apply_to_quantity
 *     description: The application method's apply to quantity.
 * 
*/
