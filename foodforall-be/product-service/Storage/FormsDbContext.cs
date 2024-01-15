using Microsoft.EntityFrameworkCore;
using product_service.Models;
using product_service.Models.forms;

namespace product_service.Storage;

public class FormsDbContext : DbContext
{
    public FormsDbContext(DbContextOptions<FormsDbContext> options) : base(options)
    {
    }

    public DbSet<RestaurantForm> RestaurantFormDbSet { get; set; }

    public DbSet<CourierForm> CourierFormDbSet { get; set; }
}