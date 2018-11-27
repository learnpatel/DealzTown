using System.Collections.Generic;
using System.Threading.Tasks;
using DealzTown.API.Models;

namespace DealzTown.API.Data
{
  public interface IDealRepository
  {
    void Add<T>(T entity) where T : class;
    void Delete<T>(T entity) where T : class;
    Task<bool> SaveAll();
    Task<IEnumerable<User>> GetUsers();
    Task<User> GetUser(int id);
  }
}