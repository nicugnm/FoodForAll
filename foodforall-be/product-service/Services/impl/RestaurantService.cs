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
}