using System;
using System.Collections.Generic;

namespace DealzTown.API.Models
{
  public class Furniture
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public int Price { get; set; }
    public bool IsActive { get; set; }
    public int LikesCount { get; set; }
    public string FurnitureType { get; set; }
    public DateTime PostedDate { get; set; } = System.DateTime.Now;
    public DateTime LastUpdateDate { get; set; }
    public DateTime LastViewDateTime { get; set; }
    public DateTime SoldDate { get; set; }
    public ICollection<FurniturePhoto> Photos { get; set; }
    public User User { get; set; }
    public int UserId { get; set; }
  }
}