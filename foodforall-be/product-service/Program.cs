using System.Text;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using product_service.Models.auth;
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

// Restaurant Database
builder.Services.AddDbContext<RestaurantDbContext>(options =>
    options.UseSqlServer(connectionString));

// Forms Database
builder.Services.AddDbContext<FormsDbContext>(options =>
    options.UseSqlServer(connectionString));


// Auth 
// For Entity Framework
builder.Services.AddDbContext<AuthDbContext>(options => 
    options.UseSqlServer(connectionString));

// For Identity
builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
    .AddEntityFrameworkStores<AuthDbContext>()
    .AddDefaultTokenProviders();

// Adding Authentication
builder.Services.AddAuthentication(options =>
    {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
    })

    // Adding Jwt Bearer
    .AddJwtBearer(options =>
    {
        options.SaveToken = true;
        options.RequireHttpsMetadata = false; // Keep this false for local testing, true for production

        options.TokenValidationParameters = new TokenValidationParameters()
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            //ValidAudience = "JWT:ValidAudience", // Replace with your intended audience
            //ValidIssuer = "JWT:ValidIssuer", // Replace with your intended issuer
            IssuerSigningKey = new SymmetricSecurityKey("JWT:Secret"u8.ToArray())
        };
    });


// Services Scoped
builder.Services.AddScoped<IRestaurantService, RestaurantService>();
builder.Services.AddScoped<IFormsService, FormsService>();

// Controllers
builder.Services.AddControllers().AddJsonOptions(x =>
    x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);

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