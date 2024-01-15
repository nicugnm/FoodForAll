using Microsoft.AspNetCore.Mvc;
using product_service.Models.forms;

namespace product_service.Services;

public interface IFormsService
{
    Task<List<Form>> GetAllForms();

    Task<CourierForm?> GetCourierFormById(Guid formId);

    Task<RestaurantForm?> GetRestaurantFormById(Guid formId);

    Task<bool> AddRestaurantForm(RestaurantForm restaurantForm);

    Task<bool> AddCourierForm(CourierForm courierForm);

}