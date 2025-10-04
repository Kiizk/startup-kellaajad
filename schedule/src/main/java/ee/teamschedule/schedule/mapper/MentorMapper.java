package ee.teamschedule.schedule.mapper;

import ee.teamschedule.schedule.controller.MentorResponseDto;
import ee.teamschedule.schedule.repository.Mentor;
import ee.teamschedule.schedule.repository.Team;
import org.mapstruct.*;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MentorMapper {

    // Map from entity to response DTO
    @Mapping(source = "admin.name", target = "adminName")
    @Mapping(target = "teamNames", expression = "java(mapTeamNames(mentor.getTeams()))")
    MentorResponseDto toDto(Mentor mentor);

    // Custom mapping for team names
    default List<String> mapTeamNames(List<Team> teams) {
        if (teams == null) return List.of();
        return teams.stream().map(Team::getName).collect(Collectors.toList());
    }
}
