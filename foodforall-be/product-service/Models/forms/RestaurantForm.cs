namespace product_service.Models.forms;

public class RestaurantForm : Form {
    
    public RestaurantForm(Guid id, string firstName, string lastName, string? address, FormType formType, FormStatus formStatus) : base(id, firstName, lastName, address, formType, formStatus)
    {
        Id = id;
        FirstName = firstName;
        LastName = lastName;
        Address = address;
        FormType = formType;
        FormStatus = formStatus;
        CUI = CUI;
    }
    
    public string? CUI { get; set; }

}