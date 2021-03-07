using Core.Entities.Identity;

namespace eTuckshop.Core.Interfaces
{
    public interface ITokenService 
    {
        string CreateToken(AppUser user);
    }
}