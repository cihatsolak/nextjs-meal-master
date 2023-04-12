namespace MealMaster.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private readonly BaseRepository<User> _repository;

    public UserController(BaseRepository<User> repository)
    {
        _repository = repository;
    }

    [HttpGet("list")]
    public async Task<IActionResult> GetUsers()
    {
        var users = _repository.Get();
        if (!users.Any())
        {
            return NotFound();
        }

        return Ok(users);
    }

    [HttpPost("add")]
    public async Task<IActionResult> Add(User user)
    {
        try
        {
            await _repository.InsertAsync(user);
            return CreatedAtAction(nameof(Add), user);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}