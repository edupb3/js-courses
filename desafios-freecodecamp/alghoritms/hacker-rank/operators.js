/**Task
Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost. Round the result to the nearest integer. */

function solve(meal_cost, tip_percent, tax_percent) {
    const tip = meal_cost * tip_percent/100;
    const tax = meal_cost * tax_percent/100;
    const total = meal_cost + tip + tax;
    console.log(Math.round(total));
    return Math.round(total);
}


solve(100,15,8);