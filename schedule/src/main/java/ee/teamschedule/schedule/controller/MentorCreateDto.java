package ee.teamschedule.schedule.controller;

import lombok.Data;

import java.util.List;

@Data
public class MentorCreateDto {
    private String name;
    private String password;
    private Integer adminId;
    private List<String> teamNames;
}
