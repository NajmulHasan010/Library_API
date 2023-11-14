  // create slug for product

  export const generateSlug = (productName) => {
    // Convert to lowercase
    let slug = productName.toLowerCase();
    // Remove any unwanted characters
    slug = slug.replace(/[^a-z0-9\s-]/g, '');
    // Replace spaces with hyphens
    slug = slug.replace(/\s+/g, '-');
    // Ensure it doesn't begin or end with a hyphen
    slug = slug.replace(/^-+|-+$/g, '');
    return slug;
}