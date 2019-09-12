/// The formula for LTV - Litetime value of a customer in business
/// LTV = (ARPA * Gross Margin) / CRR 
/// Gross Margin: Diff btw revenue and COGS (Cost of Goods)
/// Customer Churn Rate

var arpa = 10;
var gm = 20;
var ccr = 100;

var ltv = (arpa * gm) / ccr;

console.log(ltv);


