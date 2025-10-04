package ee.teamschedule.schedule.service;

import ee.teamschedule.schedule.controller.MentorCreateDto;
import ee.teamschedule.schedule.controller.MentorResponseDto;
import ee.teamschedule.schedule.mapper.MentorMapper;
import ee.teamschedule.schedule.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MentorTableService {

    private final MentorRepository mentorRepository;

    private final AdminRepository adminRepository;

    private final MentorMapper mentorMapper;

    public MentorResponseDto createMentor(MentorCreateDto dto) {
        Mentor mentor = new Mentor();
        mentor.setName(dto.getName());
        mentor.setPassword(dto.getPassword());

        Admin admin = adminRepository.findById(dto.getAdminId())
                .orElseThrow(() -> new RuntimeException("Admin not found"));
        mentor.setAdmin(admin);

        List<Team> teams = dto.getTeamNames().stream()
                .map(teamName -> {
                    Team t = new Team();
                    t.setName(teamName);
                    t.setJuhendaja(mentor);
                    return t;
                }).toList();

        mentor.setTeams(teams);
        Mentor saved = mentorRepository.save(mentor);

        return mentorMapper.toDto(saved);
    }

    public List<MentorResponseDto> getMentorsByAdmin(Integer adminId) {
        List<Mentor> mentors = mentorRepository.findByAdminId(adminId);
        return mentors.stream().map(mentorMapper::toDto).toList();
    }
}

