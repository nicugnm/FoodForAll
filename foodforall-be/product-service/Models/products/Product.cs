using System.ComponentModel.DataAnnotations;

namespace product_service.Models;

public class Product
{
    
    public Product(Guid id, string name, string description, decimal price, int quantityAvailable, bool enabled, ProductCategory productCategory, bool isPopular)
    {
        Id = id;
        Name = name;
        Description = description;
        Price = price;
        QuantityAvailable = quantityAvailable;
        Enabled = enabled;
        ProductCategory = productCategory;
        IsPopular = isPopular;
    }

    [Key]
    public Guid Id { get; set; }

    public ICollection<Restaurant> Restaurants { get; set; } = new List<Restaurant>();
    
    public string Name { get; set; }
    
    public string Description { get; set; }
    
    public decimal Price { get; set; }
    
    public int QuantityAvailable { get; set; }
    
    public bool Enabled { get; set; }
    
    public ProductCategory ProductCategory { get; set; }
    
    public bool IsPopular { get; set; }
}

public enum ProductCategory
{
    FASTFOOD,
    PUI,
    VITA,
    ALL
}