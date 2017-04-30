using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TomatTeam.API.Models;

namespace TomatTeam.API.Controllers
{
    [Produces("application/json")]
    [Route("api/Pomodoroes")]
    public class PomodoroController : Controller
    {
        private readonly TomatTeamContext _context;

        public PomodoroController(TomatTeamContext context)
        {
            _context = context;
        }

        // GET: api/Pomodoro
        [HttpGet]
        public IEnumerable<Pomodoro> GetPomodoroes()
        {
            return _context.Pomodoroes.Include(c=> c.User);
        }

        // GET: api/Pomodoro/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPomodoro([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pomodoro = await _context.Pomodoroes.SingleOrDefaultAsync(m => m.PomodoroId == id);

            if (pomodoro == null)
            {
                return NotFound();
            }

            return Ok(pomodoro);
        }

        // PUT: api/Pomodoro/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPomodoro([FromRoute] int id, [FromBody] Pomodoro pomodoro)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pomodoro.PomodoroId)
            {
                return BadRequest();
            }

            _context.Entry(pomodoro).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PomodoroExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Pomodoro
        [HttpPost]
        public async Task<IActionResult> PostPomodoro([FromBody] Pomodoro pomodoro)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Pomodoroes.Add(pomodoro);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPomodoro", new { id = pomodoro.PomodoroId }, pomodoro);
        }

        // DELETE: api/Pomodoro/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePomodoro([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pomodoro = await _context.Pomodoroes.SingleOrDefaultAsync(m => m.PomodoroId == id);
            if (pomodoro == null)
            {
                return NotFound();
            }

            _context.Pomodoroes.Remove(pomodoro);
            await _context.SaveChangesAsync();

            return Ok(pomodoro);
        }

        private bool PomodoroExists(int id)
        {
            return _context.Pomodoroes.Any(e => e.PomodoroId == id);
        }
    }
}