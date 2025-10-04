package ee.teamschedule.schedule.controller;

import lombok.Data;

import java.util.List;

@Data
public class MentorDto {
    private String name;
    private String password;
    private Long adminId;
    private List<String> teamNames;
}
