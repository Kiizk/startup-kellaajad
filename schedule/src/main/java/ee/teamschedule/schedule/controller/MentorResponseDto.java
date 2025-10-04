package ee.teamschedule.schedule.controller;

import lombok.Data;

import java.util.List;

@Data
public class MentorResponseDto {
    private Integer id;
    private String name;
    private String adminName;
    private List<String> teamNames;
}
