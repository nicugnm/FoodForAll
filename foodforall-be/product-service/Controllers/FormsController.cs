using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using product_service.Models.auth;
using product_service.Models.forms;
using product_service.Services;

namespace product_service.Controllers;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class FormsController : ControllerBase
{
    private readonly ILogger<FormsController> _logger;
    private readonly IFormsService _formsService;

    public FormsController(ILogger<FormsController> logger, IFormsService formsService)
    {
        _logger = logger;
        _formsService = formsService;
    }

    [HttpGet("/all", Name = "GetFormsList")]
    public Task<List<Form>> GetAll()
    {
        return _formsService.GetAllForms();
    }
    
    [HttpGet("/courier/{id}", Name = "GetCourierFormById")]
    public Task<CourierForm?> GetCourierForm(Guid id)
    {
        return _formsService.GetCourierFormById(id);
    }
    
    [HttpGet("/restaurant/{id}", Name = "GetRestaurantFormById")]
    public Task<RestaurantForm?> GetRestaurantForm(Guid id)
    {
        return _formsService.GetRestaurantFormById(id);
    }
    
    [HttpPost]
    [Route("/restaurant")]
    public async Task<IActionResult> RegisterRestaurantForm([FromBody] RestaurantForm model)
    {
        if (await _formsService.AddRestaurantForm(model))
        {
            return Ok(new Response { Status = "Success", Message = "Restaurant Form created successfully!" });
        }
        else
        {
            return BadRequest(new Response { Status = "Not Succeded" });
        }
    }
    
    [HttpPost]
    [Route("/courier")]
    public async Task<IActionResult> RegisterCourierForm([FromBody] CourierForm model)
    {
        if (await _formsService.AddCourierForm(model))
        {
            return Ok(new Response { Status = "Success", Message = "Courier Form created successfully!" });
        }
        else
        {
            return BadRequest(new Response { Status = "Not Succeded" });
        }
    }
}