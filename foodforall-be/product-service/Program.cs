using Microsoft.EntityFrameworkCore;
using product_service.Services;
using product_service.Services.impl;
using product_service.Storage;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularOrigin", policy =>
        policy.WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod());
});

// Database
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<RestaurantDbContext>(options =>
    options.UseSqlServer(connectionString));

// Services Scoped
builder.Services.AddScoped<IRestaurantService, RestaurantService>();

// Controllers
builder.Services.AddControllers();




// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors("AllowAngularOrigin");

app.MapControllers();

app.Run();