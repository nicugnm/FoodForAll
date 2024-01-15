namespace product_service.Models.forms;

public class CourierForm : Form {
    
    public CourierForm(Guid id, string firstName, string lastName, string? address, FormType formType, FormStatus formStatus) : base(id, firstName, lastName, address, formType, formStatus)
    {
        Id = id;
        CNP = CNP;
        FirstName = firstName;
        LastName = lastName;
        Address = address;
        FormType = formType;
        FormStatus = formStatus;
    }
    
    public string? CNP { get; set; }
}