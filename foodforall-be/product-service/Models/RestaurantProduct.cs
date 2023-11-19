namespace product_service.Models;

public class RestaurantProduct
{
    public Guid RestaurantId { get; set; }
    public Guid ProductId { get; set; }
    public Restaurant Restaurant { get; set; } = null!;
    public Product Product { get; set; } = null!;
}