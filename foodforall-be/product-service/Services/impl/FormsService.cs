using Microsoft.EntityFrameworkCore;
using product_service.Models.forms;
using product_service.Storage;

namespace product_service.Services.impl;

public class FormsService : IFormsService
{
    
    private readonly FormsDbContext _db;

    public FormsService(FormsDbContext db)
    {
        _db = db;
    }

    
    public async Task<List<Form>> GetAllForms()
    {
        try
        {
            var courierForms = await _db.CourierFormDbSet
                .ToListAsync();

            var restaurantForms = await _db.RestaurantFormDbSet
                .ToListAsync();
            
            var allForms = new List<Form>();
            allForms.AddRange(courierForms);
            allForms.AddRange(restaurantForms);

            return allForms;
        }
        catch (Exception ex)
        {
            return null;
        }
    }

    public async Task<CourierForm?> GetCourierFormById(Guid formId)
    {
        try
        {
            return await _db.CourierFormDbSet
                .Where(form => form.Id == formId)
                .FirstOrDefaultAsync();
        }
        catch (Exception ex)
        {
            return null;
        }
    }

    public async Task<RestaurantForm?> GetRestaurantFormById(Guid formId)
    {
        
        try
        {
            return await _db.RestaurantFormDbSet
                .Where(form => form.Id == formId)
                .FirstOrDefaultAsync();
        }
        catch (Exception ex)
        {
            return null;
        }
    }

    public async Task<bool> AddRestaurantForm(RestaurantForm restaurantForm)
    {
        try
        {
            await _db.RestaurantFormDbSet.AddAsync(restaurantForm);
            return true;
        }
        catch (Exception ex)
        {
            // Log the exception
            return false;
        }
    }

    public async Task<bool> AddCourierForm(CourierForm courierForm)
    {
        try
        {
            await _db.CourierFormDbSet.AddAsync(courierForm);
            return true;
        }
        catch (Exception ex)
        {
            // Log the exception
            return false;
        }
    }
}