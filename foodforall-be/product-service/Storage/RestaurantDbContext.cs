using System.Collections;
using Innofactor.EfCoreJsonValueConverter;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Internal;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Newtonsoft.Json;
using product_service.Models;

namespace product_service.Storage;

public class RestaurantDbContext : DbContext
{
    public RestaurantDbContext(DbContextOptions<RestaurantDbContext> options) : base(options) {}
    
    public DbSet<Restaurant> RestaurantDbSet { get; set; }
    
    public DbSet<Product> ProductDbSet { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.Entity<Restaurant>()
            .Property(r => r.OpenDays)
            .HasConversion(v => JsonConvert.SerializeObject(v),
                v => JsonConvert.DeserializeObject<IEnumerable<DayOfWeek>>(v));

        builder.Entity<Restaurant>()
            .Property(r => r.TagsType)
            .HasConversion(v => JsonConvert.SerializeObject(v),
                v => JsonConvert.DeserializeObject<IEnumerable<TagType>>(v));

        builder.Entity<RestaurantProduct>()
            .HasKey(rp => new { rp.RestaurantId, rp.ProductId });

        builder.Entity<Restaurant>()
            .HasMany(r => r.Products)
            .WithMany(p => p.Restaurants)
            .UsingEntity<RestaurantProduct>();
        
        
        var restaurant1 = new Restaurant(
            new Guid("6b950909-bd47-42fc-aae5-b20d426f992b"),
            "KFC",
            "KFC Description",
            new TimeSpan(1L),
            new List<DayOfWeek>
            {
                DayOfWeek.Monday,
                DayOfWeek.Tuesday,
                DayOfWeek.Wednesday,
                DayOfWeek.Thursday,
                DayOfWeek.Friday,
                DayOfWeek.Saturday,
                DayOfWeek.Sunday
            },
            new List<TagType> { TagType.MOST_WANTED, TagType.MOST_REVIEWD }
        );

        var restaurant2 = new Restaurant(
            new Guid("e6a953fd-597a-409f-9cee-cb87b94483c8"),
            "Mc Donalds",
            "Mc Donalds Description",
            new TimeSpan(2L),
            new List<DayOfWeek>
            {
                DayOfWeek.Monday,
                DayOfWeek.Tuesday,
                DayOfWeek.Wednesday,
                DayOfWeek.Thursday,
                DayOfWeek.Friday,
                DayOfWeek.Saturday,
                DayOfWeek.Sunday
            },
            new List<TagType> { TagType.ECO_FRIENDLY, TagType.MOST_REVIEWD }
        );

        builder.Entity<Restaurant>()
            .HasData(new[]
                {
                    restaurant1, restaurant2
                }
            );
        
        var product1 = new Product(new Guid("cc1c6aad-18f3-40da-b337-1f55609baa12"), "Product 1", "Description 1",
            new decimal(30.53), 2, true, ProductCategory.FASTFOOD, true);
        var product2 = new Product(new Guid("14d2aa24-15af-4286-9dd5-8aa0939bef8b"), "Product 2", "Description 2",
            new decimal(15.53), 0, true, ProductCategory.FASTFOOD, false);
        var product3 = new Product(new Guid("acf788bf-f881-4249-9104-ae62cd7262ce"), "Product 3", "Description 3",
            new decimal(15.53), 10, false, ProductCategory.PUI, true);
        
        var product4 = new Product(new Guid("b4951e10-76e9-4ef1-b050-31c8e41f02c1"), "Product 4", "Description 1",
            new decimal(30.53), 2, true, ProductCategory.PUI, false);
        var product5 = new Product(new Guid("d3785f31-20b8-4d48-9e2b-7a1f456d05b2"), "Product 5", "Description 2",
            new decimal(15.53), 0, true, ProductCategory.VITA, true);
        var product6 = new Product(new Guid("cf1711ce-216a-45c7-9234-8dd9e54dfb0c"), "Product 6", "Description 3",
            new decimal(15.53), 10, false, ProductCategory.VITA, false);

        builder.Entity<Product>()
            .HasData(new[]
            {
                product1, product2, product3, product4, product5, product6
            });
        
         builder.Entity<RestaurantProduct>()
             .HasData(new[] {
                 new RestaurantProduct { RestaurantId = restaurant1.Id, ProductId = product1.Id },
                 new RestaurantProduct { RestaurantId = restaurant1.Id, ProductId = product2.Id },
                 new RestaurantProduct { RestaurantId = restaurant1.Id, ProductId = product3.Id },
        
                 new RestaurantProduct { RestaurantId = restaurant2.Id, ProductId = product4.Id },
                 new RestaurantProduct { RestaurantId = restaurant2.Id, ProductId = product5.Id },
                 new RestaurantProduct { RestaurantId = restaurant2.Id, ProductId = product6.Id },
             });
    }
}