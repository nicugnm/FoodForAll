namespace product_service.Models;

public class SearchResponse
{
    public List<Restaurant>? Restaurants { get; set; }
    
    public SortingType? SortingType { get; set; }
    
    public int? Page { get; set; }
    
    public ProductCategory? ProductCategory { get; set; }
    
    public int TotalPages { get; set; }
}