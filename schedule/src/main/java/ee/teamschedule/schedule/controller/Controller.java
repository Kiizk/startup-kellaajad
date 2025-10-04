package ee.teamschedule.schedule.controller;

import ee.teamschedule.schedule.service.MentorTableService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mentors")
@RequiredArgsConstructor
public class Controller {

    private final MentorTableService mentorTableService;

    @PostMapping
    public MentorResponseDto createMentor(@RequestBody MentorCreateDto dto) {
        return mentorTableService.createMentor(dto);
    }

    @GetMapping("/admin/{adminId}")
    public List<MentorResponseDto> getMentorsByAdmin(@PathVariable Integer adminId) {
        return mentorTableService.getMentorsByAdmin(adminId);
    }

}
