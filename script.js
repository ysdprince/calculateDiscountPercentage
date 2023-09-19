const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    // Calculate the percentage discount
    const discount = originalPrice - discountedPrice;
    const percentage = (discount / originalPrice) * 100;

    // Round the percentage to two decimal places
    const roundedPercentage = Math.round(percentage * 100) / 100;

    return roundedPercentage;
};

// Example usage:
const originalPrice = 100;      // Original price of the product
const discountedPrice = 75;    // Discounted price of the product

const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log(`Discount Percentage: ${discountPercentage}%`);
