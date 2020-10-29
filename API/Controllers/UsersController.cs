using auth_guard_basic.Entitites;
using auth_guard_basic.Models;
using auth_guard_basic.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace auth_guard_basic.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            this._userService = userService;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody] AuthenticateModel model)
        {
            var user = _userService.Authenticate(model.Username, model.Password);

            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect." });

            return Ok(user);
        }

        [Authorize(Roles = Role.Admin)]
        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _userService.GetAll();
            return Ok(users);
        }

        [Authorize(Roles = Role.Admin)]
        [HttpGet("GetAdmin")]
        public IActionResult GetAdmin()
        {
            return Ok("Admin");
        }

        [Authorize(Roles = Role.Customer)]
        [HttpGet("GetCustomer")]
        public IActionResult GetCustomer()
        {
            return Ok("Customer");
        }

        [Authorize(Roles = Role.Employee)]
        [HttpGet("GetEmployee")]
        public IActionResult GetEmployee()
        {
            return Ok("Employee");
        }

        [AllowAnonymous]
        [HttpGet("AnonymousUser")]
        public IActionResult GetAnonymous()
        {
            return Ok("Anonymous user");
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var currentUserId = int.Parse(User.Identity.Name);
            
            if (id != currentUserId && !User.IsInRole(Role.Admin))
                return Forbid();

            var user = _userService.GetById(id);

            if (user == null)
                return NotFound();

            return Ok(user);
        }
    }
}