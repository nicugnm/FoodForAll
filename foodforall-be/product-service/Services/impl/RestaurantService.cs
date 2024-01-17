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

    public async Task<SearchResponse> GetProductListPerRestaurant(ProductListRestaurantRequest productListRestaurantRequest)
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
                
                // Filter by ProductCategory if specified
                if (productListRestaurantRequest.ProductCategory != ProductCategory.ALL)
                {
                    restaurant.Products = restaurant.Products
                        .Where(pr => pr.ProductCategory == productListRestaurantRequest.ProductCategory)
                        .ToList();
                }
            }

            int TotalRestaurants = restaurants.Count();

            // Apply sorting
            if (productListRestaurantRequest.SortingType.HasValue)
            {
                restaurants = productListRestaurantRequest.SortingType == SortingType.ASC 
                    ? restaurants.OrderBy(r => r.Name).ToList()
                    : restaurants.OrderByDescending(r => r.Name).ToList();
            }

            // Apply pagination
            int pageSize = 3; // Set your page size or make it a parameter
            int pageNumber = Math.Max(productListRestaurantRequest.Page ?? 1, 1); // Ensure page number is not less than 1
            restaurants = restaurants
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            return new SearchResponse()
            {
                Restaurants = restaurants,
                ProductCategory = productListRestaurantRequest.ProductCategory,
                Page = productListRestaurantRequest.Page,
                SortingType = productListRestaurantRequest.SortingType,
                TotalPages = (int) Math.Ceiling(TotalRestaurants / 3d)
            };
        }
        catch (Exception ex)
        {
            return new SearchResponse();
        }
    }


}