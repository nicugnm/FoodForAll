using product_service.Models;

namespace product_service.Services;

public interface IRestaurantService
{
    //  Services
    Task<List<Restaurant>> GetRestaurantsAsync(); // GET All Restaurant
    Task<Restaurant> GetRestaurantAsync(Guid id, bool includeProducts = false); // GET Single Restaurant
    Task<Restaurant> AddRestaurantAsync(Restaurant restaurant); // POST New Restaurant
    Task<Restaurant> UpdateRestaurantAsync(Restaurant restaurant); // PUT Restaurant
    Task<(bool, string)> DeleteRestaurantAsync(Restaurant restaurant); // DELETE Restaurant

    Task<SearchResponse> GetProductListPerRestaurant(ProductListRestaurantRequest productListRestaurantRequest);
}