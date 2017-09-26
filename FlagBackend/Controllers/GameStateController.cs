using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace FlagRush.Controllers
{
    [Route("api/[controller]")]
    public class GameStateController : Controller
    {
        private readonly LessonContext _context;
        private int GameIdCounter = 1;

        public GameStateController(LessonContext context)
        {
            _context = context;
        }
       
        [HttpPost]
        public void Post([FromBody]GameState value)
        {
            _context.GameState.Add(value);
            _context.SaveChanges();
        }
    }
}