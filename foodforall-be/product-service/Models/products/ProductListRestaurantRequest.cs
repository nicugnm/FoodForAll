using System.ComponentModel.DataAnnotations;

namespace product_service.Models;

public class ProductListRestaurantRequest
{
    [Required(ErrorMessage = "SearchKeyword is required")]
    public string SearchKeyword { get; set; }
}