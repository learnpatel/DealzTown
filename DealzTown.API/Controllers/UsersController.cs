using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using DealzTown.API.Data;
using DealzTown.API.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DealzTown.API.Controllers
{
  [Authorize]
  [Route("api/[controller]")]
  [ApiController]
  public class UsersController : ControllerBase
  {
    private readonly IDealRepository _dealRepository;
    private readonly IMapper _mapper;

    public UsersController(IDealRepository dealRepository, IMapper mapper)
    {
      _mapper = mapper;
      _dealRepository = dealRepository;
    }

    [HttpGet]
    public async Task<IActionResult> GetUsers()
    {
      var users = await this._dealRepository.GetUsers();
      var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);
      return Ok(usersToReturn);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetUser(int id)
    {
      var user = await this._dealRepository.GetUser(id);
      var userToReturn = _mapper.Map<UserForDetailedDto>(user);
      return Ok(userToReturn);
    }
  }
}