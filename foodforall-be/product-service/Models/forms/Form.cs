using System.ComponentModel.DataAnnotations;

namespace product_service.Models.forms;

public class Form {
    
    public Form(Guid id, string firstName, string lastName, string? address, FormType formType, FormStatus formStatus)
    {
        Id = id;
        FirstName = firstName;
        LastName = lastName;
        Address = address;
        FormType = formType;
        FormStatus = formStatus;
    }

    [Key]
    public Guid Id { get; set; }

    public string FirstName { get; set; }

    public string LastName { get; set; }
    
    public string? Address { get; set; }

    public FormType FormType { get; set; }

    public FormStatus FormStatus { get; set; }
}

public enum FormStatus
{
    PENDING,
    ACCEPTED,
    REJECTED
}

public enum FormType
{
    COURIER,
    RESTAURANT
}