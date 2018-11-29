using System;

namespace DealzTown.API.Models
{
  public class FurniturePhoto
  {
    public int Id { get; set; }
    public string Url { get; set; }
    public string Description { get; set; }
    public DateTime DateAdded { get; set; }
    public bool IsMain { get; set; }
    public Furniture Furniture { get; set; }
    public int HomeFurnitureId { get; set; }
  }
}