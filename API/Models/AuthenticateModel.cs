using System.ComponentModel.DataAnnotations;

namespace auth_guard_basic.Models
{
    public class AuthenticateModel
    {
        [Required]
        public string Username { get; set; }
        
        [Required]
        public string Password { get; set; }
    }
}