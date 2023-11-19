using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace product_service.Models;

[PrimaryKey("RestaurantId", "ProductId")]
public class RestaurantProduct
{
    public Guid RestaurantId { get; set; }
    public Guid ProductId { get; set; }
    public Restaurant Restaurant { get; set; }
    public Product Product { get; set; }
}