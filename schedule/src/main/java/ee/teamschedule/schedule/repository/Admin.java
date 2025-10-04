package ee.teamschedule.schedule.repository;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "admin")
public class Admin {
    @Id
    private Integer id;
    private String name;
    private String password;
}
