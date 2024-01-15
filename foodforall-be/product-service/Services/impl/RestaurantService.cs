using Microsoft.EntityFrameworkCore;
using product_service.Models;
using product_service.Storage;

namespace product_service.Services.impl;

public class RestaurantService : IRestaurantService
{
    private readonly RestaurantDbContext _db;

    public RestaurantService(RestaurantDbContext db)
    {
        _db = db;
    }

    public async Task<List<Restaurant>> GetRestaurantsAsync()
    {
        try
        {
            return await _db.RestaurantDbSet
                .Include(r => r.Products)
                .ToListAsync();
        }
        catch (Exception ex)
        {
            return null;
        }
    }

    public async Task<Restaurant> GetRestaurantAsync(Guid id, bool includeProducts)
    {
        try
        {
            if (includeProducts)
            {
                return await _db.RestaurantDbSet.Include(restaurant => restaurant.Products)
                    .FirstOrDefaultAsync(i => i.Id == id) ?? throw new InvalidOperationException();
            }
            
            return await _db.RestaurantDbSet.FindAsync(id) ?? throw new InvalidOperationException();
        }
        catch (Exception ex)
        {
            return null;
        }
    }

    public Task<Restaurant> AddRestaurantAsync(Restaurant restaurant)
    {
        throw new NotImplementedException();
    }

    public Task<Restaurant> UpdateRestaurantAsync(Restaurant restaurant)
    {
        throw new NotImplementedException();
    }

    public Task<(bool, string)> DeleteRestaurantAsync(Restaurant restaurant)
    {
        throw new NotImplementedException();
    }

    public async Task<List<Restaurant>> GetProductListPerRestaurant(ProductListRestaurantRequest productListRestaurantRequest)
    {
        try
        {
            var searchKeywordLower = productListRestaurantRequest.SearchKeyword.ToLower();

            var restaurants = await _db.RestaurantDbSet
                .Include(r => r.Products)
                .Where(r => r.Products.Any(pr => pr.Name.ToLower().Contains(searchKeywordLower)))
                .ToListAsync();

            foreach (var restaurant in restaurants)
            {
                restaurant.Products = restaurant.Products
                    .Where(pr => pr.Name.ToLower().Contains(searchKeywordLower))
                    .ToList();
            }

            return restaurants;
        }
        catch (Exception ex)
        {
            return null;
        }
    }


}