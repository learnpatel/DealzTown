using Microsoft.EntityFrameworkCore;

namespace DealzTown.API.Data
{
  public class DataContext : DbContext
  {
    public DataContext(DbContextOptions<DataContext> options) : base(options) { }
    //public DbSet<MyProperty { get; set; }
  }
}