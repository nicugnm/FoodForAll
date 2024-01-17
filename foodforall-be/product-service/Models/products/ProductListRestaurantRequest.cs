using System.ComponentModel.DataAnnotations;

namespace product_service.Models;

public class ProductListRestaurantRequest
{
    [Required(ErrorMessage = "SearchKeyword is required")]
    public string SearchKeyword { get; set; }

    public int? Page { get; set; } = 0;

    public SortingType? SortingType { get; set; } = Models.SortingType.ASC;

    public ProductCategory ProductCategory { get; set; } = ProductCategory.ALL;
}

public enum SortingType
{
    ASC,
    DESC
}