using System.ComponentModel.DataAnnotations;
namespace product_service.Models;

public class Restaurant
{
    public Restaurant(Guid id, string name, string description, TimeSpan closeHour, IEnumerable<DayOfWeek> openDays, IEnumerable<TagType> tagsType)
    {
        Id = id;
        Name = name;
        Description = description;
        CloseHour = closeHour;
        OpenDays = openDays;
        TagsType = tagsType;
    }

    [Key]
    public Guid Id { get; set; }

    public string Name { get; set; }

    public string Description { get; set; }

    public TimeSpan CloseHour { get; set; }
    
    public IEnumerable<DayOfWeek> OpenDays { get; set; }
    
    public ICollection<Product> Products { get; set; } = new List<Product>();
    
    public IEnumerable<TagType> TagsType { get; set; }
}

public enum TagType
{
    MOST_WANTED,
    MOST_REVIEWD,
    ECO_FRIENDLY,
    DEFAULT
}