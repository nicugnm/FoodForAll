using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using product_service.Models;
using product_service.Services;

namespace product_service.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RestaurantController : ControllerBase
{
    private readonly ILogger<RestaurantController> _logger;
    private readonly IRestaurantService _restaurantService;

    public RestaurantController(ILogger<RestaurantController> logger,
        IRestaurantService restaurantService)
    {
        _logger = logger;
        _restaurantService = restaurantService;
    }

    [HttpGet(Name = "GetRestaurantList")]
    public Task<List<Restaurant>> Get()
    {
        return _restaurantService.GetRestaurantsAsync();
    }

    [HttpPost("search", Name = "GetProductListPerRestaurant")]
    public Task<SearchResponse> Post([FromBody] ProductListRestaurantRequest productListRestaurantRequest)
    {
        return _restaurantService.GetProductListPerRestaurant(productListRestaurantRequest);
    }
}